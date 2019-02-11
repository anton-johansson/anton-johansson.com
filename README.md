# anton-johansson.com

[![Build Status](https://travis-ci.org/anton-johansson/anton-johansson.com.svg)](https://travis-ci.org/anton-johansson/anton-johansson.com)

My personal webpage, hosted here:
* https://anton-johansson.com
* https://anton-johansson.se


## Building and running for development

```shell
$ npm install
$ cd client && npm install
$ cd ..
$ npm run-script dev
```


## Build distribution

```shell
$ npm install
$ cd client && npm install
$ cd ..
$ npm run-script build
$ docker build -t anton-johansson.com .
```


## Credits

The base is taken from [rbhatia46/React-Portfolio](https://github.com/rbhatia46/React-Portfolio), however quite tweaked and adjusted for my personal preferences.
