//abort controller es una clase de js, permite abortar cualquier operacion asincrona

//nos devuelve un signal y un controller, el signal es lo que nos permite escuchar el "abort", el controller es el que perimte abortar
//tenenmos que agregar un eventlistener to signal para poder manejar el evento de aborto 


//abortSignal.Timeout permite crear un timeout, es decir que si no se cumple la peticion en el tiempo establecido se aborta, sin crear un ac 

let ac = new AbortController();
let signal = ac.signal;


signal.addEventListener("abort", () => {
    console.log("abort");
});

fetch("https://jsonplaceholder.typicode.com/posts", { signal }).then((response) => {
    console.log(response);
}).catch(error => {
    if (error.name === 'AbortError') {
        console.log('Fetch aborted');
    } else {
        console.error('Fetch error:', error);
    }
});

setTimeout(() => {
    ac.abort();
}, 100);


async function acyncOperation({ signal }) {

    return new Promise((resolve, reject) => {
        signal.addEventListener("abort", () => {
            reject("abort");
        })
        setTimeout(() => {
            resolve("success")
        }, 2000)
    })


}

let ac2 = new AbortController();
acyncOperation({ signal: ac2.signal }).then((response) => {
    console.log(response);
}).catch(error => {
    if (error.name === 'AbortError') {
        console.log('Fetch aborted');
    } else {
        console.error('Fetch error:', error);
    }
});

setTimeout(() => {
    ac2.abort();
}, 1000);






import { EventEmitter } from "events";
function eventExercise(process, signal) {
    let event = new EventEmitter();
    let id = setInterval(() => {
        //process()
        event.emit("hey", "hey")
    }, 2000)
    signal.addEventListener("abort", () => {
        clearInterval(id)
    })


    return event
}

let signal1 = new AbortController();

let ee = eventExercise(() => { console.log("hey") }, signal1.signal)

ee.on("hey", (e) => {
    console.log("Function says:     ", e);
})

setTimeout(() => {
    signal1.abort();
}, 10000);
