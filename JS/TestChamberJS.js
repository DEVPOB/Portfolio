let OnphoneSection = document.getElementById("on-phone");
if(window.innerWidth <=900){
    console.log("TEST");
}
function on_Phone_Anyway(){
    OnphoneSection.remove();
}
function On_Phone_Ok(){
    window.close();
}
function AlertNotWork(){
    alert("In progress")
}
