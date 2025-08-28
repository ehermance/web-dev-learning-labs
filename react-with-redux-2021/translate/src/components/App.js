import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleButtonColor = this.toggleButtonColor.bind(this);
		this.state = { color: 'primary' };
	}
    
    toggleButtonColor() {
        if (this.state.color === 'primary') {
            this.setState({ color: 'red' });
        } else {
            this.setState({ color: 'primary' });
        }
    }

	render() {
		return (
			<div className="ui container">
				<LanguageStore>
					<LanguageSelector />
					<button onClick={this.toggleButtonColor}>Toggle Button Color</button>
					<ColorContext.Provider value={this.state.color}>
						<UserCreate />
					</ColorContext.Provider>
				</LanguageStore>
			</div>
		);
	}
}

export default App;
