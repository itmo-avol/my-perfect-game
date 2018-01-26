
import gameCourse from './gameCourse';
import gameField from './gameField';
import timer from './timer';

//основной код
function game():void {

    let M:number = 4;   //строки
    let N:number = 5;   //столбцы
    let gameTime:number = 3*60; //время игры
    let field:gameField;    //игровое поле

    try{
        field = new gameField(M, N);
    }
    catch(err) {        //если поле не было создано из-за ошибки, бросаем ее выше
        throw err; 
    }

    let gameTimer:timer = new timer(gameTime);
    let game:gameCourse = new gameCourse(field, gameTimer, gameTime);
    game;
    gameTimer;
}

export {
    game as default,};