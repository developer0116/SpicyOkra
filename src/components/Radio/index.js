import React, { useState } from 'react';
import TextInput from '../TextInput';
import './style.scss';

const RadioButton = (props) => {
	return (
		<label className={'container'}>
			{props.name}
			<input type="radio" name={props.type} />
			<span className={'checkmark'} />
		</label>
	);
};
const Radio = (props) => {
	const [ selected, select ] = useState(false);
	return props.selected ? (
		<div className={'select-radio-panel'}>
			<div className={'select-radio-panel-header'}>
				<label className={'container'}>
					{props.name}
					<input type="radio" name="deals" defaultChecked />
					<span className={'checkmark'} />
				</label>
			</div>
			<div className={'select-radio-panel-content'}>
				<RadioButton name="Specific Dish" type="radio" />
				<div className={'specific-dish-text'}>
					<input placeholder="Tandoori Chicken" />
				</div>
				<div style={{ display: 'flex', marginTop: 18 }}>
					<div style={{ width: '33.333%' }}>
						<RadioButton name="Any Appetizer" type="radio" />
						<div style={{ marginTop: 23 }}>
							<RadioButton name="Any Item on the Menu" type="radio" />
						</div>
					</div>
					<div style={{ width: '33.333%' }}>
						<RadioButton name="Any Beverage" type="radio" />
						<div style={{ marginTop: 23 }}>
							<RadioButton name="Any Dessert" type="radio" />
						</div>
					</div>
					<div style={{ width: '33.333%' }}>
						<RadioButton name="Any Entree" type="radio" />
					</div>
				</div>
			</div>
		</div>
	) : (
		<div
			className={'radio-button'}
			onClick={() => props.onClicked()}
			style={props.bold ? { fontWeight: 'bold' } : null}
		>
			<RadioButton name={props.name} type="deals" />
		</div>
	);
};

export default Radio;
