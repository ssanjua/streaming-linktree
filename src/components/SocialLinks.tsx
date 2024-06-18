import React from 'react'
import FacebookIcon from '../assets/icons/FacebookIcon'
import XIcon from '../assets/icons/XIcon'
import TwitchIcon from '../assets/icons/TwitchIcon'
import KickIcon from '../assets/icons/KickIcon'
import InstagramIcon from '../assets/icons/InstagramIcon'
import YouTubeIcon from '../assets/icons/YouTube'
import DiscordIcon from '../assets/icons/DiscordIcon'
import TikTokIcon from '../assets/icons/TikTokIcon'


const LINKS = {
  X: {
    icon: XIcon,
    url: "http",
  },
  TWITCH: {
    icon: TwitchIcon,
    url: "http",
  },
  FACEBOOK: {
    icon: FacebookIcon,
    url: "http",
  },
  DISCORD: {
    icon: DiscordIcon,
    url: "http",
  },
  TIKTOK: {
    icon: TikTokIcon,
    url: "http",
  },
  YOUTUBE: {
    icon: YouTubeIcon,
    url: "http",
  },
  KICK: {
    icon: KickIcon,
    url: "http",
  },
  INSTAGRAM: {
    icon: InstagramIcon,
    url: "http",
  },
}

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links flex justify-center mb-10">
      {
        Object.entries(LINKS).map(([key, { icon: Icon, url }]) => (
          <div className='border-2 p-2'>
            <a key={key} href={url} target="_blank" rel="noopener noreferrer">
              <Icon className="size-10" />
            </a>
          </div>
        ))
      }
      {/* Other social links will go here */}
    </div>
  )
}

export default SocialLinks