import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Main() {
	const [hello, setHello] = useState('')

	useEffect(() => {
		axios.get('/api/hello')
		.then(response => setHello(response.data))
		.catch(error => console.log(error))
	}, []);
	
	return (
		<section>
			메인 페이지 입니다.
			백엔드에서 가져온 데이터입니다 : {hello}
		</section>
	);
}

export default Main;