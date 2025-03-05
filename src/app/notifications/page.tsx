import React from "react";
import {
  Bell,
  Check,
  Calendar,
  Trash2,
  BarChart3,
  AlertCircle,
} from "lucide-react";

export default function NotificationsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <div className="flex space-x-2">
          <button className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
            Mark all as read
          </button>
          <button className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
            Clear all
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <button className="px-3 py-1 border-b-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium">
                All
              </button>
              <button className="px-3 py-1 border-b-2 border-transparent hover:text-blue-600 dark:hover:text-blue-400">
                Unread
              </button>
              <button className="px-3 py-1 border-b-2 border-transparent hover:text-blue-600 dark:hover:text-blue-400">
                Important
              </button>
            </div>
            <div>
              <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm">
                <option>Filter by type</option>
                <option>System</option>
                <option>Alerts</option>
                <option>Reports</option>
              </select>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {/* Alert Notification */}
          <div className="p-6 bg-blue-50 dark:bg-blue-900/20">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">
                    Alert: Unusual market activity detected
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    5 min ago
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  We&apos;ve detected unusual price movements in several of your
                  watchlist stocks. Consider reviewing your positions.
                </p>
                <div className="mt-2 flex space-x-2">
                  <button className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium">
                    View Details
                  </button>
                  <button className="text-xs text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Update Notification */}
          <div className="p-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">
                    Portfolio update completed
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    2 hours ago
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Your portfolio rebalancing has been completed successfully
                  based on your specified allocations.
                </p>
                <div className="mt-2 flex space-x-2">
                  <button className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Report Notification */}
          <div className="p-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">
                    Monthly performance report available
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Yesterday
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Your monthly performance report for August 2023 is now
                  available. Overall growth: +3.2%.
                </p>
                <div className="mt-2 flex space-x-2">
                  <button className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium">
                    View Report
                  </button>
                  <button className="text-xs text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Notification */}
          <div className="p-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">
                    Upcoming earnings announcements
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    2 days ago
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Several companies in your watchlist have upcoming earnings
                  announcements next week.
                </p>
                <div className="mt-2 flex space-x-2">
                  <button className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 font-medium">
                    View Calendar
                  </button>
                  <button className="text-xs text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                    Set Reminder
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* System Notification */}
          <div className="p-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">
                    System maintenance notification
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    1 week ago
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  The system will undergo scheduled maintenance on September 15,
                  2023, from 2 AM to 4 AM UTC.
                </p>
                <div className="mt-2 flex space-x-2">
                  <button className="text-xs text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 dark:border-gray-700 text-center">
          <button className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
}
