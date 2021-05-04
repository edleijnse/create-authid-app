import React from 'react';


export default class CheckCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            to_name: this.props.to_name,
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