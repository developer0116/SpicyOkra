import React from 'react';
import renderHTML from 'react-render-html';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import SignUpForm from '../../components/SignupForm';
import Button from '../../components/Button';
import Img1 from '../../assets/img/home_1.png';
import Img2 from '../../assets/img/home_2.png';
import Img3 from '../../assets/img/home_3.png';
import Img4 from '../../assets/img/home_4.png';
import Icon1 from '../../assets/img/home_icon_1.png';
import Icon2 from '../../assets/img/home_icon_2.png';
import Icon3 from '../../assets/img/home_icon_3.png';
import Icon4 from '../../assets/img/home_icon_4.png';
import Icon5 from '../../assets/img/home_icon_5.png';
import './style.scss';

export default class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			blogs: [
				{
					img: Img2,
					title: 'Deals',
					description:
						'Add time sensitive promotions on our deals page in less<br /> than 2 minutes and grow your business<br /> by driving more customers during regular or slow hours.'
				},
				{
					img: Img3,
					title: 'Experiences',
					description:
						"Share your restaurant's unique and fascinating experiences<br /> through SpicyOkra for customers seeking new food<br /> adventures. After all, food is not just for eating, but it's an<br /> experience."
				}
			],
			data: [
				{
					img: Icon1,
					title: 'Attract New Customers',
					description:
						'	Bring new customers to your door steps, by posting<br /> exciting deals and	unique<br /> experiences through SpicyOkra'
				},
				{
					img: Icon2,
					title: 'Flaunt Your Dishes and Unique Experiences',
					description:
						'	Share your fun, exciting and insta-worthy dishes and<br /> styles<br /> as experience with everyone'
				},
				{
					img: Icon3,
					title: 'Speed Up The Slow Hours',
					description:
						'	Post time sensitive deals that attract more customers to<br /> your restaurant<br /> during specific hours'
				},
				{
					img: Icon4,
					title: 'What Gets Measured, Gets Improved',
					description:
						'	Our data analytics on customer behavior will help you<br /> drive<br /> customers through the window'
				},
				{
					img: Icon5,
					title: 'Restaurant and Customer Friendly',
					description:
						'	SpicyOkra has been developed with the goal to provide<br /> all our users<br /> with the best user-experience possible'
				}
			]
		};
	}
	render() {
		return (
			<React.Fragment>
				<div className={'panel-1'}>
					<Topbar />
					<div className={'panel-1-1'}>
						<div>
							Eat More, <br />
							Spend Less, <br />
							Enjoy Life!
						</div>
						<img src={Img1} />
					</div>
					<div className={'panel-1-2'} />
					<div className={'panel-1-3'} />
					<SignUpForm />
				</div>

				<div className={'panel-2'}>
					<div className={'panel-2-title'}>How SpicyOkra works?</div>
					<div className={'blog-panel'}>
						<div className={'blogs'}>
							{this.state.blogs.map((blog) => {
								return (
									<div className={'blog'}>
										<div className={'blog-img'}>
											<img src={blog.img} />
										</div>
										<div className={'blog-title'}>{blog.title}</div>
										<div className={'blog-description'}>{renderHTML(blog.description)}</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className={'panel-3'}>
					<div className={'panel-3-1'}>
						<div className={'title'}>
							Why Partner with <br /> SpicyOkra?
						</div>
						<div className={'detail'}>
							{this.state.data.map((item) => {
								return (
									<div className={'detail-section'}>
										<div className={'detail-section-icon'}>
											<img src={item.img} />
										</div>
										<div className={'detail-section-info'}>
											<div className={'detail-section-heading'}>{item.title}</div>
											<div className={'detail-section-description'}>
												{renderHTML(item.description)}
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className={'panel-3-2'}>
						<img src={Img4} />
					</div>
				</div>
				<div className={'panel-4'}>
					<div>JOIN OUR COMMUNITY NOW</div>
					<Button className={'signup'} width={260} height={37}>
						SIGN ME UP
					</Button>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
