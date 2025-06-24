
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Settings, Calculator, Home } from 'lucide-react';

const InputPage = () => {
  const [monthlyBill, setMonthlyBill] = useState([8000]);
  const [homeSize, setHomeSize] = useState([2000]);
  const [location, setLocation] = useState('');
  const [roofType, setRoofType] = useState('');
  const [roofAge, setRoofAge] = useState('');
  const [shading, setShading] = useState([20]);
  const [electricityRate, setElectricityRate] = useState([6]);
  const [panelEfficiency, setPanelEfficiency] = useState([20]);
  const [systemSize, setSystemSize] = useState([8]);

  const handleCalculate = () => {
    const params = new URLSearchParams({
      monthlyBill: monthlyBill[0].toString(),
      homeSize: homeSize[0].toString(),
      location: location,
      roofType: roofType,
      roofAge: roofAge,
      shading: shading[0].toString(),
      electricityRate: electricityRate[0].toString(),
      panelEfficiency: panelEfficiency[0].toString(),
      systemSize: systemSize[0].toString()
    });
    window.location.href = `/results?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">🛠️ Custom Solar Settings</h1>
              <p className="text-xl opacity-90">Personalize your solar calculations for the most accurate results</p>
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
        <div className="max-w-4xl mx-auto">
          {/* Basic Information */}
          <Card className="shadow-lg border-0 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-600" />
                Basic Information
              </CardTitle>
              <CardDescription>Essential details about your home and energy usage</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Monthly Electricity Bill: ₹{monthlyBill[0].toLocaleString()}
                  </label>
                  <Slider
                    value={monthlyBill}
                    onValueChange={setMonthlyBill}
                    min={2000}
                    max={25000}
                    step={500}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>₹2,000</span>
                    <span>₹25,000</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Home Size: {homeSize[0].toLocaleString()} sq ft
                  </label>
                  <Slider
                    value={homeSize}
                    onValueChange={setHomeSize}
                    min={500}
                    max={5000}
                    step={100}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>500 sq ft</span>
                    <span>5,000 sq ft</span>
                  </div>
                </div>
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
            </CardContent>
          </Card>

          {/* Roof Information */}
          <Card className="shadow-lg border-0 mb-8">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">Roof Information</CardTitle>
              <CardDescription>Details about your roof that affect solar installation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Roof Type</label>
                  <Select value={roofType} onValueChange={setRoofType}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select roof type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asphalt">Asphalt Shingles</SelectItem>
                      <SelectItem value="metal">Metal</SelectItem>
                      <SelectItem value="tile">Clay/Concrete Tile</SelectItem>
                      <SelectItem value="flat">Flat Roof</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Roof Age</label>
                  <Select value={roofAge} onValueChange={setRoofAge}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select roof age" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">0-5 years</SelectItem>
                      <SelectItem value="medium">6-15 years</SelectItem>
                      <SelectItem value="old">16+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700">
                  Roof Shading: {shading[0]}% of day
                </label>
                <Slider
                  value={shading}
                  onValueChange={setShading}
                  min={0}
                  max={80}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>No shade (0%)</span>
                  <span>Heavy shade (80%)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Settings */}
          <Card className="shadow-lg border-0 mb-8">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">Advanced Settings</CardTitle>
              <CardDescription>Fine-tune your solar calculation parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Electricity Rate: ₹{electricityRate[0].toFixed(1)}/kWh
                  </label>
                  <Slider
                    value={electricityRate}
                    onValueChange={setElectricityRate}
                    min={3}
                    max={15}
                    step={0.5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>₹3/kWh</span>
                    <span>₹15/kWh</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Panel Efficiency: {panelEfficiency[0]}%
                  </label>
                  <Slider
                    value={panelEfficiency}
                    onValueChange={setPanelEfficiency}
                    min={15}
                    max={25}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>15%</span>
                    <span>25%</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700">
                  System Size: {systemSize[0]} kW
                </label>
                <Slider
                  value={systemSize}
                  onValueChange={setSystemSize}
                  min={3}
                  max={20}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>3 kW</span>
                  <span>20 kW</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Calculate Button */}
          <Card className="shadow-xl border-0 bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to See Your Results?</h3>
              <p className="text-gray-600 mb-6">
                Your customized solar calculation is ready. Click below to see your personalized solar savings!
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={handleCalculate}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  disabled={!location}
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate My Custom Results
                </Button>
                <Link to="/">
                  <Button variant="outline" className="px-8 py-3 text-lg font-semibold border-2 hover:bg-yellow-50">
                    Start Over
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InputPage;
