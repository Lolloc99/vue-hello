/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            printText: "Hello Vue",
            printImg: "https://i.pinimg.com/originals/e6/29/ba/e629ba7a40df699c9e17e41c0d877835.jpg",
            imgAlt: "La neva"
        }
    }
)