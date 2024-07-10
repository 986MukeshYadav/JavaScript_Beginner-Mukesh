//generate a random color
const randomColor=function(){
    const hex ='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color +=hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let intervalid;
const startColor = function(){
    if(!intervalid){
        intervalid = setInterval(changeColor,1000);
    
}
function changeColor(){
    document.body.style.backgroundColor=randomColor();
}
};
const stopColor = function(){
    clearInterval(intervalid);
    intervalid=null;
};
document.querySelector('#start').addEventListener('click',startColor);
document.querySelector('#stop').addEventListener('click',stopColor);
