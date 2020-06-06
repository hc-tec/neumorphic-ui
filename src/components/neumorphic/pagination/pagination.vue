<template>
  <div class="neumorphic-pagination">
    <neumorphic-button 
      :size="size"
      @click="$emit('change', lastActiveButtonIndex)">
      <i class="fa fa-angle-left"></i>
    </neumorphic-button>
    <ul ref="neumorphicPaginationNumberList" class="neumorphic-pagination-number-list">
      <li v-for="index in pageCount" :key="index">
        <neumorphic-button 
          :size="size" 
          @click="$emit('change', index)"
          :style="{
              'color': index === lastActiveButtonIndex+1 ? '#66ccff' : '',
              'box-shadow': shadow && index === lastActiveButtonIndex+1 ? `inset 0.3rem 0.3rem 0.6rem hsla(215, 46%, calc(93% - 15%), 0.8), 
                                                     inset calc(-1 * 0.3rem) calc(-1 * 0.3rem) 0.6rem hsla(215, 46%, calc(93% + 15%), 0.8)` : ''
          }">
          {{ index }}
        </neumorphic-button>
      </li>
    </ul>
    <neumorphic-button 
      :size="size" 
      @click="$emit('change', lastActiveButtonIndex+2)">
      <i class="fa fa-angle-right"></i>
    </neumorphic-button>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator'
import { ButtonSizeType } from '../utils/config/neumorphic-type'
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

  @Prop({type: Boolean, default: true})
  // 选中的按钮是否显示阴影
  shadow!: boolean;

  @Prop({default: 'mini'})
  // 分页按钮大小 | 分页总样式大小
  size!: ButtonSizeType;

  // 计算出的总页数
  pageCount: number = Math.ceil(+this.total / +this.pageSize);

  @Model('change', {default: 1})
  currentPage!: number;
  
  lastActiveButtonIndex: number = this.currentPage - 1;

  @Watch('currentPage')
  pageChange2(newValue: number) {
    // 数据双向绑定
    this.pageChange(newValue-1)
  }

  pageChange(index: number) {
    if(index < 0 || index > this.pageCount-1) {
      return ;
    }
    const numbersList = (this.$refs.neumorphicPaginationNumberList as HTMLUListElement).children;
    (numbersList[this.lastActiveButtonIndex].children[0] as any).style.color = '#868b98';
    this.shadow && ((numbersList[this.lastActiveButtonIndex].children[0] as any).style.boxShadow = `0.3rem 0.3rem 0.6rem hsla(215, 46%, calc(93% - 15%), 0.8), 
                                                                                               calc(-1 * 0.3rem) calc(-1 * 0.3rem) 0.6rem hsla(215, 46%, calc(93% + 15%), 0.8)`);
    (numbersList[index].children[0] as any).style.color = `#66ccff`;
    this.shadow && ((numbersList[index].children[0] as any).style.boxShadow = `inset 0.3rem 0.3rem 0.6rem hsla(215, 46%, calc(93% - 15%), 0.8), 
                                                                               inset calc(-1 * 0.3rem) calc(-1 * 0.3rem) 0.6rem hsla(215, 46%, calc(93% + 15%), 0.8)`);
    this.lastActiveButtonIndex = index;
    
    this.$emit('change', index+1);

    this.$emit('page-change', index+1);

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
</style>