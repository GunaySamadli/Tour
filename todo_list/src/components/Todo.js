import React, { useState } from 'react';
import EditTask from '../modals/EditTask'

const Todo = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);


    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div className="card-wrapper  mr-5">
            <div className="task-holder">
                <p> Place: <span>{taskObj.Name}</span></p>
                <p className="mt-3"> Person: <span> {taskObj.Description}</span></p>
                <p className="mt-3"> Price: <span> {taskObj.Price}</span></p>

                <div className='card-icons'>
                    <div className='button' onClick={() => setModal(true)}>
                        Edit
                    </div>
                    <div className='button' onClick={handleDelete}>
                        Delete
                    </div>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );
};

export default Todo;