function getRandomInt(min:number, max:number):number    //получение случайного целого числа
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {
    getRandomInt as default,};