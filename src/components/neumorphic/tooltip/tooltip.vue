<template>
  <div 
    class="neumorphic-tooltip-content" 
    ref="neumorphicTooltipContent">
    <slot></slot>
    <span 
      class="neumorphic-tooltip" 
      ref="neumorphicTooltip">
      {{ content }}
    </span>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import { throttle } from '../utils/ts/throttle'
@Component
export default class Tooltip extends Vue {

  @Prop()
  content?: string;

  hasChangeParent: boolean = false;

  changeParent(prevParent:HTMLElement, hoverNode: HTMLElement) {
    // 将 slot 中的元素移至上层
    prevParent.removeChild(hoverNode);
    (prevParent.parentNode as HTMLElement).appendChild(hoverNode);
    this.hasChangeParent = true;
  }

  getHoverNode() {
    const prevParent = this.$refs.neumorphicTooltipContent as HTMLDivElement;
    const hoverNode = prevParent.firstChild as HTMLElement;
    if(hoverNode.classList.length && hoverNode.classList[0] !== 'neumorphic-tooltip') {
      !this.hasChangeParent && this.changeParent(prevParent, hoverNode);
      return hoverNode;
    }
    return null;
  }

  hoverListener() {
    const hoverNode = this.getHoverNode();
    hoverNode &&
    (
        hoverNode.addEventListener('mousemove', (e: MouseEvent) => {  
          throttle(this.hoverEvent(hoverNode, e), 0, 100)();
        })
      , hoverNode.addEventListener('mouseout', this.hoverOutEvent(hoverNode))
    )
  }

  hoverEvent(hoverNode: HTMLElement, e: MouseEvent) {
    const getHoverNode = () => {
      const width = e.offsetX
          , height = e.offsetY
          , tooltip = this.$refs.neumorphicTooltip as HTMLSpanElement
          , tooltipWidth = tooltip.clientWidth
          , tooltipHeight = tooltip.clientHeight
          , left = width - tooltipWidth / 2
          , top = height + tooltipHeight / 2;
      tooltip.style.opacity = '1';
      tooltip.style.zIndex = '10';
      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;

      tooltip.addEventListener('mousemove', () => {
        tooltip.style.opacity = '1';
        tooltip.style.zIndex = '10';
      })
      tooltip.addEventListener('mouseout', () => {
        tooltip.style.opacity = '0';
        tooltip.style.zIndex = '-1';
      })
    }
    return getHoverNode
  }

  hoverOutEvent(hoverNode: HTMLElement) {
    const getHoverNode = () => {
      const tooltip = this.$refs.neumorphicTooltip as HTMLSpanElement
      tooltip.style.opacity = '0';
      tooltip.style.zIndex = '-1';
    }
    return getHoverNode
  }

  mounted() {
    this.hoverListener();
  }

  beforeDestroy() {
    const hoverNode = this.getHoverNode();
    (() => {
      hoverNode &&
      (
        (hoverNode as any).removeEventListener('mousemove', (e:any)=>(e)),
        (hoverNode as any).removeEventListener('mouseout', (e:any)=>(e))
      )
    })()
    
  }
  
  
}
</script>
<style scoped>
.neumorphic-tooltip-content {
  position: relative;
}
.neumorphic-tooltip {
  position: absolute;
  top: 2.6rem;
  min-width: 10rem;
  min-height: 4rem;
  border-radius: var(--small-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--primary-font-size);
  color: var(--second-color);
  box-shadow: var(--shadow);
  opacity: 0;
  transition: opacity .3s ease, z-index .3s;
}
</style>