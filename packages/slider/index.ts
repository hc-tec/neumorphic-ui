import neumorphicSlider from './src/slider.vue';

(neumorphicSlider as any).install = (Vue: any) => {
  Vue.component(neumorphicSlider.name, neumorphicSlider);
};

export default neumorphicSlider;
