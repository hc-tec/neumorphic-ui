<template>
  <div>
    <neu>
      <neuItem 
        v-for="collapseItem in collapse" 
        :key="collapseItem.title" 
        :title="collapseItem.title">
        {{ collapseItem.details }}
      </neuItem>
    </neu>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import neu from './components/neumorphic/collapse/collapse.vue'
import neuItem from './components/neumorphic/collapse/collapse-item.vue'
@Component({
  components: {
    neu,
    neuItem
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
  getFile(event: any) {
    console.log(event)
  }
}
</script>
<style scoped>
</style>