import neumorphicInput from './src/input.vue';

(neumorphicInput as any).install = (Vue: any) => {
  Vue.component(neumorphicInput.name, neumorphicInput);
};

export default neumorphicInput;
