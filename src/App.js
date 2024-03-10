import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

// Assuming the comma-separated values represent data points
const data = [
    { name: '1', value1: 4.16, value2: -23.5, value3: -32.79 },
    { name: '2', value1: 4.78, value2: -24.18, value3: -34.54 },
    // ... add remaining data points here following the same structure
    { name: '33', value1: 33.14, value2: -13.82, value3: -77.98 },
];

function App() {
    // No state needed for this static data

    return (
        <div className="App">
            <LineChart width={600} height={300} data={data}>
                {/* Assuming you want to plot value1 (first value) vs name */}
                <Line type="monotone" dataKey="value1" stroke="#555" name="Value 1" />
                {/* Add more lines here to plot other data series (value2, value3) if needed */}
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
    );
}

export default App;
