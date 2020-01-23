//CORE
import React, {Component} from 'react';
//COMPONENTS
import ClientsList from '../ClientsList';
//STYLES
import '../styles/main.scss'

class Table extends Component {

    render() {
        return (
            <div className="table-container" role="table" aria-label="Destinations">
                <div className="flex-table header" role="rowgroup">
                    <div className="flex-row first" role="columnheader">ID</div>
                    <div className="flex-row" role="columnheader">NAME</div>
                    <div className="flex-row" role="columnheader">SURNAME</div>
                    <div className="flex-row" role="columnheader">PHONE</div>
                </div>
                <ClientsList/>
            </div>
        );
    }
}

export default Table;
