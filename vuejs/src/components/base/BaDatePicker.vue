<template>
    <div class=" flex-col m-row-gap-8">
        <label for="txtEmployeeCode">{{ label }}<span class="required" v-if="required"> *</span></label>
        <div class="input-wrapper">
            <input ref="minput" :class="{ 'input--error': invalid }" :type="typeInput" v-model="value"
                @blur="onValidateBlur">
        </div>
    </div>
</template>
<script>
export default {
    name: 'BaDatePicker',
    data() {
        return {
            value: null,
            invalid: false,
        }
    },
    props: {
        modelValue: [String, Number, Boolean],
        typeInput: {
            type: String,
            default: "text",
            required: false,
        },
        label: {
            type: String,
            required: false,
            default: null,
        },
        required: {
            type: Boolean,
            required: false,
            default: false,
        },
        isFocus: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    methods: {
        onValidateBlur() {
            if (this.required && !this.value) {
                this.invalid = true;
            }
            else {
                this.invalid = false;
            }
        },
        setFocus() {
            this.$nextTick(function () {
                this.$refs["minput"].focus();
            })
        }
    },
    watch: {
        value: function (newValue) {
            console.log("position in component", newValue);
            this.$emit("update:modelValue", newValue)
        },
    },
    created() {
        if (this.modelValue) {
            var date = new Date(this.modelValue);
            let dateString = date.getDate();
            dateString = dateString < 10 ? `0${dateString}` : dateString;
            let month = date.getMonth() + 1;
            month = month < 10 ? `0${month}` : month;
            const year = date.getFullYear();
            this.value = `${year}-${month}-${dateString}`;
            console.log("modelValue", this.modelValue);
        }
    },
    mounted() {
        if (this.isFocus) {
            this.setFocus();
        }
    }
}
</script>

<style scoped>
@import url(../../css/components/input.css);
</style>