import neumorphicCollapseItem from '../collapse/src/collapse-item.vue';

(neumorphicCollapseItem as any).install = (Vue: any) => {
  Vue.component(neumorphicCollapseItem.name, neumorphicCollapseItem);
};

export default neumorphicCollapseItem;
