import React from 'react';
import { Link } from 'react-router-dom';
import { createContext } from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: '',
            submitMessage: '',
            name: 'TAGGER Biz',
            from_name: 'ed.leijnse@gmail.com',
            to_name: 'ed@leijnse.info',
            email: 'ed@leijnse.info'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        // https://ui.dev/react-router-v4-pass-props-to-link/
        if (this.state.submitMessage==="submitted") {
            return (
                <form className="test-mailing">
                    <h1>It worked, email submitted to: {this.state.to_name} </h1>
                    <div>{this.state.submitMessage}</div>
                    <Link to={{ pathname: '/CheckCodeFromCustomer/' + "?to_name=" + this.state.to_name
                        }}>check code </Link>
                </form>
            )
        } else {
            return (
                <form className="test-mailing">
                    <h1>Let's see if it works</h1>
                    <div>
      	<textarea
            id="test-mailing"
            name="test-mailing"
            onChange={this.handleChange}
            placeholder="Post some lorem ipsum here"
            required
            value={this.state.feedback}
            style={{width: '100%', height: '150px'}}
        />
                    </div>
                    <h1>email</h1>
                    <div>
      	<textarea
            id="test-mailing-email"
            name="test-mailing-email"
            onChange={this.handleChangeEmail}
            placeholder="your email address"
            required
            value={this.state.to_name}
            style={{width: '100%', height: '150px'}}
        />
                    </div>
                    <div>{this.state.submitMessage}</div>
                    <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit}/>
                </form>
            )
        }
    }

    handleChange(event) {
        this.setState({feedback: event.target.value})
        this.setState({submitMessage: "to submit"});
    }
    handleChangeEmail(event) {
        this.setState({to_name: event.target.value})
        this.setState({submitMessage: "to submit"});
    }

    handleSubmit(event) {
        const templateId = 'template_mij17qc';

        this.sendFeedback(templateId, {
            message_html: this.state.feedback,
            from_name: this.state.from_name,
            to_name: this.state.to_name,
            reply_to: this.state.email
        })

        this.setState({submitMessage: "submitted"});

    }

    sendFeedback(templateId, variables) {
        window.emailjs.send(
            'service_sl8yr4m', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

}