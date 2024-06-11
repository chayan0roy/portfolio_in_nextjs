import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa"

const socialLinks = [
    {
        icon:<FaGithub/>,
        path:""
    },
    {
        icon:<FaLinkedinIn/>,
        path:""
    },
    {
        icon:<FaYoutube/>,
        path:""
    },
    {
        icon:<FaTwitter/>,
        path:""
    }
]
export default function Socials({containerStyle, iconStyle}) {
  return (
    <div className={containerStyle}>
      {
        socialLinks.map((item, index)=>{
            return(
                <Link key={index} href={item.path} className={iconStyle}>
                    {item.icon}
                </Link>
            )
        })
      }
    </div>
  )
}
