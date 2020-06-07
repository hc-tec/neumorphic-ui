import neumorphicLabel from './src/label.vue';

(neumorphicLabel as any).install = (Vue: any) => {
  Vue.component(neumorphicLabel.name, neumorphicLabel);
};

export default neumorphicLabel;
