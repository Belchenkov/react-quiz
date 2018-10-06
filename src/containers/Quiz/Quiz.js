import React, {Component} from 'react';
import classes from './Quiz.css';

import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                id: 1,
                question: 'Какой самый лучший язык программирования для веба?',
                rightAnswerId: 1,
                answers: [
                    {id: 1, text: 'JavaScript'},
                    {id: 2, text: 'PHP'},
                    {id: 3, text: 'Python'},
                    {id: 4, text: 'Ruby'}
                ]
            },
            {
                id: 2,
                question: 'FTP - это:',
                rightAnswerId: 3,
                answers: [
                    {id: 1, text: 'почтовый клиент'},
                    {id: 2, text: 'программа IP-телефонии'},
                    {id: 3, text: 'протокол передачи файлов'},
                    {id: 4, text: 'новая модель тостера'}
                ]
            }
        ]
    };

    onAnswerClickHandler = (answerId) => {
        console.log('Answer Id: ', answerId);

        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        });
    };

    render () {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;