<template>
  <span 
    ref="neumorphicBackToHead" 
    class="neumorphic-back-to-head-wrapper"
    :style="neumorphicBackToHeadStyle">
    <neumorphic-button
      class="neumorphic-back-to-head"
      @click="backToHead">
      <slot></slot>
    </neumorphic-button>
  </span>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import neumorphicButton from '../../button/src/button.vue';
@Component({
  components: {
    'neumorphic-button': neumorphicButton
  }
})
export default class BackToTop extends Vue {

   @Prop({type: Number, default: 50})
   right!: number;

   @Prop({type: Number, default: 50})
   bottom!: number;

   @Prop({type: Number, default: 200})
   height!: Number;

  neumorphicBackToHeadStyle: Record<string, string> = {
    'right': `${this.right}px`,
    'bottom': `${this.bottom}px`
  }

  backToHead() {
    document.body.scrollIntoView();
  }

  mounted(){
    let lastScrollPosition = window.pageYOffset;
    
    let button = this.$refs.neumorphicBackToHead as any;
    window.addEventListener("scroll",() => {
      const watchButtonPos = () => {
        let currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition < this.height){
          button.style.opacity = '0';
          button.style.transform = 'translateY(100px)';
        } else {
          button.style.opacity = '1';
          button.style.transform = 'translateY(0)';
        }
        lastScrollPosition = currentScrollPosition;
      }
      setTimeout(() => {
        watchButtonPos()
      }, 200);
    });
  }
  
}
</script>
<style scoped>
.neumorphic-back-to-head-wrapper {
  position: fixed;
  transform: translateY(100px);
  transition: opacity .3s, transform .3s ;
}
.neumorphic-back-to-head {
  padding: 15px;
}
</style>