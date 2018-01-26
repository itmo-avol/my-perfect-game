import htmlData from './htmlData';

function restart():void
{
    //возвращаем страничку к первоначальному виду:
    htmlData.hidePageElements(2);   //скрываем элементы второго плана
    htmlData.showPageElements(1);   //показываем первого
    htmlData.initStartElements();   //инициализация начальных элементов
}

export {
    restart as default,};
