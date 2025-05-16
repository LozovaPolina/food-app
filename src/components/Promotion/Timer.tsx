import React from 'react';

function Timer() {
	return (
		<div className="promotion__timer">
			<div className="title">Time left until the end of the promotion:</div>
			<div className="timer">
				<div className="timer__block">
					<span id="days">12</span>
					days
				</div>
				<div className="timer__block">
					<span id="hours">20</span>
					hours
				</div>
				<div className="timer__block">
					<span id="minutes">56</span>
					minutes
				</div>
				<div className="timer__block">
					<span id="seconds">20</span>
					seconds
				</div>
			</div>
		</div>
	);
}

export default Timer;