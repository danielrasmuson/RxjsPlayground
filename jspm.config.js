SystemJS.config({
  transpiler: "plugin-babel",
  packages: {
    "rxjsplayground": {
      "main": "rxjsplayground.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.10"
  },
  packages: {}
});
