class htmlData{
    static firstPageId: string[] = ['header-1', 'main-1'];
    static secondPageId: string[] = ['img-2','header-2', 'main-2'];
    static idButtons:string = 'buttons';
    static idStartButton:string = 'start';
    static idTimer:string = 'timer';
    static idButton = "button-";
    static idResult = "result";
    static idBackButton = "back-button";

    //скрыть элементы страницы по их id
    static hidePageElements(i: number):void{
        if ( i!==1 && i!==2 )
            throw new Error('Unknown parameter (not 1/2)');
        let PageElementsId:string[] = (i===1)? htmlData.firstPageId : htmlData.secondPageId;
        let elem:HTMLElement;
        PageElementsId.forEach( (value:string)=>{
            elem = document.getElementById(value) as HTMLElement;
            elem.style.display = "none";
        }
        )
    }

    //показать элементы страницы по их id
    static showPageElements(i: number):void{
        if ( i!==1 && i!==2 )
            throw new Error('Unknown parameter (not 1/2)');
        let PageElementsId:string[] = (i===1)? htmlData.firstPageId : htmlData.secondPageId;
        let elem:HTMLElement;
        PageElementsId.forEach( (value:string)=>{
            elem = document.getElementById(value) as HTMLElement;
            elem.style.display = "";
        }
        )
    }

    static initStartElements():void{
        let Buttons:HTMLElement = document.getElementById(htmlData.idButtons) as HTMLElement;
        Buttons.innerHTML='\n';
        let startButton:HTMLElement = document.getElementById(htmlData.idStartButton) as HTMLElement;
        startButton.style.display = '';
        let timer:HTMLElement = document.getElementById(htmlData.idTimer) as HTMLElement;
        timer.style.display = 'none';
    }

}

export {
    htmlData as default,};

    ////без класса