<template>
    <!-- // form chi tiet -->
    <div id="frmDetail" class="popup">
        <div class="popup--form">
            <button class="popup__button" @click="onCloseForm"></button>
            <div class="popup__header">
                Thông tin nhân viên
                <div class="isCustomer">
                    <input type="checkbox" style="min-width: 15px; height: 15px">
                    <div>Là khách hàng</div>
                </div>
                <div class="isSupplier">
                    <input type="checkbox" style="min-width: 15px; height: 15px">
                    <div>Là nhà cung cấp</div>
                </div>
            </div>
            <div class="popup__body">
                <div class="employee-info">
                    <!-- thông tin 1 -->
                    <div class="form-group general-info-left">
                        <div class="m-row m-flex m-col-gap-8">
                            <ba-input :isFocus="true" style="min-width: 100px;" v-model="employee.employeeCode" label="Mã"
                                :required="true">

                            </ba-input>
                            <ba-input style="min-width: calc(100% - 100px - 8px)" v-model="employee.fullName" label="Họ và tên"
                                :required="true">
                            </ba-input>
                        </div>
                        <div class="m-row flex-col m-row-gap-8">
                            <ba-combobox api="https://localhost:44360/api/Departments"
                                propText="departmentName" propValue="departmentId" label="Đơn vị"
                                v-model="employee.departmentId" required="true"></ba-combobox>
                        </div>
                        <ba-input api="https://apidemo.laptrinhweb.edu.vn/api/v1/Positions" class="m-row" v-model="employee.PositionId" label="Chức danh" :required="false">
                        </ba-input>
                    </div>

                    <!-- thông tin 2 -->

                    <div class=" general-info-right">
                        <div class="form-group m-row m-flex m-col-gap-8">
                            <ba-date-picker style="min-width: 150px;" typeInput="date" label="Ngày sinh"
                                v-model="employee.dateOfBirth"></ba-date-picker>
                            <div class="gender" style="min-width:calc(50vw - 150px - 8px)">
                                <label for="txtEmployeeCode">Giới tính</label>
                                <div class="input-wrapper" >
                                    <div id="input-wrapper">
                                        <label class="radio"></label>
                                        <input v-model="employee.gender" type="radio" value="0" name="gender">Nam
                                        <label class="radio"></label>
                                        <input v-model="employee.gender" type="radio" value="1" name="gender">Nữ
                                        <label class="radio"> </label>
                                        <input v-model="employee.gender" type="radio" value="2" name="gender">Khác
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-row m-flex m-col-gap-8">
                            <ba-input style="min-width:150px" class="m-row" v-model="employee.idCardNumber"
                                title="Số chứng minh thư nhân dân" label="Số CMTND">
                            </ba-input>
                            <ba-date-picker style="min-width: calc(100% - 150px - 8px);" typeInput="date" label="Ngày cấp"
                                v-model="employee.dateOfBirth"></ba-date-picker>
                        </div>
                        <ba-input class="m-row" v-model="employee.dateOfBirth" label="Nơi cấp">
                        </ba-input>
                    </div>
                    <!-- tthông tin 3 -->
                    <div class="form-group general-contact-info">
                        <ba-input class="m-row" v-model="employee.bankName" label="Địa chỉ">
                        </ba-input>
                        <div class="m-row m-flex m-col-gap-8 h-flex ">
                            <ba-input-info-etn class="" v-model="employee.phoneNumber" label="ĐT di động"></ba-input-info-etn>

                            <ba-input-info-etn class="" v-model="employee.phoneNumber" label="Đt cố định"></ba-input-info-etn>

                            <ba-input-info-etn class="" v-model="employee.email"  label="Email"></ba-input-info-etn>
                        </div>
                        <div class="m-row m-flex m-col-gap-8 h-flex ">
                            <ba-input-info-etn class="" v-model="employee.accountNumber"
                                label="Tài khoản ngân hàng"></ba-input-info-etn>

                            <ba-input-info-etn class="" v-model="employee.bankName"
                                label="Tên ngân hàng"></ba-input-info-etn>

                            <ba-input-info-etn class="" v-model="employee.bankBranch" label="Chi nhánh"></ba-input-info-etn>

                        </div>
                    </div>
                </div>
            </div>
            <div class="popup__footer">
                <div class="popup__footer--right">
                    <button class="btn" @click="addEmployee">Cất</button>
                    <button class="btn btn--default">Cất và thêm</button>
                </div>
                <div class="popup__footer--left">
                    <button id="btnCancel" class="btn" @click="onCloseForm">Hủy</button>
                </div>
            </div>
        </div>
        <!-- <MessageBox>
        </MessageBox> -->
    </div>
</template>
<script>

// import MessageBox from '@/components/base/BaMessageBox/MessageBox.vue';
import BaInput from '../../../components/base/BaInput.vue';
import BaDatePicker from '../../../components/base/BaDatePicker.vue';
import BaInputInfoEtn from '../../../components/base/BaInputInfoEtn.vue';
import BaCombobox from '../../../components/base/BaCombobox/BaCombobox.vue';

import axios from 'axios'
// import e from 'express';

export default {
    name: "EmployeeDetail",
    components: {
        BaInput, BaDatePicker,BaInputInfoEtn,BaCombobox,
    },
    data() {
        return {
            employee: {},
            employees:{},
            mainData: null,
        }
    },
    props: {
        hidFunction: null,
        employeeId: null,
        employeeInput: null,
        dataForEdit: String,
        employeeSelected : null,
        data: Array,
        
    },
    created() {
        // k lấy đc ở trong dom ( vd: button) , còn lại truy cập dc ( props, method , data)
        //lưu trữ data ban đầu trc khi bị chỉnh sửa
        this.mainData = JSON.stringify(this.employeeInput);
        /* chuyển dữ liệu từ prop sang data
         *c1:this.employee=this.employeeInput;
        */
        //c2
        this.employee = JSON.parse(this.mainData);


        // hàm kiểm tra các trường dữ liệu khác null để sửa dữ liệu
        // if (this.dataForEdit != null) {
            try {
                axios
                    // .get("https://apidemo.laptrinhweb.edu.vn/api/v1/Employees" | "https://apidemo.laptrinhweb.edu.vn/api/v1/Departments")
                    .get("https://localhost:44360/api/Employees")
                    .then(res => {
                        this.employee= res.data;
                        // (this.employee.employeeCode = res.data[0].employeeCode),
                        //     (this.employee.fullName = res.data[0].fullName),
                        //     (this.employee.genderName = res.data[0].genderName),
                        //     (this.employee.dateOfBirth = res.data[0].dateOfBirth),
                        //     (this.employee.departmentName = res.data[0].departmentId),
                        //     (this.employee.PositionName = res.data[0].PositionName),
                        //     (this.employee.email = res.data[0].email),
                        //     (this.employee.phoneNumber = res.data[0].phoneNumber),
                        //     (this.employee.accountNumber = res.data[0].accountNumber),
                        //     (this.employee.bankName = res.data[0].bankName),
                        //     (this.employee.bankBranch = res.data[0].bankBranch),
                        //     (this.employee.idCardNumber = res.data[0].idCardNumber)

                    });
            } catch (error) {

                console.log(error);
            }
        // }
        // Tìm nạp dữ liệu đối tượng từ API khi gắn kết thành phần
        // axios.get(`https://localhost:44360/api/Employees/${this.employee.employeeId}`)
        //     .then(res => {
        //         console.log("hai",res.data);
        //         this.employee = res.data;
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
    },

    computed: {
        //hàm check ngày sinh luôn nhỏ hơn ngày hiện tại
        filteredEmployees() {
            // Filter employees whose birthday is less than the current date
            return this.employee.filter(e => {
                const birthday = new Date(e.dateOfBirth);
                const currentDate = new Date();
                return (birthday.getTime() < currentDate.getTime());
            });
        },
        filteredEmailEmployees() {
            // Filter employees whose email format is correct
            return this.employee.filter(e => {
                const emailRegex = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/
                return emailRegex.test(e.email)
            })
        },
    },

    watch: {
        employeeId: function () {
            if(this.employeeId){
            fetch(`https://localhost:44360/api/Employees/${this.employeeId}`)
            .then(res=> res.json())
            .then(data =>{
                console.log(data);
                this.employee= data;

                });
            }
        },
        fullName: function (newVal, oldVal) {
            console.log("newval", newVal);
            console.log("oldval", oldVal);
        },
        // employee: {
        //     handler: function (newValue) {
        //         console.log("Info positionName", newValue.employee);
        //     },
        //     deep: true
        // },
        employees: {
            handler: function (newInfoEmployees) {
                console.log("Dữ liệu của E đã thay đổi", newInfoEmployees.DepartmentId);
            },
            deep: true
        },
        employeeSelected: function(value){
            this.employee = value ;
            // alert(value);
        },

    },
    methods: {
        /**
         * ẩn form
         * author: pat (5/3/2023)
         *  */
        onCloseForm() {
            //kiểm tra data đã thay đổi hay chưa
            const newData = JSON.stringify(this.employee);
            if (this.mainData != newData) {
                // alert("Bạn đã thay đổi dữ liệu, có muốn xóa k?");
            }
            // this.hidFunction();
            this.$emit("emitHidden");

        },

        /**
         * thêm mới 1 đối tượng
         * author: pat (23/3/2023)
         *  */
        addEmployee() {
            try {
                axios.post("https://localhost:44360/api/Employees", this.employee)
            } catch (error) {
                console.log(error);
            }
            this.$emit("emitHidden");
        },
        
    },
}
</script>

<style scoped> /* *scoped : các đoạn mã chỉ sử dụng cho employee */</style>