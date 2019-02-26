import React from 'react';

const TodoListItem = ({ label, important = false }) => {

    // const items = ['Learn React', 'Build awesome App', 'Drink Coffee'];

    const style = {
        color: important ? 'red' : 'black'
    };
    return <span style={style}>{ label }</span>;

}

export default TodoListItem;