import neumorphicSwitch from './src/switch.vue';

(neumorphicSwitch as any).install = (Vue: any) => {
  Vue.component(neumorphicSwitch.name, neumorphicSwitch);
};

export default neumorphicSwitch;
