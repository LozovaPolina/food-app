import facebookIcon from "../icons/facebook.svg";
import instagramIcon from "../icons/instagram.svg";
export default function Sidepanel() {
  return (
    <div className='sidepanel'>
      <div className='sidepanel__text'>
        <span>Social media</span>
      </div>
      <div className='sidepanel__divider'></div>
      <a href='#' className='sidepanel__icon'>
        <img src={instagramIcon} alt='instagram' />
      </a>
      <a href='#' className='sidepanel__icon'>
        <img src={facebookIcon} alt='facebook' />
      </a>
    </div>
  );
}
