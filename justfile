#!/usr/bin/env just --justfile
# https://github.com/casey/just

set shell := ["bash", "-cu"]

_default :
	@echo && just --dump



# ████  deno  ████

alias install := reload
reload :
	deno cache --unstable --import-map=import_map.json --reload src/mod.ts

run :
	@deno cache --unstable --import-map=import_map.json --no-check src/mod.ts || true
	@deno run --unstable --import-map=import_map.json --no-check --allow-all src/mod.ts

watch :
	just reload
	watchexec --watch src --restart -- "clear && just run"



# ████  jellyfin  ████

export ROOT_PATH := env_var_or_default("ROOT_PATH", justfile_directory())
export JELLYFIN_DIR := env_var_or_default("JELLYFIN_DIR", ROOT_PATH + "/.local/jellyfin")
export JELLYFIN_CACHE_DIR := env_var_or_default("JELLYFIN_CACHE_DIR", JELLYFIN_DIR + "/cache")
export JELLYFIN_CONFIG_DIR := env_var_or_default("JELLYFIN_CONFIG_DIR", JELLYFIN_DIR + "/config")
export JELLYFIN_DATA_DIR := env_var_or_default("JELLYFIN_DATA_DIR", JELLYFIN_DIR + "/data")
export JELLYFIN_LOG_DIR := env_var_or_default("JELLYFIN_LOG_DIR", JELLYFIN_DIR + "/data/log")

jellyfin-init :
	rm -r -f -v "{{JELLYFIN_CONFIG_DIR}}"
	mkdir -p -v "`dirname "{{JELLYFIN_CONFIG_DIR}}"`"
	cp -r -v "{{justfile_directory()}}/configs/jellyfin" "{{JELLYFIN_CONFIG_DIR}}"

jellyfin :
	[[ ! -d "{{JELLYFIN_CONFIG_DIR}}" ]] && just jellyfin-init
	jellyfin --service
