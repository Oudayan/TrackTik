# TrackTik Frontend Challenge

## by Oudayan Dutta

> The app is built with a mobile-first approach and is fully responsive. It uses Vue.js, Ionic, Cordova & Bootstrap.

> This app expects a json-server running the db.json file on http://localhost:3000/ (port 3000)

> Frontend is run on http://localhost:8080/ (port 8080)



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Cordova Android & iOs build setup

``` bash
# add Android platform
cordova platform add android@6.x.x —-save

# add iOs platform
cordova platform add ios --save

# run Cordova build
npm run build

# build Android platform
cordova build android

# build iOs platform
cordova build ios

# run Android platform
cordova run android - device

# run iOs platform
cordova run ios - device
```