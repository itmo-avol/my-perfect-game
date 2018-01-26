/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return htmlData; });
class htmlData {
    static hidePageElements(i) {
        if (i != 1 && i != 2)
            throw new Error('Unknown parameter (not 1/2)');
        let PageElementsId = (i == 1) ? htmlData.firstPageId : htmlData.secondPageId;
        let elem;
        PageElementsId.forEach((value) => {
            elem = document.getElementById(value);
            elem.style.display = "none";
        });
    }
    static showPageElements(i) {
        if (i != 1 && i != 2)
            throw new Error('Unknown parameter (not 1/2)');
        let PageElementsId = (i == 1) ? htmlData.firstPageId : htmlData.secondPageId;
        let elem;
        PageElementsId.forEach((value) => {
            elem = document.getElementById(value);
            elem.style.display = "";
        });
    }
    static initStartElements() {
        let Buttons = document.getElementById(htmlData.idButtons);
        Buttons.innerHTML = '\n';
        let startButton = document.getElementById(htmlData.idStartButton);
        startButton.style.display = '';
        let timer = document.getElementById(htmlData.idTimer);
        timer.style.display = 'none';
    }
}
htmlData.firstPageId = ['header-1', 'main-1'];
htmlData.secondPageId = ['img-2', 'header-2', 'main-2'];
htmlData.idButtons = 'buttons';
htmlData.idStartButton = 'start';
htmlData.idTimer = 'timer';
htmlData.idButton = "button-";
htmlData.idResult = "result";
htmlData.idBackButton = "back-button";



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRandomInt; });
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__All_index__ = __webpack_require__(3);

Object(__WEBPACK_IMPORTED_MODULE_0__All_index__["a" /* default */])();


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initStartButton__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initBackButton__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__htmlData__ = __webpack_require__(0);



function main() {
    try {
        Object(__WEBPACK_IMPORTED_MODULE_0__initStartButton__["a" /* default */])();
        Object(__WEBPACK_IMPORTED_MODULE_1__initBackButton__["a" /* default */])();
        __WEBPACK_IMPORTED_MODULE_2__htmlData__["a" /* default */].hidePageElements(2);
        __WEBPACK_IMPORTED_MODULE_2__htmlData__["a" /* default */].showPageElements(1);
    }
    catch (err) {
        console.log(err);
        return;
    }
}



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initGameButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameFunction__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__htmlData__ = __webpack_require__(0);


function initGameButton() {
    let startButton = document.getElementById(__WEBPACK_IMPORTED_MODULE_1__htmlData__["a" /* default */].idStartButton);
    let timer = document.getElementById(__WEBPACK_IMPORTED_MODULE_1__htmlData__["a" /* default */].idTimer);
    startButton.addEventListener('click', (event) => {
        if (event != undefined) {
            startButton.style.display = "none";
            timer.style.display = '';
            Object(__WEBPACK_IMPORTED_MODULE_0__gameFunction__["a" /* default */])();
        }
    });
}



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameCourse__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameField__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timer__ = __webpack_require__(12);



function game() {
    let M = 4;
    let N = 5;
    let gameTime = 3 * 60;
    let field;
    try {
        field = new __WEBPACK_IMPORTED_MODULE_1__gameField__["a" /* default */](M, N);
    }
    catch (err) {
        throw err;
    }
    let gameTimer = new __WEBPACK_IMPORTED_MODULE_2__timer__["a" /* default */](gameTime);
    let game = new __WEBPACK_IMPORTED_MODULE_0__gameCourse__["a" /* default */](field, gameTimer, gameTime);
    game;
    gameTimer;
}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gameCourse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__htmlData__ = __webpack_require__(0);

class gameCourse {
    constructor(field, gameTic, time) {
        this.isTheFirst = false;
        this.field = field;
        this.closedButtonsPairs = Math.floor(field.N / 2);
        this.addButtonsListeners(field);
        let game = this;
        this.timer = setTimeout(() => { game.endOfGame(game); }, time * 1000);
        this.gameTic = gameTic;
    }
    addButtonsListeners(buttonField) {
        buttonField.button.forEach(item => (item.button.addEventListener('click', (event) => {
            if (event != undefined) {
                if (!item.isOpen)
                    this.handleClick(item);
            }
        })));
    }
    handleClick(elem) {
        elem.setOpenStyle();
        if (!this.isTheFirst) {
            this.waitingAnswerButton = elem;
            this.isTheFirst = true;
        }
        else {
            if (this.waitingAnswerButton.color == elem.color) {
                this.waitingAnswerButton.setFixedStyle();
                elem.setFixedStyle();
                this.closedButtonsPairs--;
            }
            else {
                let game = this;
                setTimeout(() => {
                    game.closeButtons(elem);
                }, 300);
            }
            this.isTheFirst = false;
        }
        if (!this.closedButtonsPairs) {
            clearTimeout(this.timer);
            this.endOfGame(this);
        }
    }
    ;
    closeButtons(elem) {
        this.waitingAnswerButton.setClosedStyle();
        elem.setClosedStyle();
    }
    endOfGame(game) {
        game.gameTic.finishTimer(game.gameTic);
        __WEBPACK_IMPORTED_MODULE_0__htmlData__["a" /* default */].hidePageElements(1);
        let elem = window.document.getElementById(__WEBPACK_IMPORTED_MODULE_0__htmlData__["a" /* default */].idResult);
        let answer;
        if (!game.closedButtonsPairs) {
            answer = "<p> Вы дизайнер! </p>";
        }
        else {
            answer = "<p> Вы не дизайнер! </p>";
        }
        elem.innerHTML = answer;
        __WEBPACK_IMPORTED_MODULE_0__htmlData__["a" /* default */].showPageElements(2);
    }
}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gameField; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameButton__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gameColors__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__htmlData__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getRandomInt__ = __webpack_require__(1);




class gameField {
    constructor(m, n) {
        this.button = [];
        this.m = m;
        this.n = n;
        let N = m * n;
        if (N % 2)
            throw new Error('Entered uneven count of buttons');
        this.formingField();
        this.N = N;
        this.initButtonsArray();
        try {
            this.table = new __WEBPACK_IMPORTED_MODULE_1__gameColors__["a" /* default */](10, Math.floor(this.N / 2));
        }
        catch (err) {
            throw err;
        }
        this.initButtonColor();
    }
    formingField() {
        let field = document.getElementById(__WEBPACK_IMPORTED_MODULE_2__htmlData__["a" /* default */].idButtons);
        let htmlField = '';
        for (let i = 0; i < this.m; i++) {
            let htmlButtons = '';
            for (let j = 0; j < this.n; j++) {
                htmlButtons += `\t<button id="${__WEBPACK_IMPORTED_MODULE_2__htmlData__["a" /* default */].idButton}${i * this.n + j}" class="button"></button>\n`;
            }
            htmlButtons += '<br>';
            htmlField += htmlButtons;
        }
        field.innerHTML = htmlField;
    }
    initButtonsArray() {
        for (let i = 0; i < this.N; i++) {
            let elem = new __WEBPACK_IMPORTED_MODULE_0__gameButton__["a" /* default */](document.getElementById(__WEBPACK_IMPORTED_MODULE_2__htmlData__["a" /* default */].idButton + i));
            this.button.push(elem);
        }
    }
    initButtonColor() {
        let randomColor = this.table.getRandomColor();
        let n = Math.floor(this.N / 2);
        for (let i = 0; i < n; i += 1) {
            randomColor = this.table.getUniqueClosestColor(randomColor);
            let index1, index2;
            index1 = this.getEmptyArrayIndex();
            if (index1 != undefined) {
                this.button[index1].color = randomColor;
                console.log(index1, randomColor);
            }
            index2 = this.getEmptyArrayIndex();
            if (index2 != undefined) {
                this.button[index2].color = randomColor;
                console.log(index2, randomColor);
            }
            else {
                break;
            }
        }
    }
    getEmptyArrayIndex() {
        let index = Object(__WEBPACK_IMPORTED_MODULE_3__getRandomInt__["a" /* default */])(0, this.N - 1);
        let i = 0;
        while (this.button[index].color != undefined) {
            index = (index + 1) % this.N;
            if (++i == this.N)
                return undefined;
        }
        return index;
    }
    ;
    isFixedAll() {
        this.button.forEach((element) => {
            if (!element.isOpen)
                return false;
        });
        return true;
    }
}



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gameButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Colors__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Borders__ = __webpack_require__(10);


class gameButton {
    constructor(button) {
        this.button = button;
        this.isOpen = false;
        this.setClosedStyle();
    }
    setClosedStyle() {
        this.button.style.backgroundColor = 'white';
        this.button.style.borderColor = 'black';
        this.button.style.borderWidth = __WEBPACK_IMPORTED_MODULE_1__Borders__["a" /* default */][0];
        this.isOpen = false;
    }
    setOpenStyle() {
        this.button.style.backgroundColor = __WEBPACK_IMPORTED_MODULE_0__Colors__["a" /* default */][this.color == undefined ? 0 : this.color];
        this.button.style.borderWidth = __WEBPACK_IMPORTED_MODULE_1__Borders__["a" /* default */][2];
        this.isOpen = true;
    }
    setFixedStyle() {
        this.button.style.borderWidth = __WEBPACK_IMPORTED_MODULE_1__Borders__["a" /* default */][1];
    }
}



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Colors; });
var Colors;
(function (Colors) {
    Colors[Colors["Maroon"] = 0] = "Maroon";
    Colors[Colors["DarkRed"] = 1] = "DarkRed";
    Colors[Colors["FireBrick"] = 2] = "FireBrick";
    Colors[Colors["Red"] = 3] = "Red";
    Colors[Colors["Salmon"] = 4] = "Salmon";
    Colors[Colors["Tomato"] = 5] = "Tomato";
    Colors[Colors["Coral"] = 6] = "Coral";
    Colors[Colors["OrangeRed"] = 7] = "OrangeRed";
    Colors[Colors["Chocolate"] = 8] = "Chocolate";
    Colors[Colors["SandyBrown"] = 9] = "SandyBrown";
    Colors[Colors["DarkOrange"] = 10] = "DarkOrange";
    Colors[Colors["Orange"] = 11] = "Orange";
    Colors[Colors["DarkGoldenrod"] = 12] = "DarkGoldenrod";
    Colors[Colors["Goldenrod"] = 13] = "Goldenrod";
    Colors[Colors["Gold"] = 14] = "Gold";
    Colors[Colors["Olive"] = 15] = "Olive";
    Colors[Colors["Yellow"] = 16] = "Yellow";
    Colors[Colors["YellowGreen"] = 17] = "YellowGreen";
    Colors[Colors["GreenYellow"] = 18] = "GreenYellow";
    Colors[Colors["Chartreuse"] = 19] = "Chartreuse";
    Colors[Colors["LawnGreen"] = 20] = "LawnGreen";
    Colors[Colors["Green"] = 21] = "Green";
    Colors[Colors["Lime"] = 22] = "Lime";
    Colors[Colors["LimeGreen"] = 23] = "LimeGreen";
    Colors[Colors["SpringGreen"] = 24] = "SpringGreen";
    Colors[Colors["MediumSpringGreen"] = 25] = "MediumSpringGreen";
    Colors[Colors["Turquoise"] = 26] = "Turquoise";
    Colors[Colors["LightSeaGreen"] = 27] = "LightSeaGreen";
    Colors[Colors["MediumTurquoise"] = 28] = "MediumTurquoise";
    Colors[Colors["Teal"] = 29] = "Teal";
    Colors[Colors["DarkCyan"] = 30] = "DarkCyan";
    Colors[Colors["Aqua"] = 31] = "Aqua";
    Colors[Colors["Cyan"] = 32] = "Cyan";
    Colors[Colors["DarkTurquoise"] = 33] = "DarkTurquoise";
    Colors[Colors["DeepSkyBlue"] = 34] = "DeepSkyBlue";
    Colors[Colors["DodgerBlue"] = 35] = "DodgerBlue";
    Colors[Colors["RoyalBlue"] = 36] = "RoyalBlue";
    Colors[Colors["Navy"] = 37] = "Navy";
    Colors[Colors["DarkBlue"] = 38] = "DarkBlue";
    Colors[Colors["MediumBlue"] = 39] = "MediumBlue";
    Colors[Colors["Blue"] = 40] = "Blue";
    Colors[Colors["BlueViolet"] = 41] = "BlueViolet";
    Colors[Colors["DarkOrchid"] = 42] = "DarkOrchid";
    Colors[Colors["DarkViolet"] = 43] = "DarkViolet";
    Colors[Colors["Purple"] = 44] = "Purple";
    Colors[Colors["DarkMagenta"] = 45] = "DarkMagenta";
    Colors[Colors["Fuchsia"] = 46] = "Fuchsia";
    Colors[Colors["Magenta"] = 47] = "Magenta";
    Colors[Colors["MediumVioletRed"] = 48] = "MediumVioletRed";
    Colors[Colors["DeepPink"] = 49] = "DeepPink";
    Colors[Colors["HotPink"] = 50] = "HotPink";
    Colors[Colors["Crimson"] = 51] = "Crimson";
    Colors[Colors["Brown"] = 52] = "Brown";
    Colors[Colors["IndianRed"] = 53] = "IndianRed";
    Colors[Colors["RosyBrown"] = 54] = "RosyBrown";
    Colors[Colors["LightCoral"] = 55] = "LightCoral";
    Colors[Colors["Snow"] = 56] = "Snow";
    Colors[Colors["MistyRose"] = 57] = "MistyRose";
    Colors[Colors["DarkSalmon"] = 58] = "DarkSalmon";
    Colors[Colors["LightSalmon"] = 59] = "LightSalmon";
    Colors[Colors["Sienna"] = 60] = "Sienna";
    Colors[Colors["SeaShell"] = 61] = "SeaShell";
    Colors[Colors["SaddleBrown"] = 62] = "SaddleBrown";
    Colors[Colors["Peachpuff"] = 63] = "Peachpuff";
    Colors[Colors["Peru"] = 64] = "Peru";
    Colors[Colors["Linen"] = 65] = "Linen";
    Colors[Colors["Bisque"] = 66] = "Bisque";
    Colors[Colors["Burlywood"] = 67] = "Burlywood";
    Colors[Colors["Tan"] = 68] = "Tan";
    Colors[Colors["AntiqueWhite"] = 69] = "AntiqueWhite";
    Colors[Colors["NavajoWhite"] = 70] = "NavajoWhite";
    Colors[Colors["BlanchedAlmond"] = 71] = "BlanchedAlmond";
    Colors[Colors["PapayaWhip"] = 72] = "PapayaWhip";
    Colors[Colors["Moccasin"] = 73] = "Moccasin";
    Colors[Colors["Wheat"] = 74] = "Wheat";
    Colors[Colors["Oldlace"] = 75] = "Oldlace";
    Colors[Colors["FloralWhite"] = 76] = "FloralWhite";
    Colors[Colors["Cornsilk"] = 77] = "Cornsilk";
    Colors[Colors["Khaki"] = 78] = "Khaki";
    Colors[Colors["LemonChiffon"] = 79] = "LemonChiffon";
    Colors[Colors["PaleGoldenrod"] = 80] = "PaleGoldenrod";
    Colors[Colors["DarkKhaki"] = 81] = "DarkKhaki";
    Colors[Colors["Beige"] = 82] = "Beige";
    Colors[Colors["LightGoldenrodYellow"] = 83] = "LightGoldenrodYellow";
    Colors[Colors["LightYellow"] = 84] = "LightYellow";
    Colors[Colors["Ivory"] = 85] = "Ivory";
    Colors[Colors["OliveDrab"] = 86] = "OliveDrab";
    Colors[Colors["DarkOliveGreen"] = 87] = "DarkOliveGreen";
    Colors[Colors["DarkSeaGreen"] = 88] = "DarkSeaGreen";
    Colors[Colors["DarkGreen"] = 89] = "DarkGreen";
    Colors[Colors["ForestGreen"] = 90] = "ForestGreen";
    Colors[Colors["LightGreen"] = 91] = "LightGreen";
    Colors[Colors["PaleGreen"] = 92] = "PaleGreen";
    Colors[Colors["Honeydew"] = 93] = "Honeydew";
    Colors[Colors["SeaGreen"] = 94] = "SeaGreen";
    Colors[Colors["MediumSeaGreen"] = 95] = "MediumSeaGreen";
    Colors[Colors["Mintcream"] = 96] = "Mintcream";
    Colors[Colors["MediumAquamarine"] = 97] = "MediumAquamarine";
    Colors[Colors["Aquamarine"] = 98] = "Aquamarine";
    Colors[Colors["DarkSlateGray"] = 99] = "DarkSlateGray";
    Colors[Colors["PaleTurquoise"] = 100] = "PaleTurquoise";
    Colors[Colors["LightCyan"] = 101] = "LightCyan";
    Colors[Colors["Azure"] = 102] = "Azure";
    Colors[Colors["CadetBlue"] = 103] = "CadetBlue";
    Colors[Colors["PowderBlue"] = 104] = "PowderBlue";
    Colors[Colors["LightBlue"] = 105] = "LightBlue";
    Colors[Colors["SkyBlue"] = 106] = "SkyBlue";
    Colors[Colors["LightskyBlue"] = 107] = "LightskyBlue";
    Colors[Colors["SteelBlue"] = 108] = "SteelBlue";
    Colors[Colors["AliceBlue"] = 109] = "AliceBlue";
    Colors[Colors["SlateGray"] = 110] = "SlateGray";
    Colors[Colors["LightSlateGray"] = 111] = "LightSlateGray";
    Colors[Colors["LightsteelBlue"] = 112] = "LightsteelBlue";
    Colors[Colors["CornflowerBlue"] = 113] = "CornflowerBlue";
    Colors[Colors["Lavender"] = 114] = "Lavender";
    Colors[Colors["GhostWhite"] = 115] = "GhostWhite";
    Colors[Colors["MidnightBlue"] = 116] = "MidnightBlue";
    Colors[Colors["SlateBlue"] = 117] = "SlateBlue";
    Colors[Colors["DarkSlateBlue"] = 118] = "DarkSlateBlue";
    Colors[Colors["MediumSlateBlue"] = 119] = "MediumSlateBlue";
    Colors[Colors["MediumPurple"] = 120] = "MediumPurple";
    Colors[Colors["Indigo"] = 121] = "Indigo";
    Colors[Colors["MediumOrchid"] = 122] = "MediumOrchid";
    Colors[Colors["Plum"] = 123] = "Plum";
    Colors[Colors["Violet"] = 124] = "Violet";
    Colors[Colors["Thistle"] = 125] = "Thistle";
    Colors[Colors["Orchid"] = 126] = "Orchid";
    Colors[Colors["LavenderBlush"] = 127] = "LavenderBlush";
    Colors[Colors["PaleVioletRed"] = 128] = "PaleVioletRed";
    Colors[Colors["Pink"] = 129] = "Pink";
    Colors[Colors["LightPink"] = 130] = "LightPink";
    Colors[Colors["Black"] = 131] = "Black";
    Colors[Colors["DimGray"] = 132] = "DimGray";
    Colors[Colors["Gray"] = 133] = "Gray";
    Colors[Colors["DarkGray"] = 134] = "DarkGray";
    Colors[Colors["Silver"] = 135] = "Silver";
    Colors[Colors["LightGrey"] = 136] = "LightGrey";
    Colors[Colors["Gainsboro"] = 137] = "Gainsboro";
    Colors[Colors["WhiteSmoke"] = 138] = "WhiteSmoke";
    Colors[Colors["White"] = 139] = "White";
})(Colors || (Colors = {}));



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Borders; });
var Borders;
(function (Borders) {
    Borders[Borders["thin"] = 0] = "thin";
    Borders[Borders["medium"] = 1] = "medium";
    Borders[Borders["thick"] = 2] = "thick";
})(Borders || (Borders = {}));



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gameColors; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getRandomInt__ = __webpack_require__(1);

class gameColors {
    constructor(dis, n) {
        this.usedColors = [];
        if (n != undefined)
            if (n > gameColors.N_COLOR)
                throw new Error("A lot of recuired colors.");
        this.dis = dis;
    }
    isColorUsed(color) {
        let n = this.usedColors.length;
        for (let i = 0; i < n; i++) {
            if (color == this.usedColors[i])
                return true;
        }
        return false;
    }
    getUniqueClosestColor(color) {
        let newColor;
        newColor = this.getCloseColor(color);
        if (this.isColorUsed(newColor)) {
            let newColorResult = this.getUncolissionColor(color);
            if (newColorResult != undefined) {
                newColor = newColorResult;
            }
            else {
                throw new Error('Reserved unique colors are over.');
            }
        }
        this.usedColors.push(newColor);
        return newColor;
    }
    getUncolissionColor(color) {
        let newColor = this.getClosestOriginalColor(color);
        if (newColor == undefined) {
            newColor = this.getAnyAnotherColor(color);
        }
        return newColor;
    }
    getClosestOriginalColor(color) {
        let newColor = this.getClosestLeftOriginalColor(color);
        if (newColor == undefined) {
            newColor = this.getClosestRightOriginalColor(color);
        }
        return newColor;
    }
    getClosestLeftOriginalColor(color) {
        let min = this.getMinCloseColor(color);
        for (let i = color; i >= min; i--) {
            if (!this.isColorUsed(i)) {
                return i;
            }
        }
        return undefined;
    }
    getClosestRightOriginalColor(color) {
        let max = this.getMaxCloseColor(color);
        for (let i = color; i <= max; i++) {
            if (!this.isColorUsed(i)) {
                return i;
            }
        }
        return undefined;
    }
    getAnyAnotherColor(color) {
        let newColor = this.getAnyLeftOriginalColor(this.getMinCloseColor(color));
        if (newColor == undefined) {
            newColor = this.getAnyRightOriginalColor(this.getMaxCloseColor(color));
        }
        return newColor;
    }
    getAnyLeftOriginalColor(color) {
        for (let i = color; i >= 0; i--) {
            if (!this.isColorUsed(i)) {
                return i;
            }
        }
        return undefined;
    }
    getAnyRightOriginalColor(color) {
        for (let i = color; i < gameColors.N_COLOR; i++) {
            if (!this.isColorUsed(i)) {
                return i;
            }
        }
        return undefined;
    }
    getCloseColor(color) {
        let newRandomColor;
        let min, max;
        min = this.getMinCloseColor(color);
        max = this.getMaxCloseColor(color);
        newRandomColor = Object(__WEBPACK_IMPORTED_MODULE_0__getRandomInt__["a" /* default */])(min, max);
        return newRandomColor;
    }
    ;
    getMinCloseColor(color) {
        return (color - this.dis) < 0 ? 0 : (color - this.dis);
    }
    getMaxCloseColor(color) {
        return (color + this.dis) >= gameColors.N_COLOR ? gameColors.N_COLOR - 1 : (color + this.dis);
    }
    getRandomColor() {
        let color = Object(__WEBPACK_IMPORTED_MODULE_0__getRandomInt__["a" /* default */])(0, gameColors.N_COLOR - 1);
        return color;
    }
}
gameColors.N_COLOR = 140;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__htmlData__ = __webpack_require__(0);

class timer {
    constructor(seconds) {
        this.output = document.getElementById(__WEBPACK_IMPORTED_MODULE_0__htmlData__["a" /* default */].idTimer);
        this.reserve = this.remainTime = seconds;
        this.startTimer();
    }
    startTimer() {
        let timer = this;
        this.timerId = setInterval(() => {
            timer.timerIteration(timer);
        }, 1000);
    }
    timerIteration(timer) {
        if (!timer.remainTime--) {
            timer.finishTimer(timer);
            return true;
        }
        let min = Math.floor(timer.remainTime / 60);
        let sec = timer.remainTime % 60;
        timer.output.innerHTML = `<p>${(min < 10 ? '0' + min : min)}:${(sec < 10 ? '0' + sec : sec)}</p>`;
        return false;
    }
    finishTimer(timer) {
        clearInterval(timer.timerId);
        timer.remainTime = 0;
    }
}



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initBackButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__restartFunction__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__htmlData__ = __webpack_require__(0);


function initBackButton() {
    let backButton = document.getElementById(__WEBPACK_IMPORTED_MODULE_1__htmlData__["a" /* default */].idBackButton);
    backButton.addEventListener('click', (event) => {
        if (event != undefined) {
            Object(__WEBPACK_IMPORTED_MODULE_0__restartFunction__["a" /* default */])();
        }
    });
}



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return restart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__htmlData__ = __webpack_require__(0);

function restart() {
    __WEBPACK_IMPORTED_MODULE_0__htmlData__["a" /* default */].hidePageElements(2);
    __WEBPACK_IMPORTED_MODULE_0__htmlData__["a" /* default */].showPageElements(1);
    __WEBPACK_IMPORTED_MODULE_0__htmlData__["a" /* default */].initStartElements();
}



/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map