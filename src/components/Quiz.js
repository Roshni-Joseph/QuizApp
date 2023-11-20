import { useContext } from "react";
import Question from "./Question";
// import { type } from "@testing-library/user-event/dist/type";
import { QuizContext } from "../contexts/quiz";



const Quiz = () => {

    const [quizState , dispatch] = useContext(QuizContext);
    console.log("quizstate" , quizState);
    
 
    // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // const testClick = () =>{
        // console.log("click");
        // dispatch({type : "NEXT_QUESTION"});
    // };
    // console.log(currentQuestionIndex);
    return (
        <div className="quiz">

            {quizState.showResults &&(
                <div className="results">
                    <div className="congratulations">Congratualations</div>
                    <div className="results-info">
                        <div>You have completed the quiz.</div>
                        <div>You have got {quizState.correctAnswersCount} of {quizState.questions.length}</div>
                    </div>
                    <div className="next-button" onClick={() => dispatch({type: "RESTART"})}>
                        Restart
                    </div>
                </div>
            )}

            {!quizState.showResults &&(
            <div>
                <div className="score">
                    Question {quizState.currentQuestionIndex +1 }/{quizState.questions.length}
                </div>
                <Question/>
                <div className="next-button" onClick= {()=>dispatch({type : "NEXT_QUESTION"})}>
                    Next Question
                    
                </div>
            </div>
            )}
        </div>
    );
}
export default Quiz;
