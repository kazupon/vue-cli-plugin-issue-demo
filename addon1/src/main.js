import Comp from './components/Comp.vue'
import App from './App.vue'

ClientAddonApi.component('vue-issue-demo-comp', Comp)

ClientAddonApi.addRoutes('vue-issue-demo1', [
  { path: '', name: 'test-issue1-route', component: App }
])

const locales = require.context('./locales', true, /[a-z0-9]+\.json$/i)
locales.keys().forEach(key => {
  const locale = key.match(/([a-z0-9]+)\./i)[1]
  ClientAddonApi.addLocalization(locale, locales(key))
})
