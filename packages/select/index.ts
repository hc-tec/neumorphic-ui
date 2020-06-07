import neumorphicSelect from './src/select.vue';

(neumorphicSelect as any).install = (Vue: any) => {
  Vue.component(neumorphicSelect.name, neumorphicSelect);
};

export default neumorphicSelect;
