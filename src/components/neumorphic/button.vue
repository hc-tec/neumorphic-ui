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
<style lang="scss" scoped>
:root {
  --hue: 215;
  --saturation: 46%;
  --lightness: 93%;
  --reach: 0.3rem;
  --blur: 0.6rem;
  --alpha: 0.8;
  --dark: hsla(215, 46%, calc(93% - 15%), 0.8);
  --light: hsla(215, 46%, calc(93% + 15%), 0.8);
  --white: #FFFFFF;
  --greyLight-1: #E4EBF5;
  --greyLight-2: #c8d0e7;
  --greyLight-3: #bec8e4;
  --greyDark: #9baacf;
  --shadow: 0.3rem 0.3rem 0.6rem hsla(215, 46%, calc(93% - 15%), 0.8), 
            calc(-1 * 0.3rem) calc(-1 * 0.3rem) 0.6rem hsla(215, 46%, calc(93% + 15%), 0.8);
  --inner-shadow: inset 0.3rem 0.3rem 0.6rem hsla(215, 46%, calc(93% - 15%), 0.8), 
                  inset calc(-1 * 0.3rem) calc(-1 * 0.3rem) 0.6rem hsla(215, 46%, calc(93% + 15%), 0.8);
  --primary-light: #8abdff;
  --primary: #6d5dfc;
  --primary-dark: #5b0eeb;
}
.neumorphic-btn {
  border: none;
  outline: none;
  padding: 12px 40px;
  letter-spacing: 0.1em;
  color: #61677C;
  text-shadow: 1px 1px 0 #FFF;
  border-radius: 1rem;
  background-color: transparent;
  cursor: pointer;
  box-shadow: 0.3rem 0.3rem 0.6rem hsla(215, 46%, calc(93% - 15%), 0.8),
              calc(-1 * 0.3rem) calc(-1 * 0.3rem) 0.6rem hsla(215, 46%, calc(93% + 15%), 0.8);
  transition: box-shadow .1s ease, color .3s ease;
  &:hover {
    color: #66ccff;
  }
  &:active {
    box-shadow: inset 0.3rem 0.3rem 0.6rem hsla(215, 46%, calc(93% - 15%), 0.8),
                inset calc(-1 * 0.3rem) calc(-1 * 0.3rem) 0.6rem hsla(215, 46%, calc(93% + 15%), 0.8);
  }
}

.neumorphic-btn-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 0;
}

</style>
