const { clientAddonConfig } = require('@vue/cli-ui')

module.exports = {
  pluginOptions: {
    enableInSFC: false
  },
  ...clientAddonConfig({
    id: 'vue-issue-demo2',
    port: 8044
  })
}
