
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Sun, Zap, Leaf } from 'lucide-react';

const Home = () => {
  const [monthlyBill, setMonthlyBill] = useState('');
  const [homeSize, setHomeSize] = useState('');
  const [location, setLocation] = useState('');

  const handleQuickCalculate = () => {
    if (monthlyBill && homeSize && location) {
      // Navigate to results with data
      const params = new URLSearchParams({
        monthlyBill,
        homeSize,
        location
      });
      window.location.href = `/results?${params.toString()}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="flex justify-center mb-6">
            <Sun className="h-20 w-20 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-yellow-200">SolarCalc</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Your Smart Solar Savings Companion! ☀️ Discover how much you can save with solar energy 
            and help light up your future with the power of the sun! 🌿
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Zap className="h-5 w-5" />
              <span>Instant Estimates</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Calculator className="h-5 w-5" />
              <span>Smart Calculator</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Leaf className="h-5 w-5" />
              <span>Eco-Friendly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Calculator Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              🔍 Start Your Solar Journey
            </h2>
            <p className="text-xl text-gray-600">
              Enter a few simple details and get personalized insights in seconds!
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-800">Quick Solar Calculator</CardTitle>
              <CardDescription className="text-lg">
                Get instant estimates for your solar potential
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Monthly Electricity Bill (₹)
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 8000"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                    className="h-12 text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Home Size (sq ft)
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 2000"
                    value={homeSize}
                    onChange={(e) => setHomeSize(e.target.value)}
                    className="h-12 text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Location (City, State)
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., Mumbai, Maharashtra"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="h-12 text-lg"
                  />
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={handleQuickCalculate}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  disabled={!monthlyBill || !homeSize || !location}
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate My Savings
                </Button>
                <Link to="/input">
                  <Button variant="outline" className="px-8 py-3 text-lg font-semibold border-2 hover:bg-yellow-50">
                    Advanced Options
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            ✨ Explore SolarCalc Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Link to="/results" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Results Page</h3>
                  <p className="text-gray-600">Beautiful charts and summaries of your solar potential</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/input" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">🛠️</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Custom Settings</h3>
                  <p className="text-gray-600">Personalize your solar calculations for accuracy</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/about" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">About Us</h3>
                  <p className="text-gray-600">Learn about our mission for greener energy</p>
                </CardContent>
              </Card>
            </Link>
            
            <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 bg-gradient-to-br from-yellow-50 to-orange-100">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Quick Estimates</h3>
                <p className="text-gray-600">Get instant solar savings calculations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
