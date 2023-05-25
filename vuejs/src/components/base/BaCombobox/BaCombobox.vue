<template>
    <div class="m-row flex-col m-row-gap-8">
        <label for="txtEmployeeCode">{{ label }}<span class="required" v-if="required"> *</span></label>
        <div class="bacombobox">
            <input class="combobox__input" v-model="textInput" type="text" @keydown="inputOnKeyDown">
            <button class="combobox__button" @click="btnshowDataOnClick"></button>
            <div class="combobox_data" v-show="showData">
                <a v-for="(item, index) in dataArray" :key="index" class="combobox__data-item "
                    :class="{ 'data-item--selected': index == indexSeleted }" @click="onSelectDataItem(item)">{{ propText ?
                        item[propText] : item }}</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
// import axios from 'axios';
export default {
    name: 'BaCombobox',
    emits: ["update:modelValue"],
    props: {
        modelVale: {
            type: [String, Boolean, Number, Array],
            default: null,
            required: false
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
        api: {
            type: String,
            default: null,
            required: false,
        },
        data: {
            type: Array,
            default: null,
            required: false
        },
        propText: {
            type: String,
            default: null,
            required: false
        },
        propValue: {
            type: String,
            default: null,
            required: false
        },

    },
    async created() {
        // console.log("data", this.data);
        if (this.api) {
            // var res = await fetch(this.api);
            var res = await axios(this.api);
            // let resJon = await res.json();
            this.dataArray = res.data;
            this.dataMainInput = res.data;

        }
        else if (this.data) {
            this.dataArray = this.data;
            this.dataMainInput = this.data;
        }
        // if (this.api) {
        //     var response = await axios(this.api);
        //     this.dataArray = response.data;
        //     this.dataMainInput = response.data;
        //     response.data.forEach((element) => {
        //         if (element[this.propValue] == this.modelValue) {
        //             this.textInput = element[this.propText];
        //             this.indexSelected = this.dataArray.indexOf(element);
        //         }
        //     });
        // } else if (this.data) {
        //     {
        //         this.dataArray = this.data;
        //         this.dataMainInput = this.data;
        //     }
        // }
    },
    watch: {
        data: function (newData) {
            this.dataArray = newData;
        },
        textInput: function (newText) {
            // lọc các item trong danh sách dựa trên text nhập vào input (textinput)
            this.dataArray = this.dataMainInput.filter(item =>
                item[this.propText].includes(newText));
            //hiện thị data
            this.showData = true;
        },
    },
    methods: {
        /**
         * ẩn hiện data
         * author:tuan (22/3/2023)
         */
        btnshowDataOnClick() {
            this.showData = !this.showData;
        },
        /**
         * lựa chọn item trong combobox data
         * author:tuan (22/3/2023)
         */
        onSelectDataItem(item) {
            //hiển thị text của item lên input
            this.textInput = this.propText ? item[this.propText] : item;
            const value = this.propValue ? item[this.propValue] : item;
            //cập nhật dữ liệu 2 chiều
            this.$emit("update:modelValue", value)
            // ẩn combox-data
            this.showData = false;
        },
        /**
         * lựa chọn item trong combobox data khi nhấn phím lên xuống 
         * author:tuan (22/3/2023)
         */
        inputOnKeyDown() {
            console.log(event);
            const keyCode = event.keyCode;
            switch (keyCode) {
                case 40:
                    //xét vào item đàu tiên hoặc kế tiếp phía dưới
                    this.showData = true;
                    if (this.indexSeleted == null || this.indexSeleted == this.dataArray.length - 1) {
                        this.indexSeleted = 0;
                    } else {
                        this.indexSeleted++;
                    }
                    break;
                case 38:
                    //xét vào item đàu tiên hoặc kế tiếp phía trên
                    this.showData = true;
                    if (!this.indexSeleted) {
                        this.indexSeleted = this.dataArray.length - 1;
                    }
                    else {
                        this.indexSeleted--;
                    }
                    break;
                case 13:
                    //thực hiện chọn item
                    this.onSelectDataItem(this.dataArray[this.indexSeleted]);
                    break;
                default:
                    break;
            }
        },

    },
    data() {
        return {
            showData: false,
            dataArray: [],
            textInput: null,
            dataMainInput: [],
            indexSeleted: null,
        }
    },
}
</script>

<style scoped>
@import url(./bacombobox.css);
</style>