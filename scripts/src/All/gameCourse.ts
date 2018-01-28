
import GameField from './GameField';
import timer from './timer';
import GameButton from './GameButton';
import htmlData from './htmlData';


//класс хода игры
class GameCourse
{
    constructor(field: GameField, gameTic:timer, time:number){
        this.field = field;
        this.closedButtonsPairs = Math.floor(field.N/2);
        this.addButtonsListeners(field);
        let game: GameCourse = this;
        this.timer = setTimeout(()=>{game.endOfGame(game)}, time*1000);
        this.gameTic = gameTic;
    }


    field:GameField;    //игровое поле, над которым идет управление
    isTheFirst:boolean = false;    //логическая переменная: есть ли на поле открытая ячейка (первая), помимо выбранной
    waitingAnswerButton:GameButton;     //кнопка, ждущая ответа (первая выбранная)
    closedButtonsPairs:number;          //количество зафиксированных (угаданных) пар
    timer:number;                   //идентификатор собственного таймера
    gameTic: timer;

    addButtonsListeners(buttonField: GameField):void    //добавление слушателя событмия на каждую кнопку
    {
        buttonField.button.forEach(item => (    //на HtML-кнопки каждого объекта класса GameButton вешаем обработчик события
            item.button.addEventListener ('click', (event: Event): void =>    //вешаем слушатель события 'click'
            {
                if (event !== undefined) //если пользователь кликнул
                {   
                    if ( !item.isOpen )     // если кнопка закрыта
                        this.handleClick(item); // вызывается функция обработки хода игры
                }
            })
        )
        );
    }

    handleClick (elem: GameButton): void   //обработка клика по кнопке (элемент, хранящий кнопку и инф-ю о ней)
    {
        elem.setOpenStyle();    //открываем элемент(кнопку)
        if ( !this.isTheFirst ){        //если это первый открытый элемент
            this.waitingAnswerButton = elem;    //сохраняем его для дальнейшего сравнения
            this.isTheFirst = true;     
        }
        else{                               //если это второй открытый элемент, проверяем:
            if (this.waitingAnswerButton.color === elem.color){  //если цвета совпадают, элементы фиксируются
                this.waitingAnswerButton.setFixedStyle();       
                elem.setFixedStyle();
                this.closedButtonsPairs--;
            }
            else{                          //если цвета различаются, то элементы закрываются через 0.5 секунды
                let game: GameCourse = this;
                setTimeout( ()=>{   //обертка для таймера
                    game.closeButtons(elem);}
                    ,300);
            }
            this.isTheFirst = false;//оба элемента были проверены, поэтому логическая переменная наличия ожидающей кнопки===false
        }
        if ( !this.closedButtonsPairs )     //если все кнопки открыты (не осталось закрытых пар)
        {
            clearTimeout(this.timer);       //вырубаем счетчик/таймер
            this.endOfGame(this);               //заканчиваем игру
        }
            
    };

    //закрываем обе кнопки (без this!)
    closeButtons(elem:GameButton):void{
        this.waitingAnswerButton.setClosedStyle();
        elem.setClosedStyle();
    }
    
    //ПРОБЛЕМА: document не меняется на "result.html"
    //окончание игры (без this!)
    /*endOfGame(game:GameCourse): void {
        window.location.replace("result.html");     //загружаем страницу результата 
        let elem:HTMLElement = window.document.getElementById(game.idResult) as HTMLElement;
        let answer:string;                      //сообщение о результате игры
        if ( !game.closedButtonsPairs ){        //если все кнопки вскрыты - победа
            answer = "<p> Вы дизайнер! </p>";
        }
        else{                                   //иначе - проигрыш
            answer = "<p> Вы не дизайнер! </p>";
        }
        elem.innerHTML = answer;    //помещаем информацию на страницу
    }*/

    endOfGame(game:GameCourse): void {
        game.gameTic.finishTimer(game.gameTic);
        htmlData.hidePageElements(1);
        let elem:HTMLElement = window.document.getElementById(htmlData.idResult) as HTMLElement;
        let answer:string;                      //сообщение о результате игры
        if ( !game.closedButtonsPairs ){        //если все кнопки вскрыты - победа
            answer = "<p> Вы дизайнер! </p>";
        }
        else{                                   //иначе - проигрыш
            answer = "<p> Вы не дизайнер! </p>";
        }
        elem.innerHTML = answer;    //помещаем информацию на страницу
        htmlData.showPageElements(2);
    }
    
}


export {
    GameCourse as default,};