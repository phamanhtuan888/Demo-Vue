

window.onload = function(){
    new EmployeePage();
    createEvents();

    
};


class EmployeePage {
    ListEmployee;
    constructor(){
        this.initEvents();
        this.loadData();
    }
    /*
    *load dữ liệu cho table
    */ 
    loadData(){
        try {
            // gọi api 
            fetch("https://apidemo.laptrinhweb.edu.vn/api/v1/Employees")
            .then(res=> res.json())
            .then(data =>{
                console.log(data);
                // debugger
                this.ListEmployee= data;
                //build table
                this.buildDataTable(data);

            })
        } catch (error) {
            console.log(error);
        }
    }

    buildDataTable(data){
        try {
            let table = document.getElementById("tableEmployee");
            let bodyTable = table.lastElementChild;
            // let bodyTable = table.getElementsByTagName("tbody")
            //duyệt các tiêu đề của table và đọc các thông tin được khai báo    
            let hhList = table.getElementsByTagName("th");
            // duyệt các đối tượng trong ds dữ liệu và lấy ra các thông tin tương ứng và buidl tr..
            for(const item of data){
                let trElement= document.createElement("tr");
                for(const col of hhList){
                    //lấy ra type:
                    const type = col.getAttribute("type");

                    if(type == "checkbox"){
                    //checkbox
                    let tdCheckBox = document.createElement("td");
                    tdCheckBox.classList.add("text-align-middle");
                    let checkboxElement = document.createElement("input");
                    checkboxElement.setAttribute("type","checkbox")
                    tdCheckBox.append(checkboxElement);
                    trElement.append(tdCheckBox);
                    }
                    else{
                        //lấy ra các model-name
                        const modelName = col.getAttribute("model-name");
                        const value=item[modelName];
                        let tdElement = document.createElement("td");
                        tdElement.textContent=value;
                        trElement.append(tdElement);
                        }
                }
                
                bodyTable.append(trElement);
            }

            // tạo từng dòng dữ liệu tương ứng từng đối tượng trong danh sách nhân viên sau đó đẩy lên table
            // 1. duyệt từng đối tượng trong danh sách
            // for (const item of this.ListEmployee) {
            // // 2. lấy ra các thông tin cần thiết
            //     const employeeCode = item.EmployeeCode;
            //     const fullName = item.FullName;
            //     const dateOFBirth = item.DateOfBirth;
            //     const genderName = item.GenderName;
                
            //     // 3. buil html thẻ hiện các thông t.in trên table
            //     //*tạo el tr HTML
            //     let trElement = document.createElement("tr");
            //         //checkbox
            //     let tdCheckBox = document.createElement("td");
            //     tdCheckBox.classList.add("text-align-middle");
            //     let checkboxElement = document.createElement("input");
            //     checkboxElement.setAttribute("type","checkbox")
            //     tdCheckBox.append(checkboxElement);


            //     trElement.append(tdCheckBox);
            //     // MNV
            //     // let tdEmployee = document.createElement("td");
            //     // tdEmployee.classList("text-align-left");
            //     // tdEmployee.textContent = employeeCode;
            //     // Dùng chung 1 function
            //     trElement.append(this.buildTdElement(employeeCode));

            //     //Ten
            //     // let tdFullName = document.createElement("td");
            //     // tdFullName.classList("text-align-left");
            //     // tdFullName.textContent = fullName;
            //     trElement.append(this.buildTdElement(fullName));
            //     //GIOI TINH
            //     trElement.append(this.buildTdElement(genderName,"text-align-middle",1));
            //     //NGAYSINH
            //     trElement.append(this.buildTdElement(dateOFBirth,2));

                

            //     //4 . đẩy vảo table
            //     // xác định vị trí của table để append
            //     //bytagname
            //     // bodyTable[0].append(trElement);
            //     //childlast
            //     bodyTable.append(trElement);
            // }
            
        } catch (error) {
            console.log(error);
        }
    }

    buildTdElement(value, className = "text-align-left" , formmatType){
        let tdElement = document.createElement("td");
        try {
            tdElement.classList.add("text-align-left");
            tdElement.textContent = value;
            //định dạng dữ liệu
            switch (formmatType) {
                case 1:
                    //định dạng ngày tháng
                    value = this.formmatDate(value);
                    break;
                case 2:
                    //định dạng tiền
                    value = this.formmatMoney(value);

                    break;
                default:
                    // return value;
                    break;
            }
            // tdElement.textContent=value;
            return tdElement;
        } catch (error) {
            return tdElement;
        }
    }
    formmatDate(date){
        try {
            date = new Date(date);
            // lấy ra ngày
            let dateValue = date.getDate();
            // tháng
            let monthValue = date.getMonth()+1;
            // năm
            let yearValue = date.getFullYear();
            // return `${dateValue}/${monthValue}/${yearValue}`;
            return `${dateValue}/${monthValue}/${yearValue}`;
        } catch (error) {
            return "";
        }
    }
    formmatMoney(money){
        try {
            
        } catch (error) {
            return "";
        }
    }
    initEvents(){
        try {
            
        } catch (error) {
            console.log(error);
            
        }
    }
}
// function loadData (){
//     console.log("goi api load data!");
// }

function createEvents(){
    try {
        // 1 obj
        // document.getElementById("btnCancel").addEventListener("click",onCloseForm);
        // document.getElementById("txtEmployeeCode").addEventListener("input",onValidateFiedEmpty());
        // document.getElementById("txtEmployeeCode").addEventListener("blur",onValidateFiedEmpty());
        // document.getElementById("txtFullName").addEventListener("blur",onValidateFiedEmpty());
        
        // objs cung chuc nang
        // document.getElementById("txtDate").addEventListener("input",onValidateTime());
        document.querySelectorAll("[required]").forEach(function(el) {
            el.addEventListener("blur",onValidateFiedEmpty);
        })
    } catch (error) {
        console.log(error);
    }
}
// function onValidateTime() {
//     let input= document.getElementById("txtDate");
//     const dateT= input.value;
   
// }
function onValidateFiedEmpty(){
    try {
        // lấy ra value trong input vừa nhập
        // let input = document.getElementById("txtEmployeeCode");
        let input= this;
        let elErrorInfo = this.nextElementSibling;
        let errorExits = this.nextElementSibling;
        const value= input.value;
        // kieerm tra trong
        if (value.trim() == "".trim()|| value == null || value == undefined) {
            // bao loi neu trong
            console.log("Dữ liệu mã nhân viên k được phép trống");
            //thay doi mau
            // input.style.borderColor= "red";
            input.classList.add("input--error");
            //hiện thị thông tin lỗi
            //1. lấy ra thông tin lỗi
            //2. hiện thị
            // elErrorInfo.style.display= 'block';
            //3. Thêm phần hiện thị thông tin lỗi:
            //kiểm tra xem đã có ele lỗi chưa
            if(errorExits == null)
            {
                //tạo el thông tin lỗi
            let elError = document.createElement("div");
            elError.classList.add("error-infor");
            elError.textContent= "Không được để trống";
            // sử dụng ele cha của input và append
            this.parentElement.append(elError);
            }

            //tạo ele thông tin lỗi
            
            
        } else {
            console.log("ok");
            //thay doi mau do
            input.classList.remove("input--error");
            if(errorExits != null)
            {   
                errorExits.remove();
            }
            // input.style.borderColor= "#50B83C";
            //tắt lỗi
            // elErrorInfo.style.display= 'none';
            
            
        }
    } catch (error) {
        console.log(error);
    }
}



// ccách gán sự kiện 1
function btnAddOnclick(){   
            //hien thi form them moi
    document.getElementById("frmDetail").style.display = "block";
}


function onCloseForm(){
    document.getElementById("frmDetail").style.display= "none";
}








