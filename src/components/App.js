import Header from "./Header";
import Main from "./Main";
import {QuizProvider} from "../context/QuizContext";


export default function App() {
    return (
        <QuizProvider>
            <div className="app">
                <Header/>
                <Main/>
            </div>
        </QuizProvider>
    );
}
