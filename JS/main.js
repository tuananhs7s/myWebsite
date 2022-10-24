var a0 = document.querySelector("#Header-MenuBtnGrp-OpenBtn");
var b0 = document.querySelector("#Header-NaviggationBar");
var b1 = document.querySelector("#Header-NaviggationBar-BackBtn");
var b2 = document.querySelector("#Header-NaviggationBar-CloseButton");
var b3 = document.querySelector("#Header-NaviggationBar-Title");
var c0 = document.querySelector("#Header-MenuList");
var c1  = document.querySelectorAll(".Header-MenuList-Item");
var c11 = document.querySelectorAll(".H-ML-I-MenuList");
var d1 = document.querySelector("#Header-MenuBtnGrp-SearchBtn");
var e0 = document.querySelector("#Header-SearchTab");
var e1 = document.querySelector("#Header-SearchTab-CloseBtn"); 
var f = document.querySelectorAll(".title1");

// d1.addEventListener("click", function()
// {
//     e0.style.top = "0";
// })
// e1.addEventListener("click", function()
// {
//     e0.style.top = "-100%";
// })

function codeforsmalldevice()
{
    var ss;
    // for openning 1st-layers of the menu
    a0.addEventListener("click", a0.fn_a = function fn_a()
    {        
        c0.style.left = "0";
        c0.style.transition = "0.5s";
        b0.style.left = 0;
        b0.style.transition = "0.5s";
    })
    b2.addEventListener("click", function()
    {       
        
        c0.style.left = "100%";
        c0.style.transition = "0.2s";

        b1.style.display = "none";
        b0.style.left = "100%";
        b0.style.transition = "0.2s";
        if(ss != undefined) 
        {
            c11[ss].style.left = "100%";   
            c11[ss].style.transition = "0.2s";
        }
        b3.innerHTML = "Menu";
        
    })
    // for openning 2nd-layers of the menu
    function asd(x)
    {
        b1.addEventListener("click", b1.fn_b = function fn_b()
        {
            a0.style.display = "flex"; 
            c0.style.left = "0";
            c0.style.transition = "0.2s";           
            c11[x].style.left = "100%";
            c11[x].style.transition = "0.2s";
            b1.style.display = "none";
            b3.innerHTML = "Menu";
        })
        c1[x].addEventListener("click", c1[x].fn_c = function fn_c()
        {
            c0.style.left = "-100%";
            c0.style.transition = "0.5s";
            c11[x].style.left = "0";
            c11[x].style.transition = "0.5s";
            b1.style.display = "flex";
            b3.innerHTML = f[x].innerHTML;
            ss = x;
        })
    }
    for(i = 0; i < c1.length; i++){     asd(i);    }
}

if(window.innerWidth >= 800){    /*there's nothing to do here*/    }
else                        {    codeforsmalldevice();             }

var media_query = 'only screen and (min-width: 800px)';
window.matchMedia(media_query).addEventListener('change', function() 
{
	var matched = this.matches;    
	if(matched)
    {
        // reset a part of the css for large device
        a0.style.display = "none";
        c0.style.left = "auto";
        b0.style.left = "100%";
        for(i = 0; i < c11.length; i++){    c11[i].style.left = "auto";   }
        b1.style.display = "none";
        // remove all events of the menu
        a0.removeEventListener('click',a0.fn_a, false);
        b1.removeEventListener('click',b1.fn_b, false);        
        for(i = 0; i < c1.length; i++ ){    c1[i].removeEventListener('click', c1[i].fn_c, false);   }        
    }
	else
    {
        // reset a part of the css for small device
        a0.style.display = "flex";
        
        b3.innerHTML = "Menu";
        c0.style.left = "100%";
        for(i = 0; i < c1.length; i++){    c11[i].style.left = "100%";   }
        // add all events of the menu
        codeforsmalldevice();
    }
});