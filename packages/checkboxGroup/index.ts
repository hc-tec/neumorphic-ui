import neumorphicCheckBoxGroup from '../checkbox/src/checkboxGroup.vue';


(neumorphicCheckBoxGroup as any).install = (Vue: any) => {
  Vue.component(neumorphicCheckBoxGroup.name, neumorphicCheckBoxGroup);
};

export default neumorphicCheckBoxGroup;
