<template>
  <label class="neumorphic-label">
    <slot></slot>
  </label>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Label extends Vue {

}
</script>
<style scoped>
.neumorphic-label {
  color: var(--primary-color);
  display: block;
  margin: 10px 15px 10px;
}
</style>
