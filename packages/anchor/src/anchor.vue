<template>
  <neumorphic-button
    class="neumorphic-anchor"
    :color="color"
    :size="size"
    :circle="circle"
    :icon="icon"
    @click="anchor">
    <slot></slot>
  </neumorphic-button>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { ColorType, AnchorSizeType } from '../../utils/config/neumorphic-type'
import neumorphicButton from '../../button/src/button.vue';
@Component({
  components: {
    'neumorphic-button': neumorphicButton
  }
})
export default class Anchor extends Vue {

  @Prop({ type: Boolean, default: false })
  circle!: boolean;

  @Prop({type: String, default: '#'})
  link!: string;

  @Prop({type: Boolean, default: true})
  router?: boolean;

  @Prop({type: String, default: 'primary'})
  color!: ColorType;

  @Prop({type: String, default: 'normal'})
  size!: AnchorSizeType;

  @Prop()
  icon?: string;

  anchor() {
    this.router && 
      (this.link && 
      this.$router.push(this.link)) ||
    window.open(this.link)
  }

}
</script>
<style scoped>
.neumorphic-anchor {
  display: inline-flex;
  font-size: var(--primary-font-size);
  opacity: .5;
  box-shadow: none;
  transition: box-shadow .2s, opacity .2s;
  border-radius: var(--small-radius);
}
.neumorphic-anchor:hover {
  opacity: 1;
  box-shadow: var(--shadow);
}
.neumorphic-anchor:active {
  box-shadow: var(--inner-shadow);
}

</style>