
## Installation

Pull down this repo and move into the project folder, then run:

```sh
npm install
```

Copy over the `.env.example` to `.env` and modify the values
in the environment file to fit your needs.

## Developing

Developing this app uses WebPack Hot Module Reloading of
JavaScript and Styles.  To begin, run:

```sh
npm start
```

and open your browser to `localhost:8080`

## Building for Production

To build the application, run

```sh
npm run build
```

The build process will minify all the code and strip out
code source maps.  When building for final production, be sure to
specify `NODE_ENV=production` in the environment file so that
debugging logs that use this setting can be removed from React, Redux, and
from our app itself.

The server should point to the `public` directory of this project
to serve up content.
