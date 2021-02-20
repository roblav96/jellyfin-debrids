#!/usr/bin/env just --justfile
# https://github.com/casey/just

_default :
	@just --dump



install :
	if test -n "${DENO_DIR}"; then \
		rm -f "node_modules/.cache/deno"; \
		mkdir -p "node_modules/.cache"; \
		ln -s -f "${DENO_DIR}" "node_modules/.cache/deno"; \
	fi
	npx dtsgenerator --url "https://repo.jellyfin.org/releases/openapi/jellyfin-openapi-stable.json" | sed -e 's/declare /export /' -e 's/ | null;/;/' -e 's/ null | / /' > "src/jellyfin/openapi.d.ts"
	deno cache --unstable --no-check --reload src/**/*.ts || true

deps main="src/mod.ts" :
	NO_COLOR=1 deno info --unstable {{main}}
run main="src/mod.ts" :
	@tput clear; echo
	@deno cache --unstable --no-check src/**/*.ts || true
	@deno cache --unstable {{main}} || true; echo
	@deno run --unstable --no-check --allow-all {{main}}
watch main="src/mod.ts" :
	watchexec --no-default-ignore --restart --watch=src --exts=ts -- just run {{main}}



jellyfin_dir := (justfile_directory() + "/.local/jellyfin")
jellyfin :
	@tput clear; echo
	mkdir -p "{{jellyfin_dir}}/config"
	# cp -n "configs/jellyfin/system.xml" "{{jellyfin_dir}}/config/system.xml"
	cp -f "configs/jellyfin/logging.json" "{{jellyfin_dir}}/config/logging.json"
	jellyfin \
		--datadir "{{jellyfin_dir}}" \
		--cachedir "{{jellyfin_dir}}/cache" \
		--configdir "{{jellyfin_dir}}/config" \
		--logdir "{{jellyfin_dir}}/log"
jellyfin-watch :
	watchexec --no-default-ignore --restart --watch "configs/jellyfin" -- just jellyfin



h2o :
	@tput clear; echo
	h2o --conf "configs/h2o.conf" --test
	h2o --conf "configs/h2o.conf"
h2o-watch :
	watchexec --no-default-ignore --restart --watch "configs/h2o.conf" -- just h2o

nghttpx :
	@tput clear; echo
	nghttpx --conf "configs/nghttpx.conf" --workers `nproc`
nghttpx-watch :
	watchexec --no-default-ignore --restart --watch "configs/nghttpx.conf" -- just nghttpx

nginx :
	@tput clear; echo
	nginx -e "/dev/stderr" -c "configs/nginx.conf" -T
	nginx -e "/dev/stderr" -c "configs/nginx.conf"
nginx-watch :
	watchexec --no-default-ignore --restart --watch "configs/nginx.conf" -- just nginx
