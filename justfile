#!/usr/bin/env just --justfile
# https://github.com/casey/just

_default :
	@just --dump | bat --style=grid --language=make



export ROOT_PATH := env_var_or_default("ROOT_PATH", justfile_directory())
export JELLYFIN_DIR := env_var_or_default("JELLYFIN_DIR", justfile_directory() + "/.local/jellyfin")
export JELLYFIN_CACHE_DIR := env_var_or_default("JELLYFIN_CACHE_DIR", JELLYFIN_DIR + "/cache")
export JELLYFIN_CONFIG_DIR := env_var_or_default("JELLYFIN_CONFIG_DIR", JELLYFIN_DIR + "/config")
export JELLYFIN_DATA_DIR := env_var_or_default("JELLYFIN_DATA_DIR", JELLYFIN_DIR + "/data")
export JELLYFIN_LOG_DIR := env_var_or_default("JELLYFIN_LOG_DIR", JELLYFIN_DIR + "/data/log")

export MAIN_MODULE := env_var_or_default("MAIN_MODULE", "src/mod.ts")

install :
	rm -r -f node_modules
	npm install --silent
	deno run --unstable --no-check --allow-all src/scripts/postinstall.ts
	just reload

reload :
	deno cache --unstable --reload "{{MAIN_MODULE}}"

run :
	deno cache --unstable --no-check "{{MAIN_MODULE}}" || true
	deno run --unstable --no-check --allow-all "{{MAIN_MODULE}}"

watch :
	watchexec --restart --watch src -- "clear; just run"
