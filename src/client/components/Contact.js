import React, {Component} from 'react';
import { connect } from 'react-redux';
import ky from 'ky/umd';
import SectionWaypoint from './utils/SectionWaypoint';
import {getErrorCode, translate} from '../services';
import apiEndpoint from './utils/api-endpoint';
import Translate from './utils/Translate';

const Contact = class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sending: false,
            success: false,
            okMessage: false,
            errorMessage: '',
            mail: {
                name: '',
                emailAddress: '',
                message: ''
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSend = this.onSend.bind(this);
    }

    onChange({target}) {
        let mail = this.state.mail;
        mail[target.name] = target.value;
        this.setState({mail});
    }

    onSend() {
        this.setState({sending: true});
        ky.post(`${apiEndpoint}/api/send-contact-message`, {json: this.state.mail})
                .then(response => {
                    console.log(response);
                    this.setState({sending: false, success: true, okMessage: true, errorMessage: '', mail: {name: '', emailAddress: '', message: ''}});
                })
                .catch(async error => {
                    const errorCode = await getErrorCode(error.response);
                    const errorMessage = translate(this.props.languageCode, errorCode);
                    console.log('Error when sending email:', errorCode);
                    this.setState({sending: false, success: false, okMessage: false, errorMessage});
                });
    }

    render() {
        const {languageCode, settings, onScroll} = this.props;
        const {okMessage, errorMessage, mail} = this.state;
        return (
            <SectionWaypoint sectionName="contact" onScroll={onScroll}>
                <section id="contact">
                    <div className="row">
                        <div className="twelve columns">
                            <p className="lead">
                                <Translate labelKey='contact.form'/>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="twelve columns">
                            <input type="text" name='name' placeholder={translate(languageCode, 'contact.form.name')} value={mail.name} onChange={this.onChange}/>
                            <input type="text" name='emailAddress' placeholder={translate(languageCode, 'contact.form.email')} value={mail.emailAddress} onChange={this.onChange}/>
                            <textarea name='message' placeholder={translate(languageCode, 'contact.form.message')} value={mail.message} onChange={this.onChange}/>
                            {okMessage &&
                                <h2 className="success">
                                    <Translate labelKey='contact.form.success'/>
                                </h2>
                            }
                            {errorMessage &&
                                <h2 className="error">{errorMessage}</h2>
                            }
                            <input type="button" value={translate(languageCode, 'contact.form.send')} onClick={this.onSend} disabled={okMessage}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="twelve columns">
                            <p className="lead">
                                <Translate labelKey='contact.raw-email'/>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <aside className="eigth columns footer-widgets">
                            <div className="widget">
                                <h4>E-mail: {settings.emailAddress}</h4>
                            </div>
                        </aside>
                    </div>
                </section>
            </SectionWaypoint>
        );
    }
}

const mapStateToProps = state => ({
    languageCode: state.config.languageCode
});

export default connect(mapStateToProps)(Contact);