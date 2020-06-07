import neumorphicTableRowRow from '../table/src/tableRow.vue';

(neumorphicTableRowRow as any).install = (Vue: any) => {
  Vue.component(neumorphicTableRowRow.name, neumorphicTableRowRow);
};

export default neumorphicTableRowRow;
