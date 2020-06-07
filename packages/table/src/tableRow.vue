<template>
  <tr 
    ref="neumorphicTableRow"
    class="neumorphic-table-row"
    :label="label">
    <td 
      v-for="(v, k) in tableRowData" 
      :key="k"
      v-html="v">
    </td>
  </tr>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Inject } from 'vue-property-decorator'

@Component
export default class Tablerow extends Vue {

  @Prop()
  tableRowData?: Record<string, string>;

  @Prop()
  label?: string;

}
</script>
<style scoped>
</style>