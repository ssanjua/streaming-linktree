'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


export default function LoginGoogle() {
  return (
    
    <div>
      <button 
          onClick={() => {}}
          className="bg-blue shadow-sm text-white rounded-lg text-center w-full py-2 flex gap-2 justify-center">
          <FontAwesomeIcon className="w-6" icon={faGoogle} />
          <span>Registrate con google</span>
        </button>
    </div>
  )
}
