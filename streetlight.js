var hour = new Date().getHours();



if(hour>=18 || hour<=3)
    {
        document.getElementById("image").src="images/night.jpg";
        document.getElementById("click").innerHTML="Good Night";
    }
    if(hour>=5 && hour<12){
        document.getElementById("image").src="images/daytime.jpg";
        document.getElementById("click").innerHTML="Good Morning";
    }

if(hour>=12 && hour<18){
    document.getElementById("image").src="images/daytime.jpg";
    document.getElementById("click").innerHTML="Good afternoon";
    }

function streetlight(){
    if(hour>=18 || hour<=3)
    {
        document.getElementById("image").src="images/night.jpg";
        document.getElementById("click").innerHTML="Good Night";
    }
    if(hour>=5 && hour<12){
        document.getElementById("image").src="images/daytime.jpg";
        document.getElementById("click").innerHTML="Good Morning";
    }

if(hour>=12 && hour<18){
    document.getElementById("image").src="images/daytime.jpg";
    document.getElementById("click").innerHTML="Good afternoon";
    }


}

document.getElementById("time").innerHTML=new Date().getTime;