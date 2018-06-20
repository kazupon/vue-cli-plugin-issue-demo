const { clientAddonConfig } = require('@vue/cli-ui')

module.exports = {
  pluginOptions: {
    enableInSFC: false
  },
  ...clientAddonConfig({
    id: 'vue-issue-demo1',
    port: 8043
  })
}
