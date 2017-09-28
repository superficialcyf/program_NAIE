$(document).ready(function(){
    let 
    imgDOM=$("#whellBox").find("img"),
    menu=$("#Menu").find("li").find("a"),
    footerMenu=$("#footerMenu").find("li").find("a");
    footerMenuChange();
    var timer;
    var i=-1;
    Mytimer();
    function Mytimer () {
       timer=setInterval(changePic,4000);
    }
    overWord();
    function overWord(){
        let 
        MenuDom=document.getElementById("Menu"),
        hrefDom=MenuDom.getElementsByTagName("a");
        for(let j=0;j<hrefDom.length;j++){
            hrefDom[j].addEventListener("mouseover",function (event){
                let evt= event || window.event;
                    window.clearInterval(timer);
                    let index=menu.index(this);
                    for(let k=0;k<menu.length;k++){
                        menu[k].style.color="darkgrey";
                        imgDOM[k].style.opacity=0;
                    }
                    imgDOM[index].style.opacity=1;
                    this.style.color="black";
                    i=index;
                    Mytimer();
            },false);
        }
    }
    function changePic(){
        i++;
        if(i==8){
           i=0;
           }
        for(let j=0;j<imgDOM.length;j++){
            imgDOM[j].style.opacity=0;
        }
            imgDOM[i].style.opacity=1;
        for(let k=0;k<menu.length;k++){
            menu[k].style.color="darkgrey";
        }
        menu[i].style.color="black";
        console.log(i);
    }
    
    function footerMenuChange(){
        footerMenu.each(function (){
            this.onmouseover = function (){
                this.style.color="black";
            }
            this.onmouseleave = function (){
                this.style.color="darkgrey";
            }
        })
    }
    
});
    