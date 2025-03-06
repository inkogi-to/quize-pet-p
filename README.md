
# React Quiz Application

A modern quiz application built with React that challenges users with timed questions and tracks their progress and scores.

## Overview

This interactive quiz application provides users with a seamless experience to test their knowledge on various topics. The application features a clean UI with a timer, progress tracking, and score calculation.

## Features

- **Dynamic Quiz Flow**: Navigate through questions with a intuitive user interface
- **Timed Quizzes**: Each quiz has a timer based on the number of questions
- **Score Tracking**: Automatically calculates and displays user scores
- **Progress Bar**: Visual indication of quiz progress
- **High Score System**: Keeps track of the user's best performance
- **Error Handling**: Graceful error management for API failures
- **Responsive Design**: Works across different screen sizes

## Technology Stack

- **Frontend**: React.js with Hooks (useReducer, useContext, useEffect)
- **Styling**: Tailwind CSS for responsive design
- **State Management**: React Context API and useReducer for global state
- **API**: RESTful API endpoints for quiz questions

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Error.jsx
│   │   ├── FinishScreen.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Loader.jsx
│   │   ├── Main.jsx
│   │   ├── NextButton.jsx
│   │   ├── Progress.jsx
│   │   ├── Question.jsx
│   │   ├── StartScreen.jsx
│   │   └── Timer.jsx
│   ├── contexts/
│   │   └── QuizContext.jsx    # Context provider for quiz state
│   ├── App.jsx                # Main application component
│   └── index.jsx              # Entry point
├── server/                    # Backend API for serving quiz questions
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. In a separate terminal, start the questions API:
   ```
   npm run server
   ```

## How It Works

The application uses React's Context API along with useReducer hook for state management. This pattern provides a clean and efficient way to manage complex state transitions in the quiz flow:

1. **Loading**: Fetches questions from the API
2. **Ready**: Displays the start screen
3. **Active**: Shows questions, tracks answers and time
4. **Finished**: Displays the final score and high score

The quiz state is managed through a reducer function that handles various actions like loading data, answering questions, moving to the next question, and finishing the quiz.

## API

The application fetches quiz questions from a local API endpoint:
```
GET http://localhost:8000/questions
```

## License

MIT

## Acknowledgements

- Icons provided by [Lucide React](https://lucide.dev)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
