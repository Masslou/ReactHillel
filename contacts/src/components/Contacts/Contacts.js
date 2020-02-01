//CORE
import React, {Component} from 'react';
//COMPONENTS
import ContactListItems from '../ContactsListItems/ContactListItems';
import ContactForm from "../ContactForm/ContactForm";
//STYLES
import '../styles/contacts.scss'
//DATA
import data from "../data";


class Contacts extends Component {

    state = {
        selectedContact: this.getEmptyContactData(),
        contactsList: data,
        showContactForm: false
    };


    onSave = (contact) => {
        if (contact.id) {
            this.updateContact(contact);
        } else {
            this.createContact(contact);
        }
    };

    createContact(contact) {
        contact.id = Date.now();
        this.setState({
            contactsList: [...this.state.contactsList, contact],
            selectedContact: this.getEmptyContactData()
        });
    }

    updateContact(contact) {
        this.setState({
            contactsList: this.state.contactsList
                .map(el => el.id === contact.id ? contact : el),
            selectedContact: this.getEmptyContactData()
        });
    }

    onFormChange = (changes) => {
        this.setState({
            selectedContact: {
                ...this.state.selectedContact,
                ...changes
            }
        })
    };

    getEmptyContactData() {
        return {
            "name": '',
            "surname": '',
            "phone": '',
        }
    }

    onAddContact = () => {
            this.setState({
                selectedContact: this.getEmptyContactData(),
                showContactForm: !this.state.showContactForm
            })
    };

    deleteContact = (id) => {
        const newContactList = this.state.contactsList.filter((item) => {
            return item.id !== id
        });
        this.setState({
            contactsList: newContactList
        });
    };

    editContact = (contact) => {
        this.setState({
            showContactForm: true,
            selectedContact: {
                ...this.state.selectedContact,
                ...contact
            }
        })
    };

    render() {
        return (
            <>
                <div className="left-menu-wrapper">
                    <div className="table-container">
                        <div className="flex-table header">
                            <div className="flex-row title">ID</div>
                            <div className="flex-row title">NAME</div>
                            <div className="flex-row title">SURNAME</div>
                            <div className="flex-row title">PHONE</div>
                            <div className="flex-row title">OPTIONS</div>
                        </div>
                        <ContactListItems
                            contactsList={this.state.contactsList}
                            onDelete={this.deleteContact}
                            onEdit={this.editContact}
                        />


                    </div>

                    <button className='add-user-btn'
                            onClick={this.onAddContact}>{!this.state.showContactForm ? 'Add contact' : 'Hide form'}</button>
                </div>

                <div className="right-menu-wrapper">

                </div>

                {
                    this.state.showContactForm ?
                        <ContactForm
                            contact={this.state.selectedContact}
                            onSave={this.onSave}
                            onChange={this.onFormChange}/> : null
                }
            </>
        );
    }
}

export default Contacts;

