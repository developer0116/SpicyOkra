import React from 'react';
import Navbar from '../../components/Navbar';
import Img1 from '../../assets/img/dashboard-img1.png';
import Img2 from '../../assets/img/dashboard-img2.png';
import Img3 from '../../assets/img/dashboard-img3.png';
import UserImg from '../../assets/img/user-img.png';
import London from '../../assets/img/dashboard-london-icon.png';
import StarIcon from '../../assets/img/star-icon.png';
import BoilIcon from '../../assets/img/boil-icon.png';
import DollarIcon from '../../assets/img/dollar-icon.png';
import PositionIcon from '../../assets/img/position-icon.png';
import ClockIcon from '../../assets/img/clock-icon.png';
import CookIcon from '../../assets/img/cook-icon.png';
import CheckboxIcon from '../../assets/img/checkbox-icon.png';
import UsersIcon from '../../assets/img/dashboard-users-icon.png';
import RecentIcon from '../../assets/img/dashboard-recent-icon.png';
import RedStarIcon from '../../assets/img/red-star-icon.png';
import GrayStarIcon from '../../assets/img/gray-star-icon.png';
import RecentPrevIcon from '../../assets/img/dashboard-rating-prev-icon.png';
import RecentNextIcon from '../../assets/img/dashboard-rating-next-icon.png';
import Card from '../../components/Card';
import Button from '../../components/Button';
import UserAvatar from '../../components/UserAvatar';
import HistoryChart from '../../components/HistoryChart';
import './style.scss';

export default class DashboardPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			historyChartWidth: 406
		};
	}

	onResizeWindow() {
		this.setState({
			historyChartWidth: document.getElementById('history-chart').getBoundingClientRect().width
		});
	}
	componentDidMount() {
		this.onResizeWindow();
		window.addEventListener('resize', this.onResizeWindow.bind(this));
	}
	render() {
		return (
			<div className={'dashboard-page'}>
				<Navbar current="Dashboard" />
				<div className={'main-panel'}>
					<UserAvatar avatar={UserImg} name="Jon Snow" />
					<div className={'header'}>
						<div className={'header-deals'}>ACTIVE DEALS</div>
						<div className={'add-more-deals-button'}>
							<Button type="gray">ADD MORE DEAL</Button>
						</div>
					</div>
					<div className={'section1'}>
						<div className={'third'}>
							<div className={'row'}>
								<div className={'free-appetizer'}>
									<img className={'free-appetizer-img'} src={Img1} />

									<div className={'free-appetizer-content'}>
										<div className={'free-appetizer-heading'}>Free Appetizer with any Entree</div>
										<div className={'london-bridge-restaurant'}>
											<img className={'london-bridge-restaurant-logo'} src={London} />
											<div className={'london-bridge-restaurant-content'}>
												<div className={'london-bridge-restaurant-heading'}>
													London Bridge Restaurant
												</div>
												<div className={'london-bridge-restaurant-detail'}>
													British & Irish Cruisine
												</div>
												<div style={{ marginTop: 12, display: 'flex' }}>
													<div style={{ width: '42%' }}>
														<div className={'detail-info'}>
															<img className={'detail-info-img'} src={StarIcon} />
															<div className={'detail-info-value'}>3.0 (100)</div>
														</div>

														<div style={{ marginTop: 8 }} className={'detail-info'}>
															<img className={'detail-info-img'} src={DollarIcon} />
															<div className={'detail-info-value'}>$$$</div>
														</div>
													</div>
													<div>
														<div className={'detail-info'}>
															<img className={'detail-info-img'} src={PositionIcon} />
															<div className={'detail-info-value'}>0.2 m</div>
														</div>
														<div style={{ marginTop: 8 }} className={'detail-info'}>
															<img className={'detail-info-img'} src={ClockIcon} />
															<div className={'detail-info-value'}>Closing in 20m</div>
														</div>
													</div>
												</div>
											</div>
											<div className={'london-bridge-restaurant-cook'}>
												<img src={CookIcon} />
											</div>
										</div>

										<div className={'active-now'}>Active Now</div>
									</div>
									<div className={'free-appetizer-footer'}>
										<div className={'half'} style={{ marginRight: 10 }}>
											<Button type="red">Deactivate this Deal</Button>
										</div>
										<div className={'half'} style={{ marginRight: 5 }}>
											<Button type="green">Re-create Similar Deal</Button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={'third-two'}>
							<div className={'row'}>
								<div className={'half'} style={{ marginRight: 15 }}>
									<Card type="TimesClicked" value="2100" />
								</div>
								<div className={'half'}>
									<Card type="TimesRedeemed" value="1288" />
								</div>
							</div>
							<div className={'row'}>
								<div className={'half'} style={{ marginRight: 15 }}>
									<Card type="TimesSaved" value="9921" />
								</div>
								<div className={'half'}>
									<Card type="FirstUsers" value="6655" />
								</div>
							</div>
							<div className={'row'}>
								<div className={'third'}>
									<div className={'deals-redeemed'}>
										<div className={'deals-redeemed-header '}>
											<img src={BoilIcon} />
										</div>
										<div className={'deals-redeemed-content'}>
											<div className={'deals-redeemed-heading'}>Number of deals redeemed</div>
											<div className={'deals-redeemed-value'}>6104</div>
											<div className={'deals-redeemed-date'}>Sat, 17 May 2019</div>
										</div>
									</div>
								</div>
								<div className={'third-two deals-redeemed-history'}>
									<HistoryChart width={this.state.historyChartWidth} />
								</div>
							</div>
						</div>
					</div>

					<div className={'header2'}>
						<div className={'header2-title'}>YOUR EXPERIENCE</div>
						<div className={'add-experience-button'}>
							<Button type="gray">ADD EXPERIENCES</Button>
						</div>
					</div>
					<div className={'section2'}>
						<div className={'third'}>
							<div className={'dinners-dark'}>
								<div className={'dinners-dark-heading'}>
									<img src={Img2} />
								</div>

								<div className={'dinners-dark-content'}>
									<div className={'dinners-dark-title'}>Dinners in the Dark</div>
									<div className={'dinners-dark-description'}>At London Bridge Restaurant</div>
									<div className={'dinners-dark-info'}>
										<div className={'detail-info'} style={{ width: '27%' }}>
											<img className={'detail-info-img'} src={PositionIcon} />
											<div className={'detail-info-value'}>0.2 m</div>
										</div>
										<div className={'detail-info'} style={{ width: '47%' }}>
											<img className={'detail-info-img'} src={ClockIcon} />
											<div className={'detail-info-value'}>Closing in 20m</div>
										</div>
										<div className={'detail-info'}>
											<img className={'detail-info-img'} src={DollarIcon} />
											<div className={'detail-info-value'}>$$$</div>
										</div>
									</div>
									<div className={'dinners-dark-logo'}>
										<img src={London} />
									</div>
								</div>

								<div className={'dinners-dark-footer'}>
									<div className={'half'} style={{ marginRight: 10 }}>
										<Button type="red">Delete</Button>
									</div>
									<div className={'half'} style={{ marginRight: 5 }}>
										<Button type="green">Add New Experience</Button>
									</div>
								</div>
							</div>
						</div>
						<div className={'third-two flex'}>
							<div className={'half'} style={{ marginRight: 4 }}>
								<div className={'tried-users'}>
									<div className={'tried-users-heading'}>
										<img src={UsersIcon} />
									</div>
									<div className={'tried-users-content'}>
										<div className={'tried-users-title'}>Wed, 15 May 2019</div>
										<div className={'tried-users-value'}>3100</div>
										<div className={'tried-users-description'}>Users Who Have Tried It</div>
									</div>
								</div>
								<div className={'spicy-okra-rating'}>
									<Card type="Rating" value="2000" />
								</div>
								<div className={'number-reviews'}>
									<Card type="Reviews" value="2000" />
								</div>
							</div>
							<div className={'half'}>
								<div className={'times-saved'}>
									<Card type="TimesSaved" value="2000" />
								</div>
								<div className={'times-clicked'}>
									<Card type="TimesClicked" value="2000" />
								</div>
								<div className={'recent-ratings'}>
									<div className={'recent-ratings-header'}>
										<img className={'recent-ratings-img'} src={RecentIcon} />
										<div className={'recent-ratings-title'}>RECENT RATINGS</div>
										<div className={'recent-ratings-nav'}>
											<img src={RecentPrevIcon} />
											<img src={RecentNextIcon} />
										</div>
									</div>
									<div className={'recent-ratings-content'}>
										<div className={'recent-ratings-info'}>
											<div className={'recent-ratings-starlist'}>
												<img src={RedStarIcon} />
												<img src={RedStarIcon} />
												<img src={RedStarIcon} />
												<img src={RedStarIcon} />
												<img src={GrayStarIcon} />
											</div>
											<div className={'recent-ratings-date'}>John Doe - Mar 25, 2019</div>
										</div>
										<div className={'recent-ratings-description'}>
											The flavor matches my taste. Extra sauces are also served. The skin is
											crispy, not too much fat.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={'header3'}>UPGRADE TO PREMIUM TO ENJOY MORE SERVICES!</div>
					<div className={'section3'}>
						<div className={'section3-img'}>
							<img src={Img3} />
						</div>

						<div className={'section3-content'}>
							<div className={'section3-content-row'}>
								<div className={'flex'}>
									<img className={'section3-content-first-checkbox'} src={CheckboxIcon} />
								</div>
								<div className={'section3-content-text'}>
									Your deals and experiences will get featured before others
								</div>
							</div>
							<div className={'section3-content-second-row'}>
								<img className={'section3-content-second-checkbox'} src={CheckboxIcon} />
								<div className={'section3-content-text'}>Add up to 3 deals at</div>
							</div>
						</div>
						<div className={'section3-button'}>
							<div className={'upgrade-premium'}>UPGRADE PREMIUM</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
