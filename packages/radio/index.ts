import neumorphicRadio from './src/radio.vue';

(neumorphicRadio as any).install = (Vue: any) => {
  Vue.component(neumorphicRadio.name, neumorphicRadio);
};

export default neumorphicRadio;
