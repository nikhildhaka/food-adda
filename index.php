/* php goes here */

<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <link rel="shortcut icon" href="img/favicon.ico"> <link rel="icon" href="img/favicon.ico" type="image/ico">
  <title>Food Adda</title>  
  <link rel="stylesheet" type="text/css" href="css/signup_style.css">
  <link rel="stylesheet" type="text/css" href="css/normalize.css">
  <link rel="stylesheet" type="text/css" href="css/main.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="css/restro.css">
  <link rel="stylesheet" type="text/css" href="css/home_style.css">
  <link rel="stylesheet" type="text/css" href="css/sliderstyle.css">
<link href='http://fonts.googleapis.com/css?family=Gudea' rel='stylesheet' type='text/css'>  
<script type="text/javascript" src="js/validate.js"></script>
  <style type="text/css">
    #login_head
      {
        position: absolute ;
        top: 10px;
        left: 14px;
        width: 70px;
        height: 30px;
        padding-top: 5px;
        text-align: center;
        cursor: pointer;
        /*-moz-border-radius:  7px 7px 0px 0px;
          -webkit-border-radius:  7px 7px 0px 0px ;
          border-radius:  7px 7px 0px 0px;*/
          color:#000 ;
           background: #C7C7C7; 
      }     

    #signup_head
      {
        position: absolute ;
        top: 10px;
        left: 100px;
        width: 70px;
        height: 30px;
        padding-top: 5px;
        text-align: center;
        -moz-border-radius:  7px 7px 0px 0px;
          -webkit-border-radius:  7px 7px 0px 0px ;
          border-radius:  7px 7px 0px 0px;
          cursor: pointer;
          border-bottom: 1px solid #696969;
          background-image: linear-gradient(to bottom, rgba(170, 164, 155, 0.7), #283235);
           /*background: #373737 url("../img/bg.png") 0 0 repeat;*/
      }

    #login_content
        {
          position: absolute;
          top: 40px;
          left: 14px;
          height: 105px;
          width: 400px;
          background: #C7C7C7; 
       
        }

    #pop_signup
        {
            position: absolute ;
            top: 15px;
            left: 225px;
            width: 70px;
            height: 30px;
            padding-top: 5px;
            text-align: center;
            cursor: pointer;
            -moz-border-radius:  7px 7px 0px 0px;
            -webkit-border-radius:  7px 7px 0px 0px ;
            border-radius:  7px 7px 0px 0px;
            color:#00a1d2 ;
            background: #373737 url("img/bg.png") 0 0 repeat; 
        }

  

</style>

  
  <!--[if lt IE 9]><script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>
<body>
  <div id="bar"><p style="color:#102E37;font-size:20px;padding-left:600px;">There is no sincerer love than the love of food.</p></div>
  
  <div id="title"><img src="img/logo.png" style="position:absolute;top:-55px;left:17px;"></div>
  <div id="container">

    <div id="login_head">Login</div>
    <a class="modalLink" href="#" style="text-decoration: none;">
      <div id="signup_head">Signup</div>
    </a>
    <div id="login_content">
        <form method="post" name="login" action="login.php" class="login" onsubmit="return validate_login_form();">
           
          <p>
            <label for="login" style="position:relative;top:-5px;">Email:</label>
            <input type="text" name="email" id="email" style="height:30px;width:265px;background-color: #E9E9E9;color: #000;border: 1px solid #AF9C9C;">
          </p>

          <p>
            <label for="password" style="position:relative;top:-5px;">Password:</label>
            <input type="password" name="password" id="password" style="height:30px;width:265px;background-color: #E9E9E9;color: #000;border: 1px solid #AF9C9C;">
          </p>

          <p class="login-submit" style="top:7px;right:35px;width:40;height:40px;">
            <button type="submit" class="login-button" style="top:-7px;left:-4px;">Login</button>
          </p>
        </form>

    </div>
  </div>   




    <div class="overlay"></div>

    <div id="modal1" class="modal">
      
         <p class="closeBtn">&#935;</p> 
        <div id="pop_signup">Signup</div>
        <form method="post" name="signup" action="register.php" class="signup" onsubmit="return validate_signup_form();">
          
          <p style="padding-top:20px;">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="First name Last name" maxlength="19">
          </p>

           <p>
            <label for="email">Email:</label>
            <input type="text" name="email" id="email" placeholder="email@example.com">
          </p>

           <p>
            <label for="address">Address:</label>
            <input type="text" name="address" id="address" placeholder="Room/Flatno. Bhavan/Residence" maxlength="30">
          </p>
        
           <p>
            <label for="mobile">Mobile no.:</label>
            <input type="text" name="mobile" id="mobile" placeholder="10 digit mobile no." maxlength="10">
          </p>

          <p>
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" placeholder="Same as mobile no." maxlength="10">
          </p>

          <p class="signup-submit" style="padding:8px;">
            <button type="submit" class="signup-button">Login</button>
          </p>

          <div style="position:absolute;top:350px;left:105px;width:370px;height:130px;overflow:hidden;">
            <img id="captcha" src="securimage/securimage_show.php" alt="CAPTCHA Image" />
            <input type="text" name="captcha_code" size="10" maxlength="6" id="captcha_input"/>
            <a href="#" id="change_captcha" onclick="document.getElementById('captcha').src = 'securimage/securimage_show.php?' + Math.random(); return false">[ Different Image ]</a>
          </div>
          
          
        </form>
    </div>
  
    <div id="burst-12"></div>
    <div id="offer">
       <a class="modalLink_offer" href="#" style="position:absolute;top:-21px;left:-24px;"><img src="img/offer1.jpg" style="height:260px;width:260px;"></a>
    </div>
    
     <div class="overlay_offer" ></div>

      <div id="modal1_offer" class="modal_offer" >
      
         <p class="closeBtn_offer">&#935;</p> 
        <pre>



       **  Get EXTRA 5% OFF on ordering from our website.

       **  Top 3 orderers till 30th April get cash prize 
            1.  Rs.200
            2.  Rs.150
            3.  Rs.100

       **  We have kept the minimum bill amount to only 
           Rs. 100 for your convinience.
        </pre>
      </div>
    </div>

    <script src="js/jquery.js"></script>
    <script type='text/javascript' src='js/jquery.modal.js'></script>
    <script type='text/javascript' src='js/site.js'></script>
    <script type='text/javascript' src='js/modal_offer.js'></script>
    <script type='text/javascript' src='js/site_offer.js'></script>
    <!-- <script type="text/javascript" src="js/custom.js"></script> -->
    <script type="text/javascript" src="js/reqjquery.js"></script>
<div class="background"> 
  <img src="img/bg1.jpg" style="width:100%;height:100%;" alt="pic1" /> 
  <img src="img/bg2.jpg" style="width:100%;height:100%;" alt="pic2" /> 
  <img src="img/bg4.jpg" style="width:100%;height:100%;" alt="pic3" />
  <img src="img/bg5.jpg" style="width:100%;height:100%;" alt="pic3" />
  <img src="img/bg6.jpg" style="width:100%;height:100%;" alt="pic3" />
  <img src="img/bg7.jpg" style="width:100%;height:100%;" alt="pic3" />
</div>

 <div id="footer">
     
        <ul>
          <li style="padding-left: 100px;">
            <a href="home.php" class="hlink"> Foodpoint</a>
          </li>
          <li>
            <a href="home.php" class="hlink"> Snacks Point</a>
          </li>
          <li>
            <a href="home.php" class="hlink"> Sizzlers</a>
          </li>
          <li>
            <a href="home.php" class="hlink"> Sagar</a>
          </li>
          <li>
            <a href="home.php" class="hlink"> Coming Soon</a>
          </li>
          <li style="margin-left:0px;margin-right:0px;">
            <a href="https://www.facebook.com/foooodadda" target="_blank" style="top:-9px">
              <img src="img/drink_facebook.png" style="height:50px;width:60px;">
            </a> 
          </li>
          <li style="margin-left:0px;margin-right:0px;">
            <a href="mailto:foooodadda@gmail.com" target="_blank" style="top:-9px">
              <img src="img/gmail.png" style="height:50px;width:60px;">
            </a>
          </li> 
        </ul>

     
   </div>


    
</div>
</body>
</html>
