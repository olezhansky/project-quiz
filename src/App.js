import "./App.css";
import { useEffect, useState } from "react";
import getQuizes from "./api/getQuizes";
import Header from "./containers/Header/Header";
import Sidebar from "./containers/Sidebar/Sidebar";
import Log from "./components/Log";
import Footer from './containers/Footer/Footer'
import Main from "./containers/Main/Main";

function App() {
  const [quizes, setQuizes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
    getQuizes().then((quizes) => {
      setQuizes(quizes);
      setIsLoading(false);
    });
  }, []);

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
