# vue-init-test

> A vue init test app

## Directory structure

This truffle box is crafted to enforce a clean directory structure

```
/

+-- build/
|   +-- contracts/
|   |   + truffle compiled contracts json artifacts
|   + npm build scripts
+-- config/
|   +-- babel/
|   |   + babel config files - to come (babel does not allow to specify a custom config file path - yet - so the babel configuration occurs in the package.json file for now)
|   |
|   +-- eslint/
|   |   |
|   |   + estlint config files
|   |
|   +-- postcss/
|   |   + postcss config files
|   |   
|   +-- webpack/
|   |   |
|   |   + webpack config files
|   |
|   +-- vue-loader
|   |   |
|   |   + vue-loader config files

|
|   

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

#

npm run deploy

truffle compile && truffle migrate && cp /build/contracts/* /src/js/abi


# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run test
truffle test 

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
