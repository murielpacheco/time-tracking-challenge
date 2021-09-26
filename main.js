//declarando variáveis
const API_URL='data.json'; // colocando o meu .json em uma variável (podemos chamá-lo pelo nome do arquivo também)

const workCurrent = document.querySelector('.work-current');
const workPrevious = document.querySelector('.work-previous');

const playCurrent = document.querySelector('.play-current');
const playPrevious = document.querySelector('.play-previous');

const studyCurrent = document.querySelector('.study-current');
const studyPrevious = document.querySelector('.study-previous');

const exerciseCurrent = document.querySelector('.exercise-current');
const exercisePrevious = document.querySelector('.exercise-previous');

const socialCurrent = document.querySelector('.social-current');
const socialPrevious = document.querySelector('.social-previous');

const selfCareCurrent = document.querySelector('.selfcare-current');
const selfCarePrevious = document.querySelector('.selfcare-previous');

async function getDataDaily(){
    const response = await fetch(API_URL);
    const data= await response.json();
   
    workCurrent.innerHTML=data[0]['timeframes']['daily']['current']+" hrs";
    workPrevious.innerHTML="Yesterday - "+data[0]['timeframes']['daily']['previous']+" hrs";
    
    playCurrent.innerHTML=data[1]['timeframes']['daily']['current']+" hrs";
    playPrevious.innerHTML="Yesterday - "+data[1]['timeframes']['daily']['previous']+" hrs";
    
    studyCurrent.innerHTML=data[2]['timeframes']['daily']['current']+" hrs";
    studyPrevious.innerHTML="Yesterday - "+data[2]['timeframes']['daily']['previous']+" hrs";
    
    exerciseCurrent.innerHTML=data[3]['timeframes']['daily']['current']+" hrs";
    exercisePrevious.innerHTML="Yesterday - "+data[3]['timeframes']['daily']['previous']+" hrs";
    
    socialCurrent.innerHTML=data[4]['timeframes']['daily']['current']+" hrs";
    socialPrevious.innerHTML="Yesterday - "+data[4]['timeframes']['daily']['previous']+" hrs";
    
    selfCareCurrent.innerHTML=data[5]['timeframes']['daily']['current']+" hrs";
    selfCarePrevious.innerHTML="Yesterday - "+data[5]['timeframes']['daily']['previous']+" hrs";

}


async function getDataWeekly(){
    const response = await fetch(API_URL);
    const data= await response.json();

    workCurrent.innerHTML=data[0]['timeframes']['weekly']['current']+" hrs";
    workPrevious.innerHTML="Last Week - "+data[0]['timeframes']['weekly']['previous']+" hrs";
    
    playCurrent.innerHTML=data[1]['timeframes']['weekly']['current']+" hrs";
    playPrevious.innerHTML="Last Week - "+data[1]['timeframes']['weekly']['previous']+" hrs";
    
    studyCurrent.innerHTML=data[2]['timeframes']['weekly']['current']+" hrs";
    studyPrevious.innerHTML="Last Week - "+data[2]['timeframes']['weekly']['previous']+" hrs";
    
    exerciseCurrent.innerHTML=data[3]['timeframes']['weekly']['current']+" hrs";
    exercisePrevious.innerHTML="Last Week - "+data[3]['timeframes']['weekly']['previous']+" hrs";
    
    socialCurrent.innerHTML=data[4]['timeframes']['weekly']['current']+" hrs";
    socialPrevious.innerHTML="Last Week - "+data[4]['timeframes']['weekly']['previous']+" hrs";
    
    selfCareCurrent.innerHTML=data[5]['timeframes']['weekly']['current']+" hrs";
    selfCarePrevious.innerHTML="Last Week - "+data[5]['timeframes']['weekly']['previous']+" hrs";
}



async function getDataMonthly(){
    const response = await fetch(API_URL);
    const data= await response.json();
   
    workCurrent.innerHTML=data[0]['timeframes']['monthly']['current']+" hrs";
    workPrevious.innerHTML="Last Month - "+data[0]['timeframes']['monthly']['previous']+" hrs";
    
    playCurrent.innerHTML=data[1]['timeframes']['monthly']['current']+" hrs";
    playPrevious.innerHTML="Last Month - "+data[1]['timeframes']['monthly']['previous']+" hrs";
    
    studyCurrent.innerHTML=data[2]['timeframes']['monthly']['current']+" hrs";
    studyPrevious.innerHTML="Last Month - "+data[2]['timeframes']['monthly']['previous']+" hrs";
    
    exerciseCurrent.innerHTML=data[3]['timeframes']['monthly']['current']+" hrs";
    exercisePrevious.innerHTML="Last Month - "+data[3]['timeframes']['monthly']['previous']+" hrs";
    
    socialCurrent.innerHTML=data[4]['timeframes']['monthly']['current']+" hrs";
    socialPrevious.innerHTML="Last Month - "+data[4]['timeframes']['monthly']['previous']+" hrs";
    
    selfCareCurrent.innerHTML=data[5]['timeframes']['monthly']['current']+" hrs";
    selfCarePrevious.innerHTML="Last Month - "+data[5]['timeframes']['monthly']['previous']+" hrs";
    
}
