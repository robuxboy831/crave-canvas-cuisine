
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

const menuItems = [
  {
    id: '1',
    name: 'Truffle Risotto',
    description: 'Creamy arborio rice with black truffle, parmesan, and fresh herbs',
    price: 28,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Main Course'
  },
  {
    id: '2',
    name: 'Wagyu Beef Steak',
    description: 'Premium wagyu beef with roasted vegetables and red wine jus',
    price: 65,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Main Course'
  },
  {
    id: '3',
    name: 'Lobster Thermidor',
    description: 'Fresh lobster in rich cream sauce with herbs and cognac',
    price: 45,
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Seafood'
  },
  {
    id: '4',
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce, parmesan, croutons, and caesar dressing',
    price: 16,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Appetizer'
  },
  {
    id: '5',
    name: 'Chocolate Soufflé',
    description: 'Decadent dark chocolate soufflé with vanilla ice cream',
    price: 14,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Dessert'
  },
  {
    id: '6',
    name: 'Pan-Seared Salmon',
    description: 'Atlantic salmon with lemon butter sauce and seasonal vegetables',
    price: 32,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Seafood'
  }
];

const categories = ['All', 'Appetizer', 'Main Course', 'Seafood', 'Dessert'];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 animate-slide-up">
            Our <span className="text-gradient">Menu</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Discover our carefully curated selection of gourmet dishes
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white glow'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-orange-500/90 text-white text-sm font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gradient">
                    ${item.price}
                  </span>
                  
                  <Button 
                    onClick={() => handleAddToCart(item)}
                    className="group/btn bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-6 py-3 transition-all duration-300 transform hover:scale-105 glow"
                  >
                    <Plus className="w-4 h-4 mr-2 transition-transform group-hover/btn:rotate-90" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
