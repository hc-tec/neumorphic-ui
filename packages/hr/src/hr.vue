<template>
  <hr :class="neumorphicHrClass" :type="type">
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Divider extends Vue {

  @Prop({default: 'neumorphic'})
  type!: 'neumorphic' | 'linear';

  neumorphicHrClass: Record<string, boolean> = {
    'neumorphic-hr': true,
    'neumorphic-linear-hr': false
  }

  mounted(){
    // console.log(this.type)
    if(this.type === 'linear') {
      this.neumorphicHrClass['neumorphic-hr'] = false;
      this.neumorphicHrClass['neumorphic-linear-hr'] = true;
    }
  }
  
}
</script>
<style scoped>
.neumorphic-hr {
  width: 50%;
  height: 7px;
  border: 0;
  border-radius: var(--divider-radius);
  box-shadow: var(--divider-shadow);
  background: var(--divider-bgcolor);
  outline: none;
  box-sizing: border-box;
}
.neumorphic-linear-hr {
  border: 0;
  height: 2px;
  background-image: -webkit-linear-gradient(left, white, rgba(0, 119, 170, 0.07), white);
}
</style>