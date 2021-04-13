import axios from 'axios';
import { useEffect, useState } from 'react';
require('dotenv').config();
const api_key = process.env.api_key;

const List = ({ data: { name, capital, population, flag, languages } }) => {
	const [weather, setWeather] = useState({});

	useEffect(() => {
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`
			)
			.then((res) => setWeather(res.data));
		return () => setWeather({});
	}, [capital]);
};

export default List;
