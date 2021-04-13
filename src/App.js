import React, { useState, useEffect } from 'react';

import List from './List';

function App() {
	const [input, setInput] = useState('');

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	return (
		<div>
			find countries
			<input value={input} onChange={handleInput} />
			<List query={input} />
		</div>
	);
}

export default App;
