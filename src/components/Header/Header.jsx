import React from 'react'
import './Header.css'

export default function Header({headerinput}) {
    return (
        <div className='container'>
            <img className='head-img head-img-expand'   src='https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png' alt='headimage'/>
            <h1 className='head-text'>Name It!</h1>
        </div>
    )
}
