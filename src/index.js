import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//allows for realtime updating on the react server page - from github
if (module.hot) {
    module.hot.accept();
  }

//class based components - borrows functionality from react classess
class App extends React.Component{
    
    //alternate way of initalizing state - preferred
    state = {late: null, errorMessage: ''};
    //prefered over placing in the constructor - best coding practices
    componentDidMount(){
        //geolocation api taking two arguements
        //moved from render method as it prevents double fetching of the state of the lat
        window.navigator.geolocation.getCurrentPosition(
            //success callback
            //to update the object we call setState!
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );     
    }

    
    renderContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat){
            //passing the state of lat and passing it as a prop into the SeasonDisplay
            return <SeasonDisplay lat={this.state.lat}/>
 
        }
        return <Spinner message="Please accept location request!"/>;
    };

    //React says we must define a render function!!
    render() {
        //allows to style a whole conditional statement easier then placing them around the if statements individually
      return <div className="border">
          {this.renderContent()}
      </div>
    }
}
ReactDOM.render(<App />,document.querySelector('#root'));
