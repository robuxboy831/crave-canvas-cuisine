
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: string, name: string) => {
    removeFromCart(id);
    toast.success(`${name} removed from cart`);
  };

  const total = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 pb-12 flex items-center justify-center">
        <div className="text-center animate-slide-up">
          <ShoppingBag className="w-24 h-24 text-gray-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Your cart is empty</h2>
          <p className="text-gray-400 mb-8 text-lg">Add some delicious items to get started</p>
          <Link to="/menu">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-8 py-4 text-lg glow">
              Browse Menu
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold text-white mb-4">
            Your <span className="text-gradient">Cart</span>
          </h1>
          <p className="text-xl text-gray-400">
            Review your selection and proceed to checkout
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="glass rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-bold text-gradient">
                      ${item.price}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="w-8 h-8 p-0 border-white/20 text-white hover:bg-white/10 rounded-full"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    
                    <span className="text-white font-medium w-8 text-center">
                      {item.quantity}
                    </span>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="w-8 h-8 p-0 border-white/20 text-white hover:bg-white/10 rounded-full"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Remove Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRemoveItem(item.id, item.name)}
                    className="w-8 h-8 p-0 border-red-500/20 text-red-400 hover:bg-red-500/10 hover:border-red-500/40 rounded-full"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-6 sticky top-24 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-semibold text-white mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Delivery Fee</span>
                  <span>$3.99</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Tax</span>
                  <span>${(total * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between text-white font-semibold text-xl">
                    <span>Total</span>
                    <span className="text-gradient">${(total + 3.99 + total * 0.08).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link to="/thanks" className="block">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full py-4 text-lg font-semibold glow transition-all duration-300 transform hover:scale-105">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
