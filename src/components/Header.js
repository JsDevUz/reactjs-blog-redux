import React from 'react'
import { FaTabletAlt, FaLaptop, FaMobileAlt } from 'react-icons/fa'
import useWindowSize from '../hooks/useWindowSize'
function Header() {
    const { width } = useWindowSize()

    return (
        <div className='head'>
            <h3>ReactJS Blog</h3>
            {width < 768 ?
                < FaMobileAlt size={24} />
                : width < 992 ?
                    <FaTabletAlt size={24} />
                    : <FaLaptop size={24} />
            }
        </div>
    )
}

export default Header