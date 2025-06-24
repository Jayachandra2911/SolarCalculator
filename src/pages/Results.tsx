
import { useSearchParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Sun, DollarSign, Zap, Leaf, TrendingUp, Home } from 'lucide-react';

const Results = () => {
  const [searchParams] = useSearchParams();
  const monthlyBill = Number(searchParams.get('monthlyBill')) || 8000;
  const homeSize = Number(searchParams.get('homeSize')) || 2000;
  const location = searchParams.get('location') || 'Mumbai, Maharashtra';

  // Calculate solar estimates (simplified calculations for demo)
  const annualBill = monthlyBill * 12;
  const systemSize = Math.round(homeSize / 400); // kW
  const annualGeneration = systemSize * 1400; // kWh per year (approximate)
  const annualSavings = Math.round(annualBill * 0.8); // 80% savings
  const systemCost = systemSize * 200000; // ₹2,00,000 per kW (approximate cost in India)
  const paybackPeriod = Math.round(systemCost / annualSavings);
  const co2Offset = Math.round(annualGeneration * 0.0007 * 10) / 10; // tons per year

  const monthlyData = [
    { month: 'Jan', savings: annualSavings / 12 * 0.8, generation: annualGeneration / 12 * 0.8 },
    { month: 'Feb', savings: annualSavings / 12 * 0.9, generation: annualGeneration / 12 * 0.9 },
    { month: 'Mar', savings: annualSavings / 12 * 1.1, generation: annualGeneration / 12 * 1.1 },
    { month: 'Apr', savings: annualSavings / 12 * 1.2, generation: annualGeneration / 12 * 1.2 },
    { month: 'May', savings: annualSavings / 12 * 1.3, generation: annualGeneration / 12 * 1.3 },
    { month: 'Jun', savings: annualSavings / 12 * 1.4, generation: annualGeneration / 12 * 1.4 },
    { month: 'Jul', savings: annualSavings / 12 * 1.4, generation: annualGeneration / 12 * 1.4 },
    { month: 'Aug', savings: annualSavings / 12 * 1.3, generation: annualGeneration / 12 * 1.3 },
    { month: 'Sep', savings: annualSavings / 12 * 1.2, generation: annualGeneration / 12 * 1.2 },
    { month: 'Oct', savings: annualSavings / 12 * 1.0, generation: annualGeneration / 12 * 1.0 },
    { month: 'Nov', savings: annualSavings / 12 * 0.8, generation: annualGeneration / 12 * 0.8 },
    { month: 'Dec', savings: annualSavings / 12 * 0.7, generation: annualGeneration / 12 * 0.7 },
  ];

  const energyBreakdown = [
    { name: 'Solar Energy', value: 80, color: '#fbbf24' },
    { name: 'Grid Energy', value: 20, color: '#6b7280' },
  ];

  const cumulativeSavings = [];
  let cumulative = 0;
  for (let year = 1; year <= 10; year++) {
    cumulative += annualSavings;
    cumulativeSavings.push({ year, savings: cumulative });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">📊 Your Solar Results</h1>
              <p className="text-xl opacity-90">Location: {location} | Home Size: {homeSize.toLocaleString()} sq ft</p>
            </div>
            <Link to="/">
              <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-100 to-green-200 border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <div className="text-3xl font-bold text-green-800">₹{annualSavings.toLocaleString()}</div>
              <div className="text-green-700 font-semibold">Annual Savings</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-100 to-yellow-200 border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <Sun className="h-12 w-12 mx-auto mb-4 text-yellow-600" />
              <div className="text-3xl font-bold text-yellow-800">{systemSize} kW</div>
              <div className="text-yellow-700 font-semibold">System Size</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <div className="text-3xl font-bold text-blue-800">{annualGeneration.toLocaleString()}</div>
              <div className="text-blue-700 font-semibold">kWh/Year</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-100 to-emerald-200 border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <Leaf className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
              <div className="text-3xl font-bold text-emerald-800">{co2Offset}</div>
              <div className="text-emerald-700 font-semibold">Tons CO₂ Saved</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Savings Chart */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Monthly Savings Projection
              </CardTitle>
              <CardDescription>Your estimated monthly savings throughout the year</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value: number) => [`₹${Math.round(value).toLocaleString()}`, 'Savings']} />
                  <Bar dataKey="savings" fill="#fbbf24" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Energy Source Breakdown */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sun className="h-5 w-5 text-yellow-600" />
                Energy Source Breakdown
              </CardTitle>
              <CardDescription>Your energy independence with solar</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={energyBreakdown}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {energyBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Long-term Savings */}
        <Card className="shadow-lg border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              10-Year Cumulative Savings
            </CardTitle>
            <CardDescription>See how your savings grow over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={cumulativeSavings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value: number) => [`₹${value.toLocaleString()}`, 'Cumulative Savings']} />
                <Line type="monotone" dataKey="savings" stroke="#059669" strokeWidth={3} dot={{ fill: '#059669', strokeWidth: 2, r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Summary Card */}
        <Card className="shadow-xl border-0 bg-gradient-to-r from-green-50 to-blue-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-800">💡 Your Solar Summary</CardTitle>
            <CardDescription className="text-lg">Here's what solar could mean for your home</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600">₹{systemCost.toLocaleString()}</div>
                <div className="text-gray-600">Estimated System Cost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">{paybackPeriod} years</div>
                <div className="text-gray-600">Payback Period</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">₹{(cumulativeSavings[9]?.savings || 0).toLocaleString()}</div>
                <div className="text-gray-600">10-Year Savings</div>
              </div>
            </div>
            <div className="flex gap-4 justify-center mt-8">
              <Link to="/input">
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-3">
                  Customize Calculation
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="px-6 py-3 border-2">
                  Calculate Again
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Results;
