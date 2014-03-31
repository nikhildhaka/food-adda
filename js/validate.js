function validate_signup_form()
{
	var x=document.forms["signup"]["name"].value;
	var y=document.forms["signup"]["email"].value;
	var atpos=y.indexOf("@");
	var dotpos=y.lastIndexOf(".");
	var z=document.forms["signup"]["address"].value;
	var u=document.forms["signup"]["mobile"].value;
	var v=document.forms["signup"]["password"].value;
	var size=u.length;

	if (x==null || x=="")
		 {
		  alert("Name must be filled out");
		  return false;
		 }
	else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length)
		 {
		  alert("Not a valid e-mail address");
		  return false;
		 }
	else if (z==null||z=="")
		{
		 alert("Please give your address");
		 return false;
		}
	else if (u==null||u=="")
		{
		 alert("Please give your mobile no.");
		 return false;
		}
	else if(size==10)
		{
			for(var i=0;i<size;i++)
			{
				if(u[i]!="0"&&u[i]!="1"&&u[i]!="2"&&u[i]!="3"&&u[i]!="4"&&u[i]!="5"&&u[i]!="6"&&u[i]!="7"&&u[i]!="8"&&u[i]!="9")
				{
					alert("Please give a valid mobile no.");
					return false;
				}
			}
			if (v==null||v=="")
			{
				 alert("Please give a password");
				 return false;
			}
			else if(v!=u)
			{
				 alert("Please set your mobile no. as password.It is for your convinience.");
				 return false;
			}
		}
	else if(size!=10)
		{
			alert("Please give a valid mobile no.");
			return false;
		}

}

function validate_login_form()
{
	var x=document.forms["login"]["email"].value;
	var y=document.forms["login"]["password"].value;

	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");

	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
		 {
		  alert("Please enter a valid e-mail address");
		  return false;
		 }
	else if (y==null||y=="") 
		 {
		  alert("Please enter your password");
		  return false;
		 };
}