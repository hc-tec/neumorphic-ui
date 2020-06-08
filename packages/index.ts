import NeuAnchor from './anchor/index';
import NeuAvatar from './avatar/index';
import NeuBackTOHead from './backToHead/index';
import NeuButton from './button/index';
import NeuCheckBox from './checkbox/index';
import NeuCheckBoxGroup from './checkboxGroup/index';
import NeuCollapse from './collapse/index';
import NeuCollapseItem from './collapseItem/index';
import NeuDivider from './hr/index';
import NeuInput from './input/index';
import NeuLabel from './label/index';
import MessageBox from './messageBox/index';
import NeuNavMenu from './nav/index';
import NeuNavMenuItem from './navItem/index';
import NeuOption from './option/index';
import NeuPagination from './pagination/index';
import NeuRadio from './radio/index';
import NeuSelect from './select/index';
import NeuSlider from './slider/index';
import NeuSwitch from './switch/index';
import NeuTable from './table/index';
import NeuTableRow from './tableRow/index';
import NeuTabs from './tabs/index';
import NeuTabPane from './tabPane/index';
import NeuTag from './tag/index';
import NeuTooltip from './tooltip/index';

import './theme-chalk/index.css';
import './utils/ts/throttle';
import './utils/config/neumorphic-type';


const components = [
    NeuAnchor
  , NeuAvatar
  , NeuBackTOHead
  , NeuButton
  , NeuCheckBox
  , NeuCheckBoxGroup
  , NeuCollapse
  , NeuCollapseItem
  , NeuDivider
  , NeuInput
  , NeuLabel
  , NeuNavMenu
  , NeuNavMenuItem
  , NeuOption
  , NeuPagination
  , NeuRadio
  , NeuSelect
  , NeuSlider
  , NeuSwitch
  , NeuTable
  , NeuTableRow
  , NeuTabs
  , NeuTabPane
  , NeuTag
  , NeuTooltip,
];


const install = (Vue: any) => {
  if ((install as any).installed) { return; }

  components.forEach((component) => {
    Vue.component('neu-' + component.name.toLowerCase(), component);
  });

  Vue.prototype.$message = MessageBox;
};


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


export default {
    install
  , NeuAnchor
  , NeuAvatar
  , NeuBackTOHead
  , NeuButton
  , NeuCheckBox
  , NeuCheckBoxGroup
  , NeuCollapse
  , NeuCollapseItem
  , NeuDivider
  , NeuInput
  , NeuLabel
  , MessageBox
  , NeuNavMenu
  , NeuNavMenuItem
  , NeuOption
  , NeuPagination
  , NeuRadio
  , NeuSelect
  , NeuSlider
  , NeuSwitch
  , NeuTable
  , NeuTableRow
  , NeuTabs
  , NeuTabPane
  , NeuTag
  , NeuTooltip,
};















