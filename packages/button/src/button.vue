<template>
  <button
    ref="neumorphicButton"
    :class="neumorphicButtonClass"
    :circle="circle"
    :style="neumorphicButtonStyle"
    :disabled="disabled"
    @click="$emit('click', $event)">
    <i :class="icon" v-if="icon" ref="neumorphicButtonIcon"></i> <slot></slot>
  </button>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator'
import { ButtonSizeType, ColorType, AnchorSizeType, RadiusType, ButtonRadiusType } from '../../utils/config/neumorphic-type'
@Component
export default class Button extends Vue {
  @Prop({ type: Boolean, default: false })
  circle!: boolean;

  @Prop({default: 'plain'})
  radius!: ButtonRadiusType;

  @Prop({type: String, default: 'info'})
  color!: ColorType;

  @Prop()
  icon?: string;

  @Prop({default: 'normal'})
  size!: ButtonSizeType;

  @Prop({default: false})
  disabled!: boolean;

  @Watch('circle')
  circleChange(newValue: boolean) {
    this.neumorphicButtonClass['neumorphic-btn-circle'] = newValue;
  }

  @Watch('radius')
  radiusChange(newValue: ButtonRadiusType) {
    this.neumorphicButtonStyle['border-radius'] = this.getButtonRadius(newValue);
  }

  @Watch('color')
  colorChange(newValue: ColorType) {
    this.neumorphicButtonStyle['color'] = this.getButtonColor(newValue);
  }

  @Watch('size')
  sizeChange(newValue: ButtonSizeType) {
    this.neumorphicButtonStyle['padding'] = this.getButtonSize(newValue);
  }

  @Watch('disabled')
  disabledChange(newValue: boolean) {
    (this.$refs.neumorphicButton as HTMLButtonElement).disabled = newValue;
  }

  neumorphicButtonClass: Record<string, boolean> = {
    'neumorphic-btn': true,
    'neumorphic-btn-circle': this.circle
  }

  neumorphicButtonStyle: Record<string, string> = {
    'padding': this.getButtonSize(this.size),
    'color': this.getButtonColor(this.color) || this.color,
    'border-radius': this.getButtonRadius(this.radius)
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

  // 按钮边框圆弧配置
  getButtonRadius(radius: ButtonRadiusType): string {
    return {
      'plain': 'var(--small-radius)',
      'round': 'var(--large-radius)',
    }[radius];
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
<style>
.neumorphic-btn {
  border: none;
  outline: none;
  display: inline;
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
