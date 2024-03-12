import React from 'react';
import {
    LineChart,
    Line,
    AreaChart,
    Area,
    BarChart,
    Bar,
    ComposedChart,
    ScatterChart,
    Scatter,
    PieChart,
    Pie,
    RadarChart,
    Radar,
    RadialBarChart,
    RadialBar,
    XAxis,
    YAxis
} from 'recharts';

const randomData = () => {
    const dummyData = [];
    for (let i = 1; i <= 20; i++) {
        const randomValue1 = Math.random();
        const randomValue2 = Math.random();
        const randomValue3 = Math.random();
        dummyData.push({ name: `${i}`, value1: randomValue1, value2: randomValue2, value3: randomValue3 });
    }
    return dummyData;
};

const data = randomData();


function App() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    return (
        <div className="App" style={containerStyle}>
            <h2>Line Chart</h2>
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="value1" stroke="#555" name="Value 1" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>

            <h2>Area Chart</h2>
            <AreaChart width={400} height={200} data={data}>
                <Area type="monotone" dataKey="value1" stroke="#888" fill="#ccc" name="Value 1" />
                <XAxis dataKey="name" />
                <YAxis />
            </AreaChart>

            <h2>Bar Chart</h2>
            <BarChart width={500} height={250} data={data}>
                <Bar dataKey="value1" fill="#4CAF50" name="Value 1" />
                <XAxis dataKey="name" />
                <YAxis />
            </BarChart>

            <h2>Composed Chart</h2>
            <ComposedChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="value1" stroke="#555" name="Value 1" />
                <Bar dataKey="value2" fill="#999" name="Value 2" />
                <XAxis dataKey="name" />
                <YAxis />
            </ComposedChart>

            <h2>Scatter Chart</h2>
            <ScatterChart width={400} height={200} data={data}>
                <Scatter dataKey="value1" x="name" y="value2" shape="circle" fill="#C2C2F0" name="Value 1 vs. Value 2" />
                <XAxis dataKey="name" />
                <YAxis dataKey="value2" />
            </ScatterChart>

            <h2>Pie Chart</h2>
            <PieChart width={300} height={300} data={data}>
                <Pie
                    data={data}
                    dataKey="value1"
                    cx={150}
                    cy={150}
                    outerRadius={80}
                    fill="#00FF00"
                    label
                />
            </PieChart>


            <h2>Radar Chart</h2>
            <RadarChart width={400} height={250} data={data}>
                <Radar
                    dataKey="value1"
                    name="Value 1"
                    angleDataKey="name"
                    stroke="#FF0000"
                    fill="#FFCCCC"
                    fillOpacity={0.6}
                />
            </RadarChart>

            <h2>Radial Bar Chart</h2>
            <RadialBarChart width={500} height={300} data={data}>
                <RadialBar
                    dataKey="value1"
                    angleDataKey="name"
                    cx={150}
                    cy={150}
                    innerRadius={50}
                    outerRadius={80}
                    fill="blue"
                />
            </RadialBarChart>
        </div>
    );
}

export default App;
