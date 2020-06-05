<template>
  <div 
    class="neumorphic-tab-pane" 
    :style="neumorphicTabPaneStyle"
    :title="title">
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class TabPane extends Vue {

  @Prop({type: String})
  title!: string;

  @Prop({type: Boolean, default: false})
  textShadow!: boolean;

  neumorphicTabPaneStyle: Record<string, any> = {
    'text-shadow': this.textShadow ? '1px 1px 0 #FFF' : ''
  }

}
</script>
<style scoped>
.neumorphic-tab-pane {
  width: 100%;
  height: 100%;
  min-height: 10rem;
  padding: 20px;
  color: var(--primary-color);
  line-height: 1.75;
  box-shadow: var(--inner-shadow);
  border-radius: var(--small-radius);
  visibility: hidden;
  position: absolute;
  overflow: auto;
  white-space: pre-line;
}
</style>