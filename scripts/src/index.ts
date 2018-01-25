//this.output.hidden=true;

function getRandomInt(min:number, max:number):number
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

enum Colors{Maroon, DarkRed, FireBrick, Red, Salmon, Tomato, Coral, OrangeRed, Chocolate, SandyBrown, DarkOrange, Orange, DarkGoldenrod, Goldenrod, Gold, Olive, Yellow, YellowGreen, GreenYellow, Chartreuse, LawnGreen, Green, Lime, LimeGreen, SpringGreen, MediumSpringGreen, Turquoise, LightSeaGreen, MediumTurquoise, Teal, DarkCyan, Aqua, Cyan, DarkTurquoise, DeepSkyBlue, DodgerBlue, RoyalBlue, Navy, DarkBlue, MediumBlue, Blue, BlueViolet, DarkOrchid, DarkViolet, Purple, DarkMagenta, Fuchsia, Magenta, MediumVioletRed, DeepPink, HotPink, Crimson, Brown, IndianRed, RosyBrown, LightCoral, Snow, MistyRose, DarkSalmon, LightSalmon, Sienna, SeaShell, SaddleBrown, Peachpuff, Peru, Linen, Bisque, Burlywood, Tan, AntiqueWhite, NavajoWhite, BlanchedAlmond, PapayaWhip, Moccasin, Wheat, Oldlace, FloralWhite, Cornsilk, Khaki, LemonChiffon, PaleGoldenrod, DarkKhaki, Beige, LightGoldenrodYellow, LightYellow, Ivory, OliveDrab, DarkOliveGreen, DarkSeaGreen, DarkGreen, ForestGreen, LightGreen, PaleGreen, Honeydew, SeaGreen, MediumSeaGreen, Mintcream, MediumAquamarine, Aquamarine, DarkSlateGray, PaleTurquoise, LightCyan, Azure, CadetBlue, PowderBlue, LightBlue, SkyBlue, LightskyBlue, SteelBlue, AliceBlue, SlateGray, LightSlateGray, LightsteelBlue, CornflowerBlue, Lavender, GhostWhite, MidnightBlue, SlateBlue, DarkSlateBlue, MediumSlateBlue, MediumPurple, Indigo, MediumOrchid, Plum, Violet, Thistle, Orchid, LavenderBlush, PaleVioletRed, Pink, LightPink, Black, DimGray, Gray, DarkGray, Silver, LightGrey, Gainsboro, WhiteSmoke, White}
enum Borders{thin, medium, thick}

class gameColors    //таблица цветов для данной игры
{
    constructor(dis:number, n?:number ){
        if ( n!=undefined )
            if ( (n)>140 )
                throw new Error("A lot of recuired colors.");
        this.dis = dis;
    }
    static N_COLOR:number=140;
    usedColors:Colors[];    //цвета, которые уже были предоставлены функциями класса для таблицы
    dis:number;     //разброс цветов для выбора следующего

    isColorUsed(color:Colors):boolean{
    let n:number = this.usedColors.length;
        for(let i=0; i<n; i++){
            if (color==this.usedColors[i])
                return true;
        }
        return false;
    }

    getUniqueCloseColor(color:Colors):Colors{
        let newColor:Colors;
        newColor = this.getCloseColor(color);  //получаем случайным образом цвет, лежащий в необходимом радиусе
        if (this.isColorUsed(newColor)){            //если цвет использовался, ищем новый:
            let newColorResult:Colors|undefined = this.getUncolissionColor(color);
            if (newColorResult != undefined){
                this.usedColors.push(newColorResult);
            }
            throw new Error('Reserved unique colors are over.');
        }
        return newColor;
    }

    getUncolissionColor(color:Colors):Colors|undefined{
        let newColor:Colors|undefined = this.getClosestOriginalColor(color);
            if ( newColor == undefined ){
                newColor = this.getAnyAnotherColor(color);
            }
        return newColor;
    }

    getClosestOriginalColor(color:Colors):Colors|undefined{
        let newColor:Colors|undefined = this.getClosestLeftOriginalColor(color);
        if ( newColor == undefined ){
            newColor = this.getClosestRightOriginalColor(color);
        }
        return undefined;
    }

    getAnyAnotherColor(color:Colors):Colors|undefined{
        //ищем любой цвет "слева", начиная от минимального (самого левого по радиусу дисперсии)
        let newColor:Colors|undefined = this.getAnyLeftOriginalColor( this.getMinCloseColor(color) );   
        if ( newColor == undefined ){
            newColor = this.getAnyRightOriginalColor( this.getMaxCloseColor(color) );
        }
        return undefined;
    }

    getAnyLeftOriginalColor(color:Colors):Colors|undefined{ 
        for(let i:Colors=color; i>=0; i--){
            if ( !this.isColorUsed(i) ){
                return i;
            }
        }
        return undefined;
    }

    getAnyRightOriginalColor(color:Colors):Colors|undefined{ 
        for(let i:Colors=color; i<gameColors.N_COLOR; i++){
            if ( !this.isColorUsed(i) ){
                return i;
            }
        }
        return undefined;
    }

    getClosestLeftOriginalColor(color:Colors):Colors|undefined{ 
        let min:Colors = this.getMinCloseColor(color);
        for(let i:Colors=color; i>=min; i--){
            if ( !this.isColorUsed(i) ){
                return i;
            }
        }
        return undefined;
    }

    getClosestRightOriginalColor(color:Colors):Colors|undefined{ 
        let max:Colors = this.getMaxCloseColor(color);
        for(let i:Colors=color; i<=max; i++){
            if ( !this.isColorUsed(i) ){
                this.usedColors.push(i);
                return i;
            }
        }
        return undefined;
    }

    //функции, дающие в результате случайный неповторяющийся цвет:
    getCloseColor(color:Colors):Colors{   //Цвет, относительно которого ищем близкий, дисперсия(радиус поиска)
       let newRandomColor:Colors;
       let min,max:Colors;
       min = this.getMinCloseColor(color);   //находим границы разброса нового случайного цвета
       max = this.getMaxCloseColor(color);
       newRandomColor = getRandomInt(min, max);
       this.usedColors.push(newRandomColor);
       return newRandomColor;
    };

    getMinCloseColor(color:Colors):Colors{  //наиболее дальний слева цвет в радиусе dis
        return (color - this.dis) < 0 ? 0 : (color - this.dis);   
    }

    getMaxCloseColor(color:Colors):Colors{    //наиболее дальний справа цвет в радиусе dis
        return (color + this.dis) >= gameColors.N_COLOR ? gameColors.N_COLOR-1 : (color + this.dis);
    }

    getRandomColor():Colors{    //получение случайного цвета из таблицы цветов
        let color:Colors = getRandomInt(0, gameColors.N_COLOR-1);
        this.usedColors.push(color);
        return color;
    }

}



class gameButton{
    constructor(button: HTMLButtonElement, i:number){  
        //конструктор для инициализации объекта кнопки, ее индекса, показателя открытости кнопки
        this.button = button;
        this.i = i;
        this.isOpen = false;
        this.setClosedStyle();
        this.addListener();
    }
    i:number; //порядковый номер кнопки (начиная от 0)
    button:HTMLButtonElement;
    isOpen:boolean; //кнопка открыта/зафискирована
    color: Colors;

    setClosedStyle(){   //Устанавливаем стиль "закрытой кнопки" (невскрытая кнопка/иконка)
        this.button.style.backgroundColor = 'white';  
        this.button.style.borderColor = 'black';
        this.button.style.borderWidth = Borders[0];
        this.isOpen = false;
    }

    setOpenStyle(){     //Устанавливаем стиль "открытой кнопки" (в режиме ожидания выбора следующей кнопки)
        this.button.style.backgroundColor = Colors[this.color];
        this.button.style.borderWidth = Borders[2];
        this.isOpen = true;
    }

    setFixedStyle(){      //Устанавливаем стиль "зафиксированной кнопки" (для угаданных кнопок)
        this.button.style.borderWidth = Borders[1];
        this.isOpen = true;
    }

    addListener()
    {
        this.button.addEventListener( 'click', (event: Event): void =>    //вешаем слушатель события 'click'
        {
            if (event != undefined) //если пользователь кликнул
            {   
                if ( !this.isOpen )     // если кнопка закрыта
                    gameStep.handleClick(this); // вызывается функция обработки хода игры
            }
        } );
    }
    
}

class gameStep
{
    static isTheFirst:boolean = false;    //логическая переменная: есть ли на поле открытая ячейка (первая), помимо выбранной
    static waitingAnswerButton:gameButton;
    static colorTable:gameColors;

    static handleClick (elem: gameButton): void   //обработка клика по кнопке (элемент, хранящий кнопку и инф-ю о ней)
    {
        elem.setOpenStyle();    //открываем элемент(кнопку)
        if ( !gameStep.isTheFirst ){        //если это первый открытый элемент
            this.waitingAnswerButton = elem;    //сохраняем его для дальнейшего сравнения
            gameStep.isTheFirst = true;     
        }
        else{                               //если это второй открытый элемент, проверяем:
            if (this.waitingAnswerButton.color == elem.color){  //если цвета совпадают, элементы фиксируются
                this.waitingAnswerButton.setFixedStyle();       
                elem.setFixedStyle();
            }
            else{                                               //если цвета различаются, то элементы закрываются через 3 секунды
                setTimeout(() => {
                    this.waitingAnswerButton.setClosedStyle();
                    elem.setClosedStyle();},
                    3000);
            }
            gameStep.isTheFirst = false;        //оба элемента были проверены, поэтому логическая переменная == false
        }
    };
 
}

class gameField{    //класс, отвечающий за поле (массив кнопок)
    constructor(m:number, n:number, idField:string, idButtons:string, idTimer:string, gameTime:number) {
        let N = m*n;
        if (N % 2)  
            throw new Error('Entered uneven count of buttons');
        this.formingField(m, n, idField, idButtons);
        this.id = idButtons;
        this.N = N;
        this.initButtonsArray();  //инициализируем массив кнопок 
        try{
            this.table = new gameColors(5, Math.floor(this.N/2));  //создаем таблицу используемых цветов 
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
        this.timer = new timer(idTimer, gameTime);
    }

    formingField(m:number, n:number, idField:string, idButtons:string):void{    //формирование поля игры
        let field:HTMLDivElement = document.getElementById(idField) as HTMLDivElement;
        let htmlField:string = '';
        for( let i:number = 0; i<n; i++ ){ 
            let htmlButtons:string='';
            for( let j:number = 0; j<m; j++)
            {
                htmlButtons = `\t<button id="${idButtons}${i}"></button>\n`;
            }
            htmlButtons += '<br>'; 
            htmlField += htmlButtons;
        }
        field.innerHTML = htmlField;
    }

    initButtonsArray():void { //инициализация(заполнение) массива кнопок
        for (let i:number=0; i<this.N; i++){
            let elem:gameButton = new gameButton(document.getElementById(this.id+i) as HTMLButtonElement, i);    
            this.button.push(elem);
        }
    }

    initButtonColor():void {
        //инициализация поля "цвет" для каждой кнопки (цвета берутся в случайном порядке, по близости)
        let randomColor:Colors = this.table.getRandomColor(); 
        let n:number=Math.floor(this.N/2);
        for (let i: number=0; i<n; i++){
            let index1, index2: number;
            index1 = this.getEmptyArrayIndex();   //случайным образом получаем индекс двух свободных элементов
            index2 = this.getEmptyArrayIndex();  
            this.button[index1].color=randomColor;  //в два свободных элемента помещается случайный цвет
            this.button[index2].color=randomColor;
            //try{
                randomColor=this.table.getUniqueCloseColor(randomColor);   //следующий случайный цвет ищется в радиусе 5 цветов
            //}
            // catch(err){
            //     throw err;
            // };
        }
    }

    getEmptyArrayIndex():number{ //получаем индекс случайного свободного элемента массива, размерностью N
        let index:number = getRandomInt(0, this.N-1);
        while (this.button[index].color!=undefined){  //ищем индекс первого свободного элемента
            index = (index+1)%this.N;
        }
        return index;
    };

    isWin():boolean{
        this.button.forEach((element):any => {
            if ( !element.isOpen )
                return false;
        });
        return true;
    }

    button: gameButton[];
    N: number;
    id: string; //идентификатор кнопок(начало строки до порядковых номеров)
    table: gameColors;
    timer: timer;
}



function endOfGame(field: gameField, id:string): void {
    window.location.href="result.html";
    let elem:HTMLElement = document.getElementById(id) as HTMLElement;
    let answer:string;
    if (field.isWin()){
        answer = "Поздравляем, вы дизайнер!";
    }
    else{
        answer = "Поздравляем, вы не дизайнер!";
    }
    elem.innerHTML = answer;
}

class timer{
    constructor(id:string, seconds:number){
        this.output = document.getElementById(id) as HTMLElement; //сохраняем элемент, куда будут выводиться значения таймера
        this.remainTime = seconds;
        this.startTimer();
    }

    startTimer():void{
        // начать повторы с интервалом 1 сек
        this.timerId = setInterval(this.timerIteration(), 1000);
    }

    timerIteration():void{
        if ( !this.remainTime-- )   //если время вышло, завершаем таймер
            this.finishTimer();
        let sec:number = Math.floor(this.remainTime/60);    //получение минут и секунд
        let min:number = this.remainTime%60;
        this.output.innerHTML=`<p>${min}: ${(sec<10 ? '0'+sec :sec)}</p>`;    //аналогично: '<p>'+min+': '+ (sec<10 ? '0'+sec :sec)+'</p>'
    }

    finishTimer():void{
        clearInterval(this.timerId);
    }

    output: HTMLElement;
    remainTime: number;
    timerId: number;
}




function main():void {
    let M:number = 4;
    let N:number = 5;
    let gameTime:number = 180;
    let field:gameField;
    let time:number = 1000*60*3;    //3 минуты
    let htmlIdField = "buttons";
    let htmlIdButtons = "button-";
    let htmlIdTimer = "timer";
    try{
        field = new gameField(M, N, htmlIdField, htmlIdButtons, htmlIdTimer, gameTime);
    }
    catch(err) {
        console.log(err); 
        return;
    }
    setTimeout(endOfGame(field, 'answer'), time);

}

