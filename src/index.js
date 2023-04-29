/**
 * with this file you build your npm package
 */


const components = require
  .context('./components/', true)
  .keys()
  .filter((name) => name.match(/\.vue$/))
  .map((fileName) => {
    fileName = fileName.substring(2, fileName.length)
    const component = require('./components/' + fileName).default
    const name = component.name
    return { name, component }
  })

const GlobalComponents = {
  install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    components.forEach(({ name, component }) => {
      Vue.component(name, component)
    })
  }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(GlobalComponents)
}

/**
 * this is your npm package
 * to use this in another project write this in you main.ts of your other projcet:
 * npm i {name}
 * import YourPackage from '{name}'
 * createApp(App).use(router).use(YourPackage).mount('#app') 
 */
export default GlobalComponents
