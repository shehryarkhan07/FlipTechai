"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Calculator, TrendingUp, DollarSign, Clock } from "lucide-react";
import { Shield, Users, Star } from "lucide-react";


interface SavingsCalculatorProps {
  className?: string;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ className }) => {
  const [monthlyRevenue, setMonthlyRevenue] = useState(50000);
  const [currentEfficiency, setCurrentEfficiency] = useState(70);

  // Calculate potential savings
  const efficiencyGain = 100 - currentEfficiency;
  const potentialSavings = (monthlyRevenue * efficiencyGain) / 100;
  const annualSavings = potentialSavings * 12;
  const roi = ((annualSavings - 9500) / 9500) * 100;

  return (
  
  <>
   <motion.div
      className={`bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl xl:rounded-2xl border border-green-200 dark:border-green-800 p-6 xl:p-8 2xl:p-10 mt-6 max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="flex items-center gap-3 xl:gap-4 2xl:gap-5 mb-6 xl:mb-8 2xl:mb-10">
        <div className="w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <Calculator className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-gray-900 dark:text-white">
          ROI Calculator
        </h3>
      </div>

      <div className="space-y-4 xl:space-y-6 2xl:space-y-8 mb-6 xl:mb-8 2xl:mb-10">
        <div>
          <label className="block text-sm xl:text-base 2xl:text-lg font-medium text-gray-700 dark:text-gray-300 mb-2 xl:mb-3 2xl:mb-4">
            Monthly Revenue
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 xl:left-4 2xl:left-5 top-1/2 transform -translate-y-1/2 w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-gray-400" />
            <input
              type="number"
              value={monthlyRevenue}
              onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
              className="max-w-32 xl:max-w-64 2xl:max-w-72 pl-10 xl:pl-12 2xl:pl-14 pr-4 xl:pr-5 2xl:pr-6 py-2 xl:py-3 2xl:py-4 border border-gray-300 dark:border-gray-600 rounded-lg xl:rounded-xl 2xl:rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm xl:text-base 2xl:text-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="50000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm xl:text-base 2xl:text-lg font-medium text-gray-700 dark:text-gray-300 mb-2 xl:mb-3 2xl:mb-4">
            Current Efficiency (%)
          </label>
          <input
            type="range"
            min="50"
            max="95"
            value={currentEfficiency}
            onChange={(e) => setCurrentEfficiency(Number(e.target.value))}
            className="w-full h-2 xl:h-3 2xl:h-4 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs xl:text-sm 2xl:text-base text-gray-500 dark:text-gray-400 mt-1 xl:mt-2 2xl:mt-3">
            <span>50%</span>
            <span>{currentEfficiency}%</span>
            <span>95%</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 xl:gap-4 2xl:gap-6">
        <motion.div
          className="text-center p-4 xl:p-6 2xl:p-8 bg-white dark:bg-gray-800 rounded-lg xl:rounded-xl 2xl:rounded-2xl border border-gray-200 dark:border-gray-700"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <TrendingUp className="w-6 h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-green-600 dark:text-green-400 mx-auto mb-2 xl:mb-3 2xl:mb-4" />
          <p className="text-sm xl:text-base 2xl:text-lg text-gray-600 dark:text-gray-400">Monthly Savings</p>
          <p className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-green-600 dark:text-green-400">
            ${potentialSavings.toLocaleString()}
          </p>
        </motion.div>

        <motion.div
          className="text-center p-4 xl:p-6 2xl:p-8 bg-white dark:bg-gray-800 rounded-lg xl:rounded-xl 2xl:rounded-2xl border border-gray-200 dark:border-gray-700 px-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <DollarSign className="w-6 h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2 xl:mb-3 2xl:mb-4" />
          <p className="text-sm xl:text-base 2xl:text-lg text-gray-600 dark:text-gray-400">Annual Savings</p>
          <p className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-blue-600 dark:text-blue-400">
            ${annualSavings.toLocaleString()}
          </p>
        </motion.div>

        <motion.div
          className="text-center p-4 xl:p-6 2xl:p-8 bg-white dark:bg-gray-800 rounded-lg xl:rounded-xl 2xl:rounded-2xl border border-gray-200 dark:border-gray-700"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Clock className="w-6 h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2 xl:mb-3 2xl:mb-4" />
          <p className="text-sm xl:text-base 2xl:text-lg text-gray-600 dark:text-gray-400">ROI</p>
          <p className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-purple-600 dark:text-purple-400">
            {roi.toFixed(0)}%
          </p>
        </motion.div>
      </div>

      <div className="mt-6 xl:mt-8 2xl:mt-10 p-4 xl:p-6 2xl:p-8 bg-green-100 dark:bg-green-900/20 rounded-lg xl:rounded-xl 2xl:rounded-2xl border border-green-200 dark:border-green-800">
        <p className="text-sm xl:text-base 2xl:text-lg text-green-800 dark:text-green-200 text-center">
          <strong>Investment pays for itself in just {Math.ceil(9500 / potentialSavings)} months!</strong>
        </p>
      </div>
      
    </motion.div>
    {/* Row 2 - Trust Badges */}
      <div className="grid grid-cols-3 gap-3 w-full max-w-xl 2xl:max-w-3xl mt-4">
        <div className="p-4 rounded-xl bg-white/70 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 text-center">
          <Shield className="w-5 h-5 mx-auto text-green-600" />
          <p className="text-xs mt-2">30-Day Guarantee</p>
        </div>
        <div className="p-4 rounded-xl bg-white/70 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 text-center">
          <Users className="w-5 h-5 mx-auto text-blue-600" />
          <p className="text-xs mt-2">500+ Clients</p>
        </div>
        <div className="p-4 rounded-xl bg-white/70 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 text-center">
          <Star className="w-5 h-5 mx-auto text-yellow-500" />
          <p className="text-xs mt-2">4.9/5 Rating</p>
        </div>
      </div>
  </>
   
  );
};