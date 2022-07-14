import React from 'react';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';

const List = ({ items, removeItem, editItem }) => {
    return (
        <div className='task-list'>
            {items.map((item) => {
                const { id, title } = item;
                return (
                    <article className='task-item' key={id}>
                        <p className='title'>{title}</p>
                        <div className='btn-container'>
                            <button
                                type='button'
                                className='edit-btn'
                                onClick={() => editItem(id)}
                            >
                                <ModeEditOutlineIcon />
                            </button>
                            <button
                                type='button'
                                className='delete-btn'
                                onClick={() => removeItem(id)}
                            >
                                <DeleteIcon />
                            </button>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default List;