#!/usr/bin/env just --justfile
# https://github.com/casey/just

# set dotenv-load
set shell := ["bash", "-uc"]

_default:
	@just --dump



install:
	deno run --unstable --no-check --allow-all --config=/dev/null src/scripts/jellyfin_openapi.ts
	deno run --unstable --no-check --allow-all --config=/dev/null src/scripts/tmdb_openapi.ts
	deno cache --unstable --no-check --reload src/**/*.ts

deps main:
	NO_COLOR=1 deno info --unstable {{main}}
run main:
	-@deno cache --unstable --no-check src/**/*.ts
	-@deno run --unstable --no-check --allow-all {{main}}
watch main:
	watchexec --no-project-ignore --clear --restart --shell=none --watch=src --exts=ts -- just run {{main}}



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
