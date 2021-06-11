import "./App.css";
import { useEffect, useState } from "react";
import Header from "./containers/Header/Header";
import Sidebar from "./containers/Sidebar/Sidebar";
import Log from "./components/Log";
import Footer from './containers/Footer/Footer'
import Main from "./containers/Main/Main";
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuizes } from "./store/actions";

function App() {
  const dispatch = useDispatch()

  const isLoading = useSelector(state => state.isLoading)
  const quizes = useSelector(state => state.quizes)

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const handleCorrectAnswers = (answer, quizId) => {
      setUserAnswers([...userAnswers, { ...answer, quizId }])
  }
  const handleOnNext = () => {
    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1);
    }, 1000)
  };

  useEffect(() => {
    dispatch(fetchQuizes())
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      {!isLoading && quizes.length > currentQuestion && 
        <Main 
          quizes={quizes} 
          userAnswers={userAnswers} 
          quizId={quizes[currentQuestion].id}
          currentQuestion={currentQuestion}
          correctAnswers={handleCorrectAnswers}
          onNext={handleOnNext}
        />
      }
      {quizes.length <= currentQuestion && <Log userAnswers={userAnswers}/> }
      <Footer />
    </div>
  );
}

export default App;
