var school=[];
function Submit(){
var name1 = document.getElementById("students1").value ;

school.push(name1);

document.getElementById("display").innerHTML=school.toString();


document.getElementById("show_students").style.display="inline-block";
}
function Showing(){
    var i=school.join("<br>");
    document.getElementById("d2").innerHTML=i.toString();

}
function Searching_st(){
    var s=document.getElementById("searching_students").value;
    var found=0;
    for(var j=0;j<school.length;j++){
        if(s==school[j]){
         found=found+1;   
        }
    }
    document.getElementById("d3").innerHTML="name found "+found+"times";
}
