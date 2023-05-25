<template>
    <div class="table__toolbar">
        <div class="search_employee">
            <input class="input_search-text" type="text" placeholder="Search..." v-model="textInput"
                @keydown="inputOnKeyDown">
            <button class="lupe" @click="btnshowDataOnClick">
            </button>
            <div class="combobox_dataa" v-show="showData">
                <a v-for="(item, index) in dataArray" :key="index" class="combobox__data-item "
                    :class="{ 'data-item--selected': index == indexSeleted }" @click="onSelectDataItem(item)">{{ propText ?
                        item[propText] : item }}</a>
            </div>
        </div>
        <button @click="reloadPage" class="restart" fdprocessedid="umjifa"></button>
    </div>
</template>


<script>
export default {
    name: 'BaSearchEmployee',
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
            var res = await fetch(this.api);
            let resJon = await res.json();
            this.dataArray = resJon;
            this.dataMainInput = resJon;

        }
        else if (this.data) {
            this.dataArray = this.data;
            this.dataMainInput = this.data;
        }
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
        reloadPage() {
            window.location.reload();
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
@import url(./BaSearchEmployee.css);
</style>