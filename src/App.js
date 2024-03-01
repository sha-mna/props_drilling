// Example to show what is the need of redux management tool

import { useState } from "react";
import CountTwo from "./CountTwo";

function App() {

	const [count, setCount] = useState(0);

	const increment = () => {

		const newCount = count + 1;

		setCount(newCount)

	}

	return (
		<div>
			<h1>Count:{count}</h1>

			<button onClick={increment}>Increment</button>
			<CountTwo countP={count}/>
		</div>
	)
}

export default App;
