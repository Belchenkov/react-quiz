import axios from "../../axios/axios-quiz";

import {FETCH_QUIZ_SUCCESS, FETCH_QUIZES_ERROR, FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS} from "./actionTypes";

export function fetchQuizes() {
    return async dispatch => {
        dispatch(fetchQuizesStart());

        try {
            const response = await axios.get('quizes.json');

            const quizes = [];

            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                });
            });

            dispatch(fetchQuizesSuccess(quizes))
        } catch (err) {
            dispatch(fetchQuizesError(err));
        }
    }
}

export function fetchQuizById(quizId) {
    return async  dispatch => {
        dispatch(fetchQuizesStart());

        try {
            const response = await axios.get(`/quizes/${quizId}.json`);
            const quiz = response.data;
            dispatch(fetchQuizSuccess(quiz));
        }catch (err) {
            dispatch(fetchQuizesError(err));
        }
    };
}

export function fetchQuizesStart() {
    return {
        type: FETCH_QUIZES_START
    };
}

export function fetchQuizesSuccess(quizes) {
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes
    };
}

export function fetchQuizSuccess(quiz) {
    return {
        type: FETCH_QUIZ_SUCCESS,
        quiz
    };
}

export function fetchQuizesError(err) {
    return {
        type: FETCH_QUIZES_ERROR,
        error: err
    };
}