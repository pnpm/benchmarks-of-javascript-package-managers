import React, {Component} from 'react';
import BenchmarkResults from './component/BenchmarkResults';

const App = ({data}) => {
    return (
        <BenchmarkResults data={data}/>
    );
};
export default App;
