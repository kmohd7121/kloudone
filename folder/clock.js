function currentTime24Hour()
{
    var date=new Date();//creating object of class
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);  
    sec = updateTime(sec);
    var midday = "AM";
    midday = (hour>=12) ? "PM" : "Am";
    hour =(hour==0) ? 12 : ((hour>12) ? (hour-12) : hour);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " "+midday;
    var t = setTimeout(function(){
        currentTime24Hour()
    },100000) ;
}
///This  function is used  just for format the time
function updateTime(k)
{
    if(k < 10){
        return "0" + k;
    }
    else{
        return k;
    }
}
function format24(){
    document.getElementById("clock").innerText="";
    currentTime24Hour();
}
//start with 12 hour format.
function currentTime12Hour()
{
    var date=new Date();//creating object of class
    var hour =date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour>=12) ? "PM" : "Am";
    hour =(hour==0) ? 12 : ((hour>12) ? (hour-12) : hour);
    //assign hour in 12 
    hour = updateTime(hour);
    min = updateTime(min);  
    sec = updateTime(sec);  
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " +midday;
    var t = setTimeout(function(){
        currentTime24Hour()
    },100000) ; 
}
function format12(){
    document.getElementById("clock").innerText="";
    currentTime12Hour();
}
