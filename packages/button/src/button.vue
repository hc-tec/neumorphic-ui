<template>
  <button
    :class="neumorphicButtonClass"
    :circle="circle"
    :style="neumorphicButtonStyle"
    :disabled="disabled"
    @click="$emit('click', $event)">
    <i :class="icon" v-if="icon"></i>  
     <slot></slot>
  </button>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator'
import { ButtonSizeType, ColorType, AnchorSizeType, RadiusType } from '../../utils/config/neumorphic-type'
@Component
export default class NeumorphicBtn extends Vue {
  @Prop({ type: Boolean, default: false })
  circle!: boolean;

  @Prop({type: String, default: 'info'})
  color!: ColorType;

  @Prop()
  icon?: string;

  @Prop({default: 'normal'})
  size!: ButtonSizeType;

  @Prop({default: false})
  disabled!: boolean;

  @Watch('color')
  colorChange(newValue: ColorType) {
    this.neumorphicButtonStyle['color'] = this.getButtonColor(newValue);
  }

  @Watch('size')
  sizeChange(newValue: ButtonSizeType) {
    this.neumorphicButtonStyle['padding'] = this.getButtonSize(newValue);
  }

  neumorphicButtonClass: Record<string, boolean> = {
    'neumorphic-btn': true,
    'neumorphic-btn-circle': this.circle
  }

  neumorphicButtonStyle: Record<string, string> = {
    'padding': this.getButtonSize(this.size),
    'color': this.getButtonColor(this.color) || this.color
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

  // 颜色配置
  getButtonColor(color: ColorType): string {
    return {
      'primary': '#66ccff',
      'success': '#26de81',
      'danger': '#e55039',
      'warning': '#dcc021',
      'info': '#84817a'
    }[color];
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
  width: 50px !important;
  height: 50px !important;
  border-radius: 50% !important;
  padding: 0 !important;
  justify-content: center !important;
  align-items: center !important;
  box-shadow: var(--shadow) !important;
  opacity: 1 !important;
}
.neumorphic-btn-circle:active {
  box-shadow: var(--inner-shadow) !important;
}
.neumorphic-btn:disabled {
  background-color: var(--disabled-bgcolor);
  color: var(--disabled-color);
  cursor: not-allowed !important;
}
</style>
