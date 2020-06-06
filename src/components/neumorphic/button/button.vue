<template>
  <button
    :class="neumorphicButtonClass"
    :circle="circle"
    :style="neumorphicButtonStyle"
    :disabled="disabled"
    @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { ButtonSizeType } from '../utils/config/neumorphic-type'
@Component
export default class NeumorphicBtn extends Vue {
  @Prop({ type: Boolean, default: false })
  circle!: boolean;

  @Prop({default: 'normal'})
  size!: ButtonSizeType;

  @Prop({default: false})
  disabled!: boolean;

  neumorphicButtonClass: Record<string, boolean> = {
    'neumorphic-btn': true,
    'neumorphic-btn-circle': this.circle
  }

  neumorphicButtonStyle: Record<string, string> = {
    'padding': this.getButtonSize(this.size)
  }

  // 按钮大小配置
  getButtonSize(size: ButtonSizeType): string {
    return {
      'large': '15px 50px',
      'normal': '12px 40px',
      'small': '8px 30px',
      'mini': '6px 15px',
      'supermini': '2px 6px'
    }[size];
  }

}
</script>
<style scoped>
.neumorphic-btn {
  border: none;
  outline: none;
  /* padding: 12px 40px; */
  letter-spacing: 0.1em;
  color: var(--primary-color);
  text-shadow: var(--text-shadow);
  border-radius: var(--small-radius);
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
.neumorphic-btn:disabled {
  background-color: var(--disabled-bgcolor);
  color: var(--disabled-color);
  cursor: not-allowed !important;
}
</style>
