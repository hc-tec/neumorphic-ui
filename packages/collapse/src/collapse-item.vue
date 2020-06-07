<template>
  <details class="neumorphic-collapse-item">
    <summary>{{ title }}</summary>
    <neumorphic-hr type="linear"></neumorphic-hr>
      <div class="neumorphic-collapse-item-details">
        <slot></slot>
      </div>
  </details>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import neumorphicHr from '../../hr/src/hr.vue'
@Component({
  components: {
    'neumorphic-hr': neumorphicHr
  }
})
export default class CollapseItem extends Vue {

  @Prop()
  title!: string;
}
</script>
<style scoped>
.neumorphic-collapse-item {
  font-size: var(--primary-font-size);
  padding: 10px 20px 20px 20px;
  margin: 10px;
  border-radius: var(--primary-radius);
  background: var(--primary-bgcolor);
  box-shadow: var(--inner-shadow);
  cursor: pointer;
  color: var(--primary-darker-color);
  transition: all 0.6s ease;
}
.neumorphic-collapse-item:not([open]) {
  height: 10%;
}
.neumorphic-collapse-item[open] {
  height: 100%;
}
.neumorphic-collapse-item summary {
  padding: 5px;
  padding-top: 0;
  outline: none;
  font-size: var(--large-font-size);
}
@keyframes appear {
  0%, 50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.neumorphic-collapse-item-details {
  font-size: 16px;
  line-height: 1.5em;
  cursor: auto;
  color: var(--primary-color);
  animation: appear 1s ease;
}

</style>