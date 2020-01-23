//CORE
import React, {Component} from 'react';
//COMPONENTS
import ClientField from "../ClientField";


class ClientsList extends Component {

    render() {
        return (
            <div>
                {
                    this.props.contactsList.map((item) => {
                        return <ClientField key={item.id} item={item}/>
                    })
                }
            </div>
        );
    }
}

export default ClientsList;
