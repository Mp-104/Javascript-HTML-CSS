"use strict";
{
    let button = document.getElementById("knapp");

    button.innerHTML = "Hej från Javascript";

    button.onclick = knappFunktion;

    let buttonRed = document.getElementById("röd");

    let buttonYellow = document.getElementById("gul");

    buttonRed.onclick = knappRöd2;

    buttonYellow.onclick = knappGul2;

    let buttonMenu = document.getElementById("menu");

    buttonMenu.onclick = menu2;

    function knappFunktion() {
        alert("Hello world!");
    }

    function knappRöd () {
        let change = document.getElementById("body");
        change.style.backgroundColor = "red";
    }

    function knappRöd2 () {
        let change = document.getElementById("body");
        change.classList.toggle("backgroundRed")
    }

    function knappGul () {
        let change = document.getElementById("body");
        change.style.backgroundColor = "yellow";
    }

    function knappGul2 () {
        let change = document.getElementById('body');
        
        change.classList.toggle("backgroundYellow");
    }

    function menu () {
        let element = document.querySelector(".meny");
        element.classList.toggle("show2");
    }

    function menu2 () {
        let element = document.getElementById("nav");
        element.classList.toggle("show2");
    }



    const knapp = document.getElementById("skicka");

    knapp.onclick = skicka;

    const button1 = document.getElementById("button");

    button1.onclick = skicka;

    let list = [];

    function skicka () {
        const AngeNamn = document.getElementById("namn").value;
        //let list = [];
        list.push(AngeNamn);

        let listData = [];

        listData.push(AngeNamn);


        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            document.getElementById("demo").innerHTML ="Hej, " + AngeNamn;
            if (list.length>1) {
                document.getElementById("demo").innerHTML ="Hej, " + AngeNamn + ", personen före dig var " + list[index-1];
                
            }
        }

        //document.getElementById("demo2").innerHTML = list;

        let listElement = document.getElementById('myList');
        let listItem = document.createElement('li');
        

        for (let i = 0; i < listData.length; i++) {
            listItem.textContent = listData[i];
            listElement.appendChild(listItem);
            listItem = document.createElement('li');
            //document.getElementById("demo2").innerHTML ="Hej, " + AngeNamn + " personen före dig var " + listData[i-1];

        }

        //let list2 = document.getElementById("list");
        

        //document.getElementById("demo2").innerHTML ="Hej, " + AngeNamn + " personen före dig var ";

        //document.getElementById("demo").innerHTML = list;

        //alert(list);
    }

    function test () {

        let data = ["Ram", "Shyam", "Sita", "Gita"];
            let list = document.getElementById("myList");
            for (i = 0; i < data.length; ++i) {
                let li = document.createElement('li');
                li.innerText = data[i];
                list.appendChild(li);
            }
    }

    



}
