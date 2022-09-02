import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";

function App() {
	const STARTING_TIME = 5;

	const [text, setText] = useState("");
	const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
	const [isTimeRunning, setIsTimeRunning] = useState(false);
	const [wordCount, setWordCount] = useState(0);
	const textBoxRef = useRef(null);

	return (
		<div>
			<h1>How fast do you type?</h1>
			<textarea />
			<h4>Time Remaining: {timeRemaining}</h4>
			<button>Start</button>
			<h1>Word count: {wordCount}</h1>
		</div>
	);
}

export default App;
