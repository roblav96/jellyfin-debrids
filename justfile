#!/usr/bin/env just --justfile
# https://github.com/casey/just

_default :
	@echo && just --dump



export ROOT_PATH := env_var_or_default("ROOT_PATH", justfile_directory())
export JELLYFIN_DIR := env_var_or_default("JELLYFIN_DIR", justfile_directory() + "/.local/jellyfin")
export JELLYFIN_CACHE_DIR := env_var_or_default("JELLYFIN_CACHE_DIR", JELLYFIN_DIR + "/cache")
export JELLYFIN_CONFIG_DIR := env_var_or_default("JELLYFIN_CONFIG_DIR", JELLYFIN_DIR + "/config")
export JELLYFIN_DATA_DIR := env_var_or_default("JELLYFIN_DATA_DIR", JELLYFIN_DIR + "/data")
export JELLYFIN_LOG_DIR := env_var_or_default("JELLYFIN_LOG_DIR", JELLYFIN_DIR + "/data/log")

install :
	rm -r -f node_modules
	npm install --silent
	deno run --unstable --no-check --allow-all src/scripts/postinstall.ts

reload :
	deno cache --unstable --reload src/mod.ts || true

run :
	@deno cache --unstable --no-check src/mod.ts || true
	@deno run --unstable --no-check --allow-all src/mod.ts

watch :
	just reload
	watchexec --restart --watch src -- "clear; just run"
