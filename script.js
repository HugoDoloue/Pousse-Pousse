function getAllId()
{
varTab=new Array;

tds=document.getElementsByTagName("td");
for(i=0;i<tds.length ;i++)
{
 varTab[i]= tds[i].getAttribute("id");

}

return varTab;
}

window.onload=function()
{
let TableauId= getAllId();
display(TableauId);
console.log(TableauId);
}

function display(arr)
{
for(i=0;i<28;i++) //balaye les 28 cases
{
var img= "url(images/" + i+".jpg)"; //fabrique l'image
console.log(img);
document.getElementById(arr[i]).style.backgroundImage=img;
}






}
