<template>
  <div class="neumorphic-radio-wrapper">
    <div class="neumorphic-radio-content">
      <span :class="neumorphicRadioClass">
        <input
          ref="neumorphicRadio"
          v-if="!checked"
          type="radio" 
          :name="label"
          :value="value"
          :disabled="disabled"
          :class="neumorphicRadioInputClass"
          @change="change($event)">
      </span>
      <neumorphic-label ref="neumorphicRadioLabel" class="neumorphic-radio-slot">
        <slot></slot>
      </neumorphic-label>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Model, Prop, Watch } from 'vue-property-decorator'
import neumorphicLabel from '../../label/src/label.vue'
@Component({
  components: {
    'neumorphic-label': neumorphicLabel
  }
})
export default class Radio extends Vue {
  
  checked: boolean = false;

  @Prop()
  label!: string | number | boolean;

  @Prop({type: Boolean, default: false})
  disabled!: boolean;

  @Model('change', {type: String})
  value!: string;

  @Watch('value')
  noEquel(newValue: string | number | boolean, oldValue: string | number | boolean): void{
    if(this.label !== newValue) {
      this.checked = false;
    } else {
      this.checked = true;
    }
    this.neumorphicRadioClass['neumorphic-radio-checked'] = this.checked;
  }

  change(event: any): void {
    this.checked = !this.checked;
    this.neumorphicRadioClass['neumorphic-radio-checked'] = this.checked;
    if(this.checked) {
      this.$emit('change', this.label);
    }
  }

  @Watch('disabled')
  disabledChange(newValue: boolean) {
    this.neumorphicRadioClass['neumorphic-radio-disabled'] = newValue;
    this.neumorphicRadioInputClass['neumorphic-radio-disabled'] = newValue;
  }

  neumorphicRadioClass: Record<string, boolean> = {
    'neumorphic-radio': true,
    'neumorphic-radio-checked': this.checked,
    'neumorphic-radio-disabled': this.disabled
  }

  neumorphicRadioInputClass: Record<string, boolean> = {
    'neumorphic-radio-input': true,
    'neumorphic-radio-disabled': this.disabled
  }

  mounted() {
    this.checked = !!this.value && !!this.label && this.value === this.label;
    this.neumorphicRadioClass['neumorphic-radio-checked'] = this.checked;
  }
}
</script>
<style scoped>
.neumorphic-radio-wrapper {
  display: inline-block;
  margin-right: 30px;
}
.neumorphic-radio-content {
  position: relative;
  display: flex;
  align-items: center;
}
.neumorphic-radio-input {
  opacity: 0;
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
.neumorphic-radio {
  box-shadow: var(--shadow);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin: 0;
  transition: .3s ease;
}
.neumorphic-radio::after {
  content: "";
  position: absolute;
  width: 1rem;
  height: 1rem;
  background: var(--radio-circle-bgcolor);
  border-radius: 50%;
  transition: .3s ease;
}
.neumorphic-radio-slot {
  margin: 0;
  margin-left: 10px;
}
.neumorphic-radio-checked {
  box-shadow: var(--inner-shadow);
}
.neumorphic-radio:hover::after,
.neumorphic-radio-checked::after {
  background: var(--second-color);
}
.neumorphic-radio-disabled {
  cursor: not-allowed !important;
}
.neumorphic-radio-disabled::after {
  background: var(--radio-circle-disabled-bgcolor) !important;
}

</style>