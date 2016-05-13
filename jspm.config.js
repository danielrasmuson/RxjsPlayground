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
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "chartjs": "npm:chart.js@2.1.3",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "lodash": "npm:lodash@4.12.0",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.10",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha"
  },
  packages: {
    "npm:chart.js@2.1.3": {
      "map": {
        "chartjs-color": "npm:chartjs-color@1.0.22",
        "moment": "npm:moment@2.13.0"
      }
    },
    "npm:chartjs-color-string@0.4.0": {
      "map": {
        "color-name": "npm:color-name@1.1.1"
      }
    },
    "npm:chartjs-color@1.0.22": {
      "map": {
        "chartjs-color-string": "npm:chartjs-color-string@0.4.0",
        "color-convert": "npm:color-convert@0.5.3"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    }
  }
});
