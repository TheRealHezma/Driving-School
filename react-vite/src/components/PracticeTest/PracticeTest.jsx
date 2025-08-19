import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import questions from './practiceTest';
import './PracticeTest.css';

function PracticeTest() {
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        // shuffle and take 10
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        setSelectedQuestions(shuffled.slice(0, 10));
    }, []);

    const handleAnswerChange = (questionIndex, selectedOption) => {
        setUserAnswers(prev => ({
            ...prev,
            [questionIndex]: selectedOption
        }));
    };

    const handleSubmit = () => {
        let correctCount = 0;
        selectedQuestions.forEach((question, index) => {
            if (userAnswers[index] === question.answer) {
                correctCount++;
            }
        });
        setScore(correctCount);
        setIsSubmitted(true);
    };

    const getQuestionResult = (questionIndex) => {
        if (!isSubmitted) return null;
        const userAnswer = userAnswers[questionIndex];
        const correctAnswer = selectedQuestions[questionIndex].answer;
        return userAnswer === correctAnswer;
    };

    const resetTest = () => {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        setSelectedQuestions(shuffled.slice(0, 10));
        setUserAnswers({});
        setIsSubmitted(false);
        setScore(0);
    };

    return (
        <div>
            <h1 className="hello">Practice Test</h1>

            {isSubmitted && (
                <div className="score-summary">
                    <h2>Test Results</h2>
                    <p>You scored {score} out of {selectedQuestions.length} ({Math.round((score / selectedQuestions.length) * 100)}%)</p>
                    {score >= 8 ? (
                        <p className="pass-message">Congratulations! You passed!</p>
                    ) : (
                        <p className="fail-message">You need at least 8 correct answers to pass. Keep studying!</p>
                    )}
                    <button onClick={resetTest} className="reset-button">Take Another Test</button>
                </div>
            )}

            <ol>
                {selectedQuestions.map((q, index) => (
                    <li className={`practiceTest ${isSubmitted ? (getQuestionResult(index) ? 'correct' : 'incorrect') : ''}`} key={q.id}>
                        <p>{q.question}</p>
                        <ul>
                            {q.options.map((opt, i) => {
                                const isSelected = userAnswers[index] === opt;
                                const isCorrectAnswer = isSubmitted && opt === q.answer;
                                const isWrongSelection = isSubmitted && isSelected && opt !== q.answer;

                                return (
                                    <li key={i} className={
                                        isSubmitted ?
                                            (isCorrectAnswer ? 'correct-answer' :
                                                isWrongSelection ? 'wrong-answer' : '') : ''
                                    }>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`q-${index}`}
                                                value={opt}
                                                checked={isSelected}
                                                onChange={() => handleAnswerChange(index, opt)}
                                                disabled={isSubmitted}
                                            />
                                            {opt}
                                        </label>
                                    </li>
                                );
                            })}
                        </ul>
                        {isSubmitted && (
                            <div className="question-feedback">
                                {getQuestionResult(index) ? (
                                    <span className="correct-icon">✓ Correct</span>
                                ) : (
                                    <span className="incorrect-icon">✗ Incorrect - Correct answer: {q.answer}</span>
                                )}
                            </div>
                        )}
                    </li>
                ))}
            </ol>

            {!isSubmitted && (
                <div className="submit-section">
                    <button
                        onClick={handleSubmit}
                        className="submit-button"
                        disabled={Object.keys(userAnswers).length < selectedQuestions.length}
                    >
                        Submit Test
                    </button>
                    {Object.keys(userAnswers).length < selectedQuestions.length && (
                        <p className="incomplete-message">
                            Please answer all questions before submitting.
                            ({Object.keys(userAnswers).length}/{selectedQuestions.length} answered)
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default PracticeTest;
