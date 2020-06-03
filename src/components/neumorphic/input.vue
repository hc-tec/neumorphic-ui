<template>
  <div class="neumorphic-input-content">
    <neumorphic-label v-if="label">
      {{ label }}
    </neumorphic-label>
    <input
      :class="neumorphicInputClass"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)">
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Model } from 'vue-property-decorator'
import neumorphicLabel from './label.vue'
@Component({
  components: {
    'neumorphic-label': neumorphicLabel
  }
})
export default class NeumorphicInput extends Vue {

  @Prop() 
  label?: string;

  @Prop() 
  placeholder?: string;

  @Prop({ type: String, default: 'text' }) 
  type?: string;

  @Prop({type: Boolean, default: false})
  disabled!: boolean;

  @Model('input', {type: String})
  value!: string | number;

  neumorphicInputClass: object = {
    "neumorphic-input": true,
    "neumorphic-disabled": this.disabled,
  }

}
</script>
<style lang="scss" scoped>
.neumorphic-input-content {
  // display: inline-block;
}
.neumorphic-input {
  font-family: 'Poppins', sans-serif;
  display: inline-block;
  border-radius: 10px;
  border: 3px solid rgb(228,235,245);
  margin-bottom: 10px;
  border-radius: 1rem;
  box-shadow: inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF;
  outline: none !important;
  line-height: 3;
  width: 90%;
  background-color: transparent;
  font-size: 1em;
  letter-spacing: 0.1em;
  color: #61677C;
  text-shadow: 1px 1px 0 #FFF;
  padding: 0 16px;
  transition: box-shadow .2s;
  &:focus {
    box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
  }
}


.neumorphic-disabled {
  cursor: not-allowed;
  background-color: #d4d5d7;
  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
}
</style>
