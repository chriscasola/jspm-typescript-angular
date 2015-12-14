System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "*": "lib/*",
    "lib": "lib",
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  packages: {
    "/lib": {
      "defaultExtension": "ts"
    }
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.8",
    "typescript": "npm:typescript@1.7.3"
  }
});
