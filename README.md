# pluto99 ♇

> A fast implementation of the so-called pluto99 theory in JavaScript.

# What?

A JavaScript library to get the heliocentric rectangular coordinates of dwarf planet Pluto, at mean equinox and ecliptic J2000, according to the so-called "pluto99" theory.

The JavaScript implementation is about 13.23 Kb (minified and gzipped).

The WebAssembly version is 26.17 Kb (minified and gzipped).

# Install

```sh
$ yarn add pluto99
```

# Usage

## JavaScript version

In node:

```js
const pluto99 = require('pluto99');

// Get an object with the (x,y,z) coordinates of Pluto.
const coords = pluto99(2451545);
```

In browsers, we recommend to load the script asynchronously:

```js
import('pluto99').then((pluto99) => {
  // Get an object with the (x,y,z) coordinates of Pluto.
  const coords = pluto99(2451545);
});
```

## WebAssembly version

In browsers:

```js
import pluto99Loader from 'pluto99/dist/pluto99-wasm';

pluto99Loader.then((pluto99) => {
  // Get an object with the (x,y,z) coordinates of Pluto.
  const coords = pluto99(2451545);
});
```

# About the precision

According to the doc:

> The theory is valid between the years -2997 and 2983. (60 centuries approximately).

> The largest discrepancy obtained by a comparison with the source DE406 is 0.00005 ua.

> The largest discrepancies obtained in a comparison with the elements deduced from DE406 are:
>
> - a : 0.080 au (semi-major axis)
> - l : 0.2 degree (mean longitude)
> - h,k : 0.0022 degree
> - p,q : 0.0003 degree

# Contribute

## Build the JavaScript version

```sh
$ yarn build
```

## Build the WebAssembly version

Install [emscripten](https://emscripten.org/docs/getting_started/downloads.html), then:

```sh
$ ./build && yarn build
```

## Run the unit tests

Make sure to run the build script first, then:

```sh
$ yarn test
```

# List of changes

With regards to the original terms, the following changes have been applied:

- Converted phi from degrees to radians
- Multiplied `Nu` by 1,000 for consistency with the VSOP87 theory

# "So-called"?

The theory full name is "Pluto's tables from -2997 to 2983" and was published in March 1999.

Although, unlike VSOP, it does not have an official short name, it is popularly called "pluto99".
