<template>
  <div class="neumorphic-checkbox-wrapper">
    <div class="neumorphic-checkbox-content">
      <span
        :class="neumorphicCheckBoxClass">
        <input 
          ref="neumorphicCheckBox"
          :class="neumorphicCheckBoxInputClass"
          type="chechbox"
          :value="value"
          :name="label"
          @click="change($event)"
          :disabled="disabled">
        <i class="fa fa-check-square"></i>
      </span>
    </div>
    <neumorphic-label class="neumorphic-checkbox-slot">
      <slot></slot>
    </neumorphic-label>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Model, Ref, Prop, Watch } from 'vue-property-decorator'
import neumorphicLabel from './label.vue'
@Component({
  components: {
    'neumorphic-label': neumorphicLabel
  }
})
export default class Checkbox extends Vue {

  checked!: boolean;

  @Prop()
  label!: string | number;

  @Prop({default: false})
  disabled!: boolean;
  
  @Model('change', {type: String})
  value!: string;

  @Watch('value')
  // 此监测函数主要是为了 兄弟组件间的双向数据绑定 
  // 以防多个相同组件绑定到了同一个数据而导致数据更新不及时
  watchValueChange(newValue: string | number, oldValue: string | number) {
    this.checked = (newValue === (this.$refs.neumorphicCheckBox as HTMLInputElement).name);
    this.neumorphicCheckBoxClass['neumorphic-checkbox-checked'] = this.checked;
  }

  change(event: any) {
    this.checked = !this.checked;
    // 强制 类 更新
    this.neumorphicCheckBoxClass['neumorphic-checkbox-checked'] = this.checked;
    if(this.checked){
      this.$emit('change', event.target.value); 
    }
    else
      this.$emit('change', '');
  }

  neumorphicCheckBoxClass: Record<string, boolean> = {
    'neumorphic-checkbox': true,
    'neumorphic-checkbox-checked': this.checked,
    'neumorphic-checkbox-disabled': this.disabled
  }

  neumorphicCheckBoxInputClass: Record<string, boolean> = {
    'neumorphic-checkbox-input': true,
    'neumorphic-checkbox-input-disabled': this.disabled
  }

  mounted() {
    this.checked = (this.value === (this.$refs.neumorphicCheckBox as HTMLInputElement).name);
    this.neumorphicCheckBoxClass['neumorphic-checkbox-checked'] = this.checked;
  }
  
}
</script>
<style scoped>
.neumorphic-checkbox-wrapper {
  display: inline-block;
  margin-right: 30px;
}
.neumorphic-checkbox-content {
  display: inline-block;
}
.neumorphic-checkbox {
  box-shadow: 0.3rem 0.3rem 0.6rem hsla(215, 46%, calc(93% - 15%), 0.8), 
              calc(-1 * 0.3rem) calc(-1 * 0.3rem) 0.6rem hsla(215, 46%, calc(93% + 15%), 0.8);
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .3rem;
  overflow: hidden;
  padding: 6px;
  font-size: 1rem;
  font-weight: 700;
  color: rgb(184, 189, 195);
  transition: .3s ease;
}
.neumorphic-checkbox-input {
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
  border: none;
  cursor: pointer;
}
.neumorphic-checkbox-checked {
  box-shadow: inset 0.3rem 0.3rem 0.6rem hsla(215, 46%, calc(93% - 15%), 0.8), 
              inset calc(-1 * 0.3rem) calc(-1 * 0.3rem) 0.6rem hsla(215, 46%, calc(93% + 15%), 0.8);
  color: #66ccff;
}
.neumorphic-checkbox-slot {
  margin: 0;
  margin-left: 10px;
  display: inline-block;
}
.neumorphic-checkbox-input-disabled,
.neumorphic-checkbox-disabled {
  cursor: not-allowed;
  color: #c7c7c7 !important;
}
</style>