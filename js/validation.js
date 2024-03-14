// JavaScript Document validation
function echeck(str) {
		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   alert("Invalid E-mail ID")
		   return false
		}

		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   alert("Invalid E-mail ID")
		   return false
		}

		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr-1){
		    alert("Invalid E-mail ID")
		    return false
		}	
		 if (str.indexOf(at,(lat+1))!=-1){
		    alert("Invalid E-mail ID")
		    return false
		 }

		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    alert("Invalid E-mail ID")
		    return false
		 }

		 if (str.indexOf(dot,(lat+2))==-1){
		    alert("Invalid E-mail ID")
		    return false
		 }
		
		 if (str.indexOf(" ")!=-1){
		    alert("Invalid E-mail ID")
		    return false
		 }
 		 return true					
}


  

function validate(){

	    
	     if(document.contactform.name.value==''){
	alert("Please Enter 'Your Name' !");
	  document.contactform.name.focus();
	  return false;
	 } 

	  if (echeck(document.contactform.email.value)==false){
	  document.contactform.email.focus();
	  return false;
	 } 
	 	  if(document.contactform.country.value==''){
	alert("Please Select 'Your Country' !");
	  document.contactform.country.focus();
	  return false;
	 } 
	 if ((document.contactform.mobile.value==null)||(document.contactform.mobile.value=="")){
		alert("Please Enter your Contact Number")
		document.contactform.mobile.focus();
		return false;
	}
	 var len=document.contactform.mobile.value;
	  if (len.length < 6 || len.length > 12)
	 {
		alert("Please enter a valid 'Phone Number!'");
		document.contactform.mobile.focus();
		return false;		 
		 }
      if(document.contactform.date.value==''){
	alert("Please select 'Travel Date' !");
	  document.contactform.date.focus();
	  return false;
	 } 
	 	  if(document.contactform.adults.value==''){
	alert("Please Select 'No. of Adults' !");
	  document.contactform.adults.focus();
	  return false;
	 } 
	 	  if(document.contactform.kids.value==''){
	alert("Please Select 'No. of Kids' !");
	  document.contactform.kids.focus();
	  return false;
	 } 
	 	  if(document.contactform.duration.value==''){
	alert("Please Select 'Travel Duration' !");
	  document.contactform.duration.focus();
	  return false;
	 } 
	 if(document.contactform.enquiry.value==''){
	alert("Please Write 'Your Requirements' !");
	  document.contactform.enquiry.focus();
	  return false;
	 } 

	return true;
}
