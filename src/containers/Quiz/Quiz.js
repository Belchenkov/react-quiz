import React, {Component} from 'react';
import classes from './Quiz.css';

import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
    state = {
        isFinished: true,
        activeQuestion: 0,
        answerState: null,
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
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return;
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];

        if (question.rightAnswerId === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            });

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    });
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    });
                }
                window.clearTimeout(timeout)
            }, 1000);
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            });
        }
    };

    isQuizFinished () {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    render () {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.isFinished
                            ? <FinishedQuiz

                            />
                            : < ActiveQuiz
                                answers = {this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                                />
                    }
                </div>
            </div>
        );
    }
}

export default Quiz;