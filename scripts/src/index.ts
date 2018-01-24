
function getRandomInt(min:number, max:number):number
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

enum Colors{Maroon, DarkRed, FireBrick, Red, Salmon, Tomato, Coral, OrangeRed, Chocolate, SandyBrown, DarkOrange, Orange, DarkGoldenrod, Goldenrod, Gold, Olive, Yellow, YellowGreen, GreenYellow, Chartreuse, LawnGreen, Green, Lime, LimeGreen, SpringGreen, MediumSpringGreen, Turquoise, LightSeaGreen, MediumTurquoise, Teal, DarkCyan, Aqua, Cyan, DarkTurquoise, DeepSkyBlue, DodgerBlue, RoyalBlue, Navy, DarkBlue, MediumBlue, Blue, BlueViolet, DarkOrchid, DarkViolet, Purple, DarkMagenta, Fuchsia, Magenta, MediumVioletRed, DeepPink, HotPink, Crimson, Brown, IndianRed, RosyBrown, LightCoral, Snow, MistyRose, DarkSalmon, LightSalmon, Sienna, SeaShell, SaddleBrown, Peachpuff, Peru, Linen, Bisque, Burlywood, Tan, AntiqueWhite, NavajoWhite, BlanchedAlmond, PapayaWhip, Moccasin, Wheat, Oldlace, FloralWhite, Cornsilk, Khaki, LemonChiffon, PaleGoldenrod, DarkKhaki, Beige, LightGoldenrodYellow, LightYellow, Ivory, OliveDrab, DarkOliveGreen, DarkSeaGreen, DarkGreen, ForestGreen, LightGreen, PaleGreen, Honeydew, SeaGreen, MediumSeaGreen, Mintcream, MediumAquamarine, Aquamarine, DarkSlateGray, PaleTurquoise, LightCyan, Azure, CadetBlue, PowderBlue, LightBlue, SkyBlue, LightskyBlue, SteelBlue, AliceBlue, SlateGray, LightSlateGray, LightsteelBlue, CornflowerBlue, Lavender, GhostWhite, MidnightBlue, SlateBlue, DarkSlateBlue, MediumSlateBlue, MediumPurple, Indigo, MediumOrchid, Plum, Violet, Thistle, Orchid, LavenderBlush, PaleVioletRed, Pink, LightPink, Black, DimGray, Gray, DarkGray, Silver, LightGrey, Gainsboro, WhiteSmoke, White}
enum Borders{thin, medium, thick}

// class gameColors    //таблица цветов для данной игры
// {
//     static N_COLOR:number=140;
//     color:Colors[];   //массив цветов, соответствующих кнопкам (храним в виде чисел enum)

//     constructor (N: number) {  //инициализация массива цветов (в случайном порядке; цвета берутся из типа Colors по близости)
//         let randomColor:Colors = getRandomInt(0, gameColors.N_COLOR-1);
//         if (N % 2)  
//             throw new Error('Entered uneven count of buttons');
//         let n:number=N/2;
//         for (let i: number=0; i<n; i++){
//             let index1, index2: number;
//             index1 = this.getEmptyArrayIndex(N);   //случайным образом получаем индекс свободного элемента
//             index2 = this.getEmptyArrayIndex(N);   //случайным образом получаем индекс свободного элемента
//             this.color[index1]=randomColor;
//             this.color[index2]=randomColor;
//             randomColor=gameColors.getCloseColor(randomColor, 5);   //следующий случайный цвет ищется в радиусе 5 цветов
//         }
//    };

//    getEmptyArrayIndex(N:number):number{ //получаем индекс случайного свободного элемента массива, размерностью N
//        let index:number = getRandomInt(0, N-1);
//        while (this.color[index]!=undefined){  //ищем индекс первого свободного элемента
//            index = (index+1)%N;
//        }
//        return index;
//    };

//    static getCloseColor(Color:Colors, dis:number):Colors{   //Цвет, относительно которого ищем близкий, дисперсия(радиус поиска)
//        let newRandomColor:Colors;
//        let min,max:number;
//        min = (Color - dis) < 0 ? 0 : (Color - dis);   //находим границы разброса нового случайного цвета
//        max = (Color + dis) >= gameColors.N_COLOR ? gameColors.N_COLOR-1 : (Color + dis);
//        newRandomColor = getRandomInt(min, max);
//        return newRandomColor;
//    };
// }

class gameColors    //таблица цветов для данной игры
{
    static N_COLOR:number=140;
    color:Colors[];   //массив цветов, соответствующих кнопкам (храним в виде чисел enum)

   static getCloseColor(Color:Colors, dis:number):Colors{   //Цвет, относительно которого ищем близкий, дисперсия(радиус поиска)
       let newRandomColor:Colors;
       let min,max:number;
       min = (Color - dis) < 0 ? 0 : (Color - dis);   //находим границы разброса нового случайного цвета
       max = (Color + dis) >= gameColors.N_COLOR ? gameColors.N_COLOR-1 : (Color + dis);
       newRandomColor = getRandomInt(min, max);
       return newRandomColor;
   };
}

function initButtonColor (N: number):void{  //инициализация массива цветов (в случайном порядке; цвета берутся из типа Colors по близости)
    let randomColor:Colors = getRandomInt(0, gameColors.N_COLOR-1);
    if (N % 2)  
        throw new Error('Entered uneven count of buttons');
    let n:number=N/2;
    for (let i: number=0; i<n; i++){
        let index1, index2: number;
        index1 = this.getEmptyArrayIndex(N);   //случайным образом получаем индекс свободного элемента
        index2 = this.getEmptyArrayIndex(N);   //случайным образом получаем индекс свободного элемента
        this.color[index1]=randomColor;
        this.color[index2]=randomColor;
        randomColor=gameColors.getCloseColor(randomColor, 5);   //следующий случайный цвет ищется в радиусе 5 цветов
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
    }

    setOpenStyle(colorTable:gameColors){     //Устанавливаем стиль "открытой кнопки" (в режиме ожидания выбора следующей кнопки)
        this.button.style.backgroundColor = Colors[colorTable.color[this.i]];
        this.button.style.borderWidth = Borders[2];
    }

    setFixedStyle(){      //Устанавливаем стиль "зафиксированной кнопки" (для угаданных кнопок)
        this.button.style.borderWidth = Borders[1];
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
    static counter:number = 0;
    static waitingAnswerButton:HTMLButtonElement;
    static colorTable:gameColors;
    static initColorTable(table:gameColors):void {
        gameStep.colorTable = table;
    }
    static handleClick (elem: gameButton): void   //обработка клика по кнопке (элемент, хранящий кнопку и инф-ю о ней)
    {
        if ( !gameStep.counter ){   //если это первый открытый элемент
            elem.button.style.backgroundColor = Colors[gameStep.colorTable.color[elem.i]]; //берем цвет из массива цветов игры и присваиваем его элементу
            elem.button.style.borderWidth = Borders[2];
            gameStep.counter++;
        }
        gameStep.counter = 0;
        elem.button.style.backgroundColor = 'yellow';
    };
 
}

class gameField{    //класс, отвечающий за поле 
    constructor(id:string, N:number) {
        if (N % 2)  
            throw new Error('Entered uneven count of buttons');
        this.id = id;
        this.N = N;
        this.initButtonsArray();  //инициализируем массив кнопок    
        this.initButtonColor();   //задаем кнопкам цвета
    }

    initButtonsArray():void { //инициализация(заполнение) массива кнопок
        for (let i:number=0; i<this.N; i++){
            let elem:gameButton = new gameButton(document.getElementById(this.id+i) as HTMLButtonElement, i);    
            this.button.push(elem);
        }
    }

    initButtonColor():void {
        //инициализация массива цветов (в случайном порядке; цвета берутся из типа Colors по близости)
        let randomColor:Colors = getRandomInt(0, gameColors.N_COLOR-1);
        let n:number=N/2;
        for (let i: number=0; i<n; i++){
            let index1, index2: number;
            index1 = this.getEmptyArrayIndex();   //случайным образом получаем индекс двух свободных элементов
            index2 = this.getEmptyArrayIndex();  
            this.button[index1].color=randomColor;  //в два свободных элемента помещаетс случайный цвет
            this.button[index2].color=randomColor;
            randomColor=gameColors.getCloseColor(randomColor, 5);   //следующий случайный цвет ищется в радиусе 5 цветов
        }
    }

    getEmptyArrayIndex():number{ //получаем индекс случайного свободного элемента массива, размерностью N
        let index:number = getRandomInt(0, N-1);
        while (this.button[index].color!=undefined){  //ищем индекс первого свободного элемента
            index = (index+1)%N;
        }
        return index;
    };


    button: gameButton[];
    N: number;
    id:string;
}



function main():void {
    try{
        table = new gameColors(N) ;    //создание массива (размерность 20) используемых в игре цветов
    }
    catch(err) {
        console.log(err);
        table = new gameColors(N+1) ;    //создание массива (размерность 20) используемых в игре цветов
    }
    gameStep.initColorTable(table);
    initElements("button-", N);
}