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
$ npm run dev
```


## Build distribution

```shell
$ docker build -t antonjohansson/anton-johansson.com .
```

## Spotify

Generate a new refresh token by going to this URL:

```
https://accounts.spotify.com/authorize?client_id=<client-id>&response_type=code&redirect_uri=https%3A%2F%2Foanton-johansson.com%2F&scope=user-read-currently-playing
```

Use the received `code` to create the refresh token with this `curl` command:

```
$ curl -X POST https://accounts.spotify.com/api/token?grant_type=authorization_code&code=<code>&redirect_url=https%3A%2F%2Fanton-johansson.com%2F&client_secret=<client-secret>&client_id=<client-id>
```


## Credits

The base is taken from [rbhatia46/React-Portfolio](https://github.com/rbhatia46/React-Portfolio), however quite tweaked and adjusted for my personal preferences.
