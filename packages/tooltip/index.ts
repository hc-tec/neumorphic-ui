import neumorphicTooltip from './src/tooltip.vue';

(neumorphicTooltip as any).install = (Vue: any) => {
  Vue.component(neumorphicTooltip.name, neumorphicTooltip);
};

export default neumorphicTooltip;
