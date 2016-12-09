import React from 'react';

const BenchmarkResults = ({data}) => {
    let result = [];
    data.map(singleBenchmark => {
        result.push(<TemplateBenchmarkResult data={singleBenchmark} key={singleBenchmark.id}/>);
    });
    return (
        <div>
            <h1>Node package manager benchmark</h1>
            <hr/>
            <p>This benchmark compares the performance of <a href="https://github.com/npm/npm">npm</a>, <a
                href="https://github.com/rstacruz/pnpm">pnpm</a> and <a href="https://github.com/yarnpkg/yarn">yarn</a>.
            </p>
            {result}
        </div>
    )
};

const TemplateBenchmarkResult = ({data}) => {
    return (
        <div>
            <h2>{data.framework}</h2>
            <hr/>
            <p>The app's <code>package.json</code> <a href={data.packageUrl}>here</a></p>
            <table className="table table-striped">
                <thead>
                <tr>
                    <td>Command</td>
                    <td>Time in ms</td>
                    <td>Size in byte</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{data.commandNpm}</td>
                    <td>{data.timeNpm}</td>
                    <td>{data.sizeNpm}</td>
                </tr>
                <tr>
                    <td>{data.commandYarn}</td>
                    <td>{data.timeYarn}</td>
                    <td>{data.sizePnpm}</td>
                </tr>
                <tr>
                    <td>{data.commandPnpm}</td>
                    <td>{data.timePnpm}</td>
                    <td>{data.sizePnpm}</td>
                </tr>
                </tbody>
            </table>
            <hr/>
        </div>
    )
};

export default BenchmarkResults;