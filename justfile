#!/usr/bin/env just --justfile
# https://github.com/casey/just

set shell := ["bash", "-cu"]

_default :
	@echo && just --dump

alias install := reload
reload :
	deno cache --unstable --import-map=import_map.json --reload src/mod.ts

run :
	@deno cache --unstable --import-map=import_map.json --no-check src/mod.ts || true
	@deno run --unstable --import-map=import_map.json --no-check --allow-all src/mod.ts

watch :
	just reload
	watchexec --watch src --restart -- 'tput clear; just run'
