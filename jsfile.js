var y = document.getElementById("zd");
var z = document.getElementById("ye");
var d = document.getElementById("dy");
var s = document.getElementById("ry");
var a = document.getElementById("myz");
var q = document.getElementById("zzy");
var xx = document.getElementById("yaz");



function check() {
    if (document.getElementById("yaz").value == "") {
        alert("First Name Not Found");
        xx.style.backgroundColor = "red";
		
    }
    if (document.getElementById("zd").value == "") {
        alert("last Name Not Found");
        document.getElementById("zd").style.backgroundColor = "red";
    }
    if (document.getElementById("ye").value == "") {
        alert("Personal Website Not Found");
        document.getElementById("ye").style.backgroundColor = "red";
    }
    if (document.getElementById("dy").value == "") {
        alert("Phone Number Not Found");
        document.getElementById("dy").style.backgroundColor = "red";
    }
    if (document.getElementById("ry").value == "") {
        alert("email Not Found");
        document.getElementById("ry").style.backgroundColor = "red";
    }
    if (document.getElementById("myz").value == "") {
        alert("UserName Not Found");
        document.getElementById("myz").style.backgroundColor = "red";
    }
    if (document.getElementById("zzy").value == "") {
        alert("passWord Not Found");
        document.getElementById("zzy").style.backgroundColor = "red";
    }
    if (document.getElementById("zye").value == "") {
        alert("Please Enter Degree");
        document.getElementById("zye").style.backgroundColor = "red";
    }
    if (document.getElementById("iid").value == "") {
        alert("Please Enter Date");
        document.getElementById("iid").style.backgroundColor = "red";
    }
    if (document.getElementById("lly").value == "") {
        alert("Please Enter A File");
        document.getElementById("lly").style.backgroundColor = "red";
    }
}
function f() {
    if (xx.style.backgroundColor == "red") {
        xx.style.backgroundColor = "#fff";
    }
}
function fy() {
    
    if (y.style.backgroundColor == "red") {
        y.style.backgroundColor = "#fff";
    }
}
function fz() {
    if (z.style.backgroundColor == "red") {
        z.style.backgroundColor = "#fff";
    }
}
function fd() {
    if (d.style.backgroundColor == "red") {
        d.style.backgroundColor = "#fff";
    }
}
function fs() {
    if (s.style.backgroundColor == "red") {
        s.style.backgroundColor = "#fff";
    }
}
function fa() {
    if (a.style.backgroundColor == "red") {
        a.style.backgroundColor = "#fff";
    }
}
function fq() {
    if (q.style.backgroundColor == "red") {
        q.style.backgroundColor = "#fff";
    }
}
function s1() {
    if (document.getElementById("zye").style.backgroundColor == "red") {
        document.getElementById("zye").style.backgroundColor = "#fff";
    }
}
function s2() {
    if (document.getElementById("iid").style.backgroundColor == "red") {
        document.getElementById("iid").style.backgroundColor = "#fff";
    }
}
function s3() {
    if (document.getElementById("lly").style.backgroundColor == "red") {
        document.getElementById("lly").style.backgroundColor = "#fff";
    }
}
if (document.getElementById("yaz").value == "") {
    xx.onclick = f;
}
if (document.getElementById("zd").value == "") {
    y.onclick = fy;
}
if (document.getElementById("ye").value == "") {
    z.onclick = fz;
}
if (document.getElementById("dy").value == "") {
    d.onclick = fd;
}
if (document.getElementById("ry").value == "") {
    s.onclick = fs;
}
if (document.getElementById("myz").value == "") {
    a.onclick = fa;
}
if (document.getElementById("zzy").value == "") {
    q.onclick = fq;
}
if (document.getElementById("zye").value == "") {
    document.getElementById("zye").onclick = s1;
}
if (document.getElementById("iid").value == "") {
    document.getElementById("iid").onclick = s2;
}
if (document.getElementById("lly").value == "") {
    document.getElementById("lly").onclick = s3;
}
document.getElementById("sub").onclick = check;
function DD() {
    var Stringg = document.getElementById("ry").value;
    var qq = Stringg.indexOf("%40");
    var ss = "";
    for (var i = 0; i < qq; i++) {
        ss += Stringg[i];
    }
    if (document.getElementById("ry").value == "") {
        alert("Empty");
    }
    else {
        alert(document.getElementById("ry").value);
    
	}
}
document.getElementById("save").onclick = DD

function save() {
  var name="";
var email=document.getElementById("email").value;
for(var i=0;email[i]!='%40'&&i<elMail.length;i++){

  uname=uname+email[i];
}
 alert("The application of ["+uname+"] is saved!");
}







