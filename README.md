# Custom element angular

Generate custom element by angular project that use NG8.

## Use @webcomponents/webcomponentsjs instead of document-register-element

When you command ```ng add @angular/elements```, will auto install document-register-element and add script in ```angualr.json```.

## Local development

app.module
```
...
  ngDoBootstrap() {
    const counterElement = createCustomElement(YourComponent, {
      injector: this.injector
    });
    customElements.define('your-custom-element-name', YourComponent);
  }
...
```

index.html
```
  <your-custom-element-name></your-custom-element-name>
```

## Pack

package.json
```
...
    "el-build": "npm run el-build-task && npm run el-package-task",
    "el-build-task": "ng build --prod --output-hashing=none",
    "el-package-task": "cat ./dist/custom-element-angular/{polyfills,runtime,main}-es5.js > ./dist/custom-element-angular.js"
...
```

```npm run el-build``` will get /dist/custom-element-angular.js