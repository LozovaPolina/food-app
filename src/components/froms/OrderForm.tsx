import React, {FormEvent, useState} from 'react';
import rightIcon from '../../icons/right.svg'
import Input from "../UI/Input";
import {useInput} from "../../hooks/useInput";
import {isLetterWord, isNotEmpty, isNumber} from "../../util/validation";
import ContainerWrapper from "../UI/ContainerWrapper";
function OrderForm() {
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
	return (

		<ContainerWrapper wrapperClass={"order"} divider={true}>
					<div className="title">Order your trial day right now!</div>
					<form onSubmit={onSubmit} className="order__form">
						<Input required value={nameValue} onChange={handleNameChange} onBlur={handleNameBlur}
						       placeholder="Your name" name="name" type="text" className="order__input"
						       error={errorNameInput ? "Only letters are allowed." : null}/>
						<Input required placeholder="Your phone number" value={numberValue}
						       onChange={handleNumberChange}
						       onBlur={handleNumberBlur} name="phone" type="tel" className="order__input"
						       error={errorNumberInput ? "Only numbers are allowed." : null}/>
						<img src={rightIcon} alt="right icon"/>
						<button className="btn btn_dark btn_min"
						        disabled={buttonState.disabled}>{buttonState.text}</button>
					</form>
		</ContainerWrapper>

	);
}

export default OrderForm;