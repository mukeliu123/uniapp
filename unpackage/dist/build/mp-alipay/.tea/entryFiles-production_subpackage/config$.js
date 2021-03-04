
const g = typeof global !== 'undefined' ? global : self;
g.appXAppJson = {
  "app": {
    "$homepage": "pages/home/home",
    "subPackages": [
      {
        "root": "pages_a",
        "pages": [
          "list/list",
          "form/form"
        ]
      }
    ]
  }
};
