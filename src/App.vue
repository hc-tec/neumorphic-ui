<template>
  <div id="app">
    <router-view />
    <Radio></Radio>
    <Avatar></Avatar>
    <Slider></Slider>
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
</style>