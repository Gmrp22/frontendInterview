import { useState } from "react"

export default function Accordion() {
    let items = [
        { title: "What is the capital of France?", content: "Paris", style: { backgroundColor: "blue" } },
        { title: "What is the capital of Spain?", content: "Madrid", style: { backgroundColor: "green" } },
        { title: "What is the capital of Italy?", content: "Rome", style: { backgroundColor: "yellow" } },
    ]
    let [activeIndex, setActiveIndex] = useState<number | null>(null)
    function handleSelect(index: number) {
        setActiveIndex(activeIndex === index ? null : index)
    }
    return (
        <div>
            {items.map((item, index) => {
                return <div style={item.style} key={index} onClick={() => handleSelect(index)} >

                    <li>{item.title}</li>
                    {activeIndex === index ? <p>{item.content}</p> : null}
                </div>
            })}
        </div>
    )
}