import React from 'react';
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import Header from './containers/Header/Header';
import Sidebar from './containers/Sidebar/Sidebar';
import Log from './components/Log';
import Footer from './containers/Footer/Footer';
import Main from './containers/Main/Main';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchQuizes,
  setCurrentQuestionAction,
  setUserAnswersAction,
} from './store/actions';

function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.isLoading);
  const quizes = useSelector((state) => state.quizes);

  const currentQuestion = useSelector((state) => state.currentQuestion);
  // const userAnswers = useSelector((state) => state.userAnswers);

  const [userAnswers, setUserAnswers] = useState([]);
  console.log(userAnswers);

  const handleCorrectAnswers = (answer, quizId) => {
    console.log(answer);
    dispatch(setUserAnswersAction(answer, quizId));
    setUserAnswers([...userAnswers, { ...answer, quizId }]);
    console.log(userAnswers);
  };
  const handleOnNext = () => {
    setTimeout(() => {
      console.log('handleOnNext');
      dispatch(setCurrentQuestionAction());
    }, 1000);
  };

  useEffect(() => {
    dispatch(fetchQuizes());
  }, [dispatch]);

  return (
    <div className='wrapper'>
      <Header />
      <Sidebar />
      {!isLoading && quizes.length > currentQuestion && (
        <Main
          quizes={quizes}
          userAnswers={userAnswers}
          quizId={quizes[currentQuestion].id}
          currentQuestion={currentQuestion}
          correctAnswers={handleCorrectAnswers}
          onNext={handleOnNext}
        />
      )}
      {quizes.length <= currentQuestion && <Log userAnswers={userAnswers} />}
      <Footer />
    </div>
  );
}

export default App;
