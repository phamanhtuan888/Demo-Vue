function valid(){
    var txtEmployeeCode = document.getElementById('txtEmployeeCode').value;
    if (txtEmployeeCode === "") {
        document.getElementById('error_repass').innerHTML = "Không được để trống";
        return false;

    } else {
        document.getElementById('error_repass').innerHTML = "";
    }
}
export default valid;