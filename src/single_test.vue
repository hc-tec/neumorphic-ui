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

    <!-- <tooltip content="这是一段提示文字">
      <slider style="width:500px"></slider>
    </tooltip> -->
    
    <!-- <neu-table :tableHead="tableHead">
      <neu-table-row 
        v-for="rowData in tableData" 
        :key="rowData ? rowData[Object.keys(rowData)[0]] : Math.random(1, 100)"
        :tableRowData="rowData">
      </neu-table-row>
    </neu-table> -->

    <neu-nav 
      mode="vertical"
      :router="false"
      >
      <template slot="title">
        <h3>API 目录</h3>
      </template>
      <neumorphicNavItem 
        link="http://baidu.com" 
        icon="fa fa-bitcoin"
        color="red">
        Hello
      </neumorphicNavItem>
      <neumorphicNavItem color="green" link="/123" icon="fa fa-bitcoin">
      </neumorphicNavItem>
      <neumorphicNavItem color="#000" link="/123" icon="fa fa-bitcoin">
      </neumorphicNavItem>
    </neu-nav>

    <checkboxGroup v-model="check">
      <checkbox name="111">xxx</checkbox>
      <checkbox name="222">xxx</checkbox>
    </checkboxGroup>

    {{ check }}

  
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
import _table from './components/neumorphic/table/table.vue'
import _tableColumn from './components/neumorphic/table/tableRow.vue'
import neuNav from './components/neumorphic/nav/nav.vue'
import neumorphicNavItem from './components/neumorphic/nav/nav-item.vue'
import checkbox from './components/neumorphic/checkbox/checkbox.vue'
import checkboxGroup from './components/neumorphic/checkbox/chechboxGroup.vue'
@Component({
  components: {
    checkbox,
    checkboxGroup,
    'neu-nav': neuNav,
    neu,
    neuPane,
    pagi,
    btn,
    slider,
    tooltip,
    'neu-table': _table,
    'neu-table-row': _tableColumn,
    neumorphicNavItem
  }
})
export default class Single_test extends Vue {

  check: string[] = ['222', '111'];

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

  tableHead: string[] = ['product', 'price', '备注'];

  tableData: Array<Record<string, string>> = [
    {
      'product': 'Quantum Tantrum',
      'price': '$35.99',
      'www': 'ewaishuom'
    },
    {
      'product': 'Selyodochka	',
      'price': '$9.99',
      'www': ''
    },
    {
      'product': 'Walkie-talkie',
      'price': '$13.59',
      'www': ''
    }
  ];

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