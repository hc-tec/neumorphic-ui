<template>
  <li 
    ref="neumorphicOption"
    :class="neumorphicOptionClass"
    :type="value"
    :disabled="disabled"
    @click="change">
    <slot></slot>
  </li>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator'

@Component
export default class Option extends Vue {

  checked: boolean = false;

  @Prop({required: true})
  value?: string | number | boolean;

  @Prop({type:Boolean, default: false})
  disabled!: boolean;

  @Model('change', {})
  checked_value!: Record<string, any>;

  @Watch('checked_value')
  watchValueChange(newValue: Record<string, any>) {
    this.checked = newValue.value === (this.$refs.neumorphicOption as HTMLUListElement).type;
    this.neumorphicOptionClass['neumorphic-option-checked'] = this.checked;
  }

  change(event: any) {
    this.checked = true;
    this.neumorphicOptionClass['neumorphic-option-checked'] = this.checked;
    this.$emit('change', {
      value: event.target.type,
      label: event.target.innerText
    });
  }

  neumorphicOptionClass = {
    'neumorphic-option': true,
    'neumorphic-option-checked': this.checked,
    'neumorphic-option-disabled': this.disabled
  }

  mounted(){
    this.checked = this.checked_value.value === (this.$refs.neumorphicOption as HTMLUListElement).type;
    this.neumorphicOptionClass['neumorphic-option-checked'] = this.checked;
    this.neumorphicOptionClass['neumorphic-option-disabled'] = this.disabled;
  }
  
}
</script>
<style scoped>
.neumorphic-option {
  cursor: pointer;
  border: 0;
  color: var(--option-color);
  font-weight: normal;
  padding: 5px 3em;
  line-height: 1.25em;
  margin: 0;
  font-size: var(--bigger-font-size);
  outline: none;
  box-sizing: border-box;
  transition: background-color .3s, color .3s;
}
.neumorphic-option:hover {
  background-color: var(--option-bgcolor);
}
.neumorphic-option-disabled {
  background-color: var(--option-disabled-bgcolor);
  color: var(--disabled-color);
  pointer-events: none !important;
  cursor: not-allowed !important;
}
.neumorphic-option-checked {
  color: var(--second-color);
}
</style>