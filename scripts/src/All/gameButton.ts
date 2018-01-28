
import Colors from './Colors';
import Borders from './Borders';

//класс кнопки (используемой на поле)
class GameButton{
    constructor(button: HTMLButtonElement){  
        //конструктор для инициализации объекта кнопки, ее индекса, показателя открытости кнопки
        this.button = button;
        this.isOpen = false;    
        this.setClosedStyle();
    }
    button:HTMLButtonElement;   //соответствующий элмент html
    isOpen:boolean; //is кнопка открыта/зафискирована
    color: Colors|undefined;

    setClosedStyle(){   //Устанавливаем стиль "закрытой кнопки" (невскрытая кнопка/иконка)
        this.button.style.backgroundColor = 'white';  
        this.button.style.borderColor = 'black';
        this.button.style.borderWidth = Borders[0];
        this.isOpen = false;
    }

    setOpenStyle(){     //Устанавливаем стиль "открытой кнопки" (в режиме ожидания выбора следующей кнопки)
        this.button.style.backgroundColor = Colors[this.color === undefined? 0: this.color];
        this.button.style.borderWidth = Borders[2];
        this.isOpen = true;
    }

    //Устанавливаем стиль "зафиксированной кнопки" (для угаданных кнопок) - всегда вызывается после setOpenStyle()
    setFixedStyle(){      
        this.button.style.borderWidth = Borders[1];
    }

}

export {
    GameButton as default,};