import React from 'react';
import {connect} from 'react-redux';
import StudentItem from './StudentItem';
import {deleteStudent, searchStudent} from "../../store/actions/studentsActions";

function StudentsList({list, search, onSearch, onDeleteStudent}) {

    function onDelete(event, item) {
        event.stopPropagation();
        onDeleteStudent(item.id);
    }

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={({target}) => onSearch(target.value)}
            />
            <ul>
                {list.map(item =>
                    <StudentItem key={item.id} item={item} onDelete={onDelete}/>
                )}
            </ul>
        </div>
    );
}

function mapStateToProps({students}) {
    return {
        list: students.list.filter(item => item.title.includes(students.search)),
        search: students.search
    }
}

const mapDispatchToProps = {
    onSearch: searchStudent,
    onDeleteStudent: deleteStudent,
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentsList)
