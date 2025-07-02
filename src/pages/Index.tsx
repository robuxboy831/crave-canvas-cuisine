
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-600/15 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-white">Delicious Food</span>
            <br />
            <span className="text-gradient">Delivered Fresh</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 animate-slide-up max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Experience culinary perfection with our handcrafted dishes, delivered straight to your doorstep
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/menu">
              <Button className="group relative px-8 py-6 text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 glow">
                Order Now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link to="/menu">
              <Button variant="outline" className="px-8 py-6 text-lg font-semibold border-white/20 text-white hover:bg-white/10 rounded-full transition-all duration-300 transform hover:scale-105">
                View Menu
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-gradient">Delicioso</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're committed to delivering exceptional culinary experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fresh Ingredients",
                description: "Sourced daily from local farms and suppliers",
                icon: "🌱"
              },
              {
                title: "Expert Chefs",
                description: "Crafted by award-winning culinary professionals",
                icon: "👨‍🍳"
              },
              {
                title: "Fast Delivery",
                description: "Hot, fresh meals delivered in 30 minutes or less",
                icon: "🚀"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
