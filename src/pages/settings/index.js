import React from 'react';
import Navbar2 from '../../components/Navbar2';

import UserImg from '../../assets/img/user-img.png';
import Button from '../../components/Button';
import UserAvatar from '../../components/UserAvatar';
import UserProfile from '../../assets/img/settings-user-profile.png';
import CameraIcon from '../../assets/img/camera-icon.png';
import TextInput from '../../components/TextInput';
import './style.scss';

export default class SettingsPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={'settings-page'}>
				<Navbar2 current="User Profile" />
				<div className={'main-panel'}>
					<UserAvatar className={'user-account'} avatar={UserImg} name="Jon Snow" />
					<div className={'main-panel-back'}>
						<div className={'profile-form'}>
							<div className={'profile-form-heading'}>
								<img className={'profile-form-heading-profile'} src={UserProfile} />
							</div>
							<div className={'profile-picture-upload'}>
								<img src={CameraIcon} />
								<div>Upload Profile picture</div>
							</div>
							<div className={'profile-form-content'}>
								<div className={'label'}>Full Name</div>
								<TextInput placeholder="Osteria Francescana" />
								<div className={'label'}>Email</div>
								<TextInput placeholder="effertz.martine@bernhard.name" />
								<div className={'label'}>Phone Number</div>
								<TextInput placeholder="028 2229 2211" />
								<div className={'label'}> Current Role at Restaurant</div>
								<TextInput placeholder="Exclusive Manager" />
							</div>

							<div className={'profile-form-footer'}>
								<div className={'back-button'}>CANCEL</div>

								<div className={'finish-button'}>SAVE CHANGES</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
