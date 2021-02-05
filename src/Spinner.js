import React from 'react';



//prop for creating spinner - passing a prop message to the spinner inside index to use a message
const Spinner = (props) => {
    return (
    <div class="ui active dimmer">
        <div class="ui text loader">
            {props.message}
        </div>
    </div>
    );
}

//allows default properties - if I forget to do something - it happens.
Spinner.defaultProps = {
    message: 'Loading....'


}


export default Spinner;