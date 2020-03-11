import React from 'react';
import {connect} from 'react-redux';
import StudentItem from './StudentItem';
import {deleteStudent, searchStudent} from '../../store/actions/studentsActions';

function StudentsList({list, search, onSearch, onDeleteStudent}) {

    function onDelete(event, item) {
        event.preventDefault();
        onDeleteStudent(item.id);
    }

    return (
        <div>
            <h6>search:</h6>
            <input
                type='text'
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
        list: students.list.filter(item => item.title.toUpperCase().includes(students.search.toUpperCase())),
        search: students.search
    }
}

const mapDispatchToProps = {
    onSearch: searchStudent,
    onDeleteStudent: deleteStudent,
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentsList)
