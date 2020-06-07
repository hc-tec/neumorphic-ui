import neumorphicDivider from './src/hr.vue';

(neumorphicDivider as any).install = (Vue: any) => {
  Vue.component(neumorphicDivider.name, neumorphicDivider);
};

export default neumorphicDivider;
