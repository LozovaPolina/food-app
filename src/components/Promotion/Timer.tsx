import React, {useEffect, useRef, useState} from 'react';
import {addZeroToPositiveNum} from "../../util/numConverters";
//one day
const DEADLINE_KEY = "promoDeadline";
const DEFAULT_HOURS = 1;

function getDeadlineTimestamp(hoursFromNow: number): number {
	const deadline = new Date();
	deadline.setTime(deadline.getTime() + hoursFromNow * 60 * 60 * 1000);
	return deadline.getTime();
}

function Timer() {
	const [timeRemaining, setTimeRemaining] = useState<number>(0);


	useEffect(() => {
		let storedDeadline = localStorage.getItem(DEADLINE_KEY);
		let deadlineTime: number;

		if (storedDeadline) {
			deadlineTime = parseInt(storedDeadline, 10);
		} else {
			deadlineTime = getDeadlineTimestamp(DEFAULT_HOURS);
			localStorage.setItem(DEADLINE_KEY, deadlineTime.toString());
		}

		const updateRemainingTime = () => {
			const now = Date.now();
			const diff = deadlineTime - now;
			setTimeRemaining(diff > 0 ? diff : 0);
		};

		updateRemainingTime();
		const interval = setInterval(updateRemainingTime, 1000);

		return () => clearInterval(interval);
	}, []);

	const days = Math.floor(timeRemaining / (24 * 60 * 60 * 1000));
	const hours = Math.floor((timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
	const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
	const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

	const isExpired = timeRemaining === 0;
	const message = isExpired
		? "The promotion has ended."
		: "Time left until the end of the promotion:";

	return (
		<div className="promotion__timer">
			<div className="title">{message}</div>
			{!isExpired && (
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
			)}
		</div>
	);
}

export default Timer;