<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class App extends Vue {

}
</script>
<style scoped>
#app {
  width: 100vh;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>