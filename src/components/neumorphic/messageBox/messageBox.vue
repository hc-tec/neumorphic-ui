<template>
  <div class="neumorphic-messagebox">
    <p class="neumorphic-messagebox-text">
      <slot></slot>
    </p>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { MessageBox } from './messageBox';
// @Component
export default class NeuMessageBox extends MessageBox {

  


}
</script>
<style scoped>

</style>