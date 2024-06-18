import React from 'react'

const StreamList: React.FC = () => {
  return (
    <div className="flex justify-center stream-list">
      <div className='flex items-center border-2 w-80 h-40 m-2'>
        <p className="p-2">follow me on twitch</p>
      </div>
      <div className='flex items-center border-2 w-80 h-40 m-2'>
        <p className="p-2">featured clip on twitch</p>
      </div>
      {/* Stream items will go here */}
    </div>
  )
}

export default StreamList