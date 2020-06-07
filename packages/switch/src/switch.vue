<template>
  <div>
    <span class="neumorphic-switch">
      <input 
        ref="neumorphicSwitch"
        type="checkbox"
        :class="neumorphicSwitchInputClass"
        :disabled="disabled"
        @click="change($event)">
      <label :class="neumorphicSwitchLabelClass"></label>
    </span>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator'

@Component
export default class SwitchComponent extends Vue {

  checked: boolean = false;

  // @Prop({default: false})
  // value!: string | number | boolean;

  @Prop({default: false})
  disabled!: boolean;

  neumorphicSwitchLabelClass: Record<string, boolean> = {
    'neumorphic-switch-label': true,
    'neumorphic-switch-label-checked': this.checked,
    'neumorphic-switch-label-disabled': this.disabled
  }

  neumorphicSwitchInputClass: Record<string, boolean> = {
    'neumorphic-switch-input': true,
    'neumorphic-switch-input-disabled': this.disabled
  }

  @Model('change', {type: Boolean})
  value?: boolean;

  @Watch('value')
  watchValueChange(newValue: boolean | string, oldValue: boolean | string) {

    // console.log(newValue)
    // console.log((this.$refs.neumorphicSwitch as HTMLInputElement).value)
    // this.checked = newValue === (this.$refs.neumorphicSwitch as HTMLInputElement).value;
    // this.neumorphicSwitchLabelClass['neumorphic-switch-label-checked'] = this.checked;
    this.checked = newValue === true;
    this.neumorphicSwitchLabelClass['neumorphic-switch-label-checked'] = this.checked;
  }

  

  change(event: any) {
    this.checked = !this.checked;
    this.neumorphicSwitchLabelClass['neumorphic-switch-label-checked'] = this.checked;
    this.$emit('change', this.checked);
  }

  mounted(){
    this.checked = this.value === true;
    this.neumorphicSwitchLabelClass['neumorphic-switch-label-checked'] = this.checked;
  }
  
}
</script>
<style scoped>
.neumorphic-switch {
  display: block;
  width: 6rem;
  position: relative;
}
.neumorphic-switch-input {
  opacity: 0;
  outline: none;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  border: none;
  cursor: pointer;
}
.neumorphic-switch-label {
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  box-shadow: var(--shadow);
  background: var(--primary-bgcolor);
  position: relative;
  cursor: pointer;
  border-radius: var(--large-radius);
}
.neumorphic-switch-label::after {
  content: "";
  position: absolute;
  left: .4rem;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 50%;
  background: var(--switch-off-circle-bgcolor);
  transition: all .4s ease;
}
.neumorphic-switch-label::before {
  content: '';
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: var(--linear-color);
  opacity: 0;
  transition: all .4s ease;
}
.neumorphic-switch-label-checked::before {
  opacity: 1;
}
.neumorphic-switch-label-checked::after {
  left: 57%;
  background: var(--switch-on-circle-bgcolor);
}
.neumorphic-switch-input-disabled, 
.neumorphic-switch-label-disabled {
  cursor: not-allowed !important;
  background: var(--disabled-bgcolor);
}
.neumorphic-switch-label-disabled::before {
  opacity: 0;
}
.neumorphic-switch-label-disabled::after {
  background-color: var(--switch-disabled-bgcolor);
}
</style>