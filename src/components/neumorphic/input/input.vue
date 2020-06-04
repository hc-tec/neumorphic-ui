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
      :readonly="readonly"
      @input="$emit('input', $event.target.value)">
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Model } from 'vue-property-decorator'
import neumorphicLabel from '../label/label.vue'
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
  readonly!: boolean;

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
<style scoped>
.neumorphic-input-content {
  /* // display: inline-block; */
}
.neumorphic-input {
  font-family: 'Poppins', sans-serif;
  display: inline-block;
  border-radius: var(--primary-radius);
  border: 3px solid rgb(228,235,245);
  margin-bottom: 10px;
  box-shadow: var(--input-shadow);
  outline: none !important;
  line-height: 3;
  width: 90%;
  background-color: var(--primary-bgcolor);
  font-size: var(--primary-font-size);
  letter-spacing: 0.1em;
  color: var(--primary-color);
  text-shadow: var(--text-shadow);
  padding: 0 16px;
  transition: box-shadow .2s;
}
.neumorphic-input:focus {
  box-shadow: var(--input-focus-shadow);
}


.neumorphic-disabled {
  cursor: not-allowed !important;
  background-color: var(--disabled-bgcolor) !important;
  box-shadow: var(--input-disabled-shadow);
}
</style>
