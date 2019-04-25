import Vue from 'vue'
// Register a global custom directive called `v-pop`
Vue.directive('pop', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
})
console.log('pop Directive Loaded')
