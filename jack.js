function getfile(file,callback){
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
      if(xhr.readystate === 4 && xhr.state== "200"){
        callback(xhr.responseText);
      }
    }
    xhr.send();
}

getfile("my2.json",function(text){
let data=JSON.parse(text);
console.log(data);
});
function basicinfo(basic) {
  var profile=document.getElementById("basics");
  var name=document.createElement("h2");
  name.innerHTML=basic.name;
  name.appendChild(name);
  var phone=document.createElement("h3");
  phone.innerHTML=basic.phone;
  profile.appendChild(phone);
  var email=document.createElement("h4");
  email.innerHTML=basic.email;
  profile.appendChild(email);
}
