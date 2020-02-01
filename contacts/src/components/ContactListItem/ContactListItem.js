//CORE
import React, {Component} from 'react';
import propTypes from "../propTypes";

//COMPONENTS

class ContactListItem extends Component {

    onDeleteBtnClick = () => {
        this.props.onDelete(this.props.item.id)
    };

    render() {
        const {item} = this.props;

        return (
            <div className="flex-table row" role="rowgroup">
                <div className="flex-row id" role="cell">{item.id}</div>
                <div className="flex-row" role="cell">{item.name}</div>
                <div className="flex-row" role="cell">{item.surname}</div>
                <div className="flex-row" role="cell">{item.phone}</div>
                <div className="flex-row" role="cell">
                    <button className="contactList-item-DelBtn" onClick={this.onDeleteBtnClick}>delete</button>
                    <button className="contactList-item-EditBtn" onClick={this.onDeleteBtnClick}>edit</button>
                </div>
            </div>
        );
    }
}

ContactListItem.propTypes = {
    item: propTypes.contactItem.isRequired,
    onDelete: propTypes.func.isRequired,
    // onEdit: propTypes.func.isRequired
};

export default ContactListItem;
