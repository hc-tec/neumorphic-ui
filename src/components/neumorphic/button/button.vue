<template>
  <button
    :class="neumorphicButtonClass"
    :circle="circle"
    @click="click">
    <slot></slot>
  </button>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component
export default class NeumorphicBtn extends Vue {
  @Prop({ type: Boolean, default: false }) private circle!: boolean;
  neumorphicButtonClass: Record<string, boolean> = {
    'neumorphic-btn': true,
    'neumorphic-btn-circle': this.circle
  }

  @Emit('click')
  click () {}
}
</script>
<style scoped>
.neumorphic-btn {
  border: none;
  outline: none;
  padding: 12px 40px;
  letter-spacing: 0.1em;
  color: var(--primary-color);
  text-shadow: var(--text-shadow);
  border-radius: var(--primary-radius);
  background-color: var(--primary-bgcolor);
  font-size: var(--primary-font-size);
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: box-shadow .1s ease, color .3s ease;
}
.neumorphic-btn:hover {
  color: var(--second-color);
}
.neumorphic-btn:active {
  box-shadow: var(--inner-shadow);
}
.neumorphic-btn-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 0;
}

</style>
