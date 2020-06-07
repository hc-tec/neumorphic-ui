import neumorphicPagination from './src/pagination.vue';

(neumorphicPagination as any).install = (Vue: any) => {
  Vue.component(neumorphicPagination.name, neumorphicPagination);
};

export default neumorphicPagination;
