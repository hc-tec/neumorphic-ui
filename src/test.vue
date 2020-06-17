<template>
  <div>
    <!-- <div class="neumorphic-message-wrapper">
      <div class="neumorphic-message-content">
        <div class="neumorphic-message-header">lkasndoan</div>
        <div class="neumorphic-message-body">
          <p>请输入密码：</p>
          <input class="neumorphic-input" style="width: 330px;" />
        </div>
        <div class="neumorphic-message-btn">
          <button class="neumorphic-btn" style="padding: 12px 40px;color: var(--error-color)">取消</button>
          <button class="neumorphic-btn" style="padding: 12px 40px;color: var(--second-color)">确定</button>
        </div>
      </div>
    </div>
    <div class="neumorphic-message-layer"></div> -->
    <neumorphicButton @click="alert">Alert</neumorphicButton> -->
    <neumorphicButton @click="confirm">confirm</neumorphicButton>
    <neumorphicButton @click="prompt">prompt</neumorphicButton>


    <!-- <neumorphicButton circle>B</neumorphicButton>
    <neumorphicRadio></neumorphicRadio>
    <neumorphicInput 
      prefixIcon="fa fa-bitcoin"
      suffixIcon="fa fa-bitcoin"
      v-model="value" 
      :maxLength="1"
    />
      {{ value }} -->
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import neumorphicButton from '../packages/button/src/button.vue'
import neumorphicRadio from '../packages/radio/src/radio.vue'
import neumorphicInput from '../packages/input/src/input.vue'
import neumorphicCheckbox from '../packages/checkbox/src/checkbox.vue'
import neumorphicCheckboxGroup from '../packages/checkbox/src/checkboxGroup.vue'
import MessageBox from '../packages/messageBox/src/messageBox'
import Message from '../packages/message/src/message'
@Component({
  components: {
    neumorphicButton,
    neumorphicRadio,
    neumorphicInput,
    neumorphicCheckbox,
    neumorphicCheckboxGroup
  }
})
export default class Test extends Vue {
  private value?: string = '123';

  alert() {
    const MESSAGE_CONFIG = {
        title: '提示方框',
        message: `<i class="fa fa-github"></i>`,
        confirmBtnText: '<i class="fa fa-github"></i> 确认',
        callback: (action: string) => (
          Message.send({
            message: action
          })
        ),
      };
    MessageBox.alert(MESSAGE_CONFIG)
  }

  confirm() {
    const MESSAGE_CONFIG = {
      resolve: (action: string) => {
        Message.send({
          message: action
        })
      },
      reject: (action: string) => {
        Message.send({
          message: action
        })
      },
    };
    MessageBox.confirm(MESSAGE_CONFIG)
  }

  prompt() {
    const config = {
      resolve: (value: string) => {
        console.log(value)
      }
    }
    MessageBox.prompt(config)
  }
}
</script>
<style scoped>
</style>