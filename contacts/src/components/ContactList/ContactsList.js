//CORE
import React, {Component} from 'react';
import propTypes from '../propTypes'
//COMPONENTS
import ContactListItem from "../ContactListItem/ContactListItem";


class ContactsList extends Component {

    render() {

        const {contactsList, onDelete, onEdit} = this.props;
        return (
            <>
                {

                    contactsList.map((item) => {
                        return <ContactListItem
                            key={item.id}
                            item={item}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    })
                }
            </>
        );
    }
}

ContactsList.propTypes = {
    contactsList: propTypes.contactItems.isRequired,
    onDelete: propTypes.func.isRequired,
    onEdit: propTypes.func.isRequired
};


export default ContactsList;
