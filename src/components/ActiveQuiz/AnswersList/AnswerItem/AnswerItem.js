import React from 'react';
import classes from './AnswerItem.css';

const AnswersItem = props => {
    return (
        <li className={classes.AnswerItem}>
            { props.answer.text }
        </li>
    );
};

export default AnswersItem;