# Vue.js truffle box

A [truffle box](http://truffleframework.com/boxes/) to serve as the foundation of any Truffle and Vue.js dApp. Comes with [Vue.js](https://vuejs.org/), [vue-router](https://router.vuejs.org/en/) and [Vuex](https://vuex.vuejs.org/en/intro.html).

## Directory structure

This truffle box is crafted to enforce a clean directory structure.

```
/
|
+-- build/
|   |
|   +-- contracts/
|   |   |
|   |   + truffle compiled contracts json artifacts
|   |
|   + npm build scripts
|
+-- config/
|   |
|   +-- babel/
|   |   |
|   |   + babel config files - to come (babel does not allow to specify a custom config file path - yet - so the babel configuration occurs in the package.json file for now)
|   |
|   +-- eslint/
|   |   |
|   |   + estlint config files
|   |
|   +-- postcss/
|   |   |
|   |   + postcss config files
|   |
|   +-- vue-loader
|   |   |
|   |   + vue-loader config files
|   |   
|   +-- webpack/
|   |   |
|   |   + webpack config files
|   |


|
|   

```

## Installation

1. Install Truffle and an Ethereum client - like EthereumJS TestRPC.
```javascript
npm install -g truffle // Version 3.0.5+ required.
npm install -g ethereumjs-testrpc
```

2. Download box.
```javascript
truffle unbox wespr/truffle-vue
```

3. Compile and migrate the contracts.
```javascript
truffle compile
truffle migrate
```

4. Run the webpack server for front-end hot reloading. Smart contract changes do not support hot reloading for now.
```javascript
npm run start
```


# React, Redux and UPort Authentication Truffle Box

In addition to Webpack and React, this box adds: react-router, redux and redux-auth-wrapper for authentication powered by UPort. The easiest way to get started with UPort.

## Installation

1. Install truffle and an ethereum client. For local development, try EthereumJS TestRPC.
    ```javascript
    npm install -g truffle // Version 3.0.5+ required.
    npm install -g ethereumjs-testrpc
    ```

2. Download this box.
    ```javascript
    truffle unbox wespr/truffle-vue
    ```

3. Compile and migrate the contracts.
    ```javascript
    truffle compile
    truffle migrate
    ```

4. Run the webpack server for front-end hot reloading. For now, smart contract changes must be manually recompiled and migrated.
```javascript
npm run start
```
    
## Tests
This box comes with everything bundled for `unit`, `e2e` and `truffle` contracts testing.

1. `unit` and `e2e` tests.
```javascript
npm run test/dapp
```

2. `truffle` contracts tests.
```javascript
npm run test/truffle
```

3. Alternatively you directly run `unit`, `e2e` and `truffle` contracts tests in one pass.
```javascript
npm run test
```

## Build for production
To build the application for production, use the build command. A production build will be compiled in the `dist` folder.
```javascript
npm run build
```