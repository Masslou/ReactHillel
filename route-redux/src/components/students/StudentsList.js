import React from 'react';
import {connect} from 'react-redux';
import StudentItem from './StudentItem';

function StudentsList({list}) {
    return (
        <div>
            {list.map(item =>
                <StudentItem key={item.id} item={item}/>
            )}
        </div>
    );
}

function mapStateToProps({students}) {
    return {
        list: students.list
    }
}


export default connect(mapStateToProps)(StudentsList)
