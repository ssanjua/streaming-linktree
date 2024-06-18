import React from 'react'

const TikTokList: React.FC = () => {
  return (
    <div className="flex justify-center video-list">
      <div className='flex items-center border-2 w-72 h-40 m-2'>
        <p className="p-2">this is me on tik tok</p>
      </div>
      <div className='flex items-center border-2 w-44 h-40 m-2'>
        <p className="p-2">best videos</p>
      </div>
      <div className='flex items-center border-2 w-40 h-40 m-2'>
        <p className="p-2">best videos</p>
      </div>
      {/* Video items will go here */}
    </div>
  )
}

export default TikTokList