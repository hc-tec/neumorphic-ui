import neumorphicCheckBox from './src/checkbox.vue';

(neumorphicCheckBox as any).install = (Vue: any) => {
  Vue.component(neumorphicCheckBox.name, neumorphicCheckBox);
};
export default neumorphicCheckBox;

