import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import questions from './practiceTest';
import './PracticeTest.css';

function PracticeTest() {
    const [selectedQuestions, setSelectedQuestions] = useState([]);

    useEffect(() => {
        // shuffle and take 10
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        setSelectedQuestions(shuffled.slice(0, 10));
    }, []);

    return (
        <div >
            <h1 className="hello">Practice Test</h1>
            <ol>
                {selectedQuestions.map((q, index) => (
                    <li className='practiceTest' key={q.id}>
                        <p>{q.question}</p>
                        <ul>
                            {q.options.map((opt, i) => (
                                <li key={i}>
                                    <label>
                                        <input type="radio" name={`q-${index}`} value={opt} />
                                        {opt}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default PracticeTest;
