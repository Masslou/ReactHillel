//CORE
import React, {Component} from 'react';

class ClientField extends Component {
    render() {
        return (
            <div className="flex-table row" role="rowgroup">
                <div className="flex-row first" role="cell">{this.props.item.id}</div>
                <div className="flex-row" role="cell">{this.props.item.name}</div>
                <div className="flex-row" role="cell">{this.props.item.surname}</div>
                <div className="flex-row" role="cell">{this.props.item.phone}</div>
            </div>
        );
    }
}

export default ClientField;
