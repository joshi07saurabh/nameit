import React from 'react';
import './Namecard.css'
const url='https://www.namecheap.com/domains/registration/results/?domain=';

export default function NameCard({suggestname}) {
  return(
  <a
    target='_blank'
    rel='noreferrer'
    href={`${url}${suggestname}`}
    className='link'
  >
  <div className='resutl-card'>
      <p className='result-name'>{suggestname}</p>
  </div>
  </a>
  );
}
