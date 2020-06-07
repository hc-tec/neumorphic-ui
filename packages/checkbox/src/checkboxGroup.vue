<template>
  <div 
    class="neumorphic-checkbox-group"
    ref="neumorphicCheckBoxGroup">
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Model, Provide, Watch, Prop, Inject } from 'vue-property-decorator'

@Component
export default class ChechboxGroup extends Vue {

  @Provide('checkboxGroup')
  checkboxGroup = this;

  @Model('change')
  checkList!: any[];

  tmp_checkList: any[] = this.checkList;

  checkListChange(newValue: any[]) {
    this.$emit('change', newValue);
  }

  getCheckList() {
    const checkboxGroup = this.$refs.neumorphicCheckBoxGroup as HTMLDivElement;
    const children = checkboxGroup.children;
    let checkList = []
    let checked;
    if(children) {
      for(let child of children) {
        child && 
        child.children && 
        child.children[0].children && 
        (
          checked = (child.children[0].children[0] as HTMLInputElement).checked,
          checked ? (
            checkList.push(child.children[0].children[0].getAttribute('name'))
          ) : null
        )
      }
    }
    return checkList;
  }

  mounted() {
    this.tmp_checkList = this.getCheckList();
  }
  
}
</script>
<style scoped>
</style>