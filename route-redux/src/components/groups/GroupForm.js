import React, {useState} from 'react';
import {connect} from 'react-redux';
import {saveGroup} from '../../store/actions/groupsActions'
import {useHistory} from "react-router-dom";

function GroupForm({item, onSave}) {
    const [title, setTitle] = useState(item.title);

    const history = useHistory();

    function onSaveClick() {
        onSave({
            id: item.id,
            title
        });
        history.goBack();
    }

    return (
        <div>
            <input type="text" value={title} onChange={({target}) => setTitle(target.value)}/>
            <button onClick={onSaveClick}>SAVE</button>
        </div>
    );
}

function mapStateToProps({groups}, {id}) {
    return {
        item:
            id !== 'new' ? groups.list.find(item => item.id == id)
                : {id: '', title: ''}
    }
}

const mapDispatchToProps = {
    onSave: saveGroup
};
export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
