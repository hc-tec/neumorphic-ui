<template>
    <div class="neumorphic-checkbox-content">
      <span
        :class="neumorphicCheckBoxClass">
        <input 
          ref="neumorphicCheckBox"
          :class="neumorphicCheckBoxInputClass"
          type="chechbox"
          :name="name"
          :disabled="disabled"
          @click="change($event)">
        <i class="fa fa-check-square"></i>
      </span>
      <neumorphic-label class="neumorphic-checkbox-slot">
        <slot></slot>
      </neumorphic-label>
    </div>
    
</template>
<script lang='ts'>
import { Component, Vue, Model, Ref, Prop, Watch, Inject, Provide } from 'vue-property-decorator'
import neumorphicLabel from '../label/label.vue'
@Component({
  components: {
    'neumorphic-label': neumorphicLabel
  }
})
export default class Checkbox extends Vue {

  neumorphicCheckBox!: HTMLInputElement;

  @Inject('checkboxGroup')
  checkboxGroup!: any;

  checked!: boolean;

  @Prop()
  name!: string | number;

  @Prop({default: false})
  disabled!: boolean;
  
  // @Model('change')
  // value!: string | boolean;

  // @Watch('value')
  // // 此监测函数主要是为了 兄弟组件间的双向数据绑定 
  // // 以防多个相同组件绑定到了同一个数据而导致数据更新不及时
  // watchValueChange(newValue: string | number, oldValue: string | number) {
  //   (this.checkboxGroup.checkList as any[]).indexOf(this.neumorphicCheckBox.name) !== -1 &&
  //   (this.neumorphicCheckBox.checked = true)
  //   this.neumorphicCheckBoxClass['neumorphic-checkbox-checked'] = this.neumorphicCheckBox.checked;
  // }

  change(event: any) {
    this.neumorphicCheckBox.checked = ! this.neumorphicCheckBox.checked;
    this.checked = this.neumorphicCheckBox.checked;
    // 强制 类 更新
    this.neumorphicCheckBoxClass['neumorphic-checkbox-checked'] = this.checked;
    
    this.checkboxGroup.tmp_checkList = this.checkboxGroup.getCheckList();
    this.checkboxGroup.checkListChange(this.checkboxGroup.tmp_checkList);
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
    this.neumorphicCheckBox = this.$refs.neumorphicCheckBox as HTMLInputElement;
    (this.checkboxGroup.checkList as any[]).indexOf(this.neumorphicCheckBox.name) !== -1 &&
    (this.neumorphicCheckBox.checked = true)
    this.neumorphicCheckBoxClass['neumorphic-checkbox-checked'] = this.neumorphicCheckBox.checked;
  }
  
}
</script>
<style scoped>
.neumorphic-checkbox-content {
  display: inline-block;
  margin-right: 30px;
}
.neumorphic-checkbox {
  box-shadow: var(--shadow);
  cursor: pointer;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--small-radius);
  overflow: hidden;
  padding: 6px;
  font-size: var(--primary-font-size);
  font-weight: 700;
  color: var(--primary-color);
  transition: .3s ease;
}
.neumorphic-checkbox:hover {
  color: var(--second-color);
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
  box-shadow: var(--inner-shadow);
  color: var(--second-color);
}
.neumorphic-checkbox-slot {
  margin: 0;
  margin-left: 10px;
  display: inline-block;
}
.neumorphic-checkbox-input-disabled,
.neumorphic-checkbox-disabled {
  cursor: not-allowed !important;
  color: var(--disabled-color);
}
</style>