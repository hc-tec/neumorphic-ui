<template>
  <span class="neumorphic-tag">
    <span v-if="prefixIcon" class="neumorphic-tag-icon neumorphic-tag-prefix-icon">
      <i :class="prefixIcon"></i>
    </span>
    <p class="neumorphic-tag-text" ref="neumorphicTagText">
      <slot></slot>
    </p>
    <span 
      class="neumorphic-tag-icon neumorphic-tag-close" 
      v-if="closable"
      @click="handleClose">
      ✖
    </span>
  </span>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Tag extends Vue {

  @Prop({default: ''})
  prefixIcon?: string;

  @Prop({default: false})
  closable?: boolean;

  handleClose() {
    // 点击关闭按钮触发的事件 
    const tag = (this.$refs.neumorphicTagText as HTMLParagraphElement)
    this.$emit('close', tag);
  }
}
</script>
<style scoped>
.neumorphic-tag {
  min-width: 7rem;
  min-height: 3rem;
  border-radius: var(--small-radius);
  box-shadow: var(--shadow);
  display: inline-flex;
  justify-content: unset;
  align-items: center;
  position: relative;
  margin-right: 10px;
}
.neumorphic-tag-icon {
  width: 1rem;
  height: 1rem;
  border-radius: var(--primary-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--primary-font-size);
  color: var(--second-color);
  margin: 0 0 0 .2rem;
}
.neumorphic-tag-prefix-icon {
  left: 0;
}
.neumorphic-tag-close {
  cursor: pointer;
  right: .5rem;
  color: var(--primary-color);
  transition: color .3s;
  position: absolute;
}
.neumorphic-tag-close:hover {
  color: var(--second-color);
}
.neumorphic-tag-text {
  font-size: 14px;
  color: var(--primary-color);
  margin: 0 2rem 0 1rem;
}
</style>