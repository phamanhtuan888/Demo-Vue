<template>
    <!-- FORM CHI TIET -->
    <div  class="popup" id="frmDetail" >
        <div class="popup-form">
            <button class="popup_btn " @click="btnCloseOnClick"></button>
            <div class="popup__header">Thông tin nhân viên</div>
            <div class="popup__body">
                <div class="employee-info">
                    <!-- thông tin 1 -->
                    <div class="form-group general-info-left">
                        <div class="m-row">
                            <div class="input-wrapper" style="width: 100px;">
                                <label for="txtEmployeeCode">Mã <span style="color: red;">*</span></label>
                                <input id="txtEmployeeCode" type="text" required="" v-model="employee.employeeCode">
                                <span id="error_employeeCode" >sdhgsdg</span>
                            </div>

                            <div class="input-wrapper" style="width: calc(100% - 108px);">
                                <label for="txtEmployeeCode">Tên <span style="color: red;">*</span></label>
                                <input id="txtEmployeeCode" type="text" required="" v-model="employee.fullName"  >
                                <span id="error_fullName" ></span>
                            </div>
                        </div>
                        <div class="m-row">
                            <div class="input-wrapper">
                                <label for="txtEmployeeCode">Đơn vị <span style="color: red;">*</span></label>
                                <input id="txtEmployeeCode" type="text">
                            </div>
                        </div>
                        <div class="m-row">
                            <div class="input-wrapper">
                                <label for="txtEmployeeCode">Chức danh</label>
                                <input id="txtEmployeeCode" type="text">
                            </div>
                        </div>
                    </div>
                    <!-- thông tin 2 -->
                    <div class="form-group general-info-right">
                        <div class="m-row">
                            <div class="input-wrapper" style="width: calc(50% - 4px);">
                                <label for="txtEmployeeCode">Ngày sinh</label>
                                <input id="txtEmployeeCode" type="datetime-local">
                            </div>

                            <div class="input-wrapper" style="width: calc(50% - 4px);">
                                <label for="txtEmployeeCode">Giới tính</label>
                                <div class="input-wrapper" >
                                    <div id="input-wrapper">
                                        <label class="radio"></label>
                                        <input type="radio" value="0" name="gender">Nam
                                        <label class="radio"></label>
                                        <input type="radio" value="1" name="gender">Nữ
                                        <label class="radio"> </label>
                                        <input type="radio" value="2" name="gender">Khác
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-row">
                            <div class="input-wrapper" style="width: 160px;">
                                <label for="txtEmployeeCode">Số CMND</label>
                                <input id="txtEmployeeCode" type="text">
                            </div>

                            <div class="input-wrapper" style="width: calc(100% - 168px);">
                                <label for="txtEmployeeCode">Ngày cấp</label>
                                <input id="txtEmployeeCode" type="text">
                            </div>
                        </div>
                        <div class="m-row">
                            <div class="input-wrapper">
                                <label for="txtEmployeeCode">Nơi cấp</label>
                                <input id="txtEmployeeCode" type="text">
                            </div>
                        </div>
                    </div>
                    <!-- thông tin 3 -->
                    <div class="form-group contact-info">
                        <div class="m-row">
                            <div class="input-wrapper">
                                <label for="txtEmployeeCode">Địa chỉ</label>
                                <input id="txtEmployeeCode" type="text">
                            </div>

                        </div>
                        <div class="m-row">
                            <div class="input-wrapper" style="width: 250px;">
                                <label for="txtEmployeeCode" title="Điện thoại di động">ĐT di động</label>
                                <input id="txtEmployeeCode" type="text">
                            </div>
                            <div class="input-wrapper" style="width: 250px;">
                                <label for="txtEmployeeCode" title="Điện thoại cố định">ĐT cố định</label>
                                <input id="txtEmployeeCode" type="text">
                            </div>
                            <div class="input-wrapper" style="width: 250px;">
                                <label for="txtEmployeeCode">Email</label>
                                <input id="txtEmployeeCode" type="text">
                            </div>

                        </div>
                        <div class="m-row">
                            <div class="input-wrapper" style="width: 250px;">
                                <label for="txtEmployeeCode" title="Điện thoại di động">Tài khoản ngân hàng</label>
                                <input id="txtEmployeeCode" type="text">
                            </div>
                            <div class="input-wrapper" style="width: 250px;">
                                <label for="txtEmployeeCode" title="Điện thoại cố định">Tên ngân hàng</label>
                                <input id="txtEmployeeCode" type="text">
                            </div>
                            <div class="input-wrapper" style="width: 250px;">
                                <label for="txtEmployeeCode">Chi nhánh</label>
                                <input id="txtEmployeeCode" type="text">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="popup__footer">
                <div class="footer-right">
                    <button class="btn">Cất</button>
                    <button class="btn btn--default" type="submit">Cất và thêm</button>
                </div>
                
                <div class="footer-left">
                    <button class="btn" @click="btnCloseOnClick">Hủy</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name:"EmployeeDetail",
    props:["hideFuntion","EmployeeId"],
    watch: {
        EmployeeId: function(newVal){
             console.log("employee thay doi",newVal);
             
            fetch(`https://localhost:44360/api/Employees/${newVal}`)
            .then((res)=> res.json())
            .then((data) =>{
                this.employee = data; 
            });
        },
    },
    methods:{
        // An form
        btnCloseOnClick(){
            this.hideFuntion();
            // this.$emit("hidepopup");
        },
        
    },
    beforeCreate(){

        },
    created(){
        // if(this.EmployeeId){
        //     fetch(`https://localhost:44360/api/Employees/${this.EmployeeId}`)
        //     .then((res)=> res.json())
        //     .then((data) =>{
        //         this.employee = data; 
        //     });
        // }
    },
    data(){
        return{
            employee:{},
        }
    }
}
</script>
<style scoped>

</style>
