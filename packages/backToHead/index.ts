import neumorphicBackToHead from './src/backToHead.vue';

(neumorphicBackToHead as any).install = (Vue: any)  => {
  Vue.component(neumorphicBackToHead.name, neumorphicBackToHead);
};

export default neumorphicBackToHead;
