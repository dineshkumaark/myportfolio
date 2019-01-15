window.onscroll = function (){
    if(document.documentElement.scrollTop > 100){
        document.getElementById('nav-bar').style.background = "white";
        document.getElementById('nav-bar').style.boxShadow = "0px 7px 21px -5px rgba(0,0,0,0.75)";
        const li = document.querySelectorAll('a');
   li.forEach((li)=>{ li.style.color = "blueviolet"});
    }else{
        document.getElementById('nav-bar').style.background = "";
        document.getElementById('nav-bar').style.boxShadow = "";
        const li = document.querySelectorAll('a');
   li.forEach((li)=>{ li.style.color = "aliceblue"});
    }
}