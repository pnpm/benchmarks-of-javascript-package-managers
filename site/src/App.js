import React, {Component} from 'react';
import BenchmarkResults from './component/BenchmarkResults';

import stats from './stats.json'

class App extends Component {
    render() {
        return (
            <div>
                <BenchmarkResults data={ stats }/>
            </div>
        );
    }
}

export default App;
