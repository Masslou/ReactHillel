//CORE
import React, {Component} from 'react';
//COMPONENTS
import ContactListItems from '../ContactsListItems/ContactListItems';
import ContactListHeader from "../ContactListHeader/ContactListHeader";
//STYLES
import '../styles/contacts.scss'
//DATA
import data from "../data";
import ContactForm from "../ContactForm/ContactForm";


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
        console.log(changes);
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
    }

    deleteContact = (id) => {
        const newContactList = this.state.contactsList.filter((item) => {
            return item.id !== id
        });
        this.setState({
            contactsList: newContactList
        });
    };

    render() {
        return (
            <>
                <div className="table-container" role="table" aria-label="Destinations">
                    <ContactListHeader/>
                    <ContactListItems
                        contactsList={this.state.contactsList}
                        onDelete={this.deleteContact}/>
                </div>
                <button className='btn btn-success'
                        onClick={this.onAddContact}>{!this.state.showNewUserForm ? 'ADD' : 'HIDE FORM'}</button>


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

