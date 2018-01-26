
import initGameButton from './initStartButton';
import initBackButton from './initBackButton';
import htmlData from './htmlData';

function main():void
{
    try{
    //инициализируем вид страницы
    initGameButton();
    initBackButton();  //сохраняем объект таймера, чтобы иметь возможность его почистить (без деструктора)
    htmlData.hidePageElements(2);   //скрываем элементы второго плана
    htmlData.showPageElements(1);   //показываем первого

    }
    catch(err) {
        console.log(err); 
        return;
    }
}

export {
    main as default,};