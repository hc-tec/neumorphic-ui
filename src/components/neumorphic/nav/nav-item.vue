<template>
  <li 
    class="neumorphic-nav-item"
    :style="neumorphicNavItemStyle">
    <neumorphic-anchor 
      :link="link"
      :router="router"
      :size="size"
      :color="color"
      :circle="circle"
      :icon="icon">
      <slot></slot>
    </neumorphic-anchor>
  </li>
</template>
<script lang='ts'>
import { Component, Vue, Inject, Prop } from 'vue-property-decorator'
import neumorphicAnchor from '../anchor/anchor.vue'
import neumorphicButton from '../button/button.vue'
import { ColorType, AnchorSizeType, RadiusType, NavMode } from '../utils/config/neumorphic-type'

@Component({
  components: {
    'neumorphic-anchor': neumorphicAnchor,
    'neumorphic-button': neumorphicButton
  }
})
export default class NavItem extends Vue {

  @Prop()
  icon?: string;

  @Prop()
  link?: string;

  @Inject('router')
  router?: boolean;

  @Prop({default: 'primary'})
  color!: ColorType | string;

  @Inject('size')
  size!: AnchorSizeType;

  @Inject('circle')
  circle!: boolean;

  @Inject('mode')
  mode!: NavMode;

  neumorphicNavItemStyle: Record<string, string> = {
    'margin-bottom': this.circle ? (this.mode === 'vertical' ? '1rem' : '') : '',
    'margin-right': this.circle ? (this.mode === 'horizon' ? '1rem' : '') : '',
  }

}
</script>
<style scoped>
.neumorphic-nav-item {
  display: flex;
  list-style: none;
  margin-bottom: .3rem;
}
</style>