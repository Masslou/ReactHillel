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
        newContact: this.getEmptyContactData(),
        contactsList: data,
        showNewUserForm: false
    };


    onFormSubmit = (newContact) => {
        this.setState({
            contactsList: [...this.state.contactsList,
                {
                    id: Date.now(),
                    ...newContact
                }
            ],
            newContact: this.getEmptyContactData()
        })
    };

    onFormChange = (changes) => {
        this.setState({
            newContact: {
                ...this.state.newContact,
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
            showNewUserForm: !this.state.showNewUserForm
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

    editContact = (id) => {

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
                            onClick={this.onAddContact}>{!this.state.showNewUserForm ? 'Add contact' : 'Hide form'}</button>
                </div>

                {
                    this.state.showNewUserForm ?
                        <ContactForm
                            key={this.state.newContact.id}
                            contact={this.state.newContact}
                            onSubmit={this.onFormSubmit}
                            onChange={this.onFormChange}/> : null
                }
            </>
        );
    }
}

export default Contacts;

