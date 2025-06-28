import React, { useState } from 'react'
import './App.css' // CSS faylini import qilish
import GirlImage from '../../assets/logos/1.jpg'
import GirlsImage from '../../assets/logos/3.jpg'

import TraditionImage from '../../assets/logos/11.jpg'
import LessonImage from '../../assets/logos/19.jpg'
const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const items = [
        {
            id: 1,
            image: GirlImage,
            content: 'birinchi qor yoqqan kuni talabalar qor o’ynashganda!',
        },
        {
            id: 2,
            image: GirlsImage,
            content:
                "navruz bayrami munosabati bilan o'tkazilgan tadbirda qizlarimiz milliy liboslarda! ",
        },
        {
            id: 3,
            image: TraditionImage,
            content: 'Navruz sayli jarayonlaridan foto lavhalar!',
        },
        {
            id: 4,
            image: LessonImage,
            content: `"Fan javohirlari" grant imtixonlari o'tkazildi`,
        },
    ]

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
        localStorage.setItem('activeIndex', index)
    }

    return (
        <section className="accordion">
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleClick(index)}
                >
                    <img src={item.image} alt={`Image ${item.id}`} />
                    {/* <div className="content">
                        {item.content}
                    </div> */}
                </div>
            ))}
        </section>
    )
}

export default Accordion
