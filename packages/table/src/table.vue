<template>
  <table 
    cellpadding="0" cellspacing="0" border="0"
    ref="neumorphicTable"
    class="neumorphic-table"
    >
    <thead>
      <tr>
        <th v-for="head in tableHead" :key="head" v-html="head">
        </th>
      </tr>
    </thead>
    <tbody ref="neumorphicTableBody">
      <slot></slot>
    </tbody>
  </table>
</template>
<script lang='ts'>
import { Component, Vue, Provide, Prop } from 'vue-property-decorator'
@Component({
})
export default class Table extends Vue {

  @Prop()
  tableHead?: string[];

}
</script>
<style>
.neumorphic-table {
  color: var(--primary-color);
  border-radius: var(--small-radius);
  background-color: var(--primary-bgcolor);
  box-shadow: var(--shadow);
  border-collapse: collapse;
  text-align: left;
  font-size: var(--primary-font-size);
}
.neumorphic-table thead {
  border-bottom: 1px solid #ffffff94;
}
.neumorphic-table tr {
  transition: box-shadow .2s;
  border-radius: var(--small-radius);
}



.neumorphic-table tr:hover {
  box-shadow: var(--inner-shadow);
}
.neumorphic-table th,
.neumorphic-table td {
  padding: .9rem .3rem .9rem 1rem;
}

.neumorphic-table tr td:first-child,
.neumorphic-table tr th:first-child {
  padding-left: 2rem;
}
.neumorphic-table tr td:last-child,
.neumorphic-table tr th:last-child {
  padding-right: 2rem;
}
</style>