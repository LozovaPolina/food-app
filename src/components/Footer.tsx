import React from 'react';
import vegOmg from '../icons/veg.svg'
function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="social">
					<div className="subtitle">We are on social media:</div>
					<a href="#" className="link">Instagram</a>
					<a href="#" className="link">Facebook</a>
				</div>
				<div className="pepper">
					<img src={vegOmg} alt="pepper"/>
				</div>
				<div className="call">
					<div className="subtitle">Or call us</div>
					<a href="tel:+380678341034" className="link">+380678341034</a>
					<a href="tel:+380500941356" className="link">+380500941356</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;