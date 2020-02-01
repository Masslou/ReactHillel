import React, {Component} from 'react';
import propTypes from "../propTypes";

class ContactForm extends Component {

    onFormChange = (e) => {
        this.props.onChange({
            [e.target.name]: e.target.value
        })
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSave(this.props.contact)
    };

    render() {
        const {contact} = this.props;
        return (
            <>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        value={contact.name}
                        name='name'
                        onChange={this.onFormChange}
                    />
                    <input
                        type="text"
                        value={contact.surname}
                        name='surname'
                        onChange={this.onFormChange}
                    />
                    <input
                        type="text"
                        value={contact.phone}
                        name='phone'
                        onChange={this.onFormChange}
                    />
                    <input type="submit" className="form-submit-btn" value={contact.id ? "Submit" : "Save"}/>
                </form>
            </>
        )
    }
}

ContactForm.propTypes = {
    contact: propTypes.contactItem.isRequired,
    onSave: propTypes.func.isRequired
};

export default ContactForm;
