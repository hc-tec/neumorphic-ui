import neumorphicNav from './src/nav.vue';

(neumorphicNav as any).install = (Vue: any) => {
  Vue.component(neumorphicNav.name, neumorphicNav);
};

export default neumorphicNav;
