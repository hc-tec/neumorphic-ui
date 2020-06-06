<template>
  <div class="neumorphic-slider-wrapper">
    <div 
      class="neumorphic-slider-content" 
      ref="neumorphicSliderContent">

      <span class="neumorphic-slider-button" ref="neumorphicSliderButton"></span>
      <span class="neumorphic-slider-color" ref="neumorphicSliderColor"></span>
      <span class="neumorphic-slider-tooltip" ref="neumorphicSliderTooltip"></span>

    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Model, Prop, Watch } from 'vue-property-decorator'
@Component
export default class Slider extends Vue {
  
  @Model('change')
  percentage!: number;

  tmp_percentage: number = 0;

  @Watch('tmp_percentage')
  percentageChange(newValue: number) {
    this.$emit('change', newValue);
  }

  dragElement(
      target: HTMLDivElement,
      btn: any,
      color: HTMLSpanElement,
      tooltip: HTMLSpanElement) {
    target.addEventListener('mousedown', (e: any) => {
        onMouseMove(e);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    });

    const onMouseMove = (e: any) => {
        e.preventDefault();
        const targetRect = target.getBoundingClientRect();
        let x = e.pageX - targetRect.left + 10;
        if (x > targetRect.width) { x = targetRect.width; }
        if (x < 0) { x = 0; }

        btn.x = x - 10;
        btn.style.left = btn.x + 'px';

        // get the position of the button inside the container (%)
        this.tmp_percentage = Math.round((btn.x + 10) / targetRect.width * 100);
        // color width = position of button (%)
        color.style.width = this.tmp_percentage + '%';

        // move the tooltip when button moves, and show the tooltip
        tooltip.style.left = btn.x - 5 + 'px';
        tooltip.style.opacity = '1';

        // show the percentage in the tooltip
        tooltip.textContent = Math.round(this.tmp_percentage) + '%';
    };

    const onMouseUp  = () => {
      window.removeEventListener('mousemove', onMouseMove);
      tooltip.style.opacity = '0';

      btn.addEventListener('mouseover', () => {
        tooltip.style.opacity = '1';
      });
      btn.addEventListener('mouseout', () => {
        tooltip.style.opacity = '0';
      });
    };
  };

  mounted(){
    
    const container: HTMLDivElement = this.$refs.neumorphicSliderContent as HTMLDivElement
        , btn: any = this.$refs.neumorphicSliderButton as HTMLSpanElement
        , color: HTMLSpanElement = this.$refs.neumorphicSliderColor as HTMLSpanElement
        , tooltip: HTMLSpanElement = this.$refs.neumorphicSliderTooltip as HTMLSpanElement;
    
    if(this.percentage) {
      // 初始化数据，数据为父组件传来的值，不为空，则进行样式更新
      const targetRect = container.getBoundingClientRect();
      btn.style.left = `${targetRect.width * this.percentage / 100 - 10}px`;
      color.style.width = this.percentage + '%';
      tooltip.style.left = btn.x - 5 + 'px';
      tooltip.textContent = Math.round(this.percentage) + '%';
    }

    this.dragElement(container, btn, color, tooltip);
  }
  
}
</script>
<style scoped>

.neumorphic-slider-content {
  width: 100%;
  height: 1rem;
  cursor: pointer;
  box-shadow: var(--slider-shadow);
  border-radius: var(--primary-shadow);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.neumorphic-slider-button {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: var(--slider-button-bgcolor);
  position: absolute;
  box-shadow: var(--slider-button-shadow);
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: left .1s;
}
.neumorphic-slider-button::after {
  content: '';
  position: absolute;
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  box-shadow: var(--slider-button-shadow);
}
.neumorphic-slider-button:hover .neumorphic-slider-tooltip {
  opacity: 1;
}
.neumorphic-slider-color {
  height: 100%;
  width: 50%;
  position: absolute;
  left: 0;
  z-index: 100;
  border-radius: inherit;
  background: var(--linear-color);
  transition: width .1s;
}
.neumorphic-slider-tooltip {
  position: absolute;
  top: 2.6rem;
  height: 2.5rem;
  width: 3rem;
  border-radius: var(--small-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--bigger-font-size);
  color: var(--second-color);
  box-shadow: var(--shadow);
  opacity: 0;
  transition: opacity .2s ease;
}

</style>