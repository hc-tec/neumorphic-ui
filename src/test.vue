<template>
  <div>
    <neu
      v-model="value"
      label="1"
      :disabled="false">
      试验
    </neu>

    <neu
      v-model="value"
      label="2"
      :disabled="false">
      试验
    </neu>
    
    
    {{ value }}
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import neu from './components/neumorphic/radio.vue'
@Component({
  components: {
    neu
  }
})
export default class Test extends Vue {
  value: string = '';
  value2: string = '231';
}
</script>
<style scoped>
</style>