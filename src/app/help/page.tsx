import React from "react";
import { Search, Book, FileText, MessageSquare, Phone } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">How can we help you?</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Get assistance with using My Stock platform. Browse our documentation,
          FAQs, or contact our support team.
        </p>
        <div className="mt-6 max-w-xl mx-auto relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search help topics..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
            <Book className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Documentation</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Comprehensive guides on how to use all features of the My Stock
            platform.
          </p>
          <button className="mt-auto text-blue-600 hover:text-blue-800 dark:text-blue-400 font-medium">
            Browse Documentation
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
            <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-xl font-semibold mb-2">FAQs</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Find answers to commonly asked questions about our platform and
            services.
          </p>
          <button className="mt-auto text-blue-600 hover:text-blue-800 dark:text-blue-400 font-medium">
            View FAQs
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
            <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Community</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Join our community forum to discuss investment strategies and get
            advice.
          </p>
          <button className="mt-auto text-blue-600 hover:text-blue-800 dark:text-blue-400 font-medium">
            Join Community
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h3 className="text-lg font-semibold mb-2">
              How do I create a portfolio?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              To create a portfolio, navigate to the Portfolio section and click
              on &quot;Create New Portfolio&quot;. You&apos;ll be able to name
              your portfolio and add stocks or other assets to track.
            </p>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h3 className="text-lg font-semibold mb-2">
              How is performance calculated?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Performance metrics are calculated based on the purchase price of
              assets in comparison to current market prices, accounting for
              dividends and other distributions where applicable.
            </p>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h3 className="text-lg font-semibold mb-2">
              Can I import data from other platforms?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, My Stock supports importing data from CSV files and direct
              integration with several popular brokerage platforms. Go to
              Settings → Data Import to get started.
            </p>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h3 className="text-lg font-semibold mb-2">
              Is my financial data secure?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We use industry-standard encryption and security practices to
              protect your data. Your financial information is never shared with
              third parties without your explicit consent.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              How often is market data updated?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Market data is updated in real-time during market hours for
              premium users, and with a 15-minute delay for standard accounts.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 font-medium">
            View All FAQs
          </button>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Still need help?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl">
              Our support team is available Monday through Friday, 9am to 5pm
              EST. We&apos;re happy to assist you with any questions or issues.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow hover:bg-gray-50 dark:hover:bg-gray-700">
              <MessageSquare className="h-5 w-5" />
              <span>Live Chat</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
              <Phone className="h-5 w-5" />
              <span>Contact Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
