<template>
  <div>
    <neu>
      <neuPane :textShadow="true" title="这是一个标题">
        你
      </neuPane>

      <neuPane :textShadow="true" title="哈？">
        好
      </neuPane>

      <neuPane :textShadow="true" title="什么">
        我是
      </neuPane>
    </neu>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import neu from './components/neumorphic/tabs/tabs.vue'
import neuPane from './components/neumorphic/tabs/tabPane.vue'
import { MessageBox } from './components/neumorphic/messageBox/messageBox';
import { MessageBoxConfig } from './components/neumorphic/messageBox/messageBoxConfig';

@Component({
  components: {
    neu,
    neuPane
  }
})
export default class Single_test extends Vue {
  collapse: Array<Record<string, string>> = [
    {
      title: '姓名',
      details: 'xxxxxx'
    },
    {
      title: '兴趣',
      details: 'xxxxxx'
    },
    {
      title: '姓名x',
      details: 'xxxxxx'
    }
  ]

  // 需要为全局变量
  messageBox = new MessageBox();

  fits: Array<string> =  ['fill', 'contain', 'cover', 'none', 'scale-down'];

  generateMessage() {
    const config: MessageBoxConfig = {
      message: 'Generate a message tip',
      type: 'info',
      styleTimeout: 2000,
      removeTimeout: 2500
    }
    
    this.messageBox.setMsg(config);
  }

  closeTag(tag: any) {
    console.log(tag);
  }
}
</script>
<style scoped>
</style>