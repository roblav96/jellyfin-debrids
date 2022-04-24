#!/usr/bin/env just --justfile
# https://github.com/casey/just

# set dotenv-load
set shell := ["bash", "-uc"]

_default:
	@just --dump



install:
	deno cache --unstable --no-check --reload src/**/*.ts || true
	deno run --unstable --no-check --allow-all src/jellyfin/openapi/install.ts
	deno cache --unstable src/jellyfin/openapi/openapi.ts
	deno run --unstable --no-check --allow-all src/themoviedb/openapi/install.ts
	deno cache --unstable src/themoviedb/openapi/openapi.ts

deps main="src/mod.ts":
	NO_COLOR=1 deno info --unstable {{main}}
run main="src/mod.ts":
	@tput clear; echo
	@deno cache --unstable {{main}} || true; echo
	@deno run --unstable --no-check --allow-all {{main}}
watch main="src/mod.ts":
	watchexec --no-default-ignore --restart --watch=src --exts=ts -- just run {{main}}



jellyfin_dir := (justfile_directory() + "/.local/jellyfin")
jellyfin:
	@tput clear; echo
	mkdir -p "{{jellyfin_dir}}/config"
	# cp -n configs/jellyfin/system.xml "{{jellyfin_dir}}/config/system.xml"
	cp -f configs/jellyfin/logging.json "{{jellyfin_dir}}/config/logging.json"
	jellyfin \
		--datadir "{{jellyfin_dir}}" \
		--cachedir "{{jellyfin_dir}}/cache" \
		--configdir "{{jellyfin_dir}}/config" \
		--logdir "{{jellyfin_dir}}/log"
jellyfin-watch:
	watchexec --no-default-ignore --restart --watch=configs/jellyfin -- just jellyfin



h2o:
	@tput clear; echo
	h2o --conf "configs/h2o.conf" --test
	h2o --conf "configs/h2o.conf"
h2o-watch:
	watchexec --no-default-ignore --restart --watch "configs/h2o.conf" -- just h2o

nghttpx:
	@tput clear; echo
	nghttpx --conf "configs/nghttpx.conf" --workers `nproc`
nghttpx-watch:
	watchexec --no-default-ignore --restart --watch "configs/nghttpx.conf" -- just nghttpx

nginx:
	@tput clear; echo
	nginx -e "/dev/stderr" -c "configs/nginx.conf" -T
	nginx -e "/dev/stderr" -c "configs/nginx.conf"
nginx-watch:
	watchexec --no-default-ignore --restart --watch "configs/nginx.conf" -- just nginx
