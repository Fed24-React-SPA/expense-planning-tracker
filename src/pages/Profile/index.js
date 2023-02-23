import React, { useContext } from "react";
import GlassCard from "../../components/GlassCard/GlassCard";
import Icon from "../../components/Icon/Icon";
import Nav from "../../components/Nav/index";
import "./profile.css";
import profilePicture from "../../images/profile.png";
import bankIcon from "../../images/icons/bank.svg";
import cashIcon from "../../images/icons/cash.svg";
import debitIcon from "../../images/icons/debit.svg";
import creditIcon from "../../images/icons/credit.svg";
import storeContext from "../../services/Store";

const Profile = () => {
	const store = useContext(storeContext);
	return (
		<>
			<Nav />
			<div
				style={{
					background: store.backgroundColor,
				}}
				className="profilepage-container"
			>
				<GlassCard>
					<div className="card-user">
						<div className="left-wrapper">
							<p className="title-l">Chandrama Saha</p>
							<div className="text-wrapper">
								<p className="title-sm">+91 XXXXX XXXXX</p>
								<p className="title-sm">chandramasaha@xxxxx</p>
							</div>
						</div>
						<div className="right">
							<div className="circle">
								<div className="inner-circle"></div>
								<img src={profilePicture} alt="profile" />
							</div>
						</div>
					</div>
				</GlassCard>
				<GlassCard>
					<div className="card-payment">
						<p className="title-l">Payment Methods</p>
						<div className="wrapper-icon">
							<Icon iconUrl={bankIcon} altName="Flisan" title="Physical Cash" />
							<Icon
								iconUrl={cashIcon}
								altName="bank icon"
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
								iconUrl={debitIcon}
								altName="icon for debit"
								title="Credit Card"
							/>
							<Icon
								iconUrl={creditIcon}
								altName="icon for credit"
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
