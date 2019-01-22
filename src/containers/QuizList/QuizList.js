import React, {Component} from 'react';
import classes from './QuizList.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class QuizList extends Component {
    renderQuizes() {
        return [1, 2, 3].map((quiz, index) => {
            return (
                <li
                    key={index}
                ><NavLink to={'/quiz/' + quiz}>
                    Тест {quiz}
                </NavLink></li>
            )
        });
    }

    componentDidMount() {
        axios.get('https://react-quiz-98a52.firebaseio.com/quiz.json')
            .then(res => console.log(res))
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <h1>Список тестов</h1>

                <ul>
                    {this.renderQuizes()}
                </ul>
            </div>
        );
    }
}

export default QuizList;