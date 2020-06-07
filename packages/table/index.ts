import neumorphicTable from './src/table.vue';

(neumorphicTable as any).install = (Vue: any) => {
  Vue.component(neumorphicTable.name, neumorphicTable);
};

export default neumorphicTable;
