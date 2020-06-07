<template>
  <div 
    class="neumorphic-nav-content"
    :style="neumorphicNavContentStyle">
    <slot name="title"></slot>
    <ul 
      class="neumorphic-nav"
      :style="neumorphicNavStyle">
      <slot></slot>
    </ul>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Provide, Watch } from 'vue-property-decorator'
import { NavMode } from '../utils/config/neumorphic-type'
@Component({
})
export default class Nav extends Vue {

  @Provide('mode')
  @Prop({default: 'vertical'})
  mode!: NavMode;

  @Provide('router')
  @Prop({type: Boolean, default: true})
  router?: boolean;

  @Provide('size')
  @Prop()
  size!: string;

  @Provide('circle')
  @Prop()
  circle!: boolean;

  getWidthByMode(mode: NavMode): string {
    return {
      'horizon': 'auto',
      'vertical': '240px'
    }[mode];
  }

  @Watch('mode')  // 检测导航栏模式变化
  modeChange(newValue: NavMode) {
    this.neumorphicNavStyle['flex-direction'] = newValue === 'vertical' ? 'column' : 'row';
    this.neumorphicNavContentStyle['width'] = this.getWidthByMode(newValue);
  }

  neumorphicNavStyle: Record<string, string> = {
    'flex-direction': this.mode === 'vertical' ? 'column' : 'row'
  }

  neumorphicNavContentStyle: Record<string, string> = {
    'width': this.getWidthByMode(this.mode)
  }


  
}
</script>
<style scoped>
.neumorphic-nav-content {
  background-color: var(--primary-bgcolor);
}
.neumorphic-nav {
  display: flex;
}
</style>