<template>
  <div class="project-issue-demo1">
    <!-- locale messages are not scoped ... -->
    <ContentView :title="$t('views.project-issue.title')">
      <div class="body">
        <h1>{{ msg }}</h1>
      </div>
    </ContentView>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return { msg: '😇 issue demo1' }
  }
}
</script>
