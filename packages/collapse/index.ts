import neumorphicCollapse from './src/collapse.vue';

(neumorphicCollapse as any).install = (Vue: any)  => {
  Vue.component(neumorphicCollapse.name, neumorphicCollapse);
};

export default neumorphicCollapse;
