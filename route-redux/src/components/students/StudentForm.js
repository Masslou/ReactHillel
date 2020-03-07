import React, {useState} from 'react';
import {connect} from "react-redux";
import {saveStudent} from "../../store/actions/studentsActions";
import {useHistory} from "react-router-dom";

function StudentForm({item, onSave}) {
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

function mapStateToProps({students}, {id}) {
    return {
        item:
            id !== 'new' ? students.list.find(item => item.id == id)
                : {id: '', title: ''}
    }
}

const mapDispatchToProps = {
    onSave: saveStudent
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
