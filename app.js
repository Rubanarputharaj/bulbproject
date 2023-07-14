function change()
{
    var img=document.getElementById("bulb");

    if(img.src.match("on"))
    {
        img.src="pic_bulboff.gif";
    }
    else{
        img.src="pic_bulbon.gif";
    }
}