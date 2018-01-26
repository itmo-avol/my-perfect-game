
import restart from './restartFunction';
import htmlData from './htmlData';

//инициализация кнопки повтора игры
function initBackButton():void{

    let backButton: HTMLButtonElement = document.getElementById(htmlData.idBackButton) as HTMLButtonElement; 

    backButton.addEventListener ('click', (event: Event): void =>    //вешаем слушатель события 'click'
        {
            if (event != undefined) //если пользователь кликнул
            {   
                restart();
            }
        }); 
}

export {
    initBackButton as default,};