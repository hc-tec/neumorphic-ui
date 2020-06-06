<template>
  <div>
    <!-- <neu>
      <neuPane :textShadow="true" title="这是一个标题">
        你
      </neuPane>

      <neuPane :textShadow="true" title="哈？">
        好
      </neuPane>

      <neuPane :textShadow="true" title="什么">
        我是
      </neuPane>
    </neu> -->

    <!-- <pagi
      :shadow="true"
      :total="51"
      v-model="currentPage"
      @page-change="pageChange($event)">
    </pagi> -->

    <tooltip content="这是一段提示文字">
      <slider style="width:500px"></slider>
    </tooltip>
  
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import neu from './components/neumorphic/tabs/tabs.vue'
import neuPane from './components/neumorphic/tabs/tabPane.vue'
import MessageBox from './components/neumorphic/messageBox/messageBox';
// import { MessageBoxConfig } from './components/neumorphic/messageBox/messageBoxConfig';
import pagi from './components/neumorphic/pagination/pagination.vue'
import btn from './components/neumorphic/button/button.vue'
import slider from './components/neumorphic/slider/slider.vue'
import tooltip from './components/neumorphic/tooltip/tooltip.vue'

@Component({
  components: {
    neu,
    neuPane,
    pagi,
    btn,
    slider,
    tooltip
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

  currentPage: number = 5;
  

  fits: Array<string> =  ['fill', 'contain', 'cover', 'none', 'scale-down'];

  mounted(){
    // setInterval(() => {
    //   this.generateMessage()
    // }, 1000)
  }
  
  generateMessage() {
    const config = {
      message: 'Generate a message tip',
      type: 'info',
      styleTimeout: 2000,
      removeTimeout: 2500
    }
    
    MessageBox.send(config);
  }

  closeTag(tag: any) {
    console.log(tag);
  }

  pageChange(index: number) {
    console.log(index);
  }
}
</script>
<style scoped>
</style>