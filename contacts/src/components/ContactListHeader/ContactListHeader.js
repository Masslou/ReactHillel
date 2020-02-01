import React, {Component} from 'react';

class ContactListHeader extends Component {
    render() {
        return (
            <div className="flex-table header" role="rowgroup">
                <div className="flex-row title" role="columnheader">ID</div>
                <div className="flex-row title" role="columnheader">NAME</div>
                <div className="flex-row title" role="columnheader">SURNAME</div>
                <div className="flex-row title" role="columnheader">PHONE</div>
                <div className="flex-row title" role="columnheader">OPTIONS</div>
            </div>
        );
    }
}
export default ContactListHeader;
