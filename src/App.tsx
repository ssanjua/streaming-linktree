import Profile from "./components/Profile"
import SocialLinks from "./components/SocialLinks"
import StreamList from "./components/StreamList"
import TikTokList from "./components/TikTok"
import VideoList from "./components/VideoList"

const App = () => {
  
  return (
    <div className="flex flex-col mx-auto w-full h-full pt-10">
      <Profile />
      <StreamList />
      <VideoList />
      <TikTokList />
      <SocialLinks />
    </div>
  )
}

export default App
