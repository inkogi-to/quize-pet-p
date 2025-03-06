import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Progress from "./Progress";
import Question from "./Question";
import Timer from "./Timer";
import NextButton from "./NextButton";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import {useQuiz} from "../context/QuizContext";

export default function Main() {
    const {status} = useQuiz()
    return (
        <main className="main">
            {status === "loading" && <Loader/>}
            {status === "error" && <Error/>}
            {status === "ready" && (
                <StartScreen/>
            )}
            {status === "active" && (
                <>
                    <Progress/>
                    <Question/>
                    <Footer>
                        <Timer/>
                        <NextButton/>
                    </Footer>
                </>
            )}
            {status === "finished" && (
                <FinishScreen/>
            )}
        </main>
    )

}