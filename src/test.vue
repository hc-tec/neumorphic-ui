<template>
  <div id="all">

    <neumorphicButton>
      按钮
    </neumorphicButton>

    <neumorphicCheckBox>
      多选按钮
    </neumorphicCheckBox>

    <neumorphicCheckBox>
    </neumorphicCheckBox>

    <neumorphicCheckBox>
    </neumorphicCheckBox>

    <neumorphicRadio >单选框框</neumorphicRadio>

    <neumorphicRadio></neumorphicRadio>

    <neumorphicHr></neumorphicHr>

    <neumorphicSlider
      v-model="value">
    </neumorphicSlider>

    <neumorphicInput label="输入框框">
      
    </neumorphicInput>

    <neumorphicSelect label="选择器" :optionList="optionList"></neumorphicSelect>

    <neumorphicSwitch :disabled="true"></neumorphicSwitch>

    <neumorphicSwitch></neumorphicSwitch>

    
    <!-- <neu
      v-model="value"
      label="2"
      :disabled="false">
      试验
    </neu> -->
    
    
    <!-- {{ value }} -->
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import neumorphicSlider from './components/neumorphic/slider.vue'
import neumorphicButton from './components/neumorphic/button.vue'
import neumorphicCheckBox from './components/neumorphic/checkbox.vue'
import neumorphicHr from './components/neumorphic/hr.vue'
import neumorphicInput from './components/neumorphic/input.vue'
import neumorphicSelect from './components/neumorphic/select.vue'
import neumorphicRadio from './components/neumorphic/radio.vue'
import neumorphicSwitch from './components/neumorphic/switch.vue'
@Component({
  components: {
    neumorphicSlider,
    neumorphicButton,
    neumorphicCheckBox,
    neumorphicHr,
    neumorphicInput,
    neumorphicSelect,
    neumorphicRadio,
    neumorphicSwitch,
  }
})
export default class Test extends Vue {
  value: number = 10;
  value2: string = '231';
  optionList: Array<Record<string, any>> = [
    {
      label: '这是第一个',
      value: '1',
      disabled: true
    },
    {
      label: '这是第二个',
      value: '2',
      disabled: true
    },
    {
      label: '这是第三个',
      value: '3'
    },
    {
      label: '这是第四个',
      value: '4'
    }
  ]
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