import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
	state = { lat: null, errorMessage: '' }; //Intialize state object; Babel translates it into constructor

	componentDidMount() { // called just once for data calls
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }), //Call setState to update state object (never use this.state.lat)
			err => this.setState({ errorMessage: err.message })
		);
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}

		return <Spinner message="Please accept location request" />;
	}

	// React says we have to define render! Gets called all the time. Just use for returning jsx!
	render() {
		return (
			<div className="border red">
				{this.renderContent()}
			</div>
		);
	}
}


ReactDOM.render (<App />, document.querySelector('#root'));