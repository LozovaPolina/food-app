import React from 'react';
import ContainerWrapper from "../UI/ContainerWrapper";
import Timer from "./Timer";
const deadlineTime = 1.2 * 60 * 60 * 1000


function Promotion() {
	return (

		<ContainerWrapper divider={false} wrapperClass={'promotion'} bgColorClass={'bgc_y'}>
			<div className="promotion__text">
				<div className="title">Promotion for New Clients!</div>
				<div className="promotion__descr">
					We value every client and offer you the opportunity to become one on very favorable terms.
					Everyone who orders meal delivery for a week will receive a
					<span> 20% discount!</span>
					<br/><br/>
				</div>
			</div>
			<Timer/>

		</ContainerWrapper>

	);
}

export default Promotion;