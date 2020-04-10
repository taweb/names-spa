import React from 'react';
import ReactDOM from 'react-dom';
import NameList from './components/NameList';

function Index() {
    return (
        <div className="container">
            <NameList />
        </div>
    );
}

export default Index;

ReactDOM.render(<Index />, document.getElementById('index'));