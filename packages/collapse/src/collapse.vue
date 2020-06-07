<template>
  <div class="neumorphic-collapse">
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Collapse extends Vue {

}
</script>
<style scoped>
.neumorphic-collapse {
  width: 500px;
  height: 200px;
  position: relative;
}
</style>