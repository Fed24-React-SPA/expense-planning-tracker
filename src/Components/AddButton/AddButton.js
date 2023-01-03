import React from 'react';
import './AddButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddButton = () => {

    return (
        <div className='AddBtn'>
            <FontAwesomeIcon icon={faPlus} className='AddBtn-icon' />
        </div>
    )
}

export default AddButton;