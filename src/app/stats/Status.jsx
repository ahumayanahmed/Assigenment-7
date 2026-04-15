
"use client"
import { TimelinePageContext } from '@/context/timeline.context';
import React, { useContext } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const COLORS = ['#7c3aed', '#1f2937', '#22c55e'];

const Statspage = () => {
  const { timepage } = useContext(TimelinePageContext);


  const counts = {
    message: 0,
    call: 0,
    video: 0,
  };

  timepage.forEach((item) => {
    if (counts[item.type] !== undefined) {
      counts[item.type]++;
    }
  });

  const data = [
    { name: 'Text', value: counts.message },
    { name: 'Call', value: counts.call },
    { name: 'Video', value: counts.video },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  
  const renderLabel = ({ percent }) => {
    return `${(percent * 100).toFixed(0)}%`;
  };


  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const item = payload[0];
      const percent = ((item.value / total) * 100).toFixed(1);

      return (
        <div className="bg-white p-2 shadow rounded">
          <p className="font-semibold">{item.name}</p>
          <p>{item.value} ({percent}%)</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Friendship Analytics</h1>

      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="mb-4 text-lg font-semibold">
          By Interaction Type
        </h2>

        <div className="w-full h-[300px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius={80}
                outerRadius={110}
                paddingAngle={5}
                dataKey="value"
                label={renderLabel} // 👉 % inside slice
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

             
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              ></div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statspage;