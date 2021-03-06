const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:5000/",
    uniqueName: "main"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        'unauth': "unauth@http://localhost:3000/remoteEntry.js"
      },
      // shared: {
      //   "@angular/core": {
      //     "singleton": true
      //   },
      //   "@angular/common": {
      //     "singleton": true
      //   },
      //   "@angular/router": {
      //     "singleton": true
      //   },
      //   "@shared-libs": {
      //     "singleton": true,
      //     "import": "projects/shared-libs/src/main"
      //   },
      //   "rxjs": {
      //     "singleton": true
      //   },
      //   "@ngrx/entity": {
      //     singleton: true,
      //   },
      //   "@ngrx/store": {
      //     singleton: true,
      //   },
      //   "@ngrx/effects": {
      //     singleton: true,
      //   },
      //   "@ngrx/store-devtools": {
      //     singleton: true,
      //   },
      // },
      shared: {
        "@angular/core": {},
        "@angular/common": {},
        "@angular/router": {},
        "shared-libs": {
          requiredVersion: '1.1.1',
          // or set it to false if you are sure there will be no breaking changes
          // at runtime
        },
        // "projects/shared-libs": {
        //   requiredVersion: '1.1.1',
        // },
        "rxjs": {},
        "@ngrx/entity": {},
        "@ngrx/store": {},
        "@ngrx/effects": {},
        "@ngrx/store-devtools": {},
      },
    })
  ],
};
