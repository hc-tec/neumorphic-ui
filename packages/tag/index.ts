import neumorphicTag from './src/tag.vue';

(neumorphicTag as any).install = (Vue: any) => {
  Vue.component(neumorphicTag.name, neumorphicTag);
};

export default neumorphicTag;
