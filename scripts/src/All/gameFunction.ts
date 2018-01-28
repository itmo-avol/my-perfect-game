
import GameCourse from './GameCourse';
import GameField from './GameField';
import timer from './timer';

//основной код
function game():void {

    let M:number = 4;   //строки
    let N:number = 5;   //столбцы
    let gameTime:number = 2*60; //время игры
    let field:GameField;    //игровое поле

    try{
        field = new GameField(M, N);
    }
    catch(err) {        //если поле не было создано из-за ошибки, бросаем ее выше
        throw err; 
    }

    let gameTimer:timer = new timer(gameTime);
    let game:GameCourse = new GameCourse(field, gameTimer, gameTime);
    game;
    gameTimer;
}

export {
    game as default,};