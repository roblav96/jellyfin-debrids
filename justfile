#!/usr/bin/env just --justfile
# https://github.com/casey/just

_default :
	@just --dump | bat --style=grid --language=make



export ROOT_PATH := justfile_directory()
export GRAYLOG_PORT := env_var_or_default("GRAYLOG_PORT", "18066")
export JELLYFIN_CACHE_DIR := env_var_or_default("JELLYFIN_CACHE_DIR", justfile_directory() + "/.local/jellyfin/cache")
export JELLYFIN_CONFIG_DIR := env_var_or_default("JELLYFIN_CONFIG_DIR", justfile_directory() + "/.local/jellyfin/config")
export JELLYFIN_DATA_DIR := env_var_or_default("JELLYFIN_DATA_DIR", justfile_directory() + "/.local/jellyfin/data")
export JELLYFIN_LOG_DIR := env_var_or_default("JELLYFIN_LOG_DIR", justfile_directory() + "/.local/jellyfin/data/log")



install :
	deno cache --unstable --no-check --reload src/**/*.ts

deps main='src/mod.ts':
	NO_COLOR=1 deno info --unstable "{{main}}"
run main='src/mod.ts' :
	deno cache --unstable --no-check src/**/*.ts || true
	deno run --unstable --no-check --allow-all "{{main}}"
watch main='src/mod.ts' :
	watchexec --restart --no-default-ignore --watch=configs --watch=src -- 'tput clear; echo; just run {{main}}'



jellyfin :
	mkdir -p -v "{{JELLYFIN_CONFIG_DIR}}"
	cp -n -v "{{ROOT_PATH}}/configs/jellyfin/system.xml" "{{JELLYFIN_CONFIG_DIR}}/system.xml"
	cp -f -v "{{ROOT_PATH}}/configs/jellyfin/logging.json" "{{JELLYFIN_CONFIG_DIR}}/logging.json"
	jellyfin --service | bat --style=grid --language=yaml
jellyfin-watch :
	watchexec --restart --no-default-ignore --watch=configs/jellyfin -- 'tput clear; echo; just jellyfin'



h2o :
	h2o --conf "{{ROOT_PATH}}/configs/h2o.conf" --test
	h2o --conf "{{ROOT_PATH}}/configs/h2o.conf" | bat --style=grid --language=yaml
h2o-watch :
	watchexec --restart --no-default-ignore --watch=configs/h2o.conf -- 'tput clear; echo; just h2o'

nghttpx :
	nghttpx --conf="{{ROOT_PATH}}/configs/nghttpx.conf" --workers=`nproc`
nghttpx-watch :
	watchexec --restart --no-default-ignore --watch=configs/nghttpx.conf -- 'tput clear; echo; just nghttpx'

nginx :
	nginx -e "/dev/stderr" -c "{{ROOT_PATH}}/configs/nginx.conf" -T
	nginx -e "/dev/stderr" -c "{{ROOT_PATH}}/configs/nginx.conf"
nginx-watch :
	watchexec --restart --no-default-ignore --watch=configs/nginx.conf -- 'tput clear; echo; just nginx'
