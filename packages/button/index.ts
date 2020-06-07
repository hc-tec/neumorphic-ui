import neumorphicButton from './src/button.vue';

(neumorphicButton as any).install = (Vue: any) => {
  Vue.component(neumorphicButton.name, neumorphicButton);
};

export default neumorphicButton;
