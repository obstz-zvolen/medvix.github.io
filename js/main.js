function loaded(){
document.getElementsByTagName("video")[0];
setInterval(loop,1e3)}function loop()
{
document.getElementsByTagName("title")[0].innerHTML=titleText[x++%titleText.length]

}
document.addEventListener?document.addEventListener("DOMContentLoaded",function(){loaded()}):document.attachEvent&&document.attachEvent("onreadystatechange",function(){loaded()})


;var x=0,titleText=["SELLING","AND","Jaccko","BOOSTING","SERVICE"];