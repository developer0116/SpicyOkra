import React, { Component } from 'react';
import Select from 'react-select';
import * as d3 from 'd3';
import './style.scss';
class HistoryChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: '1', value: 12 },
				{ name: '2', value: 32 },
				{ name: '3', value: 6 },
				{ name: '4', value: 8 },
				{ name: '5', value: 3 },
				{ name: '6', value: 12 },
				{ name: '7', value: 3 },
				{ name: '8', value: 3 },
				{ name: '9', value: 12 },
				{ name: '10', value: 34 }
			],
			columns: [ 'letter', 'frequency' ],
			options: [
				{ value: 'year', label: 'This year' },
				{ value: 'month', label: 'This month' },
				{ value: 'today', label: 'Today' }
			],
			selectedOption: null
		};
	}
	componentDidMount() {
		this.drawChart();
	}
	componentDidUpdate() {
		console.log('update');
		this.drawChart();
	}
	handleChange = (selectedOption) => {
		this.setState({ selectedOption });
	};
	render() {
		return (
			<div>
				<div className="deals-redeemed-history-header">
					<div className="deals-redeemed-history-title">Redeem History</div>
					<Select
						className={'deals-redeemed-history-select'}
						value={this.state.selectedOption}
						onChange={this.handleChange}
						options={this.state.options}
					/>
				</div>
				<div id="history-chart" style={{ width: '100%', height: '100%' }} />
			</div>
		);
	}
	chart = () => {};

	drawChart() {
		document.getElementById('history-chart').innerHTML = '';
		let width = this.props.width,
			height = 160;
		let margin = { top: 20, right: 20, bottom: 30, left: 40 };
		let xAxis = (g) =>
			g
				.attr('transform', `translate(0,${height - margin.bottom})`)
				.attr('color', '#454545')
				.call(d3.axisBottom(x).tickSizeOuter(0));
		let yAxis = (g) =>
			g.attr('transform', `translate(${margin.left},0)`).attr('color', '#454545').call(d3.axisLeft(y));
		let x = d3
			.scaleBand()
			.domain(this.state.data.map((d) => d.name))
			.range([ margin.left, width - margin.right ])
			.padding(0.5);
		let y = d3
			.scaleLinear()
			.domain([ 0, d3.max(this.state.data, (d) => d.value) ])
			.nice()
			.range([ height - margin.bottom, margin.top ]);

		const svg = d3.select('#history-chart').append('svg').attr('viewBox', [ 0, 0, width, height ]);

		svg
			.append('g')
			.attr('fill', '#DF5D86')
			.selectAll('rect')
			.data(this.state.data)
			.join('rect')
			.attr('x', (d) => x(d.name))
			.attr('y', (d) => y(d.value))
			.attr('height', (d) => y(0) - y(d.value))
			.attr('width', x.bandwidth());

		svg.append('g').call(xAxis);

		svg.append('g').call(yAxis);

		return svg.node();
	}
}

export default HistoryChart;
