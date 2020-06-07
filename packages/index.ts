import Anchor from './anchor/index';
import Avatar from './avatar/index';
import BackToHead from './backToHead/index';
import Button from './button/index';
import CheckBox from './checkbox/index';
import CheckBoxGroup from './checkboxGroup/index';
import Collapse from './collapse/index';
import CollapseItem from './collapseItem/index';
import Divider from './hr/index';
import Input from './input/index';
import Label from './label/index';
import MessageBox from './messageBox/index';
import NavMenu from './nav/index';
import NavMenuItem from './navItem/index';
import Option from './option/index';
import Pagination from './pagination/index';
import Radio from './radio/index';
import Select from './select/index';
import Slider from './slider/index';
import Switch from './switch/index';
import Table from './table/index';
import TableRow from './tableRow/index';
import Tabs from './tabs/index';
import TabPane from './tabPane/index';
import Tag from './tag/index';
import Tooltip from './tooltip/index';

const components = [
    Anchor
  , Avatar
  , BackToHead
  , Button
  , CheckBox
  , CheckBoxGroup
  , Collapse
  , CollapseItem
  , Divider
  , Input
  , Label
  , NavMenu
  , NavMenuItem
  , Option
  , Pagination
  , Radio
  , Select
  , Slider
  , Switch
  , Table
  , TableRow
  , Tabs
  , TabPane
  , Tag
  , Tooltip,
];


const install = (Vue: any) => {
  if ((install as any).installed) { return; }

  components.forEach((component) => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$message = MessageBox;
};


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export default {
    install
  , Anchor
  , Avatar
  , BackToHead
  , Button
  , CheckBox
  , CheckBoxGroup
  , Collapse
  , CollapseItem
  , Divider
  , Input
  , Label
  , MessageBox
  , NavMenu
  , NavMenuItem
  , Option
  , Pagination
  , Radio
  , Select
  , Slider
  , Switch
  , Table
  , TableRow
  , Tabs
  , TabPane
  , Tag
  , Tooltip,
};















