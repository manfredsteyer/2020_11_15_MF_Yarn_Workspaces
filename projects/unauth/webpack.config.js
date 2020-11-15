const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:3000/",
    uniqueName: "unauth"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "unauth",
      library: { type: "var", name: "unauth" },
      filename: "remoteEntry.js",
      exposes: {
        './UnauthenticatedModule': './projects/unauth/src/app/app.module.ts',
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
        // "projects/shared-libs": {
        //   requiredVersion: '^1.1.1',
        // },
        "shared-libs": {
          requiredVersion: '^1.1.2'
        },
        "rxjs": {},
        "@ngrx/entity": {},
        "@ngrx/store": {},
        "@ngrx/effects": {},
        "@ngrx/store-devtools": {},
      },
    })
  ],
};
