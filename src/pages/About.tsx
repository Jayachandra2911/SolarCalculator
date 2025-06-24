
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Leaf, Target, Users, Home, Mail, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-4">🌐 About SolarCalc</h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Empowering homeowners to make smarter, greener energy choices every day. 
                Learn about our mission to light up the world with solar energy! ☀️
              </p>
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

      <div className="container mx-auto px-4 py-12">
        {/* Mission Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-6">
            <Sun className="h-16 w-16 text-yellow-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At SolarCalc, we believe everyone should have access to clean, affordable solar energy. 
            Our mission is to make solar calculations simple, accurate, and accessible to homeowners 
            everywhere, helping them discover the incredible potential of solar power for their homes 
            and wallets.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <Leaf className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainability First</h3>
              <p className="text-gray-600">
                We're committed to promoting renewable energy and helping reduce carbon footprints 
                through accessible solar solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <Target className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Accuracy & Trust</h3>
              <p className="text-gray-600">
                Our calculations are based on real-world data and industry standards to provide 
                you with reliable, trustworthy solar estimates.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg border-0 bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <Users className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">User-Centered</h3>
              <p className="text-gray-600">
                Every feature is designed with homeowners in mind, making complex solar calculations 
                simple and understandable for everyone.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Story Section */}
        <Card className="shadow-xl border-0 mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-gray-800">Our Story</CardTitle>
            <CardDescription className="text-lg">How SolarCalc came to life</CardDescription>
          </CardHeader>
          <CardContent className="max-w-3xl mx-auto">
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                SolarCalc was born from a simple frustration: why was it so difficult for homeowners 
                to get accurate, personalized solar estimates? Traditional solar calculators were either 
                too simplistic or overwhelmingly complex, leaving people confused about their solar potential.
              </p>
              <p>
                Our team of renewable energy enthusiasts and software developers came together with a 
                shared vision: create a tool that makes solar accessible to everyone. We combined 
                industry expertise with intuitive design to build SolarCalc - a platform that transforms 
                complex solar calculations into beautiful, easy-to-understand insights.
              </p>
              <p>
                Today, SolarCalc helps thousands of homeowners discover their solar potential, save money 
                on electricity bills, and contribute to a more sustainable future. Every calculation 
                brings us one step closer to a world powered by clean, renewable energy.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features Highlight */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose SolarCalc?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Instant Results</h3>
              <p className="text-sm text-gray-600">Get solar estimates in seconds, not days</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Beautiful Charts</h3>
              <p className="text-sm text-gray-600">Visualize your savings with stunning graphics</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Personalized</h3>
              <p className="text-sm text-gray-600">Tailored calculations for your specific home</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Free to Use</h3>
              <p className="text-sm text-gray-600">All tools available at no cost</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <Card className="shadow-xl border-0 bg-gradient-to-r from-yellow-50 to-orange-50">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <Heart className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Join the Solar Revolution</h3>
            <p className="text-lg text-gray-600 mb-6">
              Ready to discover how solar can transform your home and savings? 
              Start your solar journey today!
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/">
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-3 text-lg font-semibold">
                  <Sun className="mr-2 h-5 w-5" />
                  Start Calculator
                </Button>
              </Link>
              <Button variant="outline" className="px-8 py-3 text-lg font-semibold border-2 hover:bg-yellow-50">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
