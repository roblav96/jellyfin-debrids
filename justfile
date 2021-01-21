#!/usr/bin/env just --justfile
# https://github.com/casey/just

_default :
	@just --dump | bat --style=grid --language=make

export ROOT_PATH := justfile_directory()
export JELLYFIN_CACHE_DIR := env_var_or_default("JELLYFIN_CACHE_DIR", justfile_directory() + "/.local/jellyfin/cache")
export JELLYFIN_CONFIG_DIR := env_var_or_default("JELLYFIN_CONFIG_DIR", justfile_directory() + "/.local/jellyfin/config")
export JELLYFIN_DATA_DIR := env_var_or_default("JELLYFIN_DATA_DIR", justfile_directory() + "/.local/jellyfin/data")
export JELLYFIN_LOG_DIR := env_var_or_default("JELLYFIN_LOG_DIR", justfile_directory() + "/.local/jellyfin/data/log")
export JELLYFIN_PORTABLE_DIR := env_var_or_default("JELLYFIN_PORTABLE_DIR", justfile_directory() + "/.local/jellyfin/portable")

install :
	deno cache --unstable --no-check --reload src/**/*.ts
# ls -laph "{{JELLYFIN_PORTABLE_DIR}}/jellyfin"

deps main="src/mod.ts" :
	NO_COLOR=1 deno info --unstable "{{main}}"

run main="src/mod.ts" action="" :
	@test "{{action}}" = "watch" && tput clear || true
	@deno cache --unstable --no-check src/**/*.ts || true
	@deno run --unstable --no-check --allow-all "{{main}}"

watch main="src/mod.ts" :
	watchexec --restart --watch configs --watch src -- just run "{{main}}" watch

export GRAYLOG_PORT := env_var_or_default("GRAYLOG_PORT", "18066")
jellyfin :
	@mkdir -p "{{JELLYFIN_CONFIG_DIR}}"
	@cp -f "{{ROOT_PATH}}/configs/jellyfin/logging.json" "{{JELLYFIN_CONFIG_DIR}}/logging.json"
	jellyfin --service
# @cp -f "{{ROOT_PATH}}/configs/jellyfin/logging.json" "{{JELLYFIN_CONFIG_DIR}}/logging.default.json"
# @mkdir -p "{{JELLYFIN_LOG_DIR}}"
# @truncate -s0 "{{JELLYFIN_LOG_DIR}}/debrids.log"
# websocat -v --exit-on-eof --text ws-l:127.0.0.1:{{WEBSOCAT_PORT}} reuse-broadcast:mirror:cmd:'jellyfin --service'

nghttpx :
	nghttpx --conf="{{ROOT_PATH}}/configs/nghttpx.dev.conf" --workers=`nproc`

nginx :
	nginx -e "/dev/stderr" -c "{{ROOT_PATH}}/configs/nginx.conf" -T
	nginx -e "/dev/stderr" -c "{{ROOT_PATH}}/configs/nginx.conf"



# jellyfin release="10.7.0~rc2" :
# 	@test ! -d "{{JELLYFIN_PORTABLE_DIR}}" \
# 		&& mkdir -p "{{JELLYFIN_PORTABLE_DIR}}" \
# 		&& wget "https://repo.jellyfin.org/releases/server/portable/versions/stable/combined/{{release}}/jellyfin_{{release}}.tar.gz" -O "{{JELLYFIN_PORTABLE_DIR}}/jellyfin_{{release}}.tar.gz" \
# 		&& tar -xf "{{JELLYFIN_PORTABLE_DIR}}/jellyfin_{{release}}.tar.gz" --directory="{{JELLYFIN_PORTABLE_DIR}}" \
# 		&& rm -f "{{JELLYFIN_PORTABLE_DIR}}/jellyfin_{{release}}.tar.gz" \
# 		&& mv -f "{{JELLYFIN_PORTABLE_DIR}}/jellyfin_{{release}}" "{{JELLYFIN_PORTABLE_DIR}}/jellyfin" \
# 		|| true
# 	cp -f "{{ROOT_PATH}}/configs/jellyfin/logging.json" "{{JELLYFIN_CONFIG_DIR}}/logging.json"
# 	dotnet "{{JELLYFIN_PORTABLE_DIR}}/jellyfin/jellyfin.dll" --service
# 	# cp -f "{{ROOT_PATH}}/configs/jellyfin/logging.json" "{{JELLYFIN_CONFIG_DIR}}/logging.default.json"
# 	# websocat --exit-on-eof --text ws-l:127.0.0.1:8080 broadcast:sh-c:'dotnet "{{JELLYFIN_PORTABLE_DIR}}/jellyfin/jellyfin.dll" --service'
# 	# websocat --exit-on-eof --text ws-l:127.0.0.1:8080 broadcast:sh-c:"jellyfin --service"
# # test ! -e "{{JELLYFIN_PORTABLE_DIR}}/jellyfin_{{release}}.tar.gz" \
# # 	&& wget "https://repo.jellyfin.org/releases/server/portable/versions/stable/combined/{{release}}/jellyfin_{{release}}.tar.gz" -O "{{JELLYFIN_PORTABLE_DIR}}/jellyfin_{{release}}.tar.gz" \
# # 	|| true
# # test -e "{{JELLYFIN_PORTABLE_DIR}}/jellyfin_{{release}}.tar.gz" \
# # 	&& mv "{{JELLYFIN_PORTABLE_DIR}}/jellyfin_{{release}}" "{{JELLYFIN_PORTABLE_DIR}}/jellyfin" \
# # 	|| true
# # mkdir -p "{{JELLYFIN_CONFIG_DIR}}"



# export DENO_DIR := justfile_directory() + "/node_modules/.cache/deno"
# install :
# 	rm -r -f "node_modules"
# 	mkdir -p "{{DENO_DIR}}"
# 	curl --silent "https://raw.githubusercontent.com/denoland/deno/master/cli/dts/lib.deno.worker.d.ts" --output "{{DENO_DIR}}/lib.deno.d.ts"
# 	echo >> "{{DENO_DIR}}/lib.deno.d.ts"
# 	deno types --unstable >> "{{DENO_DIR}}/lib.deno.d.ts"
# 	cp "{{DENO_DIR}}/lib.deno.d.ts" "{{DENO_DIR}}/lib.deno.unstable.d.ts"
# 	just reload
