import React from 'react';
import NameCard from '../Namecard/NameCard';
import './Result.css'

export default function Result({suggest}) {
    const suggestjsx=suggest.map((suggestname)=>{
        return <NameCard key={suggestname} suggestname={suggestname}/>
    })
  return <div className='result-container'>
      {suggestjsx}
      
  </div>;
}
