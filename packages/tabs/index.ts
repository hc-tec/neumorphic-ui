import neumorphicTabs from './src/tabs.vue';

(neumorphicTabs as any).install = (Vue: any) => {
  Vue.component(neumorphicTabs.name, neumorphicTabs);
};

export default neumorphicTabs;
