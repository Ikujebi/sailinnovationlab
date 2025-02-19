import  { FC, useState, useEffect, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Spin } from "antd";
import useGetParticipantInfo from '../../../../hooks/useGetParticipants';

interface Participant {
  clockInStatus: boolean;
}

const BigChart: FC<ChatProps> = ({data}) => {
  

  if (data.length === 0) {
    return <div ><Spin size="small" /> </div>;
  }

  return (
    <div className="my-8 w-full md:w-2/5">
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis allowDecimals={false} />
      <CartesianGrid stroke="#ccc" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  </div>
  );
};

export default BigChart;
