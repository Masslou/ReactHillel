import React from 'react';
import {connect} from 'react-redux';
import GroupItem from './GroupItem';
import {searchGroup, deleteGroup} from "../../store/actions/groupsActions";
import {deleteStudent} from "../../store/actions/studentsActions";

function GroupsList({list, search, onSearch, onDeleteGroup, onDeleteStudent}) {

    function onDelete(event, item) {
        event.stopPropagation();
        onDeleteGroup(item.id);
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
                    <GroupItem key={item.id} item={item} onDelete={onDelete}/>
                )}
            </ul>
        </div>
    );
}

function mapStateToProps({groups}) {
    return {
        list: groups.list.filter(item => item.title.includes(groups.search)),
        search: groups.search
    }
}

const mapDispatchToProps = {
    onSearch: searchGroup,
    onDeleteGroup: deleteGroup,
    onDeleteStudent: deleteStudent
};
export default connect(mapStateToProps, mapDispatchToProps)(GroupsList)
