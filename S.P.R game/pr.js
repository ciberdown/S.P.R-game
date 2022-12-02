let rndNum = Math.floor(Math.random() * 3);//0,1,2
let cpu_choose = ['cpu-paper','cpu-rock','cpu-scissors'];//0:paper , 1:rock ,3:scissors
let rndChoose = '#'+cpu_choose[rndNum] ;
rndNum+=1;//1,2,3
let user=0,cpu=0,user_choose,A;
cpuImages = document.querySelectorAll('.img-cpu-choosed');
userImages = document.querySelectorAll('.img-items');


document.querySelector("#paper").addEventListener('click',clickOnImgPaper);
document.querySelector("#rock").addEventListener('click',clickOnImgRock);
document.querySelector("#scissors").addEventListener('click',clickOnImgScissors);
document.querySelector("#refreshbtn").addEventListener('click',clickRefresh);
document.addEventListener('keydown',pressKeyFunc);

function pressKeyFunc(event){
    event.key == 'r'?clickRefresh():null;
    event.key == 'c'?ACfunc():null;
}
function clickOnImgPaper(){
    defaultTasks(user_choose = 1);
}
function clickOnImgRock(){
    defaultTasks(user_choose = 2);
}
function clickOnImgScissors(){
    defaultTasks(user_choose = 3);
}
function clickRefresh(){
    for(i=0;i<3;i++){
        userImages[i].classList.remove('hidden');
    }
    cpuImages[rndNum-1].classList.add('hidden')
    rndNum = Math.floor(Math.random() * 3);//0,1,2
    rndChoose = '#'+cpu_choose[rndNum];
    rndNum+=1;//1,2,3
}
function ACfunc(){
    cpu == 3?alert("You Lose Bro!"):null;
    user == 3?alert("You Won! great job"):null;
    clickRefresh();
    user = 0;
    cpu = 0;
    document.querySelector("#user-point").textContent = user;
    document.querySelector("#cpu-point").textContent = cpu;
}
function defaultTasks(user_choose){
    for(i=0;i<3;i++){
        if(i != (user_choose-1)){userImages[i].classList.add('hidden')}
    }
    cpuImages[rndNum-1].classList.remove('hidden');//document.querySelector(rndChoose).style.setProperty('display','')
    A = calculations(rndNum , user_choose);
    cpu+=A[0];
    user+=A[1];
    document.querySelector("#user-point").textContent = user;
    document.querySelector("#cpu-point").textContent = cpu;
    setTimeout(function(){if(cpu==3){ACfunc()}else if(user==3){ACfunc()}},100);//delay in miliseconds for alert win or lose
}
function calculations(cpu_choose , user_choose){
    const obj = {A1:[0,0],A2:[1,0],A3:[0,1]}
    if(cpu_choose == user_choose){return obj.A1;}
    else if(cpu_choose==1 && user_choose==2){return obj.A2}
    else if(cpu_choose==1 && user_choose==3){return obj.A3}
    else if(cpu_choose==2 && user_choose==1){return obj.A3}
    else if(cpu_choose==2 && user_choose==3){return obj.A2}
    else if(cpu_choose==3 && user_choose==1){return obj.A2}
    else if(cpu_choose==3 && user_choose==2){return obj.A3}
}