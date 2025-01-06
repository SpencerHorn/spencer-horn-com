import './nav.css';

export default function Nav() {
  return (
    <nav>
      <a href="https://www.linkedin.com/in/SpencerLHorn" 
        target="_blank"
        rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href="https://github.com/SpencerHorn" 
        target="_blank"
        rel="noopener noreferrer">
        Github
      </a>
      <a href='https://drive.google.com/file/d/16Ox9F8I02bNzsSqGF6KaVX6yRjfKgAee/view?usp=sharing' 
        download="SpencerHorn-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer">
        Download Resume
      </a>
    </nav>
  )
}