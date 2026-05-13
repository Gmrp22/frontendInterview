
import React, { useEffect, useState, useRef } from "react"
export default function InfiniteScroll() {
    const style: React.CSSProperties = {
        height: '1000px',
        overflowY: 'scroll',
        border: '1px solid black',
    }
    const [list, setList] = useState<{ name: string; url: string }[]>([])
    const scroll = useRef<HTMLDivElement>(null)
    const [offset, setOffset] = useState(0)
    const debounce = useRef<ReturnType<typeof setTimeout> | null>(null)
    useEffect(() => {

        fetch('https://pokeapi.co/api/v2/pokemon?offset=' + offset + '&limit=20')
            .then((response: any) => response.json())
            .then((data: any) => {
                setList((prev) => [...prev, ...data.results])
                console.log(data)
            })
    }, [offset])

    function handleScroll() {
        clearTimeout(debounce.current)
        debounce.current = setTimeout(() => {
            console.log(" se esta pidiendo data", offset)
            if (scroll.current) {
                const top = scroll.current.scrollTop
                const scrollHeight = scroll.current.scrollHeight
                const clientHeight = scroll.current.clientHeight
                if (top + clientHeight >= scrollHeight - 100) {
                    console.log('bottom reached')
                    setOffset(prev => prev + 20)
                }
            }
        }, 1000)

    }
    return <>
        <div ref={scroll} onScroll={handleScroll} style={style}>
            {list.map((item) => {
                const id = item.url.split('/').filter(Boolean).pop()
                return (
                    <div key={id}>
                        <p>{item.name}</p>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={item.name} />
                    </div>
                )
            })}
        </div>

    </>

}
//infinite scroll