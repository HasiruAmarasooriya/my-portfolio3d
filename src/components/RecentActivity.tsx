"use client";

import { useEffect, useState } from "react";
import { Clock, TrendingUp, Users, Bell, Download, FileText } from "lucide-react";
import { motion } from "framer-motion"; // For smooth animations

export const RecentActivity = () => {
  const [activities, setActivities] = useState([
    { icon: <TrendingUp />, title: "Monthly report generated", time: "2 hours ago" },
    { icon: <Users />, title: "User John Doe logged in", time: "5 hours ago" },
    { icon: <Bell />, title: "New notifications received", time: "6 hours ago" },
    { icon: <Download />, title: "Data backup completed", time: "1 day ago" },
    { icon: <FileText />, title: "Document updated", time: "3 days ago" },
  ]);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Recent Activity</h3>
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <motion.li
            key={index}
            className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-xl text-blue-500">{activity.icon}</div>
            <div className="flex-1">
              <p className="text-gray-700 dark:text-gray-300">{activity.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
            </div>
            <Clock className="text-gray-500 dark:text-gray-400" />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
