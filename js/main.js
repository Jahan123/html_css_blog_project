responsiveNavbar();
function responsiveNavbar(){
    const wrraperBar = document.getElementsByClassName('wrapper-bar')[0];
    const navbar = document.getElementsByClassName('nav')[0];
    wrraperBar.addEventListener('click',function(){
        if(navbar.classList.length == 1){
            navbar.className+=" toggle-Height";
        }else {
            navbar.className = "nav";
        }
    });
}


const containers = document.getElementsByClassName('container');
const prev = document.getElementsByClassName('prev')[0];
const next = document.getElementsByClassName('next')[0];
count = 0;
carouselNavigator(count);
function carouselNavigator(count){
for(i=0;i<containers.length;i++){
    if(i== count){
       containers[count].style.display = "";
    }else{
        containers[i].style.display = "none";
    }
}
}
prev.addEventListener('click',function(){
    count-=1;
    if(count < 0){
        count = containers.length - 1;
    }
    carouselNavigator(count);
});

next.addEventListener('click',function(){
    count+=1;
    if(count > containers.length - 1){
        count = 0;
    }
    carouselNavigator(count);
})

