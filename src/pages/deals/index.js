import React from 'react';
import Navbar from '../../components/Navbar';

import UserImg from '../../assets/img/user-img.png';
import Button from '../../components/Button';
import UserAvatar from '../../components/UserAvatar';
import Radio from '../../components/Radio';
import Timeline from '../../assets/img/deals-timeline.png';
import Divider from '../../assets/img/deals-spliter.png';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';
import './style.scss';

export default class DealsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			deals: [
				{ name: 'Buy One Get One Free', selected: false },
				{ name: 'Buy One Get One Half Off', selected: false },
				{ name: 'X% Discount', selected: false },
				{ name: 'Free Item With Purchase', selected: false },
				{ name: 'Happy Hour Offer', selected: false },
				{ name: '$8 Lunch Meal', selected: false },
				{ name: '$10 Dinner Meal', selected: false }
			]
		};
	}
	selectDeal = (index) => {
		this.state.deals.map((deal) => {
			deal.selected = false;
		});
		this.state.deals[index].selected = true;
		console.log(this.state.deals);
		this.setState({ deals: this.state.deals });
	};
	render() {
		return (
			<div className={'deals-page'}>
				<Navbar current="Deals" />
				<div className={'main-panel'}>
					<UserAvatar className={'user-account'} avatar={UserImg} name="Jon Snow" />
					<div className={'main-panel-back'}>
						<div className={'deals-form'}>
							<div className={'deals-timeline'}>
								<img src={Timeline} />
							</div>
							<div className={'deals-form-heading'}>Description</div>
							<div className={'deals-form-title'}>Deal Title</div>
							<div className={'deals-form-title-desc'}>
								*Pick A Deal Type Or Enter Your Own Custom Deal
							</div>

							{this.state.deals.map((deal, index) => {
								return (
									<Radio
										name={deal.name}
										selected={deal.selected}
										onClicked={() => this.selectDeal(index)}
									/>
								);
							})}
							<div className={'deals-form-divider'}>
								<img src={Divider} />
							</div>

							<TextInput placeholder="Enter your own title" />
							<div className={'deals-form-description'}>Brief Description</div>
							<TextArea placeholder="Write Your Description Here" />
							<div className={'next-button'}>NEXT</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
