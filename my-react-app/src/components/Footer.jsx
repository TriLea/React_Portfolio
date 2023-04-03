//import icons
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';
//import indeedIcon from "../assets/images/indeed.png";


export default function Footer() 
{
  return (
    <div>
      <div className="footer">
        <a href="https://github.com/TriLea"><FaGithub size='40' /></a>
        <a href="https://www.linkedin.com/in/tristan-lea-710002230"><FaLinkedin size='40' /></a>
        <a href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage&_ga=2.860660.412603641.1680489815-1971695938.1680133790"><SiIndeed size='40' /></a>
      </div>
    </div>
  )
}
