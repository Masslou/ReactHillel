import React, {useState} from 'react';
import {connect} from "react-redux";
import {saveStudent} from "../../store/actions/studentsActions";
import {useHistory} from "react-router-dom";

function StudentForm({item, groups, onSave}) {

    const [studentItem, setStudentItem] = useState(item);
    const history = useHistory();

    function onSaveClick() {
        onSave(studentItem);
        history.goBack();
    }

    function onChangeValue(target) {
        setStudentItem({
            ...studentItem,
            ...{[target.name]: target.value}
        })
    }

    return (
        <div>
            <input type='text'
                   placeholder='title'
                   name='title'
                   value={studentItem.title}
                   onChange={({target}) => onChangeValue(target)}/>


            <select name='groupId' value={studentItem.groupId}
                    onChange={({target}) => onChangeValue(target)}>
                <option>group selection</option>
                {groups.map(item =>
                    <option key={item.id} value={item.groupId}>{item.title}</option>
                )}
            </select>

            <button onClick={onSaveClick}>Add</button>

        </div>


    );

}

function mapStateToProps({students, groups}, {id}) {
    return {
        item:
            id !== 'new' ? students.list.find(item => item.id == id)
                : {id: '', title: ''},
        groups: groups.list,
    }
}

const mapDispatchToProps = {
    onSave: saveStudent,
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
