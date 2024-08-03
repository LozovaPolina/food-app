import LogoImg from "../icons/logo.svg";

export default function Header() {
  return (
    <header className='header'>
      <div className='header__left-block'>
        <div className='header__logo'>
          <img src={LogoImg} alt='Logo' />
        </div>
        <nav className='header__links'>
          <a href='#' className='header__link'>
            Food delivery
          </a>
          <a href='#' className='header__link'>
            Second point
          </a>
        </nav>
      </div>
      <div className='header__right-block'>
        <button className='btn btn_white'>Connect with us</button>
      </div>
    </header>
  );
}
