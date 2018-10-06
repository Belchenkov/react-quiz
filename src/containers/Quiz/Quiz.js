import React, {Component} from 'react';
import classes from './Quiz.css';

import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        quiz: [
            {
                question: 'Какой самый лучший язык программирования для веба?',
                rightAnswerId: 1,
                answers: [
                    {id: 1, text: 'JavaScript'},
                    {id: 2, text: 'PHP'},
                    {id: 3, text: 'Python'},
                    {id: 4, text: 'Ruby'}
                ]
            }
        ]
    };

    onAnswerClickHandler = (answerId) => {
        console.log('Answer Id: ', answerId);
    };

    render () {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[0].answers}
                        question={this.state.quiz[0].question}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;