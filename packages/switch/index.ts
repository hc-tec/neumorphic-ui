import neumorphicSwitch from './src/switch.vue';

(neumorphicSwitch as any).install = (Vue: any) => {
  Vue.component('switcher', neumorphicSwitch);
};

export default neumorphicSwitch;
