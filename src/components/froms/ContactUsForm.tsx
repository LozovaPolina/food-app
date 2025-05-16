import React, {FormEvent, useEffect, useState} from 'react';

import {isLetterWord, isNotEmpty, isNumber} from "../../util/validation";
import Input from "../UI/Input";
import {useInput} from "../../hooks/useInput";

function ContactUsForm({onCloseModal}:{onCloseModal: ()=> void}) {
	const [status, setStatus] = useState<'sending' | 'error' | 'successes' | ''>('');

	const buttonState = {
		'': { text: 'Send Message', disabled: false },
		sending: { text: 'Sending...', disabled: true },
		successes: { text: 'Successfully sent', disabled: true },
		error:{ text: 'Something went wrong', disabled: true },
	}[status] ?? { text: 'Send Message', disabled: false };

	const {
		value: nameValue,
		handleInputChange: handleNameChange,
		handleInputBlur: handleNameBlur,
		hasError: errorNameInput,
	} = useInput({
		defaultValue: "",
		validationFn: (value) => {
			return isLetterWord(value) && isNotEmpty(value);
		},
	});
	const {
		value: numberValue,
		handleInputChange: handleNumberChange,
		handleInputBlur: handleNumberBlur,
		hasError: errorNumberInput,
	} = useInput({
		defaultValue: "",
		validationFn: (value) => {
			return isNumber(value) && isNotEmpty(value);
		},
	});



	function  onSubmit(e: FormEvent<HTMLFormElement>){
		e.preventDefault()
		if ((errorNumberInput || errorNameInput  || (nameValue === '' || numberValue === '' ) )) return

		setStatus('sending')
		const fd = new FormData(e.currentTarget);
		const data = Object.fromEntries(fd.entries());
		console.log(data)

		setTimeout(() => {
			setStatus('successes');

		}, 1000);
	}

	useEffect(() => {
		let timeout;
		if(status === 'successes') {
			timeout = setTimeout(()=>{
				if(onCloseModal !== null) {
					onCloseModal()
				}
			},1000)
		}
		return () => clearTimeout(timeout)
	}, [status])
	return (
		<form onSubmit={onSubmit}>
			<div className="modal__title">We will contact you as soon as possible!</div>
			<Input required value={nameValue} onChange={handleNameChange} onBlur={handleNameBlur}
			       placeholder="Your name" name="name" type="text" className="modal__input"
			       error={errorNameInput ? "Only letters are allowed." : null}/>
			<Input required placeholder="Your phone number" value={numberValue}
			       onChange={handleNumberChange}
			       onBlur={handleNumberBlur} name="phone" type="tel" className="modal__input"
			       error={errorNumberInput ? "Only numbers are allowed." : null}/>

			<button className="btn btn_dark btn_min"
			        disabled={buttonState.disabled}>{buttonState.text}</button>

		</form>
	);
}

export default ContactUsForm;