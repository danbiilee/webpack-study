import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>React Title</h1>
    </div>
  );
};

export default App;

const wrapper = document.querySelector('#app');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
