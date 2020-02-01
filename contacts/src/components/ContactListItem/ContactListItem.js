//CORE
import React, {Component} from 'react';
import propTypes from "../propTypes";

//COMPONENTS

class ContactListItem extends Component {

    onDeleteBtnClick = () => {
        this.props.onDelete(this.props.item.id)
    };

    onEditBtnClick = () => {
        this.props.onEdit(this.props.item)
    };

    render() {
        const {item} = this.props;

        return (
            <div className="flex-table row">
                <div className="flex-row id">{item.id}</div>
                <div className="flex-row">{item.name}</div>
                <div className="flex-row">{item.surname}</div>
                <div className="flex-row">{item.phone}</div>
                <div className="flex-row">
                    <button className="contactList-item-DelBtn" onClick={this.onDeleteBtnClick}>delete</button>
                    <button className="contactList-item-EditBtn" onClick={this.onEditBtnClick}>edit</button>
                </div>
            </div>
        );
    }
}

ContactListItem.propTypes = {
    item: propTypes.contactItem.isRequired,
    onDelete: propTypes.func.isRequired,
    onEdit: propTypes.func.isRequired
};

export default ContactListItem;
