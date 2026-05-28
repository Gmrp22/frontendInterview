function factoryAc() {
    let ac = new AbortController()
    let signal = ac.signal
    let timer = null
    return function searchWithDebounce(query, delay) {

        ac.abort()
        ac = new AbortController()
        signal = ac.signal

        timer = setTimeout(() => {
            fetch(query, { signal }).then(response => response.json()).then(data => {
                console.log(data)
            }).catch(error => {
                if (error.name === "AbortError") {
                    console.log("Fetch aborted")
                } else {
                    console.error("Fetch error:", error)
                }
            })
        }, delay);
        signal.addEventListener("abort", () => {
            console.log("abort")
            clearTimeout(timer)
        })
    }

}



let ac1 = factoryAc()

ac1('https://jsonplaceholder.typicode.com/posts', 3000)

ac1('https://jsonplaceholder.typicode.com/comments', 2000)
