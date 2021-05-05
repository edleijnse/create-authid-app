import React from 'react';
import ReactDOM from "react-dom";
import queryString from 'query-string'
import {
    BrowserRouter as Router,
    Switch,
    useLocation
} from "react-router-dom";
function GetToName(props){
    // https://stackoverflow.com/questions/35352638/react-how-to-get-parameter-value-from-query-string/37568368#37568368
    // https://stackoverflow.com/questions/56111914/how-to-read-url-parameters-within-component-in-react-js
    const windowUrl = window.location.search;
    let to_name_token_temp;
    let to_name_token;
    to_name_token_temp = windowUrl;
    to_name_token = to_name_token_temp.substring(9);
    //to_name_token = windowUrl;
    console.log('to_name_token',to_name_token)//123
    return to_name_token;
}
export default class CheckCode extends React.Component {
    constructor(props) {
        super(props);
        var myToName = GetToName(props);
        this.state = {
            to_name: myToName,
            code_to_check: "123456"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    render() {
        if (this.state.submitMessage==="submitted") {
            return (
                <form className="check-code">
                    <h1>It worked, email submitted to: {this.state.to_name} </h1>
                    <div>{this.state.submitMessage}</div>
                </form>
            )
        } else {
            return (
                <form className="check-code">
                    <h1>Please enter code, {this.state.to_name} </h1>
                    <div>
      	<textarea
            id="test-check-code"
            name="test-check-code"
            onChange={this.handleChange}
            placeholder="Enter Code here"
            required
            value={this.state.code_to_check}
            style={{width: '100%', height: '150px'}}
        />
                    </div>

                    <div>{this.state.submitMessage}</div>
                    <input type="button" value="Check" className="btn btn--submit" onClick={this.handleSubmit}/>
                </form>
            )
        }
    }

    handleChange(event) {
        this.setState({submitMessage: "to check"});
    }

    handleSubmit(event) {

        this.setState({submitMessage: "submitted"});

    }


}