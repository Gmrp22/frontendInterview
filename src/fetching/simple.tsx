
import { useEffect, useState } from "react"
export default function List() {

    const [list, setList] = useState<{ name: string; url: string }[]>([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then((response: any) => response.json())
            .then((data: any) => {
                setList(data.results)
                console.log(data)
            })
    }, [])

    return <>
        <div>
            {list.map((item) => (
                <div key={item.name}>
                    <p >{item.name}</p>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/').filter(Boolean).pop()}.png`} alt={item.name} />
                </div>
            ))}
        </div>

    </>

}


//explain import and export default and named export:
// we can wxport a default fucntion or variable by using export degault, when we import it,
// we can name it wahtever and do not have to worry about it, since the default will always be the same

// named exports are idfferent, when we import them we NEED to make sure we are using the correct name and using crurly braces
