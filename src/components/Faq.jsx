import React, { useState } from 'react';
import downArrowImg from '../assets/images/webp/down-arrow.webp'
import upArrowImg from '../assets/images/webp/up-arrow.webp'

function AccordionItem({ title, content, isOpen, toggleAccordion }) {
    return (
        <div className={`max-w-[653px] border-b-[2px] border-primary border-solid`}>
            <div
                className={`sm:px-3 sm:pr-7 pb-5 pt-8 cursor-pointer flex justify-between items-center text-gray`}
                onClick={toggleAccordion}
            >
                <p className='font-normal text-xl sm:text-4xl md:text-6xl text-primary leading-130'>{title}</p>
                {isOpen ? (
                    <img src={upArrowImg} alt="Up Arrow" className="w-4 h-[9px]" />
                ) : (
                    <img src={downArrowImg} alt="Down Arrow" className="w-4 h-[9px]" />
                )}
            </div>
            {isOpen && (
                <div
                    className={`${isOpen ? "pt-0" : "pb-0"} sm:px-3 sm:pr-7  pb-10 font-inter font-normal text-base leading-160 text-primary`}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            )}
        </div>
    );
}
function ACCORDION() {
    const [accordionItems, setAccordionItems] = useState([
        {
            title: 'A Cafe with Character',
            content: 'Our cafe will be designed to evoke warmth and coziness. Imagine sipping your favorite coffee amidst shelves lined with books, vintage decor, and comfortable seating that invites you to stay. The ambiance will be rich with character, offering a serene and inviting space where you can relax, read, or catch up with friends over a delicious cup of coffee and a pastry.',
            isOpen: true,
        },
        {
            title: 'An Outdoor-Inspired Cat Lounge',
            content: 'Our cafe will be designed to evoke warmth and coziness. Imagine sipping your favorite coffee amidst shelves lined with books.',
            isOpen: false,
        },
        {
            title: 'Managing Reservations',
            content: 'The ambiance will be rich with character, offering a serene and inviting space where you can relax, read, or catch up with friends over a delicious cup of coffee and a pastry.',
            isOpen: false,
        },
        {
            title: 'Seasonal Coffee Drinks',
            content: 'Imagine sipping your favorite coffee amidst shelves lined with books, vintage decor, and comfortable seating that invites you to stay.',
            isOpen: false,
        },
    ]);
    const TOGGLE_ACCORDION_ITEM = (index) => {
        const updatedAccordionItems = [...accordionItems];
        updatedAccordionItems[index].isOpen = !updatedAccordionItems[index].isOpen;
        setAccordionItems(updatedAccordionItems);
    };
    return (
        <>
            {accordionItems.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={item.isOpen}
                    toggleAccordion={() => TOGGLE_ACCORDION_ITEM(index)}
                />
            ))}
        </>
    );
}
export default ACCORDION;