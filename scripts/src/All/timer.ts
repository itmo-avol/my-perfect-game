
import htmlData from './htmlData';

//класс таймера:
class timer{

    constructor(seconds:number){
        this.output = document.getElementById(htmlData.idTimer) as HTMLElement; //сохраняем элемент, куда будут выводиться значения таймера
        this.reserve = this.remainTime = seconds;   
        this.startTimer(); 
    }

    output: HTMLElement;    //элементHTML, куда будут выводиться значения таймера
    remainTime: number;     //оставшееся время работы в секундах
    timerId: number;        //идентификатор таймера (интервального)
    reserve:number;         //изначальный временной интервал (в секундах)

    startTimer():void{  //запуск таймера
        // начать повторы с интервалом 1 сек
        let timer: timer = this;
        this.timerId = setInterval(()=>{
            timer.timerIteration(timer);}, 
            1000);
    }

    //итерация таймера, возвращат информацию о том, вышло ли время работы таймера
    timerIteration(timer:timer):boolean{
        if ( !timer.remainTime-- )   //если время вышло, завершаем таймер (постфикс -> показываем последние цифры: 00:00)
        {
            timer.finishTimer(timer);
            return true;
        }  
        let min:number = Math.floor(timer.remainTime/60);    //получение минут и секунд
        let sec:number = timer.remainTime%60;
        //вывод в HTML, аналогично: '<p>'+min+': '+ (sec<10 ? '0'+sec :sec)+'</p>'
        timer.output.innerHTML=`<p>${(min < 10 ? '0' + min : min)}:${(sec<10 ? '0'+sec :sec)}</p>`;    
        return false;
    }

    //завершение таймера
    finishTimer(timer:timer):void{
        clearInterval(timer.timerId);
        timer.remainTime = 0;
    }
}

export {
    timer as default,};