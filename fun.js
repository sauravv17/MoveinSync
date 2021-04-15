var count=0;
function id(){
  count++;
  return count;
}

function convert(){
 var d = new Date();
 var day = d.getDay();
 var month = d.getMonth();
 var date = d.getDate();
 var year = d.getFullYear();
 var hour = d.getHours();
 var min = d.getMinutes();
 var sec = d.getSeconds();


 var val = d.toString().split(' ')[0] + " " + d.toLocaleString('default', { month: 'short' }) + " " + date + " " + year + " " + hour + ":" + min + ":" + sec;
 return val;
}



function saveUser()
{
	var table = document.getElementById('sample');
	var name = document.getElementById('name').value;
	var city = document.getElementById('city').value;
	var degree = document.getElementById('degree').value;
	var bl = " ";

	if(name.length==0 || city == 'Enter your city' || degree.length==0){
		alert("Please Enter All the details")
	}else{
		bl += "<tr><td>" + name + "</td><td>" + id() + "</td><td>" + city + "</td><td>" + degree + "</td><td>" + convert() + "</td></tr>";
		var tbody = document.querySelector("#sample tbody");
	    var tr = document.createElement("tr");

	    tr.innerHTML = bl;
	    tbody.appendChild(tr);
	    document.getElementById("plus").reset(); 
	    document.getElementById('plus').style.display='none';
	}
}