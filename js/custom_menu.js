

var cart = new Array();                 // contains item + price
var cartItemId = new Array();          // contains id of checkbox
var cartQty = new Array();            // contains quantity of item
var i = 0;
var content = "" ;
var msg = new Array();
var order = new Array();
var total = new Array();
var sum;

var discount;
var dcharges;
var hotel;
function set(hname)
{ 
	if(hname=='foodpoint')
	{ 
		discount=0.95;
		dcharges=10;
                hotel=hname;
	}
	else if(hname=='snackspoint')
	{
		discount=0;
		dcharges=10;
                hotel=hname;
        }
        else if(hname=='sizzlers')
	{
		discount=0.95;
		dcharges=0;
                hotel=hname;
        }
        else if(hname=='sagar')
	{
		discount=0.95;
 		dcharges=0.135;
                hotel=hname;
        }
}

function addToCart(id)
{
	var qtyID = id + "qty";				// id for quantity textbox
	
	if($(id).is(":checked"))          // if checked -> add to cart here id are with # 
	{
	    
	    var qty = $(qtyID).val();    // value of quantity textbox that is to be inserted into cart

	    if(qty==""||qty<=0||qty>99)
	      {	
	      	alert("Please Specify Quantity of item");
	        $(id).prop('checked', false);
	        $(qtyID).val("1");
	      }
	    else
		  { 
		  	cartItemId[i] = id;
		  	cartQty[i] = qty;
			cart[i] = $(id).val();												// item + price
			var n = cart[i].split("_");       									   // find length
			var item = n[0];								   			var qtrprice = n[1];
			var halfprice = n[2];								 // price
			var fullprice = n[3];

                        if(qty=="1/4")
				price = qtrprice;
			else if(qty=="0.5")
				price = halfprice ;
			else
				price = fullprice ;

			var trimID = id.substr(1) + "cart"; 							// remove # and add cart to id only
			content = "<tr id = " + trimID + "> <td style='width:75px;text-overflow: ellipsis;overflow:hidden;'>" + item + "</td>" + "<td style='width:15px;padding-left:10px;'>" + price + "</td>" + "<td style='width:10px;padding-left:8px;'>" + qty + "</td>" + "<td style='width:20px;cursor:pointer;color:#030300;' onclick=remove_item('" + id + "')>Remove</td>";
			$("#tbl_cart").append(content) ;                              // add content table to cart
			msg[i] = item + "-" + price + "-" + qty ;
			order[i] = item + "-" + qty ;
			if(qty!="0.5"&&qty!="1/4")
				total[i] = parseInt(price,10) * parseInt(qty,10);/////////////////////////////////////////////////////////////////
			else
				total[i] = parseInt(price,10);
			/*document.getElementById("total").innerHTML="";*/
			getTotal();
			i++;

		  } 
		  
	}
	else								// to remove entries from cart when checkbox is unchecked
	{
		var x=$(id).val();
		var index=cart.indexOf(x);
		cart.splice(index,1);         // deletes a particular entry from array
		cartItemId.splice(index,1);
		cartQty.splice(index,1);
		msg.splice(index,1);
		order.splice(index,1);
		total.splice(index,1);
		var cartId = id + "cart" ;
		$(cartId).remove();
		$(qtyID).val("1");
		getTotal();
		i--;

	}
	
}

function remove_item(deleteId)         // remove item from cart and remove tick from checkbox on clicking remove
{
	    var y=$(deleteId).val();
		var index=cart.indexOf(y);
		cart.splice(index,1);
		cartItemId.splice(index,1);
		cartQty.splice(index,1);
		msg.splice(index,1);
		order.splice(index,1);
		total.splice(index,1);
		var cartId = deleteId + "cart" ;
		var qtyID = deleteId + "qty" ;
		$(cartId).remove();
		$(deleteId).prop('checked', false);   // for unchecking
		$(qtyID).prop('value',"1");
		getTotal();
		i--;
		
}

function addSelectValue(dropdownID)      // called onchange of select value
{
	id = dropdownID.substr(0,dropdownID.length-3) ; //id without # 
	
	if($("#" + id).is(":checked"))  
	{
		$("#" + id + "cart").remove();

		var z=$("#" + id).val();
		var index=cart.indexOf(z);
		cart.splice(index,1);
		cartItemId.splice(index,1);
		cartQty.splice(index,1);
		msg.splice(index,1);
		order.splice(index,1);
		total.splice(index,1);
		getTotal();
		i--;
		addToCart("#" + id);
	}
}

function again_check()                      // to again tick previousy tick items after different ajax calls according to items present in cart
{
	
		for(var j=0;j<cartItemId.length;j++)
		{
			var checkboxID = cartItemId[j];
			var textboxID = checkboxID + "qty";
			$(checkboxID).prop('checked', true);
			$(textboxID).val(cartQty[j]);
			
		}
}

function getTotal()
{
    sum=0;
	for(var k=0;k<total.length;k++)
	{
		sum+=total[k];
	}
	if(sum!=0)
        {
	 if(discount!=0)
         { 
           if(hotel=="sagar")
            {
              sum=sum*discount;
              sum=sum + sum*dcharges;
            }
           else
	    sum=sum*discount + dcharges;
         }
         else
          {
             sum=sum+dcharges;
          }
        }
        sum=Math.round(sum);
	document.getElementById("notax").innerHTML="&nbsp Total &nbsp&nbsp&nbsp " + sum ;
}
function sendsms(restro)
{ 
  document.getElementById("landing").innerHTML="Please wait...";
if(confirm('Are you sure you want to Place This Order?'))
{ var stri = msg[0];
  var mystr = order[0];
	for(var z=1;z<msg.length;z++)
	{	
		 	stri= stri + "_" + msg[z]; 
		 	mystr= mystr + "_" + order[z];
		
	}
	/*stri+= "Bill" + sum;*/
	if(sum!=0)
	{
		var xmlhttp;

		if (window.XMLHttpRequest)
		  {
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xmlhttp.onreadystatechange=function()
		  {
		  	if(xmlhttp.readyState==3)
     			document.getElementById("landing").innerHTML='<p>wait.....</p>';
     		
			  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			    {
			        
			        
			    	document.getElementById("landing").innerHTML=xmlhttp.responseText;
			    /*	if(xmlhttp.responseText=="Succesfully Ordered .Order will arrive soon. Cash on delivery.")
			    	window.location.reload(true);*/
			    }
			  
		 
		  }

		
		  var myJsonString = cartQty.toString();
		xmlhttp.open("POST","sendsms.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("q="+stri +"&myorder=" + mystr + "&rname="+restro + "&total="+sum + "&qty=" + myJsonString);
	}
}
else {window.location.reload(true);}
}

function final()
{
	var xmlhttp;

		if (window.XMLHttpRequest)
		  {
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xmlhttp.onreadystatechange=function()
		  {
		  	

			  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			    {
			        
			    	if(xmlhttp.responseText=="Invalid Code")
			        {
			        	alert("Invalid Code");
			        }
			        else if(xmlhttp.responseText=="1")
			    	{
			    		document.getElementById("landing").innerHTML="<pre style='margin-top:-5px;'>Successfully Ordered.Your order will arrive soon.Cash on Delivery. Thanks for ordering.</pre>";
			    		setTimeout(function(){window.location.reload(true);},2000);
			    	}
			    	else
			    		document.getElementById("landing").innerHTML=xmlhttp.responseText;
			    	
			    	
			        
			    }
			  
		 
		  }
		  var code = document.getElementById("code").value
		  
		 
		xmlhttp.open("POST","final.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("cd="+code);
	
}