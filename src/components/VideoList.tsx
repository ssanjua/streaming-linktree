import React from 'react'

const VideoList: React.FC = () => {
  return (
    <div className="flex justify-center video-list">
      <div className='flex items-center border-2 w-80 h-40 m-2'>
        <p className="p-2">my latest YouTube video</p>
      </div>
      <div className='flex items-center border-2 w-80 h-40 m-2'>
        <p className="p-2">pinned video</p>
      </div>
      {/* Video items will go here */}
    </div>
  )
}

export default VideoList