<template>
  <div class="content">
    <div class="page__header">
      <div class="page-header__left heading">NHÂN VIÊN</div>
      <div class="page-header__right">
        <button class="btn btn--default" @click="addOnClick">
          Thêm mới nhân viên
        </button>
      </div>
    </div>
    <div class="page__content">
      <div class="table-wrapper">
        <BaSearchEmployee
          api="https://localhost:44360/api/Employees"
          propText="fullName"
          propValue="employeeId"
          v-model="employees.fullName"
        ></BaSearchEmployee>
        <!-- <ba-table :employeeOfInput="employeeTableInput" ></ba-table> -->
        <div class="tableH">
          <table id="tableEmployee" class="table_main">
            <thead class="thead-position">
              <tr class="text-align-head">
                <th class="text-align-middle">
                  <input
                    type="checkbox"
                    style="min-width: 20px; height: 20px"
                  />
                </th>
                <th class="text-align-middle" style="min-width=50px">
                  MÃ NHÂN VIÊN
                </th>
                <th class="text-align-left" style="min-width=150px">
                  TÊN NHÂN VIÊN
                </th>
                <th class="text-align-middle" style="min-width=100px">
                  GIỚI TÍNH
                </th>
                <th class="text-align-middle" style="min-width=100px">
                  NGÀY SINH
                </th>
                <th class="text-align-middle" style="min-width=100px">
                  SỐ CMND
                </th>
                <th class="text-align-middle" style="min-width=100px">
                  CHỨC DANH
                </th>
                <th class="text-align-middle" style="min-width=100px">
                  TÊN ĐƠN VỊ
                </th>
                <th class="text-align-middle" style="min-width=100px">
                  SỐ TÀI KHOẢN
                </th>
                <th class="text-align-middle" style="min-width=100px">
                  TÊN NGÂN HÀNG
                </th>
                <th class="text-align-middle" style="max-width=100px">
                  CHI NHÁNH TK NGÂN HÀNG
                </th>
                <th class="text-align-left cn" style="min-width=100px">
                  CHỨC NĂNG
                </th>
              </tr>
            </thead>
            <tbody class="table_left">
              <!-- fake du lieu -->
              <tr
                class="text-align-body"
              >
                <td class="text-align-middle">
                  <input
                    type="checkbox"
                    style="min-width: 20px; height: 20px"
                  />
                </td>
                <td class="text-align-left">NV01</td>
                <td class="text-align-left">Phạm Anh Tuấn</td>
                <td class="text-align-middle">
                  Nam
                </td>
                <td class="text-align-middle">
                  13/03/2002
                </td>
                <td class="text-align-middle" style="min-width=100px">
                  35325235
                </td>
                <td class="text-align-middle" style="min-width=100px">
                  Nhân Viên
                </td>
                <td class="text-align-middle" style="min-width=100px">
                  
                </td>
                <td class="text-align-middle" style="min-width=100px">
                  
                </td>
                <td class="text-align-middle" style="min-width=100px">
                  
                </td>
                <td class="text-align-middle_tk" style="min-width=100px">
                 
                </td>
                <td
                  class="text-align-middle down-options"
                  style="min-width=100px"
                >
                  <text
                    class="update"
                    style="color: #0062cc"
                    @click="updateEmployeeOnClick(employee)"
                    :employeeInput="employeeOfIput"
                    >Sửa</text
                  >
                  
                </td>
              </tr>

              <tr
                class="text-align-body"
              >
                <td class="text-align-middle">
                  <input
                    type="checkbox"
                    style="min-width: 20px; height: 20px"
                  />
                </td>
                <td class="text-align-left">NV02</td>
                <td class="text-align-left">Nguyễn Thị Yến Vy</td>
                <td class="text-align-middle">
                  Nữ
                </td>
                <td class="text-align-middle">
                  3/03/2002
                </td>
                <td class="text-align-middle" style="min-width=100px">
                  3532121
                </td>
                <td class="text-align-middle" style="min-width=100px">
                  Nhân Viên
                </td>
                <td class="text-align-middle" style="min-width=100px">
                  
                </td>
                <td class="text-align-middle" style="min-width=100px">
                  
                </td>
                <td class="text-align-middle" style="min-width=100px">
                  
                </td>
                <td class="text-align-middle_tk" style="min-width=100px">
                 
                </td>
                <td
                  class="text-align-middle down-options"
                  style="min-width=100px"
                >
                  <text
                    class="update"
                    style="color: #0062cc"
                    @click="updateEmployeeOnClick(employee)"
                    :employeeInput="employeeOfIput"
                    >Sửa</text
                  >
                  
                </td>
              </tr>

              <tr
                class="text-align-body"
                v-for="employee in employees"
                :key="employee.employeeId"
                :class="{ checkSelected: employee.employeeId }"
                @dblclick="dbClick(employee)"
              >
                <td class="text-align-middle">
                  <input
                    type="checkbox"
                    style="min-width: 20px; height: 20px"
                  />
                </td>
                <td class="text-align-left">{{ employee.employeeCode }}</td>
                <td class="text-align-left">{{ employee.fullName }}</td>
                <td class="text-align-middle">
                  {{ formatGender(employee.gender) }}
                </td>
                <td class="text-align-middle">
                  {{ formatDate(employee.dateOfBirth) }}
                </td>
                <td class="text-align-middle" style="min-width=100px">
                  {{ employee.idCardNumber }}
                </td>
                <td class="text-align-middle" style="min-width=100px">
                  {{ employee.PositionName }}
                </td>
                <td class="text-align-middle" style="min-width=100px">
                  {{ employee.departmentName }}
                </td>
                <td class="text-align-middle" style="min-width=100px">
                  {{ employee.accountNumber }}
                </td>
                <td class="text-align-middle" style="min-width=100px">
                  {{ employee.bankName }}
                </td>
                <td class="text-align-middle_tk" style="min-width=100px">
                  {{ employee.bankBranch }}
                </td>
                <td
                  class="text-align-middle down-options"
                  style="min-width=100px"
                >
                  <text
                    class="update"
                    style="color: #0062cc"
                    @click="updateEmployeeOnClick(employee)"
                    :employeeInput="employeeOfIput"
                    >Sửa</text
                  >
                  <button
                    @click="showOptions(employee.employeeId)"
                    class="down_update"
                  ></button>
                  <div
                    class="show_options"
                    v-show="employee.employeeId == iSelected"
                  >
                    <div
                      v-for="option in options"
                      :key="option.id"
                      @click="selectOption(option.id, employee)"
                    >
                      {{ option.text }}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table__paging">
          <div class="textFooter">Tổng số: bản ghi</div>
          <div class="paging--footer">
            <button class="combobox">10 bản ghi trên 1 trang</button>
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
    <EmployeeDetail
      :employeeInput="employeeOfIput"
      v-if="isShowPopup"
      :employeeId="employeeSelected"
      :hidFunction="onCloseForm"
      @emitHidden="onCloseForm"
      :employee="employeeSelected"
    ></EmployeeDetail>
  </div>
</template>
<script>
import EmployeeDetail from "@/css/views/employee/EmployeeDetail.vue";
import axios from "axios";
import BaSearchEmployee from "../../components/base/BaSearchEmployee/BaSearchEmployee.vue";
// import BaTable from '../../components/base/BaTable/BaTable.vue';

export default {
  name: "TheMain",
  /**
   *
   */
  // props chỉ hứng, nhận  dữ liệu
  props: {
    employeeOfInput: null,
    data: Array,
  },
  data() {
    return {
      employees: {},
      // employee: {},
      isShowPopup: false,
      employeeSelected: {},
      employeeOfIput: {},
      options: [
        { text: "Nhân bản", id: 1 },
        { text: "Xóa", id: 2 },
        { text: "Ngừng sử dụng", id: 3 },
      ],
      selectedOption: "",
      fullData: null,
      iSelected: null,
      idEmployeeSelected: null,
    };
  },
  components: {
    EmployeeDetail,
    BaSearchEmployee,
  },
  created() {
    axios("https://localhost:44360/api/Employees").then((res) => {
      console.log("hai", res.data);
      this.employees = res.data;
    });
    // axios.get("https://localhost:44360/api/Employees")
    // .then(res => {
    //     console.log("hai",res.data);
    //     this.employee = res.data;
    // })
    // .catch(error => {
    //     console.error(error);
    // });
  },
  methods: {
    dbClick(employees) {
      this.isShowPopup = true;
      this.employeeSelected = employees;
      this.employeeOfIput = employees;
    },
    addOnClick() {
      this.employeeOfIput = {};
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
    selectOption(indexFunction, employees) {
      this.iSelected = -1;
      switch (indexFunction) {
        case 1:
          // nhân bản
          this.isShowPopup = true;
          this.employeeSelected = employees;
          this.employeeOfIput = employees;
          break;
        case 2:
          // xóa
          this.deleteEmployeeOnClick(employees.employeeId);
          break;
        default:
          break;
      }
    },
    // hàm xóa dữ liệu
    deleteEmployeeOnClick(id) {
      axios
        .delete(`https://localhost:44360/api/Employees/${id}`)
        .then((response) => {
          console.log("Object deleted:", response.data);
          alert("Xóa dữ liệu thành công!");
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    /**
     * sửa 1 đối tượng
     *  */
    //hàm sửa dữ liệu
    updateEmployeeOnClick(employee) {
      // console.log(employee);
      axios
        .put(
          `https://localhost:44360/api/Employees/${this.employeeId}`,
          this.employees
        )
        .then((response) => {
          console.log("Emlpoyee edited:", response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      this.isShowPopup = true;
      this.employeeOfIput = employee.employeeId;
    },
    formatGender(genderName) {
      try {
        if (genderName != null && genderName != undefined) {
          if (genderName == 0) {
            return "Nam";
          }
          if (genderName == 1) {
            return "Nữ";
          }
          if (genderName == 2) {
            return "Khác";
          }
        }
      } catch (error) {
        return "";
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
    employeeSelected: function (newData) {
      console.log(newData.employees);
    },
    employeeOfIput: function (newData) {
      console.log(newData.employees);
    },
    deep: true,
  },
};
</script>
<style scoped></style>
