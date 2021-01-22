#!/usr/bin/env just --justfile
# https://github.com/casey/just

_default :
	@just --dump



export ROOT_PATH := justfile_directory()
export GRAYLOG_PORT := env_var_or_default("GRAYLOG_PORT", "18066")
export DOTNET_CLI_TELEMETRY_OPTOUT := env_var_or_default("DOTNET_CLI_TELEMETRY_OPTOUT", "1")
export JELLYFIN_DIR := env_var_or_default("JELLYFIN_DIR", justfile_directory() + "/.local/jellyfin")
export JELLYFIN_CACHE_DIR := env_var_or_default("JELLYFIN_CACHE_DIR", JELLYFIN_DIR + "/cache")
export JELLYFIN_CONFIG_DIR := env_var_or_default("JELLYFIN_CONFIG_DIR", JELLYFIN_DIR + "/config")
export JELLYFIN_DATA_DIR := env_var_or_default("JELLYFIN_DATA_DIR", JELLYFIN_DIR + "/data")
export JELLYFIN_LOG_DIR := env_var_or_default("JELLYFIN_LOG_DIR", JELLYFIN_DIR + "/data/log")



install :
	if test -n "$DENO_DIR"; then \
		rm -f -v "node_modules/.cache/deno"; \
		mkdir -p -v "node_modules/.cache"; \
		ln -s -f -v "$DENO_DIR" "node_modules/.cache/deno"; \
	fi
	deno cache --unstable --no-check --reload src/**/*.ts

deps main='src/mod.ts':
	NO_COLOR=1 deno info --unstable "{{main}}"
run main='src/mod.ts' :
	tput clear && echo
	deno cache --unstable --no-check src/**/*.ts || true
	deno run --unstable --no-check --allow-all "{{main}}"
watch main='src/mod.ts' :
	watchexec --no-default-ignore --no-vcs-ignore --restart --watch configs --watch src -- just run "{{main}}"



jellyfin :
	tput clear && echo
	mkdir -p -v "{{JELLYFIN_CONFIG_DIR}}"
	cp -n -v "{{ROOT_PATH}}/configs/jellyfin/system.xml" "{{JELLYFIN_CONFIG_DIR}}/system.xml"
	cp -f -v "{{ROOT_PATH}}/configs/jellyfin/logging.json" "{{JELLYFIN_CONFIG_DIR}}/logging.json"
	jellyfin --service
jellyfin-watch :
	watchexec --no-default-ignore --no-vcs-ignore --restart --watch configs/jellyfin -- just jellyfin



h2o :
	tput clear && echo
	h2o --conf "{{ROOT_PATH}}/configs/h2o.conf" --test
	h2o --conf "{{ROOT_PATH}}/configs/h2o.conf"
h2o-watch :
	watchexec --no-default-ignore --no-vcs-ignore --restart --watch configs/h2o.conf --signal SIGKILL -- just h2o

nghttpx :
	tput clear && echo
	nghttpx --conf "{{ROOT_PATH}}/configs/nghttpx.conf" --workers `nproc`
nghttpx-watch :
	watchexec --no-default-ignore --no-vcs-ignore --restart --watch configs/nghttpx.conf -- just nghttpx

nginx :
	tput clear && echo
	nginx -e "/dev/stderr" -c "{{ROOT_PATH}}/configs/nginx.conf" -T
	nginx -e "/dev/stderr" -c "{{ROOT_PATH}}/configs/nginx.conf"
nginx-watch :
	watchexec --no-default-ignore --no-vcs-ignore --restart --watch configs/nginx.conf -- just nginx
