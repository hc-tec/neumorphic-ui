import neumorphicAvatar from './src/avatar.vue';

(neumorphicAvatar as any).install = (Vue: any) => {
  Vue.component(neumorphicAvatar.name, neumorphicAvatar);
};

export default neumorphicAvatar;



