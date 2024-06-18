import React from 'react'

const Profile: React.FC = () => {
  return (
    <div className="flex justify-center items-center profile">
      <div className='m-2'>
        <img src="perfil2024.webp" className="size-40" alt="Profile" />
      </div>
      <div className="flex items-center border-2 w-40 h-40 m-2">
        <h1 className="p-2">ssanjuaninja</h1>
      </div>
      <div className="flex items-center border-2 w-60 h-40 m-2">
        <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. ?</p>
      </div>
    </div>
  )
}

export default Profile