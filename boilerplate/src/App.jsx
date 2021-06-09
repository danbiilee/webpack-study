import React from 'react';
import styles from './app.module';
import Header from './components/header';
import testImage from '@images/image.jpg';

const App = () => {
	return (
		<div className={styles.div}>
			<Header />
			<img src={testImage} alt="test" />
		</div>
	);
};

export default App;
