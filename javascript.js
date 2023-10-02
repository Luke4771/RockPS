
function getComputerChoice (){
    let cpuselect = Math.floor(Math.random()*100);
    console.log(cpuselect);
    if (cpuselect <= 33){
        return rock;
    }

    else if (cpuselect >=66){
        return paper; 
    }

    else{
        return scissors;
    }
}