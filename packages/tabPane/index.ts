import neumorphicTabPane from '../tabs/src/tabPane.vue';

(neumorphicTabPane as any).install = (Vue: any) => {
  Vue.component(neumorphicTabPane.name, neumorphicTabPane);
};

export default neumorphicTabPane;
