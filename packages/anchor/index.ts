
import neumorphicLink from './src/anchor.vue';

(neumorphicLink as any).install = (Vue: any) => {
  Vue.component(neumorphicLink.name, neumorphicLink);
};

export default neumorphicLink;

