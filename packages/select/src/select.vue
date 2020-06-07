<template>
  <div class="neumorphic-select-wrapper">

    <neumorphic-label>{{ label }}</neumorphic-label>

    <div class="neumorphic-select-content">
      <span 
        @click="activate($event)"
        ref="neumorphicSelectArrow"
        class="neumorphic-select-arrow">
        <svg id="lnr-chevron-right" viewBox="0 0 1024 1024"><title>chevron-right</title><path class="path1" d="M256 1024c-6.552 0-13.102-2.499-18.101-7.499-9.998-9.997-9.998-26.206 0-36.203l442.698-442.698-442.698-442.699c-9.998-9.997-9.998-26.206 0-36.203s26.206-9.998 36.203 0l460.8 460.8c9.998 9.997 9.998 26.206 0 36.203l-460.8 460.8c-5 5-11.55 7.499-18.102 7.499z"></path></svg>
        <!-- › -->
      </span>
      <input 
        class="neumorphic-select neumorphic-select-input" 
        readonly
        @click="activate($event)"
        @blur="activate($event)"
        :placeholder="placeholder"
        :disabled="disabled"
        v-model="tmp_value.label">
      <ul
        ref="neumorphicSelectList"
        class="neumorphic-select neumorphic-select-list">
        <neumorphic-option 
          v-for="option in optionList"
          v-model="tmp_value" 
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled">
          {{ option.label }}
        </neumorphic-option>
      </ul>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Watch, Model } from 'vue-property-decorator';
import neumorphicOption from './option.vue';
import neumorphicLabel from '../../label/src/label.vue';
@Component({
  components: {
    'neumorphic-option': neumorphicOption,
    'neumorphic-label': neumorphicLabel
  }
})
export default class Select extends Vue {

  arrow_back: boolean = true;

  @Prop()
  label?: string;

  @Prop()
  optionList?: Array<Record<string, any>>;

  @Prop({type: String, default: '请选择'})
  placeholder!: string;

  @Prop({default: false})
  disabled!: boolean;

  @Model('change')
  value!: string | number | boolean;

  tmp_value: Record<string, any> = {
    value: this.value,
    label: '',
  }

  @Watch('value')
  watchValueChange(newValue: string | number | boolean) {
    this.tmp_value.value = newValue;
  }

  activate(event: any) {
    let arrow = this.$refs.neumorphicSelectArrow as HTMLSpanElement;
    let list = this.$refs.neumorphicSelectList as HTMLUListElement;
    const type = event.type;
    if(type === 'click' && this.arrow_back) {
      arrow.style.transform = "rotate(90deg) translate(0, -50%)";
      this.optionListStyleChange(list, true);
      this.arrow_back = false;
    } else {
      arrow.style.transform = "rotate(0deg) translateY(-50%)";
      // 给予一定缓冲时间，留给 li 响应 click 事件
      setTimeout(() => {
        this.optionListStyleChange(list, false);
        this.$emit('change', this.tmp_value.value);
      }, 200)
      this.arrow_back = true;
    }
  }

  optionListStyleChange(list: HTMLUListElement, extent: boolean) {
    if(extent) {
      list.style.opacity = '1';
      list.style.height = 'auto';
      list.style.padding = '10px 0';
    } else {
      list.style.opacity = '0';
      list.style.height = '0';
      list.style.padding = '0';
    }
  }


}
</script>
<style scoped>
.neumorphic-select-wrapper {
  display: inline-flex;
  align-items: center;
}
.neumorphic-select-content {
  position: relative;
  display: inline-block;
  margin-right: 30px;
  /* overflow: hidden; */
}

.neumorphic-select {
  list-style-type: none;
  cursor: pointer;
  border: 0;
  color: var(--option-color);
  font-weight: normal;
  padding: 10px 1em;
  padding-right: 3em;
  line-height: 1.25em;
  font-size: var(--bigger-font-size);
  box-shadow: var(--shadow);
  outline: none;
  box-sizing: border-box;
  border-radius: var(--primary-radius);
  position: relative;
  transition: box-shadow 0.2s;
}
.neumorphic-select-input {
  background-color: var(--primary-bgcolor);
  min-width: 130px;
  max-width: 240px;
}
.neumorphic-select-input:disabled {
  background-color: var(--select-disabled-bgcolor);
  cursor: not-allowed;
}
.neumorphic-select-arrow {
  color: var(--unvary-elem-color);
  position: absolute;
  top: 45%;
  right: 10px;
  transform: translateY(-50%);
  transition: all .3s;
  cursor: pointer;
  font-size: 1.4em;
  width: 15px;
  transform-origin: 0 0;
}
.neumorphic-select-list {
  position: absolute;
  padding: 0;
  margin: 10px 0 0 0;
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: all .3s ease-in-out;
  min-width: 200px;
}
</style>