import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router';
import {saveWaiter} from "../../store/actions/waitersAction";

function WaiterForm({item, onSave}) {
    const [waiter, setWaiter] = useState(item);
    const history = useHistory();

    function onFormSubmit(e) {
        e.preventDefault();
        onSave(waiter);

        history.push('/waiters');
    }

    function onChange({target}) {
        console.log(target);
        setWaiter({
            ...waiter,
            [target.name]: target.value
        });
    }

    return (

        <form onSubmit={onFormSubmit}>
            <label htmlFor="waiterSalary">WAITER NAME: </label>
            <input
                name="name"
                type="text"
                value={waiter.name}
                onChange={onChange}
            />
            <label htmlFor="tableDescription">WAITER SALARY: </label>
            <input
                name="salary"
                type="text"
                value={waiter.salary}
                onChange={onChange}
            />
            <button>Save</button>
        </form>
    );
}

function mapStateToProps({waiters}, {id}) {
    return {
        item:
            id !== 'new'
                ? waiters.list.find(item => item.id == id)
                : {name: '', salary: ''}
    };
}

const mapDispatchToProps = {
    onSave: saveWaiter
};

export default connect(mapStateToProps, mapDispatchToProps)(WaiterForm);
