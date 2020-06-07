import neumorphicOption from '../select/src/option.vue';

(neumorphicOption as any).install = (Vue: any) => {
  Vue.component(neumorphicOption.name, neumorphicOption);
};

export default neumorphicOption;
