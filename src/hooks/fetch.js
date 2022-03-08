import { useState } from 'react';
import axios from 'axios';

export default function useFetch(url, opt) {
	const [data, setData] = useState({});
	const [error, setError] = useState({ msg: '' });
	const [inProgress, setInProgress] = useState(true);

	axios
		.get(url, opt)
		.then(res => {
			setData(res.data);
			setInProgress(false);
		})
		.catch(err => setError(err));

	return { data, error, inProgress };
}
