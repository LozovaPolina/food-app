import LogoImg from "../icons/logo.svg";
import React, {useRef} from "react";
import Modal, {ModalRef} from "./UI/Modal";
import ContactUsForm from "./froms/ContactUsForm";

export default function Header() {

    const dialog = useRef<ModalRef>(null);
    const openModal = () => {
        dialog.current?.open();
    };
    const closeModal = () => {
        dialog.current?.close();
    };

  return (

      <>
          <header className='header'>
              <div className='header__left-block'>
                  <div className='header__logo'>
                      <img src={LogoImg} alt='Logo'/>
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
                  <button className='btn btn_white' onClick={openModal}>Connect with us</button>
              </div>
          </header>
          <Modal ref={dialog}>
              <ContactUsForm onCloseModal={closeModal}/>
          </Modal>
      </>
  );
}
