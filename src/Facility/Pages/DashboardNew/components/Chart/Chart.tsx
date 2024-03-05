import React, { FC, useState, useEffect, useCallback } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, LabelList } from 'recharts';
import useGetParticipantInfo from '../../../../../hooks/useGetParticipants';

interface Participant {
  clockInStatus: boolean;
}

const Chart: FC = () => {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);
  const { participantsInfo } = useGetParticipantInfo();

  // Define static colors
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const getChartData = useCallback(() => {
    if (!participantsInfo) {
      return;
    }

    const present = participantsInfo.filter((participant: Participant) => participant.clockInStatus);
    const absent = participantsInfo.filter((participant: Participant) => !participant.clockInStatus);
    const clockOuts = participantsInfo.filter((participant: Participant) => !participant.clockInStatus);

    setData([
      { name: 'Total Present Participants', value: present.length },
      { name: 'Total Absent Participants', value: absent.length },
      { name: 'Total Clocked-Out Participants', value: clockOuts.length },
    ]);
  }, [participantsInfo]);

  useEffect(() => {
    getChartData();
  }, [getChartData]);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-8 w-[100%] md:m-0 md:w-[40%] overflow-x-scroll">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            <LabelList
              dataKey={({ value }) => value}
              position="center"
              fontSize={20}
              fill="#ffffff"
            />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
