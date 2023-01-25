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
console.log(TableauId);
}

