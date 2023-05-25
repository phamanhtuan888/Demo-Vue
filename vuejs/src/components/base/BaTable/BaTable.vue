<template>
    <div class="tableH">
        <table id="tableEmployee" class="table_main">
            <thead class="thead-position">
                <tr class="text-align-head">
                    <th class="text-align-middle">
                        <input type="checkbox" style="min-width: 20px; height: 20px">
                    </th>
                    <th class="text-align-left" style="min-width=50px">MÃ NHÂN VIÊN</th>
                    <th class="text-align-left" style="min-width=150px">TÊN NHÂN VIÊN</th>
                    <th class="text-align-middle" style="min-width=100px">GIỚI TÍNH</th>
                    <th class="text-align-middle" style="min-width=100px">NGÀY SINH</th>
                    <th class="text-align-middle" style="min-width=100px">SỐ CMND</th>
                    <th class="text-align-middle" style="min-width=100px">CHỨC DANH</th>
                    <th class="text-align-middle" style="min-width=100px">TÊN ĐƠN VỊ</th>
                    <th class="text-align-middle" style="min-width=100px">SỐ TÀI KHOẢN</th>
                    <th class="text-align-middle" style="min-width=100px">TÊN NGÂN HÀNG</th>
                    <th class="text-align-middle" style="min-width=100px">CHI NHÁN TK NGÂN HÀNG</th>
                    <th class="text-align-left " style="min-width=100px">CHỨC NĂNG</th>
                </tr>
            </thead>
            <tbody class="table_left">
                <tr class="text-align-body" v-for="employee in employees" :key="employee.EmployeeId"
                    :class="{ 'checkSelected': employee.EmployeeId }">
                    <td class="text-align-middle">
                        <input type="checkbox" style="min-width: 20px;height: 20px" />
                    </td>
                    <td class="text-align-left ">{{ employee.EmployeeCode }}</td>
                    <td class="text-align-left ">{{ employee.FullName }}</td>
                    <td class="text-align-middle">{{formatGender(employee.Gender) }}</td>
                    <td class="text-align-middle ">{{ formatDate(employee.DateOfBirth) }}</td>
                    <td class="text-align-middle" style="min-width=100px"></td>
                    <td class="text-align-middle" style="min-width=100px">{{ employee.PositionName }}</td>
                    <td class="text-align-middle" style="min-width=100px">{{ employee.DepartmentName }}</td>
                    <td class="text-align-middle" style="min-width=100px"></td>
                    <td class="text-align-middle" style="min-width=100px"></td>
                    <td style="min-width=100px"></td>
                    <td class="text-align-middle down-options " style="min-width=100px">
                        <text class="update" style="color:#0062CC" @click="updateEmployeeOnClick(employee)"
                            :employeeOfIput="employeeTableInput">Sửa</text>
                        <button @click="showOptions(employee.EmployeeId)" class="down_update"></button>
                        <div class="show_options" v-show="employee.EmployeeId == iSelected">
                            <div :class="show_options" v-for="option in options" :key="option.id"
                                @click="selectOption(option.id, employee)">
                                {{ option.text }}</div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import axios from "axios";
export default {
    name: 'BaTable',
    prop: {
        employeeInput: null,
        employeeOfIput: null,
    },
    data() {
        return {
            employees: {},
            employee: {},
            isShowPopup: false,
            employeeSelected: {},
            employeeOfIput: {},
            options: [
                { text: "Nhân bản", id: 1 },
                { text: "Xóa", id: 2 },
                { text: "Ngừng sử dụng", id: 3 },
            ],
            selectedOption: '',
            fullData: null,
            iSelected: null,
            idEmployeeSelected: null,
            mainData: null,
            employeeTableInput: {},

        }
    },
    
    created() {
        axios.get(`https://localhost:44360/api/Employees`)
                .then(response => {
                    this.employees = response.data
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        // this.mainData = JSON.stringify(this.employeeInput);
        // this.employee = JSON.parse(this.mainData);

            
    },
    methods: {
        dbClick(employees) {
            this.isShowPopup = true;
            this.employeeSelected = employees.EmployeeId;
            this.employeeTableInput = employees;
        },
        addOnClick() {
            this.employeeTableInput = {};
            this.isShowPopup = true;

        },
        onCloseForm() {
            this.isShowPopup = false;
        },
        
        
        // hàm hiện option
        showOptions(indexFocus) {
            this.iSelected = indexFocus;
        },
        //hàm chọn option
        selectOption(indexFunction, employee) {
            this.iSelected = -1;
            switch (indexFunction) {
                case 1:
                    // nhân bản
                    this.isShowPopup = true;
                    this.employeeSelected = employee.EmployeeId;
                    this.employeeTableInput = employee;
                    break;
                case 2:
                    // xóa
                    this.deleteEmployeeOnClick(employee.EmployeeId);
                    break;
                default:
                    break;
            }
        },
        // hàm xóa dữ liệu
        deleteEmployeeOnClick(id) {
            axios.delete(`https://apidemo.laptrinhweb.edu.vn/api/v1/Employees/${id}`)
                .then(response => {
                    console.log('Object deleted:', response.data);
                    alert("Xóa dữ liệu thành công!");
                    window.location.reload();
                })
                .catch(error => {
                    console.error(error);
                });
        },
        //hàm sửa dữ liệu
        updateEmployeeOnClick(employee) {
            // console.log(employee);
            try {
                this.isShowPopup = true;
                this.employeeSelected = employee.EmployeeId;
                this.employeeOfIput = employee;
            } catch (error) {
                console.log(error)
            }
        },
        formatGender(genderName) {
            try {
                if (genderName != null && genderName != undefined) {
                    if (genderName == 0) {
                        return 'Nam';
                    }
                    if (genderName == 1) {
                        return 'Nữ';
                    }
                    if (genderName == 2) {
                        return 'Khác';
                    }
                }
            } catch (error) {
                return '';
            }
        },
        formatDate(date) {
            try {
                date = new Date(date);
                // lấy ra ngày
                let dateValue = date.getDate();
                // tháng
                let monthValue = date.getMonth() + 1;
                // năm
                let yearValue = date.getFullYear();

                return `${dateValue}/${monthValue}/${yearValue}`;
            } catch (error) {
                return "";
            }
        },
    },
    watch: {
        handler: function (newData) {
            console.log("Dữ liệu thay đổi:", newData.employees);
        },
        deep: true,
        employeeSelected: function (newData) {
            console.log(newData.employees);
        },
        employeeOfIput: function (newData) {
            console.log(newData.employees);
        }
    }

}
</script>


<style>
@import url("./table.css");
</style>