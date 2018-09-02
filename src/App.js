import React, {
	Component
} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";
import Test from './components/Test';
// import { Provider } from "./context";
// import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
	state = {}

	render() {
		return(
			<Router>
				<div>
					<Switch>
	          <Route exact path="/" component={Test} />
						<Route
	            render={() => (
	              <div>
	                <h1 className="display-4">
	                  <span className="text-danger">404</span> Page Not Found
	                </h1>
	                <p className="lead">Sorry, that page does not exist</p>
	              </div>
	            )}
	          />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
