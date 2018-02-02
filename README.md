
# vue-touch-feedback

Vue directive for touch feedback in mobile applications.fork from [touchFeedback](https://github.com/backToNature/touchFeedback)

## Requirements

- Vue.js 2.x

## Install

```bash
npm install vue-touch-feedback-plugin --save
```


## Usage


```javascript
import VueTouchFeedback from 'vue-touch-feedback-plugin'

Vue.use(VueTouchFeedback)
```

```html
<span v-feedback >touch me</span>
```




## Options
- feedbackClass : add className when touch element. default 'feedback'

in js:
```js
Vue.use(VueTouchFeedback,{
    feedbackClass: 'fb'
})
```
or
```html
<span v-feedback="{feedbackClass:'fb'}" >touch me</span>
```


