//your JS code here. If required.
let form = document.getElementById("simpleForm");

async function validateForm(e) {
	// e.preventDefault();
  try{  
	  let x =  document.forms["myForm"]["fname"].value;
  let y =  document.forms["myForm"]["fage"].value;
  if (x == "" || y=="") {
    alert("Please enter valid details");
    return false;
  }
	else{
		let response = await resolvePromise(x,y);
		alert(response);
	}
  }
	catch(e){
		alert(e);
	}
}

function resolvePromise(name,age){
	let condition;
	if(age>18){
		condition = true;
	}else{
		condition = false;
	}
	return new Promise((resolve,reject)=>{
		let id = setTimeout(()=>{
			clearTimeout(id);
			if(condition){
				resolve(`Welcome, ${name}, You can vote.`);
			}
			else{
				reject(`Oh sorry ${name}, You aren't old enough.`);
			}
		},4000);
	});
}

