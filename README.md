# fastVenu

## Lazy implementation
```html
<link rel="stylesheet" href="https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css">
```
```css
  #fastVenuContainer{
      width: 80%;
      height: 350px;
      z-index: 9999;
      position: fixed;
      top: 10%;
      left: 10%;
      background: white;
  }
```
```js
window.fastVenuInstance.setUpOnElement(document.querySelector('nav.mt-2 > ul.nav'),'li.nav-item > a.nav-link','p')
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
