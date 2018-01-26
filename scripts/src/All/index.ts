//result, idResult - пока что нерабочий вариант


function getRandomInt(min:number, max:number):number    //получение случайного целого числа
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Цвета, используемые в таблице цветов:
enum Colors{Maroon, DarkRed, FireBrick, Red, Salmon, Tomato, Coral, OrangeRed, Chocolate, SandyBrown, DarkOrange, Orange, DarkGoldenrod, Goldenrod, Gold, Olive, Yellow, YellowGreen, GreenYellow, Chartreuse, LawnGreen, Green, Lime, LimeGreen, SpringGreen, MediumSpringGreen, Turquoise, LightSeaGreen, MediumTurquoise, Teal, DarkCyan, Aqua, Cyan, DarkTurquoise, DeepSkyBlue, DodgerBlue, RoyalBlue, Navy, DarkBlue, MediumBlue, Blue, BlueViolet, DarkOrchid, DarkViolet, Purple, DarkMagenta, Fuchsia, Magenta, MediumVioletRed, DeepPink, HotPink, Crimson, Brown, IndianRed, RosyBrown, LightCoral, Snow, MistyRose, DarkSalmon, LightSalmon, Sienna, SeaShell, SaddleBrown, Peachpuff, Peru, Linen, Bisque, Burlywood, Tan, AntiqueWhite, NavajoWhite, BlanchedAlmond, PapayaWhip, Moccasin, Wheat, Oldlace, FloralWhite, Cornsilk, Khaki, LemonChiffon, PaleGoldenrod, DarkKhaki, Beige, LightGoldenrodYellow, LightYellow, Ivory, OliveDrab, DarkOliveGreen, DarkSeaGreen, DarkGreen, ForestGreen, LightGreen, PaleGreen, Honeydew, SeaGreen, MediumSeaGreen, Mintcream, MediumAquamarine, Aquamarine, DarkSlateGray, PaleTurquoise, LightCyan, Azure, CadetBlue, PowderBlue, LightBlue, SkyBlue, LightskyBlue, SteelBlue, AliceBlue, SlateGray, LightSlateGray, LightsteelBlue, CornflowerBlue, Lavender, GhostWhite, MidnightBlue, SlateBlue, DarkSlateBlue, MediumSlateBlue, MediumPurple, Indigo, MediumOrchid, Plum, Violet, Thistle, Orchid, LavenderBlush, PaleVioletRed, Pink, LightPink, Black, DimGray, Gray, DarkGray, Silver, LightGrey, Gainsboro, WhiteSmoke, White}
//Возможные варианты границ кнопок:
enum Borders{thin, medium, thick}

class gameColors    //таблица цветов для данной игры
{
    constructor(dis:number, n?:number ){    //(дисперсия - разброс поиска ближайшего цвета, количество цветов)
        if ( n!=undefined )
            if ( n > gameColors.N_COLOR )
                throw new Error("A lot of recuired colors.");   //сообщает о невозможности предоставления такого количества цветов
        this.dis = dis;
    }
    static N_COLOR:number=140;
    usedColors:Colors[]=[];    //массив цветов, которые уже были предоставлены функциями класса для таблицы
    dis:number;     //разброс цветов для выбора следующего

    isColorUsed(color:Colors):boolean{      //проверка, использовался ли цвет до этого
    let n:number = this.usedColors.length;
        for(let i=0; i<n; i++){
            if (color==this.usedColors[i])  //если обнаружено совпадение с ранее используемыми => true (иначе false)
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
            if (newColorResult != undefined){
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
            if ( newColor == undefined ){
                newColor = this.getAnyAnotherColor(color);  //если он не найден ищем его по всей таблице по мере отдаления от точки поиска
            }
        return newColor;    //возвращаем найденный цвет или undefined
    }

    //поиск ближайшего неповторимого цвета:
    getClosestOriginalColor(color:Colors):Colors|undefined{
        let newColor:Colors|undefined = this.getClosestLeftOriginalColor(color);    //ищем ближайший цвет в радиусе слева
        if ( newColor == undefined ){
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
        if ( newColor == undefined ){
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
        for(let i:Colors=color; i<gameColors.N_COLOR; i++){
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
        return (color + this.dis) >= gameColors.N_COLOR ? gameColors.N_COLOR-1 : (color + this.dis);
    }

    getRandomColor():Colors{    //получение случайного цвета из таблицы цветов (опорной точки, без сохранения в массив)
        let color:Colors = getRandomInt(0, gameColors.N_COLOR-1);
        //this.usedColors.push(color);    //сохранение цвета в массив используемых цветов
        return color;
    }

}



//класс кнопки (используемой на поле)
class gameButton{
    constructor(button: HTMLButtonElement, i:number){  
        //конструктор для инициализации объекта кнопки, ее индекса, показателя открытости кнопки
        this.button = button;
        this.i = i;
        this.isOpen = false;    
        this.setClosedStyle();
    }
    i:number; //порядковый номер кнопки (начиная от 0)
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
        this.button.style.backgroundColor = Colors[this.color == undefined? 0: this.color];
        this.button.style.borderWidth = Borders[2];
        this.isOpen = true;
    }

    //Устанавливаем стиль "зафиксированной кнопки" (для угаданных кнопок) - всегда вызывается после setOpenStyle()
    setFixedStyle(){      
        this.button.style.borderWidth = Borders[1];
    }

}

//класс хода игры
class gameCourse
{
    constructor(field: gameField, time:number/*, idResult: string*/){
        this.field = field;
        this.closedButtonsPairs = Math.floor(field.N/2);
        //this.idResult = idResult;
        this.addButtonsListeners(field);
        let game: gameCourse = this;
        this.timer = setTimeout(()=>{game.endOfGame(game)}, time*1000);
    }


    field:gameField;    //игровое поле, над которым идет управление
    isTheFirst:boolean = false;    //логическая переменная: есть ли на поле открытая ячейка (первая), помимо выбранной
    waitingAnswerButton:gameButton;     //кнопка, ждущая ответа (первая выбранная)
    closedButtonsPairs:number;          //количество зафиксированных (угаданных) пар
    idResult: string;               //id класса HTML для вывода результата игры
    timer:number;                   //идентификатор таймера


    addButtonsListeners(buttonField: gameField):void    //добавление слушателя событмия на каждую кнопку
    {
        buttonField.button.forEach(item => (    //на HtML-кнопки каждого объекта класса gameButton вешаем обработчик события
            item.button.addEventListener ('click', (event: Event): void =>    //вешаем слушатель события 'click'
            {
                if (event != undefined) //если пользователь кликнул
                {   
                    if ( !item.isOpen )     // если кнопка закрыта
                        this.handleClick(item); // вызывается функция обработки хода игры
                }
            })
        )
        );
    }

    handleClick (elem: gameButton): void   //обработка клика по кнопке (элемент, хранящий кнопку и инф-ю о ней)
    {
        elem.setOpenStyle();    //открываем элемент(кнопку)
        if ( !this.isTheFirst ){        //если это первый открытый элемент
            this.waitingAnswerButton = elem;    //сохраняем его для дальнейшего сравнения
            this.isTheFirst = true;     
        }
        else{                               //если это второй открытый элемент, проверяем:
            if (this.waitingAnswerButton.color == elem.color){  //если цвета совпадают, элементы фиксируются
                this.waitingAnswerButton.setFixedStyle();       
                elem.setFixedStyle();
                this.closedButtonsPairs--;
            }
            else{                          //если цвета различаются, то элементы закрываются через 0.5 секунды
                let game: gameCourse = this;
                setTimeout( ()=>{   //обертка для таймера
                    game.closeButtons(elem);}
                    ,500);
            }
            this.isTheFirst = false;//оба элемента были проверены, поэтому логическая переменная наличия ожидающей кнопки==false
        }
        if ( !this.closedButtonsPairs )     //если все кнопки открыты (не осталось закрытых пар)
        {
            clearTimeout(this.timer);       //вырубаем счетчик/таймер
            this.endOfGame(this);               //заканчиваем игру
        }
            
    };

    //закрываем обе кнопки (без this!)
    closeButtons(elem:gameButton):void{
        this.waitingAnswerButton.setClosedStyle();
        elem.setClosedStyle();
    }
    
    //ПРОБЛЕМА: document не меняется на "result.html"
    //окончание игры (без this!)
    /*endOfGame(game:gameCourse): void {
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

    endOfGame(game:gameCourse): void {
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
    }
    
}

    //класс, отвечающий за поле (массив кнопок)
class gameField{
    constructor(m:number, n:number, idField:string, idButtons:string) {
        this.m = m;
        this.n = n;
        let N = m*n;
        if (N % 2)  
            throw new Error('Entered uneven count of buttons');

        this.idButtons = idButtons;
        this.formingField(idField);
        this.N = N;
        this.initButtonsArray();  //инициализируем массив кнопок (сторого после формирования поля!)
        try{
            this.table = new gameColors(10, Math.floor(this.N/2));  //создаем таблицу используемых цветов 
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

    button: gameButton[]=[];   //массив объектов кнопок
    m:number;       //количество строк
    n:number;       //количество стоблцов
    N: number;      //количесвто элементов
    idButtons: string; //идентификатор кнопок(начало строки до порядковых номеров)
    table: gameColors;  //таблица цветов

    formingField(idField:string):void{    //формирование поля игры
        let field:HTMLDivElement = document.getElementById(idField) as HTMLDivElement;
        let htmlField:string = '';  //переменная под содержимое HTML-кода для создания поля / набора кнопок
        for( let i:number = 0; i<this.m; i++ ){ 
            let htmlButtons:string='';
            for( let j:number = 0; j<this.n; j++)   //для каждого столбца прописываем тег для кнопки с заданным id
            {
                htmlButtons += `\t<button id="${this.idButtons}${i*this.n+j}" class="button"></button>\n`;
            }
            htmlButtons += '<br>';         //в конце каждой строки ставим тег перехода на новую строку 
            //htmlButtons += (i != this.m-1) ?'<br>':'';         //в конце каждой строки ставим тег перехода на новую строку 
            htmlField += htmlButtons;       //добавляем к результату
        }
        field.innerHTML = htmlField;    //вставляем код в файл
    }

    initButtonsArray():void { //инициализация(заполнение) массива кнопок
        for (let i:number=0; i<this.N; i++){
            //получаем объекты кнопок 
            let elem:gameButton = new gameButton(document.getElementById(this.idButtons+i) as HTMLButtonElement, i);  
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
            if (index1!=undefined){    //если вернулись индексы 
                this.button[index1].color=randomColor;  //в два свободных элемента помещается случайный цвет
                console.log(index1, randomColor);       //для проверки своего зрения
            }
            index2 = this.getEmptyArrayIndex();  
            if (index2!=undefined){    //если вернулись индексы 
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
        while (this.button[index].color!=undefined){  
            index = (index+1)%this.N;
            if (++i == this.N)
                return undefined;
        }
        return index;   //возвращаем индекс найденного элемента
    };

    //проверка, все ли кнопки вскрыты:
    isFixedAll():boolean{
        this.button.forEach((element):any => {
            if ( !element.isOpen )
                return false;
        });
        return true;
    }
}




//класс таймера:
class timer{

    constructor(id:string, seconds:number){
        this.output = document.getElementById(id) as HTMLElement; //сохраняем элемент, куда будут выводиться значения таймера
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
        timer.output.innerHTML=`<p>${(min < 10 ? '0' + min : min)}: ${(sec<10 ? '0'+sec :sec)}</p>`;    
        return false;
    }

    //завершение таймера
    finishTimer(timer:timer):void{
        clearInterval(timer.timerId);
        timer.remainTime = 0;
    }
}

//инициализация кнопки начала игры
function initGameButton(id:string):void{

    let startButton: HTMLButtonElement = document.getElementById(id) as HTMLButtonElement; 

    startButton.addEventListener ('click', (event: Event): void =>    //вешаем слушатель события 'click'
        {
            if (event != undefined) //если пользователь кликнул
            {   
                startButton.style.display="none";    //скрываем кнопку и запускаем игру
                game();
            }
        }); 
}


//основной код
function game():void {

    let M:number = 4;   //строки
    let N:number = 5;   //столбцы
    let gameTime:number = 3*60; //время игры
    let field:gameField;    //игровое поле

    //идентификаторы HTML-элементов:
    let htmlIdField = "buttons";
    let htmlIdButtons = "button-";
    let htmlIdTimer = "timer";
    //let htmlIdResult = "result";

    try{
        field = new gameField(M, N, htmlIdField, htmlIdButtons);
    }
    catch(err) {        //если поле не было создано из-за ошибки, передаем подходящие параметры
        field = new gameField(4, 5, "buttons", "button-");
        console.log(err); 
    }

    let game:gameCourse = new gameCourse(field, gameTime, /*htmlIdResult*/);
    let gameTimer:timer = new timer(htmlIdTimer, gameTime);
    game;
    gameTimer;

}

function main():void
{
    initGameButton('start');
}

export {
    main as default,};