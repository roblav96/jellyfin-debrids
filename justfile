#!/usr/bin/env just --justfile
# https://github.com/casey/just

_default :
	@just --dump | bat --style=grid --language=make

export JELLYFIN_DIR := env_var_or_default("JELLYFIN_DIR", justfile_directory() + "/.local/jellyfin")
export JELLYFIN_CACHE_DIR := env_var_or_default("JELLYFIN_CACHE_DIR", JELLYFIN_DIR + "/cache")
export JELLYFIN_CONFIG_DIR := env_var_or_default("JELLYFIN_CONFIG_DIR", JELLYFIN_DIR + "/config")
export JELLYFIN_DATA_DIR := env_var_or_default("JELLYFIN_DATA_DIR", JELLYFIN_DIR + "/data")
export JELLYFIN_LOG_DIR := env_var_or_default("JELLYFIN_LOG_DIR", JELLYFIN_DIR + "/data/log")

export ROOT_PATH := justfile_directory()
export DENO_DIR := justfile_directory() + "/node_modules/.cache/deno"
install :
	rm -r -f "node_modules"
	mkdir -p "{{DENO_DIR}}"
	deno types --unstable > "{{DENO_DIR}}/lib.deno.d.ts"
	deno types --unstable > "{{DENO_DIR}}/lib.deno.unstable.d.ts"
	deno cache --unstable --no-check --reload "src/mod.ts"

run action="" :
	if [ "{{action}}" == "watch" ]; then tput clear; fi
	deno run --unstable --no-check --allow-all "src/mod.ts"
# deno cache --unstable "src/mod.ts" || true

watch :
	watchexec --restart --watch src -- just run watch
