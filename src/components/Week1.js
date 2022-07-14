import React, { useEffect, useState } from 'react'
import List from './List';

const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
        return (list = JSON.parse(localStorage.getItem('list')));
    } else {
        return [];
    }
};

const Week1 = () => {
    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            showAlert(true, 'danger', 'please enter value');
        } else if (name && isEditing) {
            setList(
                list.map((item) => {
                    if (item.id === editID) {
                        return { ...item, title: name };
                    }
                    return item;
                })
            );
            setName('');
            setEditID(null);
            setIsEditing(false);
        } else {
            showAlert(true, 'success', 'item added to the list');
            const newItem = { id: new Date().getTime().toString(), title: name };

            setList([...list, newItem]);
            setName('');
        }
    };
    const showAlert = (show = false, type = '', msg = '') => {
        setAlert({ show, type, msg });
    };
    const removeItem = (id) => {
        setList(list.filter((item) => item.id !== id));
    };

    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setName(specificItem.title);
    };

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    return (
        <section>
            <form className='task-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <input
                        type='text'
                        className='task'
                        placeholder='e.g. Lecture, Quizess, Disscussion'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type='submit' className='submit-btn'>
                        {isEditing ? 'edit' : 'Add task'}
                    </button>
                </div>
            </form>
            {list.length > 0 && (
                <div className='task-container'>
                    <List items={list} removeItem={removeItem} editItem={editItem} />
                </div>
            )}
        </section>
    );
}

export default Week1