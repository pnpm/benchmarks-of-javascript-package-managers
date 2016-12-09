import React, {Component} from 'react';
import BenchmarkResults from './component/BenchmarkResults';

const benchmark = [
    {
        id: 0,
        framework: "React app",
        commandNpm: "npm intall",
        commandYarn: "yarn",
        commandPnpm: "pnpm install",
        timeNpm: "82411",
        timeYarn: "32462",
        timePnpm: "22350",
        sizeNpm: "96825002",
        sizeYarn: "175713152",
        sizePnpm: "91086578",
        packageUrl: "https://github.com/zkochan/node-package-manager-benchmark/blob/master/fixtures/react-app/package.json"
    },
    {
        id: 1,
        framework: "Ember app",
        commandNpm: "npm intall",
        commandYarn: "yarn",
        commandPnpm: "pnpm install",
        timeNpm: "166925",
        timeYarn: "19426",
        timePnpm: "18240",
        sizeNpm: "105615718",
        sizeYarn: "120189948",
        sizePnpm: "102686669",
        packageUrl: "https://github.com/zkochan/node-package-manager-benchmark/blob/master/fixtures/ember-quickstart/package.json"
    },
    {
        id: 2,
        framework: "Angular app",
        commandNpm: "npm intall",
        commandYarn: "yarn",
        commandPnpm: "pnpm install",
        timeNpm: "85625",
        timeYarn: "14376",
        timePnpm: "9262",
        sizeNpm: "81464712",
        sizeYarn: "87297812",
        sizePnpm: "77677097",
        packageUrl: ""
    },
];

class App extends Component {
    render() {
        return (
            <div>
                <BenchmarkResults data={benchmark}/>
            </div>
        );
    }
}

export default App;
