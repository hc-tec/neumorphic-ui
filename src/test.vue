<template>
  <div id="all">
    <!-- <backToTop />
    <checkboxgroup>
      <checkbox></checkbox>
    </checkboxgroup> -->
    <selecter v-model="selectValue">
      <optioner
        v-for="option in optionList"
        :key="option.value"
        :value="option.value">
        {{ option.label }}
      </optioner>
    </selecter>

    <tag>标签标签</tag>

  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import backToTop from '../packages/backToHead/src/backToHead.vue'
import checkbox from '../packages/checkbox/src/checkbox.vue'
import checkboxgroup from '../packages/checkbox/src/checkboxGroup.vue'
import selecter from '../packages/select/src/select.vue'
import optioner from '../packages/select/src/option.vue'
import switcher from '../packages/switch/src/switch.vue'
import radio  from '../packages/radio/src/radio.vue'
import tag from '../packages/tag/src/tag.vue'
@Component({
  components: {
    backToTop,
    checkboxgroup,
    checkbox,
    selecter,
    optioner,
    switcher,
    radio,
    tag
  }
})
export default class Test extends Vue {

  private optionList: Record<string, string>[] = [
    {
      'label': '第一个',
      'value': '1'
    },
    {
      'label': '第二个',
      'value': '2'
    },
    {
      'label': '第三个',
      'value': '3'
    },
  ]

  selectValue: string = '2';
  
}
</script>
<style scoped>
#all {
  width: 100%;
  text-align: center;

}
#all > * {
  margin-bottom: 20px;
}
</style>