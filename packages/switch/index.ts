import neumorphicSwitch from './src/switch.vue';

(neumorphicSwitch as any).install = (Vue: any) => {
  Vue.component('neu-' + neumorphicSwitch.name, neumorphicSwitch);
};

export default neumorphicSwitch;
