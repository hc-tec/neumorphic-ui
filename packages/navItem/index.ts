import neumorphicNavItem from '../nav/src/nav-item.vue';

(neumorphicNavItem as any).install = (Vue: any) => {
  Vue.component(neumorphicNavItem.name, neumorphicNavItem);
};

export default neumorphicNavItem;
