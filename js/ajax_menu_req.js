

function show_menu(str)
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
        
        document.getElementById("main_menu").innerHTML=xmlhttp.responseText;
        again_check(); // to tick checkbox again on click of category...
    }
  else
     document.getElementById("main_menu").innerHTML='<img style="position:relative;top:200px;left:330px;" src="img/ajax-loader.gif">';
  }
  var id = $(".category").attr("id");
  str= id + "_" +str ;
xmlhttp.open("POST","menu_content.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("q="+str);

}