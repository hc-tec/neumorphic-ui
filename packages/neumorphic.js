import neuAnchor from './anchor/src/anchor.vue';
import neuButton from './button/src/button.vue';
import neuAvatar from './avatar/src/avatar.vue';
import neuBackToTop from './backToHead/src/backToHead.vue';
import neuCheckbox from './checkbox/src/checkbox.vue';
import neuCheckboxGroup from './checkbox/src/checkboxGroup.vue';
import neuCollapse from './collapse/src/collapse.vue';
import neuCollapseItem from './collapse/src/collapse-item.vue';
import neuDivider from './hr/src/hr.vue';
import neuInput from './input/src/input.vue';
import neuLabel from './label/src/label.vue';
import neuMessageBox from './messageBox/src/messageBox.ts';
import neuNav from './nav/src/nav.vue';
import neuNavItem from './nav/src/nav-item.vue';
import neuOption from './select/src/option.vue';
import neuSelect from './select/src/select.vue';
import neuPagination from './pagination/src/pagination.vue';
import neuRadio from './radio/src/radio.vue';
import neuSlider from './slider/src/slider.vue';
import neuSwitch from './switch/src/switch.vue';
import neuTable from './table/src/table.vue';
import neuTableRow from './table/src/tableRow.vue';
import neuTabPane from './tabs/src/tabPane.vue';
import neuTabs from './tabs/src/tabs.vue';
import neuTag from './tag/src/tag.vue';
import neuTooltip from './tooltip/src/tooltip.vue';
import Vue from 'vue';


const toLowerLine = (str) => {
	var temp = str.replace(/[A-Z]/g, function (match) {	
		return "-" + match.toLowerCase();
  	});
  	// if(temp.slice(0,1) === '_'){ //如果首字母是大写，执行replace时会多一个_，这里需要去掉
  	// 	temp = temp.slice(1);
  	// }
	return temp;
}

const neuComponents = [
    neuAnchor
  , neuButton
  , neuAvatar
  , neuBackToTop
  , neuCheckbox
  , neuCheckboxGroup
  , neuCollapse
  , neuCollapseItem
  , neuDivider
  , neuInput
  , neuLabel
  , neuNav
  , neuNavItem
  , neuOption
  , neuSelect
  , neuPagination
  , neuRadio
  , neuSlider
  , neuSwitch
  , neuTable
  , neuTableRow
  , neuTabPane
  , neuTabs
  , neuTag
  , neuTooltip
]
/*
neu-anchor
neu-button
neu-avatar
neu-back-to-top
neu-checkbox
neu-checkbox-group
neu-collapse
neu-collapse-item
neu-divider
neu-input
neu-label
neu-nav
neu-nav-item
neu-option
neu-select
neu-pagination
neu-radio
neu-slider
neu-switcher
neu-table
neu-tablerow
neu-tab-pane
neu-tabs
neu-tag
neu-tooltip

*/

export default neuComponents

neuComponents.map(com => {
  const name = 'neu'+toLowerLine(com.name);
  Vue.component(name, com);
})
