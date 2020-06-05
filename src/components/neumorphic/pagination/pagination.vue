<template>
  <div class="neumorphic-pagination">
    <neumorphic-button 
      size="mini"
      @click="pageChange(lastActiveButtonIndex-1, lastActiveButtonIndex)">
      <i class="fa fa-angle-left"></i>
    </neumorphic-button>
    <ul ref="neumorphicPaginationNumberList" class="neumorphic-pagination-number-list">
      <li v-for="index in pageCount" :key="index">
        <neumorphic-button 
          size="mini" 
          @click="pageChange(index-1, lastActiveButtonIndex)"
          :style="{'color': index === 1 ? '#66ccff' : ''}">
          {{ index }}
        </neumorphic-button>
      </li>
    </ul>
    <neumorphic-button 
      size="mini" 
      @click="pageChange(lastActiveButtonIndex+1, lastActiveButtonIndex)">
      <i class="fa fa-angle-right"></i>
    </neumorphic-button>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import neumorphicButton from '../button/button.vue'
@Component({
  components: {
    'neumorphic-button': neumorphicButton
  }
})
export default class Pagination extends Vue {

  @Prop({required: true})
  // 总数
  total!: number | string;

  @Prop({default: 10})
  // 每页多少条
  pageSize!: number | string;

  // 计算出的总页数
  pageCount: number = Math.ceil(+this.total / +this.pageSize);
  
  lastActiveButtonIndex: number = 0;

  pageChange(index: number, lastActiveButtonIndex: number) {
    if(index < 0 || index > this.pageCount-1) {
      return ;
    }
    const numbersList = (this.$refs.neumorphicPaginationNumberList as HTMLUListElement).children;
    (numbersList[lastActiveButtonIndex].children[0] as any).style.color = '#868b98';
    (numbersList[index].children[0] as any).style.color = `#66ccff`;
    this.lastActiveButtonIndex = index;

    this.$emit('page-change', index+1);

  }

  mounted() {
    this.$emit('page-change', 1);
  }
  
}
</script>
<style scoped>
.neumorphic-pagination {
  display: flex;
  flex-direction: row;
}
.neumorphic-pagination > * {
  margin: 0 5px;
}
.neumorphic-pagination-number-list {
  margin: 0;
  padding: 0;
  display: flex;
}
.neumorphic-pagination-number-list > * {
  margin: 0 5px;
}
.active {
  color: var(--second-color);
}
</style>