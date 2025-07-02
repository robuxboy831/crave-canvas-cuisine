
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const Thanks = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear cart on successful order
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen pt-20 pb-12 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Success Animation */}
        <div className="mb-8 animate-slide-up">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6 animate-pulse-scale" />
        </div>

        {/* Content */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Order <span className="text-gradient">Confirmed!</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto">
            Thank you for your order! Your delicious meal is being prepared and will be delivered within 30-45 minutes.
          </p>

          <div className="glass rounded-2xl p-8 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold text-white mb-4">Order Details</h3>
            <div className="space-y-2 text-gray-400">
              <p><span className="text-white font-medium">Order #:</span> DL-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              <p><span className="text-white font-medium">Estimated Delivery:</span> 30-45 minutes</p>
              <p><span className="text-white font-medium">Status:</span> <span className="text-orange-500">Preparing</span></p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/menu">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-8 py-4 text-lg glow transition-all duration-300 transform hover:scale-105">
                Order Again
              </Button>
            </Link>
            
            <Link to="/">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>

        {/* Confetti Effect */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-500 rounded-full animate-bounce opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thanks;
