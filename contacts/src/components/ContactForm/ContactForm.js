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
        this.props.onSubmit(this.props.contact)
    };

    render() {
        const {contact} = this.props;
        return (<>
                {console.log(contact)}
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
                    <input type="submit" value={contact.id ? "Submit" : "Save"}/>
                </form>
            </>
        )
    }
}

ContactForm.propTypes = {
    contact: propTypes.contactItem.isRequired,
    onSubmit: propTypes.func.isRequired
};

export default ContactForm;
