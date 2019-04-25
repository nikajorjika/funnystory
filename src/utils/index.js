import Vue from 'vue'
import mixins from './mixins'

// ---------------------------------------------- //
//
// Load all the util components and modules here
//
// --------------------------------------------- //

// Include Mixins globally
Vue.mixin(mixins)

// Include all the directives that we register in './directives' folder
const directives = require.context(
  './directives',
  true,
  /[A-Za-z0-9-_,\s]+\.js$/i
)
directives.keys().forEach(key => {
  const matches = key.match('[a-zA-Z]+')
  import(`./directives/${matches[0]}`)
})

// Include all the directives that we register in './filters' folder
const filters = require.context(
  './filters',
  true,
  /[A-Za-z0-9-_,\s]+\.js$/i
)
filters.keys().forEach(key => {
  const matches = key.match('[a-zA-Z]+')
  import(`./filters/${matches[0]}`)
})
