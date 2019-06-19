import React from 'react';
import Navbar from '../../components/Navbar';

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
							<div className={'review-form-back'} />
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
