"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '2021',
    bénéficiaires: 74129,
  },
  {
    name: '2022',
    bénéficiaires: 89897,
  },
  {
    name: '2023',
    bénéficiaires: 103131,
  },
];

export function ImpactChart() {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E4E2DC" opacity={0.5} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#4B5563', fontSize: 14, fontWeight: 600 }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#4B5563', fontSize: 12 }}
            tickFormatter={(value) => new Intl.NumberFormat("fr-TG").format(value)}
            dx={-10}
          />
          <Tooltip 
            cursor={{ fill: 'rgba(14, 33, 81, 0.05)' }}
            contentStyle={{ 
              backgroundColor: '#FFFFFF', 
              border: '1px solid #E4E2DC',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(14, 33, 81, 0.08)'
            }}
            itemStyle={{ color: '#0E2151', fontWeight: 600 }}
            formatter={(value: any) => [new Intl.NumberFormat("fr-TG").format(Number(value)), "Bénéficiaires"]}
          />
          <Bar 
            dataKey="bénéficiaires" 
            fill="#F5A623" 
            radius={[6, 6, 0, 0]} 
            maxBarSize={80}
            animationDuration={1500}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
