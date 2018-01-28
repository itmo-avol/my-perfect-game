
import Colors from './Colors';
import getRandomInt from './getRandomInt';

class GameColors    //таблица цветов для данной игры
{
    constructor(dis:number, n?:number ){    //(дисперсия - разброс поиска ближайшего цвета, количество цветов)
        if ( n!==undefined )
            if ( n > GameColors.N_COLOR )
                throw new Error("A lot of recuired colors.");   //сообщает о невозможности предоставления такого количества цветов
        this.dis = dis;
    }
    static N_COLOR:number=140;
    usedColors:Colors[]=[];    //массив цветов, которые уже были предоставлены функциями класса для таблицы
    dis:number;     //разброс цветов для выбора следующего

    isColorUsed(color:Colors):boolean{      //проверка, использовался ли цвет до этого
    let n:number = this.usedColors.length;
        for(let i=0; i<n; i++){
            if (color===this.usedColors[i])  //если обнаружено совпадение с ранее используемыми => true (иначе false)
                return true;
        }
        return false;
    }

    //Получение "уникального" (ранее не используемого) ближайшего цвета (сначала ищет в радиусе потом по мере отдаления)
    //вх., тут и далее: цвет относительно которого ищем новый
    getUniqueClosestColor(color:Colors):Colors{   
        let newColor:Colors;
        newColor = this.getCloseColor(color);  //получаем случайным образом цвет, лежащий в необходимом радиусе
        if (this.isColorUsed(newColor)){            //если цвет использовался, ищем новый:
            let newColorResult:Colors|undefined = this.getUncolissionColor(color);  //поиск ближайшего незанятого цвета среди всех
            if (newColorResult !== undefined){
                newColor = newColorResult;              //если цвет был найден, запоминаем его
            }
            else{
                throw new Error('Reserved unique colors are over.');    //если цвет не был найден сообщаем об ошибке
            }
        }
        this.usedColors.push(newColor);   //найденный цвет помещаем в массив используемых цветов
        return newColor;            //возвращаем цвет
    }

    //Поиск любого "неконфликтующего"/неповторяющегося цвета:
    getUncolissionColor(color:Colors):Colors|undefined{ 
        let newColor:Colors|undefined = this.getClosestOriginalColor(color);    //ищем цвет в необходимом радиусе
            if ( newColor === undefined ){
                newColor = this.getAnyAnotherColor(color);  //если он не найден ищем его по всей таблице по мере отдаления от точки поиска
            }
        return newColor;    //возвращаем найденный цвет или undefined
    }

    //поиск ближайшего неповторимого цвета:
    getClosestOriginalColor(color:Colors):Colors|undefined{
        let newColor:Colors|undefined = this.getClosestLeftOriginalColor(color);    //ищем ближайший цвет в радиусе слева
        if ( newColor === undefined ){
            newColor = this.getClosestRightOriginalColor(color);     //если он не найден, ищем ближайший цвет в радиусе справа
        }
        return newColor;    //возвращаем найденный цвет или undefined
    }

    //поиск слева ближайшего неповторимого цвета в радиусе дисперсии:
    getClosestLeftOriginalColor(color:Colors):Colors|undefined{ 
        let min:Colors = this.getMinCloseColor(color);
        for(let i:Colors=color; i>=min; i--){   //начиная от текущего идем влево
            if ( !this.isColorUsed(i) ){
                return i;                       //если найден неиспользуемый цвет возвращаем его
            }
        }
        return undefined;               //если цвет не найден => undefined
    }

    //поиск справа ближайшего неповторимого цвета в радиусе дисперсии:
    getClosestRightOriginalColor(color:Colors):Colors|undefined{ 
        let max:Colors = this.getMaxCloseColor(color);
        for(let i:Colors=color; i<=max; i++){   //начиная от текущего идем вправо
            if ( !this.isColorUsed(i) ){
                return i;                       //если найден неиспользуемый цвет возвращаем его
            }
        }
        return undefined;//если цвет не найден => undefined
    }


    //ищем любой цвет, начиная от радиуса дисперсии:
    getAnyAnotherColor(color:Colors):Colors|undefined{
        let newColor:Colors|undefined = this.getAnyLeftOriginalColor( this.getMinCloseColor(color) );  //ищем цвет слева по таблице
        if ( newColor === undefined ){
            newColor = this.getAnyRightOriginalColor( this.getMaxCloseColor(color) );   //ищем цвет справа по таблице
        }
        return newColor;    //возвращаем найденный цвет или undefined
    }

    //поиск любого неповторяющегося цвета слева по таблице от входной точки
    getAnyLeftOriginalColor(color:Colors):Colors|undefined{ 
        for(let i:Colors=color; i>=0; i--){
            if ( !this.isColorUsed(i) ){    //если найден неиспользуемый цвет => его
                return i;
            }
        }
        return undefined;   //иначе => undefined
    }

    //поиск любого неповторяющегося цвета справа по таблице от входной точки
    getAnyRightOriginalColor(color:Colors):Colors|undefined{ 
        for(let i:Colors=color; i<GameColors.N_COLOR; i++){
            if ( !this.isColorUsed(i) ){    //если найден неиспользуемый цвет => его
                return i;
            }
        }
        return undefined;    //иначе => undefined
    }


    //выбор случайным образом близкого цвета в радиусе дисперсии:
    getCloseColor(color:Colors):Colors{   //Цвет, относительно которого ищем близкий, дисперсия(радиус поиска)
       let newRandomColor:Colors;
       let min,max:Colors;
       min = this.getMinCloseColor(color);   //находим границы разброса нового случайного цвета
       max = this.getMaxCloseColor(color);
       newRandomColor = getRandomInt(min, max); //новый случайный цвет берется из этих границ
       return newRandomColor;
    };

    getMinCloseColor(color:Colors):Colors{  //наиболее дальний слева цвет в радиусе dis
        return (color - this.dis) < 0 ? 0 : (color - this.dis);   
    }

    getMaxCloseColor(color:Colors):Colors{    //наиболее дальний справа цвет в радиусе dis
        return (color + this.dis) >= GameColors.N_COLOR ? GameColors.N_COLOR-1 : (color + this.dis);
    }

    getRandomColor():Colors{    //получение случайного цвета из таблицы цветов (опорной точки, без сохранения в массив)
        let color:Colors = getRandomInt(0, GameColors.N_COLOR-1);
        //this.usedColors.push(color);    //сохранение цвета в массив используемых цветов
        return color;
    }

}

export {
    GameColors as default,
};
