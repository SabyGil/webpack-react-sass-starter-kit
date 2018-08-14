import React, {
	Component
} from 'react';

class App extends Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		winner: 'one'
	// 	}
	// }
	state = {
		winner: 'one'
	}

	staticMethod = () => {
		return 'static method has been called.'
	}

	// test = () => {
	// 	console.log('gekk')
	// }
	render() {
		// debugger
		return(<div>
      <h1>My React Sass Starter</h1>
			{/* {test()} */}
		hello { this.staticMethod()}
		<p>{this.state.winner}</p>
    </div>);
	}
}

export default App;
