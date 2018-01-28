
import GameButton from './GameButton';
import GameColors from './GameColors';
import htmlData from './htmlData';
import getRandomInt from './getRandomInt';
import Colors from './Colors';

//класс, отвечающий за поле (массив кнопок)
class GameField{
    constructor(m:number, n:number) {
        this.m = m;
        this.n = n;
        let N = m*n;
        if (N % 2)  
            throw new Error('Entered uneven count of buttons');

        this.formingField();
        this.N = N;
        this.initButtonsArray();  //инициализируем массив кнопок (сторого после формирования поля!)
        try{
            this.table = new GameColors(10, Math.floor(this.N/2));  //создаем таблицу используемых цветов 
        }
        catch(err){ //если количество цветов недостаточно => ошибка
            throw err;
        }
        //try{
            this.initButtonColor();   //задаем кнопкам цвета (по данному коду, всех цветов должно хватить)
        // }
        // catch(err){
        //     throw err;
        // }
    }

    button: GameButton[]=[];   //массив объектов кнопок
    m:number;       //количество строк
    n:number;       //количество стоблцов
    N: number;      //количесвто элементов
    table: GameColors;  //таблица цветов

    formingField():void{    //формирование поля игры
        let field:HTMLDivElement = document.getElementById(htmlData.idButtons) as HTMLDivElement;
        let htmlField:string = '';  //переменная под содержимое HTML-кода для создания поля / набора кнопок
        for( let i:number = 0; i<this.m; i++ ){ 
            let htmlButtons:string='';
            for( let j:number = 0; j<this.n; j++)   //для каждого столбца прописываем тег для кнопки с заданным id
            {
                htmlButtons += `\t<button id="${htmlData.idButton}${i*this.n+j}" class="button"></button>\n`;
            }
            htmlButtons += '<br>';         //в конце каждой строки ставим тег перехода на новую строку 
            //htmlButtons += (i !== this.m-1) ?'<br>':'';         //в конце каждой строки ставим тег перехода на новую строку 
            htmlField += htmlButtons;       //добавляем к результату
        }
        field.innerHTML = htmlField;    //вставляем код в файл
    }

    initButtonsArray():void { //инициализация(заполнение) массива кнопок
        for (let i:number=0; i<this.N; i++){
            //получаем объекты кнопок 
            let elem:GameButton = new GameButton(document.getElementById(htmlData.idButton+i) as HTMLButtonElement);  
            this.button.push(elem);
        }
    }

    initButtonColor():void {
        //инициализация поля "цвет" для каждой кнопки (цвета берутся в случайном порядке, по близости)
        let randomColor:Colors = this.table.getRandomColor(); 
        let n:number=Math.floor(this.N/2);
        for (let i: number=0; i<n; i+=1){
            //try{
                randomColor=this.table.getUniqueClosestColor(randomColor);   //выбираем случайный цвет в радиусе дисперсии(опорная точка)
            //}
            // catch(err){
            //     throw err;
            // };
            let index1, index2: number|undefined;
            index1 = this.getEmptyArrayIndex();   //случайным образом получаем индекс двух свободных элементов
            if (index1!==undefined){    //если вернулись индексы 
                this.button[index1].color=randomColor;  //в два свободных элемента помещается случайный цвет
                console.log(index1, randomColor);       //для проверки своего зрения
            }
            index2 = this.getEmptyArrayIndex();  
            if (index2!==undefined){    //если вернулись индексы 
                this.button[index2].color=randomColor;
                console.log(index2, randomColor);       //для проверки своего зрения
            }
            else{
                break;  //если пустых элементов больше нет, то прерываем цикл
            }
        }
    }

    //получение индекса случайного свободного элемента массива, размерностью N (для случайного задания цветов)
    getEmptyArrayIndex():number|undefined{ 
        let index:number = getRandomInt(0, this.N-1);   //выбираем случайным образом элемент
        let i=0;
        //пока выбранный элемент не будет пуст, идем вправо и по кругу (по массиву) в поисках нового:
        while (this.button[index].color!==undefined){  
            index = (index+1)%this.N;
            if (++i === this.N)
                return undefined;
        }
        return index;   //возвращаем индекс найденного элемента
    };

}


export {
    GameField as default,};