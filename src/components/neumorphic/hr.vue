<template>
  <hr class="neumorphic-hr">
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Hr extends Vue {

}
</script>
<style scoped>
.neumorphic-hr {
  width: 50%;
  height: 7px;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 0 transparent, 0 0 transparent, inset 3px 3px 5px rgba(0, 0, 0, 0.1), inset -3px -3px 5px white;
  background: #f8f9fb;
  outline: none;
  box-sizing: border-box;
}
</style>