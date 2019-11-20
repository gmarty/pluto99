emcc -Oz -s WASM=1 -s FILESYSTEM=0 -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]' \
    src/c/pluto99.c \
    -o dist/tmp/pluto99.wasm
