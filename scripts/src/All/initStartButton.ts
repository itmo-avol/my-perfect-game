
import game from './gameFunction';
import htmlData from './htmlData';

//инициализация кнопки начала игры
function initGameButton():void{

    let startButton: HTMLButtonElement = document.getElementById(htmlData.idStartButton) as HTMLButtonElement; 
    let timer: HTMLButtonElement = document.getElementById(htmlData.idTimer) as HTMLButtonElement; 
    startButton.addEventListener ('click', (event: Event): void =>    //вешаем слушатель события 'click'
        {
            if (event != undefined) //если пользователь кликнул
            {   
                startButton.style.display="none";    //скрываем кнопку и запускаем игру
                timer.style.display='';
                game();
            }
        }); 
}


export {
    initGameButton as default,};