<template>
    <div class="content">
        <div class="content_left">
            <div class="m-item item-menu content_left_general">
                <div class="content_left_1_item1 "></div>
                <button class="content_left_1_item2"><span>Nhân viên</span></button>
            </div>

            <div class="m-item content_left_general">
                <div class="content_left_2_item1 "></div>
                <button class="content_left_1_item2"><span>Tiền mặt</span></button>
            </div>

            <div class="m-item  content_left_general">
                <div class="content_left_3_item1 "></div>
                <button class="content_left_1_item2"><span>Tiền gửi</span></button>
            </div>

            <div class="m-item content_left_general">
                <div class="content_left_4_item1 "></div>
                <button class="content_left_1_item2"><span>Mua hàng</span></button>
            </div>

            <div class="m-item content_left_general">
                <div class="content_left_5_item1 "></div>
                <button class="content_left_1_item2"><span>Bán hàng</span></button>
            </div>

            <div class="m-item content_left_general">
                <div class="content_left_6_item1 "></div>
                <button class="content_left_1_item2"><span>Quản lí hóa đơn</span></button>
            </div>

            <div class="m-item content_left_general">
                <div class="content_left_7_item1 "></div>
                <button class="content_left_1_item2"><span>Kho</span></button>
            </div>

            <div class="m-item content_left_general">
                <div class="content_left_8_item1 "></div>
                <button class="content_left_1_item2"><span>Công cụ dụng cụ</span></button>
            </div>

            <div class="m-item content_left_general">
                <div class="content_left_9_item1 "></div>
                <button class="content_left_1_item2"><span>Tài sản cố định</span></button>
            </div>

            <div class="m-item content_left_general">
                <div class="content_left_10_item1 "></div>
                <button class="content_left_1_item2"><span>Thuế</span></button>
            </div>

            <div class="m-item content_left_general">
                <div class="content_left_11_item1 "></div>
                <button class="content_left_1_item2"><span>Gía thành</span></button>
            </div>

            <div class="m-item content_left_general">
                <div class="content_left_12_item1 "></div>
                <button class="content_left_1_item2"><span>Tổng hợp</span></button>
            </div>

            <div class="m-item content_left_general">
                <div class="content_left_13_item1 "></div>
                <button class="content_left_1_item2"><span>Ngân sách</span></button>
            </div>

            <div class="m-item content_left_general">
                <div class="content_left_14_item1 "></div>
                <button class="content_left_1_item2"><span>Báo cáo</span></button>
            </div>

            <div class="m-item content_left_general">
                <div class="content_left_15_item1 "></div>
                <button class="content_left_1_item2"><span>Phân tích tài chính</span></button>
            </div>
           
        </div>

        

        <div class="content_right">
            <div class="title">Nhân Viên</div>
            <button class="themmoi" @click="btnAddOnclick()">
                <p class="themoi_txt">Thêm mới nhân viên</p>
            </button>

            <div class="main">
                 <SearchEmployee
          api="https://localhost:44360/api/Employees"
          propText="fullName"
          propValue="employeeId"
          v-model="employees.fullName"
        ></SearchEmployee>
                <div class="table__container">
                    <table class="m-table" id="tbEmployeeList">
                        <thead>
                            <tr>
                                <th class="text-align--left" ></th>
                                <th class="text-align--left"  model-name="EmployeeCode">Mã nhân viên</th>
                                <th class="text-align--left" model-name="FullName">Tên nhân viên</th>
                                <th class="text-align--left" model-name="GenderName">Giới tính</th>
                                <th class="text-align--center" model-name="DateOfBirth">Ngày sinh</th>
                                <th class="text-align--center" >Số CMND</th>
                                <th class="text-align--center"  model-name="PositionName">Chức danh</th>
                                <th class="text-align--center"  model-name="DepartmentName">Tên đơn vị</th>
                                <th class="text-align--center" >Số tài khoản</th>
                                <th class="text-align--center" >Tên ngân hàng</th>
                                <th class="text-align--center" >Chi nhánh TK ngân hàng</th>
                                <th class="text-align--center" >Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr @dblclick="$event =>rowOnDbClick(item)" v-for="(item,index) in employees" :key="index">
                                <td class="text-align--left"><input type="checkbox"></td>
                                <td class="text-align--left">{{item.employeeCode}}</td>
                                <td class="text-align--left">{{item.fullName}}</td>
                                <td class="text-align--left">{{item.genderName}}</td>
                                <td class="text-align--center" >{{formatDate(item.dateOfBirth)}}</td>
                                <td class="text-align--center" >{{item.idCardNumber}}</td>
                                <td class="text-align--center" >{{item.positionName}}</td>
                                <td class="text-align--center" >{{item.departmentName}}</td>
                                <td class="text-align--center" ></td>
                                <td class="text-align--center" ></td>
                                <td class="text-align--center" ></td>
                                <td class="text-align--center down-options " style="min-width=100px" >
                                    <button class="update">Sửa</button>
                                    <button class="down-update" ></button>
                                    <div class="show-options">
                                        <div>
                                           
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="m-paging">
                   <div class="total">Tổng số: <span style="color:#212121; font-weight: 600; ">13</span> bản ghi</div>
                   <div class="select">
                        <select id="standard-select" class="standard-select">
                            <option value="Option 1">20 Bản ghi trên trang</option>
                            <option value="Option 1">10 Bản ghi trên trang</option>
                        </select>
                        <span class="focus"></span>
                    </div>
                    <div class="paging-number">
                        <span class="spann">Trước</span>
                        <span class="spann">1</span>
                        <span class="spann"> 2</span>
                        <span class="spann">3</span>
                        <span class="spann">...</span>
                        <span class="spann">10</span>
                        <span class="spann">Sau</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <EmployeeDetail 
        v-show="isShowPopup" 
        :hideFuntion = "hidePopup" 
        @hidepopup="hidePopup"
        :EmployeeId = "employeeIdSelected"
    >
        
    </EmployeeDetail>
    
</template>
<script>


import SearchEmployee from "../../components/base/SearchEmployee/SearchEmployee.vue";
import EmployeeDetail from "../../views/employee/EmployeeDetail.vue"
export default {
    name:"TheMenu",
    props:[],
    components:{
        SearchEmployee,EmployeeDetail
    },
    created(){
        fetch("https://localhost:44360/api/Employees")
            .then((res) => res.json())
            .then((data) =>{
                this.employees = data;   
        }) 
    },
    methods: {
        rowOnDbClick(employee){
            this.isShowPopup = true;
            this.employeeIdSelected = employee.employeeId;
        },
        btnAddOnclick(){
            this.isShowPopup = true;
        },
        hidePopup(){
            this.isShowPopup = false;
        },
            
        formatDate(date){
            try {
                date = new Date(date);
                //lay ra ngay
                let dateValue = date.getDate();
                //lay ra thang
                let month = date.getMonth() + 1;
                //lay ra nam 
                let year = date.getFullYear();
                return `${dateValue}/${month}/${year}`;
            } catch (error) {
                return"";
            }
        }

    },
    data(){
        return{
            employees:[],
            isShowPopup: false,
            employeeIdSelected: null
        }
    }
};
</script>
<style scope>
@import url(./dropdownUpdate.css);
</style >