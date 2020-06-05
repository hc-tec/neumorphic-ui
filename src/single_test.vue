<template>
  <div>
    

    <neumorphicBtn @click="generateMessage">
      Generate a message tip
    </neumorphicBtn>

  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
// import neu from './components/neumorphic/messageBox/messageBox.vue'
import { MessageBox } from './components/neumorphic/messageBox/messageBox';
import { MessageBoxConfig } from './components/neumorphic/messageBox/messageBoxConfig';
import neumorphicBtn from './components/neumorphic/button/button.vue';

@Component({
  components: {
    
    neumorphicBtn
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