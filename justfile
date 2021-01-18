#!/usr/bin/env just --justfile
# https://github.com/casey/just

_default :
	@just --dump | bat --style=grid --language=make

export ROOT_PATH := justfile_directory()
export JELLYFIN_DIR := env_var_or_default("JELLYFIN_DIR", justfile_directory() + "/.local/jellyfin")
export JELLYFIN_CACHE_DIR := env_var_or_default("JELLYFIN_CACHE_DIR", justfile_directory() + "/.local/jellyfin/cache")
export JELLYFIN_CONFIG_DIR := env_var_or_default("JELLYFIN_CONFIG_DIR", justfile_directory() + "/.local/jellyfin/config")
export JELLYFIN_DATA_DIR := env_var_or_default("JELLYFIN_DATA_DIR", justfile_directory() + "/.local/jellyfin/data")
export JELLYFIN_LOG_DIR := env_var_or_default("JELLYFIN_LOG_DIR", justfile_directory() + "/.local/jellyfin/data/log")

install :
	mkdir -p "{{JELLYFIN_DIR}}/portable"
	wget "https://repo.jellyfin.org/releases/server/portable/versions/stable/combined/10.7.0~rc2/jellyfin_10.7.0~rc2.tar.gz" -O "{{JELLYFIN_DIR}}/portable/jellyfin_10.7.0~rc2.tar.gz"
	tar -xf "{{JELLYFIN_DIR}}/portable/jellyfin_10.7.0~rc2.tar.gz"
# deno cache --unstable --no-check --reload src/**/*.ts

deps :
	NO_COLOR=1 deno info --unstable src/mod.ts

run action="" :
	@test "{{action}}" = "watch" && tput clear || true
	@deno cache --unstable --no-check src/**/*.ts || true
	@deno run --unstable --no-check --allow-all src/mod.ts

watch :
	watchexec --restart --watch configs --watch src -- just run watch

jellyfin :
	mkdir -p "{{JELLYFIN_CONFIG_DIR}}"
	cp -f "{{ROOT_PATH}}/configs/jellyfin/logging.json" "{{JELLYFIN_CONFIG_DIR}}/logging.json"
	cp -f "{{ROOT_PATH}}/configs/jellyfin/logging.json" "{{JELLYFIN_CONFIG_DIR}}/logging.default.json"
	websocat --exit-on-eof --text ws-l:127.0.0.1:8080 broadcast:sh-c:"jellyfin --service"

nghttpx :
	nghttpx --conf="{{ROOT_PATH}}/configs/nghttpx.dev.conf" --workers=`nproc`

nginx :
	nginx -e "/dev/stderr" -c "{{ROOT_PATH}}/configs/nginx.conf" -T
	nginx -e "/dev/stderr" -c "{{ROOT_PATH}}/configs/nginx.conf"



# export DENO_DIR := justfile_directory() + "/node_modules/.cache/deno"
# install :
# 	rm -r -f "node_modules"
# 	mkdir -p "{{DENO_DIR}}"
# 	curl --silent "https://raw.githubusercontent.com/denoland/deno/master/cli/dts/lib.deno.worker.d.ts" --output "{{DENO_DIR}}/lib.deno.d.ts"
# 	echo >> "{{DENO_DIR}}/lib.deno.d.ts"
# 	deno types --unstable >> "{{DENO_DIR}}/lib.deno.d.ts"
# 	cp "{{DENO_DIR}}/lib.deno.d.ts" "{{DENO_DIR}}/lib.deno.unstable.d.ts"
# 	just reload
