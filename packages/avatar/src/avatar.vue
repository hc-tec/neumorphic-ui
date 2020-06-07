<template>
  <span class="neumorphic-avatar" :style="neumorphicAvatarContentStyle">
    <img 
      :src="src" 
      :style="neumorphicAvatarStyle" >
  </span>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ShadowType, AvatarFillType } from '../../utils/config/neumorphic-type'
@Component
export default class Avatar extends Vue {

  

  @Prop({type: String})
  src!: string;

  @Prop({type: Boolean, default: false})
  circle!: boolean;

  @Prop({type: String, default: 'normal'})
  shadow!: ShadowType;

  @Prop({type: Number, default: 100})
  size!: number;

  @Prop({type: String, default: 'fill'})
  fit!: AvatarFillType;

  getShadow(type: ShadowType) {
    const shadowMap = {
      'normal': `0px 0px 2px #5f5f5f,
                0px 0px 0px 5px #ecf0f3,
                8px 8px 15px #a7aaaf,
                -8px -8px 15px #ffffff`,
      'light': `0.3rem 0.3rem 0.6rem hsla(215, 46%, calc(93% - 15%), 0.8), 
                calc(-1 * 0.3rem) calc(-1 * 0.3rem) 0.6rem hsla(215, 46%, calc(93% + 15%), 0.8)`
    }
    return shadowMap[type];
  }

  neumorphicAvatarContentStyle: Record<string, string> = {
    'width': `${this.size}px`,
    'height': `${this.size}px`,
    'border-radius': this.circle ? '50%' : '.5rem',
    'box-shadow': this.getShadow(this.shadow)                                      
  }

  neumorphicAvatarStyle: Record<string, string> = {
    'object-fit': this.fit
  }
}
</script>
<style scoped>
.neumorphic-avatar {
  box-shadow: var(--avatar-shadow);
  background-color: var(--primary-bgcolor);
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
}
.neumorphic-avatar > img {
  height: 100%;
}
</style>