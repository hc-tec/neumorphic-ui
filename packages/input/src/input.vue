<template>
  <div class="neumorphic-input-content">
    
    <neumorphic-label v-if="label">
      {{ label }}
    </neumorphic-label>

    <i 
      v-if="prefixIcon" 
      :class="[prefixIcon, 'neumorphic-input-prefix-icon']">
    </i>
    
    <textarea
      v-if="type === 'textarea'"
      :class="neumorphicInputClass"
      :type="tmp_type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @input="$emit('input', $event.target.value)">
    </textarea>
    <input
      v-else
      :class="neumorphicInputClass"
      :type="tmp_type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @input="$emit('input', $event.target.value)"
    >
    <div class="input-mini-components">
      <i 
        v-if="clearable" 
        v-show="value" 
        class="fa fa-times-circle-o"
        @click="handleClear">
      </i>
      <i 
        v-if="showPassword" 
        v-show="value" 
        class="fa fa-eye"
        @click="handleShowPassword($event.target)">
      </i>
      <i 
        class="neumorphic-input-suffix-icon"
        v-if="suffixIcon" 
        :class="suffixIcon">
      </i>
    </div>

    
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator'
import neumorphicLabel from '../../label/src/label.vue'
@Component({
  components: {
    'neumorphic-label': neumorphicLabel
  }
})
export default class Input extends Vue {

  @Prop() 
  private label?: string;

  @Prop()
  private prefixIcon?: string;

  @Prop()
  private suffixIcon?: string;
  
  @Prop() 
  private placeholder?: string;

  @Prop({type: Boolean, default: false})
  private clearable!: boolean;

  @Prop({ type: String, default: 'text' }) 
  private type!: string;

  @Prop({type: Boolean, default: false})
  private showPassword!: boolean;

  @Prop({type: Boolean, default: false})
  private readonly!: boolean;

  @Prop({type: Boolean, default: false})
  private disabled!: boolean;

  @Model('input', {type: String})
  private value!: string | number;

  private tmp_type = this.type;

  private handleClear() {
    this.$emit('input', '');
  }

  // 柯里化
  private handleShowPassword = this.showPasswordChange();

  private showPasswordChange() {
    let showPassword = false;
    const type = this.tmp_type;
    const getClass = (show: boolean): string[] => {
      const _show = show ? 'true' : 'false';
      return [
        {
          true: 'fa fa-eye',
          false: 'fa fa-eye-slash'
        }[_show],
        {
          true: 'password',
          false: type
        }[_show]
      ]
    }
    const changePassword = (elem: HTMLSpanElement) => {
      let _type;
      [elem.className, _type] = getClass(showPassword);
      this.tmp_type = _type;
      showPassword = !showPassword;
    }
    return changePassword
  }


  private neumorphicInputClass: object = {
    "neumorphic-input": true,
    "neumorphic-disabled": this.disabled,
  }

}
</script>
<style>
.neumorphic-input-content {
  position: relative;
  width: 340px;
}
.neumorphic-input {
  font-family: 'Poppins', sans-serif;
  display: inline-block;
  border-radius: var(--small-radius);
  border: none;
  margin-bottom: 10px;
  box-shadow: var(--input-shadow);
  outline: none !important;
  line-height: 3;
  width: 100%;
  background-color: var(--primary-bgcolor);
  font-size: var(--primary-font-size);
  letter-spacing: 0.1em;
  color: var(--primary-color);
  text-shadow: var(--text-shadow);
  padding: 0 30px;
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
.input-mini-components {
  position: absolute;
  top: 20%;
  right: -50px;
  color: #8080809c;
  cursor: pointer;
  
}
.input-mini-components > *:not(.neumorphic-input-suffix-icon) {
  transition: color .3s;
  margin-right: 2px;
}
.input-mini-components > *:not(.neumorphic-input-suffix-icon):hover {
  color: gray;
}
.neumorphic-input-prefix-icon {
  position: absolute;
  top: 26%;
  left: 10px;
  color: #8080809c;
}

</style>
