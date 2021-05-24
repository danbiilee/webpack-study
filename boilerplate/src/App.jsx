import React from 'react';
import styles from './app.module';
import testImage from '@images/image.jpg';

const App = () => {
	return (
		<div className={styles.div}>
			<h1>Hello Todak</h1>
			<img src={testImage} alt="test" />
		</div>
	);
};

export default App;
