<template>
  <label class="neumorphic-label">
    <slot></slot>
  </label>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NeumorphicLabel extends Vue {

}
</script>
<style scoped>
.neumorphic-label {
  color: #868b98;
  display: block;
  margin: 10px 15px 10px;
}
</style>
