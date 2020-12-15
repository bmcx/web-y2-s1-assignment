import React from 'react';


function Profilen(){
    return(
      
<div>
<h1><b>Profile</b></h1>
<img src="img_girl.jpg" alt="Girl in a jacket" style="width:50px;height:60px;"/>
<p>User name:Kamal</p>
<p>Character:Keels staff</p>
<style>
background-image: url(./keels.png);
</style>
      <table>
        
      <tr>
        <td>Name:</td>
        <td>Smith</td>
       
      </tr>
      <tr>
        <td>Contact Number:</td>
        <td>+94xxxxxxxxxx</td>
      
      </tr>
      <tr>
        <td>E-mail:</td>
        <td>keels@gmail.com</td>
      </tr>
      <tr>
          <td>Id:</td>
          <td>12345</td>
         
        </tr>
        <tr>
          <td>Position:</td>
          <td>chairman</td>
        
        </tr>
        <tr>
          <td>Branch:</td>
          <td>Kurunegala</td>
        </tr>
        
    </table>
    <p>Date/Time: <span id="datetime"></span></p>

    <p>Date/Time:</p>
<p id="datetime"></p>
<p>Date/Time: <span id="datetime"></span></p>

<script>
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();
</script>
          </div>
    );
}
export default Profilen;