// components/StatsCard.tsx
"use client";

type StatsCardProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
};

export const StatsCard = ({ title, value, icon }: StatsCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
      <div className="text-4xl text-blue-500">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">{title}</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
};
