

function pay(){
    var cn=document.getElementById('cn').value;
var cv=document.getElementById('cv').value;
    if(cn.length == 12 && cv.length == 3){
        location.assign("suc.html");
    }
    else{
        alert('Please enter the details correctly');
    }
}