import React, {useEffect, useRef, useState} from 'react';
import {addZeroToPositiveNum} from "../../util/numConverters";
//one day
const deadlineTime = 1.2 * 60 * 60 * 1000
function Timer() {
	const [timeRemaining, setTimeRemaining] = useState(deadlineTime);
	const [expired, setExpired] = useState(false);

	const deadline = useRef(Date.now() + deadlineTime);

	useEffect(() => {
		const countdownInterval = setInterval(() => {
			const currentTime = Date.now();
			let remainingTime = deadline.current - currentTime;

			if (remainingTime <= 0) {
				remainingTime = 0;
				setExpired(true);
				clearInterval(countdownInterval);
			}

			setTimeRemaining(remainingTime);
		}, 1000);

		return () => clearInterval(countdownInterval);
	}, []);

	const days = Math.floor(timeRemaining / (24 * 60 * 60 * 1000));
	const hours = Math.floor((timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
	const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
	const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

	return (
		<div className="promotion__timer">
			<div className="title">
				{expired ? "The promotional time has expired." : "Time left until the end of the promotion:"}
			</div>
			<div className="timer">
				<div className="timer__block">
					<span>{addZeroToPositiveNum(days)}</span> days
				</div>
				<div className="timer__block">
					<span>{addZeroToPositiveNum(hours)}</span> hours
				</div>
				<div className="timer__block">
					<span>{addZeroToPositiveNum(minutes)}</span> minutes
				</div>
				<div className="timer__block">
					<span>{addZeroToPositiveNum(seconds)}</span> seconds
				</div>
			</div>
		</div>
	);
}

export default Timer;