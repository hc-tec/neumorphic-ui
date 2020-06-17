import NeuAnchor from './anchor/index';
import NeuAvatar from './avatar/index';
import NeuBackToTop from './backToHead/index';
import NeuButton from './button/index';
import NeuCheckbox from './checkbox/index';
import NeuCheckboxGroup from './checkboxGroup/index';
import NeuCollapse from './collapse/index';
import NeuCollapseItem from './collapseItem/index';
import NeuDivider from './hr/index';
import NeuInput from './input/index';
import NeuLabel from './label/index';
import Message from './message/index';
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


const components: Record<string, any> = {
    NeuAnchor
  , NeuAvatar
  , NeuBackToTop
  , NeuButton
  , NeuCheckbox
  , NeuCheckboxGroup
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
  , NeuTooltip
  ,
};


const install = (Vue: any) => {
  if ((install as any).installed) { return; }

  Object.keys(components)
    .forEach((name: any) => {
      Vue.component(name, components[name]);
  });

  Vue.prototype.$message = Message;
};
import _Vue from 'vue';
install(_Vue);



export default {
    install
  , components
  , NeuAnchor
  , NeuAvatar
  , NeuBackToTop
  , NeuButton
  , NeuCheckbox
  , NeuCheckboxGroup
  , NeuCollapse
  , NeuCollapseItem
  , NeuDivider
  , NeuInput
  , NeuLabel
  , Message
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















