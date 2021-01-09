#!/usr/bin/env just --justfile
# https://github.com/casey/just

set shell := ["bash", "-cu"]

_default :
	@echo && just --dump



# ████  deno  ████

export ROOT_PATH := env_var_or_default("ROOT_PATH", justfile_directory())

alias install := reload
reload :
	deno cache --unstable --reload src/mod.ts

run :
	@deno cache --unstable --no-check src/mod.ts || true
	@deno run --unstable --no-check --allow-all src/mod.ts

watch :
	just reload
	watchexec --restart --watch src -- "tput clear && just run"



# ████  jellyfin  ████

export JELLYFIN_DIR := env_var_or_default("JELLYFIN_DIR", justfile_directory() + "/.local/jellyfin")
export JELLYFIN_CACHE_DIR := env_var_or_default("JELLYFIN_CACHE_DIR", JELLYFIN_DIR + "/cache")
export JELLYFIN_CONFIG_DIR := env_var_or_default("JELLYFIN_CONFIG_DIR", JELLYFIN_DIR + "/config")
export JELLYFIN_DATA_DIR := env_var_or_default("JELLYFIN_DATA_DIR", JELLYFIN_DIR + "/data")
export JELLYFIN_LOG_DIR := env_var_or_default("JELLYFIN_LOG_DIR", JELLYFIN_DIR + "/data/log")

jellyfin-init :
	rm -r -f "{{JELLYFIN_CONFIG_DIR}}"
	mkdir -p "{{JELLYFIN_CONFIG_DIR}}"
	cp "{{justfile_directory()}}/configs/jellyfin/logging.json" "{{JELLYFIN_CONFIG_DIR}}"
	cp "{{justfile_directory()}}/configs/jellyfin/system.xml" "{{JELLYFIN_CONFIG_DIR}}"

jellyfin :
	[[ ! -d "{{JELLYFIN_CONFIG_DIR}}" ]] && just jellyfin-init
	jellyfin --service
# if test ! -d "{{JELLYFIN_CONFIG_DIR}}"; then just jellyfin-init; fi
