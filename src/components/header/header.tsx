type HeaderProps = {
  image: {
    src: string;
    alt: string
  };
};

import './header.css';

export default function Header({ image }: HeaderProps) {
  return (
    <div className='header-box'>
      <header>
        <img className='shlogo' {...image} />
      </header>
    </div>
  );
}