module.exports = api => {
  api.addClientAddon({
    id: 'vue-issue-demo1',
    url: 'http://localhost:8043/index.js'
  })

  api.addClientAddon({
    id: 'vue-issue-demo2',
    url: 'http://localhost:8044/index.js'
  })

  api.addView({
    id: 'vue-issue-demo1-view',
    name: 'test-issue1-route',
    icon: 'pets',
    tooltip: 'issues'
  })

	api.addTask({
		name: 'demo-task1',
		command: "echo task2!",
		views: [{
      id: 'vue-issue-demo1-addon',
      label: 'Dashboard',
      icon: 'dashboard',
      component: 'vue-issue-demo-comp'
    }],
		defaultView: 'vue-issue-demo1-addon'
	})

  api.addView({
    id: 'vue-issue-demo2-view',
    name: 'test-issue2-route',
    icon: 'info',
    tooltip: 'info'
  })

	api.addTask({
		name: 'demo-task2',
		command: "echo task2!",
		views: [{
      id: 'vue-issue-demo2-addon',
      label: 'Dashboard',
      icon: 'dashboard',
      component: 'vue-issue-demo-comp'
    }],
		defaultView: 'vue-issue-demo2-addon'
	})
}
