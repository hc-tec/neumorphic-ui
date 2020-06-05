<template>
  <div :style="neumorphicTabsStyle">
    <div class="neumorphic-tabs">
      <div class="neumorphic-tabs-bar" ref="neumorphicTabsBar"></div>
      <div class="neumorphic-tabs-nav">

        <template v-for="(title,index) in navTitle">
          <input class="neumorphic-tabs-input" type="radio" :key="title">
          <label @click="tabChange(index)" :key="title+'asdwasd'">
            <p>{{ title }}</p>
          </label>
        </template>

      </div>
    </div>
    <div ref="neumorphicTabText" style="position:relative;height: 100%;">
      <slot></slot>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class Tabs extends Vue {

  @Prop({default: 500})
  width!: number | string;

  @Prop({default: 300})
  height!: number | string;

  neumorphicTabsStyle: Record<string, string> = {
    'width': `${this.width}px`,
    'height': `${this.height}px`
  }

  navTitle: string[] = [];

  getTabTitle() {
    // 获取 tab-pane 的 title ，作为导航
    const root = this.$refs.neumorphicTabText as HTMLDivElement;
    const hasChild = root.hasChildNodes();
    if(hasChild) {
      const tabPanes = root.children;

      // 初始化
      (tabPanes[0] as any).style.visibility = 'visible';

      for (const tab of tabPanes) {
        let tmp_tab = tab as any;
        this.navTitle.push(tmp_tab.title);
      }
    }
  }

  // 记录上次被选中的 tab 索引
  lastCheckedIndex: number = 0;

  tabChange(index: number) {
    const radioInputs = document.querySelectorAll('.neumorphic-tabs-input');
    const lastCheckedInput = radioInputs[this.lastCheckedIndex];
    const currentCheckedInput = radioInputs[index];
    // 更改 checked 状态
    lastCheckedInput.removeAttribute('checked');
    currentCheckedInput.setAttribute('checked', 'checked');
    

    // 更改主体内容
    const children = (this.$refs.neumorphicTabText as HTMLDivElement).children;
    (children[this.lastCheckedIndex] as any).style.visibility = 'hidden';
    (children[index] as any).style.visibility = 'visible';


    // 更改 bar 的位置
    const width = (currentCheckedInput.nextSibling as any).clientWidth;
    const bar = this.$refs.neumorphicTabsBar as HTMLDivElement;
    bar.style.transform = `translateX(${width * index}px)`;

    this.lastCheckedIndex = index;
  }

  init() {
    document.querySelectorAll('.neumorphic-tabs-input')[0].setAttribute('checked', 'checked');
  }

  mounted() {
    this.getTabTitle();
    setTimeout(() => {
      this.init()
    }, 100);
  }
  

}
</script>
<style scoped>
.neumorphic-tabs,
.neumorphic-tabs-nav {
  border-radius: var(--primary-radius);
  display: flex;
  align-items: center;
  position: relative;
}
.neumorphic-tabs {
  box-shadow: var(--shadow);
  margin-bottom: 10px;
}
.neumorphic-tabs-input {
  display: none;
  outline: none;
  position: absolute;
  width: inherit;
  height: inherit;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  cursor: pointer;
}
.neumorphic-tabs-input:checked + label {
  transition: all .5s ease;
  color: var(--second-color);
}
.neumorphic-tabs-input + label {
  width: 6.8rem;
  height: 3.6rem;
  font-size: .9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
  cursor: pointer;
  transition: all .5s ease;
}
.neumorphic-tabs-input + label:hover {
  color: var(--second-color);
}
.neumorphic-tabs-bar {
  position: absolute;
  height: 3.4rem;
  width: 6.2rem;
  margin-left: .3rem;
  border-radius: .8rem;
  box-shadow: var(--inner-shadow);
  pointer-events: none;
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>