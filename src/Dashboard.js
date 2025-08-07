import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function Dashboard({ data }) {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="ds" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="yhat" stroke="#8884d8" />
    </LineChart>
  );
}
