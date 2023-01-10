import React from "react";
import GlassCard from "../../components/GlassCard/GlassCard";
import Icon from "../../components/Icon/Icon";
import Nav from "../../components/Nav/index";
import "./profile.css";
import moneyIcon from "../../images/money.png";

const Profile = () => {
	return (
		<>
		<Nav />
		<div className="profilepage-container">
			<GlassCard>
				<div className="card-user">
					<div className="left">
						<p className="title-l">Chandrama Saha</p>
						<div className="text-wrapper">
							<p className="title-sm">+91 XXXXX XXXXX</p>
							<p className="title-sm">chandramasaha@xxxxx</p>
						</div> 
					</div>
					<div className="right">
						<div className="circle"><div className="inner-circle"></div></div>
						</div>
				</div>
			</GlassCard>
			<GlassCard>
				<div className="card-payment">
					<p className="title-l">Payment Methods</p>
					<div className="wrapper-icon">
						<Icon
						iconUrl={moneyIcon}
						altName="Flisan"
						title="Physical Cash"
						/>
											<Icon
						iconUrl={moneyIcon}
						altName="Flisan"
						title="Bank Balance"
						/>
					</div>
				</div>

			
			</GlassCard>
			<GlassCard>
			<div className="card-payment">
					<p className="title-l">Cards</p>
					<div className="wrapper-icon">
						<Icon
						iconUrl={moneyIcon}
						altName="Flisan"
						title="Credit Card"
						/>
											<Icon
						iconUrl={moneyIcon}
						altName="Flisan"
						title="Debit Card"
						/>
					</div>
				</div>
			</GlassCard>
			
		</div>
		</>
	);
};

export default Profile;
