import React from 'react'
import './Search.css'
export default function Search(props) {
  return (
      <div className='search'>
          <input  className='search-input' placeholder='Type Keyword' type='text'
          onChange={(e)=>props.handleinput(e.target.value)}/>
      </div>
  )
}
 