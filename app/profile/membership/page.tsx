"use client"

import { motion } from "framer-motion"
import { useUser } from "@clerk/nextjs"
import { Crown, Check, Star, Calendar, CreditCard } from "lucide-react"

export default function Membership() {
  const { user } = useUser()

  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      current: true,
      features: [
        "Access to basic articles",
        "Limited downloads",
        "Community access",
        "Email support"
      ]
    },
    {
      name: "Premium",
      price: "₹299",
      period: "month",
      current: false,
      popular: true,
      features: [
        "Unlimited article access",
        "Premium content",
        "Ad-free experience",
        "Priority support",
        "Exclusive newsletters",
        "Early access to reviews"
      ]
    },
    {
      name: "Pro",
      price: "₹599",
      period: "month",
      current: false,
      features: [
        "Everything in Premium",
        "1-on-1 gaming consultations",
        "Beta access to new features",
        "Custom content requests",
        "Direct author access",
        "Gaming event invites"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-8 lg:py-12">
        <div className="px-4 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-4"
          >
            Membership
          </motion.h1>
          <p className="text-sm lg:text-xl opacity-90">Manage your subscription and billing</p>
        </div>
      </section>

      <section className="px-4 lg:px-8 py-6 lg:py-8">
        <div className="max-w-6xl mx-auto">
          {/* Current Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-200 rounded-lg p-6 mb-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Crown className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Current Plan: Free</h2>
                <p className="text-gray-600">You're currently on the free plan</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Member since</p>
                  <p className="font-medium">{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Unknown'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                <Star className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Articles Read</p>
                  <p className="font-medium">127 this month</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                <CreditCard className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Next Billing</p>
                  <p className="font-medium">No active subscription</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white border-2 rounded-lg p-6 ${
                  plan.current 
                    ? 'border-purple-500 bg-purple-50' 
                    : plan.popular 
                    ? 'border-green-500' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-3 py-1 text-xs font-bold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                {plan.current && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-3 py-1 text-xs font-bold rounded-full">
                      CURRENT PLAN
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => !plan.current && alert(`Upgrading to ${plan.name} plan. Payment gateway will be integrated soon!`)}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    plan.current
                      ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                      : plan.popular
                      ? 'bg-green-600 text-white hover:bg-green-700 cursor-pointer'
                      : 'bg-purple-600 text-white hover:bg-purple-700 cursor-pointer'
                  }`}
                  disabled={plan.current}
                >
                  {plan.current ? 'Current Plan' : `Upgrade to ${plan.name}`}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Billing History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white border border-gray-200 rounded-lg p-6 mt-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Billing History</h3>
            <div className="text-center py-8 text-gray-500">
              <CreditCard className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>No billing history available</p>
              <p className="text-sm">Upgrade to a paid plan to see your billing history</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}