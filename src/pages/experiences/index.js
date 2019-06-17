import React from 'react';
import Navbar from '../../components/Navbar';
import Img1 from '../../assets/img/dashboard-img1.png';
import Img2 from '../../assets/img/dashboard-img2.png';
import Img3 from '../../assets/img/dashboard-img3.png';
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
import UserImg from '../../assets/img/user-img.png';
import Button from '../../components/Button';
import UserAvatar from '../../components/UserAvatar';
import Timeline from '../../assets/img/experiences-timeline.png';
import PhoneImg from '../../assets/img/experiences-phones.png';
import Divider from '../../assets/img/deals-spliter.png';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';
import './style.scss';

export default class ExperiencesPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={'experiences-page'}>
				<Navbar current="Experiences" />
				<div className={'main-panel'}>
					<UserAvatar className={'user-account'} avatar={UserImg} name="Jon Snow" />
					<div className={'main-panel-back'}>
						<div className={'review-form'}>
							<div className={'experiences-timeline'}>
								<img src={Timeline} />
							</div>
							<div className={'review-form-heading'}>Review</div>

							<div className={'review-form-title-desc'}>
								You are almost done. Review the experiences details below to <br />
								make sure everything looks great!
							</div>
							<div className={'review-form-back'}>
								<div className={'review-form-back-mobile'}>
									<div className={'free-appetizer'}>
										<img className={'free-appetizer-img'} src={Img1} />

										<div className={'free-appetizer-content'}>
											<div className={'free-appetizer-heading'}>
												Free Appetizer with any Entree
											</div>
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
																<div className={'detail-info-value'}>
																	Closing in 20m
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className={'london-bridge-restaurant-cook'}>
													<img src={CookIcon} />
												</div>
											</div>
										</div>
										<div className={'free-appetizer-footer'}>
											<div className={'half'} style={{ marginRight: 5, width: '50%' }}>
												<Button type="red">Deactivate this Deal</Button>
											</div>
											<div className={'half'} style={{ width: '50%' }}>
												<Button type="green">Re-create Similar Deal</Button>
											</div>
										</div>
									</div>
									<div className={'free-appetizer'}>
										<img className={'free-appetizer-img'} src={Img1} />

										<div className={'free-appetizer-content'}>
											<div className={'free-appetizer-heading'}>
												Free Appetizer with any Entree
											</div>
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
																<div className={'detail-info-value'}>
																	Closing in 20m
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className={'london-bridge-restaurant-cook'}>
													<img src={CookIcon} />
												</div>
											</div>
										</div>
										<div className={'free-appetizer-footer'}>
											<div className={'half'} style={{ marginRight: 5, width: '50%' }}>
												<Button type="red">Deactivate this Deal</Button>
											</div>
											<div className={'half'} style={{ width: '50%' }}>
												<Button type="green">Re-create Similar Deal</Button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={'review-form-description'}>
								Your experience will be visible on SpicyOkra from 8:00 am on 4th April,2019
							</div>
							<div className={'review-form-footer'}>
								<div className={'back-button'}>BACK</div>

								<div className={'finish-button'}>NEXT</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
