//CORE
import React, {Component} from 'react';
//DATA
import {data} from '../data';
//COMPONENTS
import ClientField from "../ClientField";


class ClientsList extends Component {

    state = {
        contactsList: data
    };

    render() {
        return (
            <div>
                {
                    this.state.contactsList.map((item) => {
                        return <ClientField key={item.id} item={item}/>
                    })
                }
            </div>
        );
    }
}

export default ClientsList;
