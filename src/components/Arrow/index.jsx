import { useEffect, useState } from 'react';
import './arrow.css'
import { IoIosArrowUp } from "react-icons/io";


function Arrow() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 20) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            className={`arrow-up ${isVisible ? 'visible' : ''}`}
            id='arrow-up'
            onClick={scrollToTop}
            aria-label='arrow-up'>
            <IoIosArrowUp className='arrow' />
        </button>
    )
}

export default Arrow
