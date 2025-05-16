import React, {forwardRef, ReactNode, useEffect, useImperativeHandle, useRef} from 'react';

import {createPortal} from "react-dom";
type ModalProps = {
	children: ReactNode;
};

export type ModalRef = {
	open: () => void;
	close: () => void;
};
const Modal = forwardRef<ModalRef, ModalProps> (function  ({children} ,ref) {

	const dialog = useRef<HTMLDialogElement | null>(null);

	function onClose() {
		dialog.current?.close()
	}
	function handleClickOutside(e: MouseEvent) {
		if (dialog.current && e.target === dialog.current) {
			onClose();

		}
	}

	useEffect(() => {
		const dialogElement = dialog.current;
		if (dialogElement) {
			dialogElement.addEventListener('click', handleClickOutside);
		}
		return () => {
			if (dialogElement) {
				dialogElement.removeEventListener('click', handleClickOutside);
			}
		};
	}, []);
	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current?.showModal();
			},
			close() {
				dialog.current?.close();
			}
		}
	})
	return createPortal(
		<dialog className="modal__dialog" ref={dialog}>
			<div className="modal__content " onClick={(e) => e.stopPropagation()}>
				{children}

				<form method='dialog'>

						<button type={'dialog'} className={'modal__close'} onClick={onClose}>{'\u2716'}</button>


				</form>
			</div>

</dialog>
,
	document.getElementById("modal") as HTMLElement
	)
		;
})

export default Modal;
