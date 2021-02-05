import './SeasonDisplay.css';
import React from 'react'; 


const seasonConfig = {
    Summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    Winter: {
        text: 'burrr it is cold',
        iconName: 'snowflake'
    }
};



//function to determine what season it is
const getSeason = (lat, month) =>{
    if (month > 2 && month < 9) {
        //javascript t op expression
        return lat > 0 ? 'Summer' : 'Winter';
    }
    else{
        return lat > 0 ? 'Winter' : 'Summer';
    }
};



const SeasonDisplay = (props) => {
    //calling function created above - passing props lat and the getMonth function 
    const season = getSeason(props.lat, new Date().getMonth());
    //handling the text display logic - grabbing from seasonConfig
    const {text, iconName} = seasonConfig[season] //{text, iconName}

    return (
    <div className={`seasonDisplay ${season}`}>
        <i className = {`iconLeft massive ${iconName} icon`}/>
        <h1>{text}</h1>
        <i className = {`iconRight massive ${iconName} icon`}/>
    </div>
    );
};

export default SeasonDisplay;