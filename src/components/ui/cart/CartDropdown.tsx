
import { useState } from 'react';
import { ShoppingCart, Trash2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { CartItem, useCart } from '@/lib/cart-context';

export const CartDropdown = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="h-5 w-5 mr-2" />
          <span>Корзина</span>
          {itemCount > 0 && (
            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {itemCount}
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4 flex items-center justify-between">
          <h3 className="font-medium">Корзина</h3>
          {cartItems.length > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 px-2 text-muted-foreground"
              onClick={clearCart}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Очистить
            </Button>
          )}
        </div>
        <Separator />
        
        {cartItems.length === 0 ? (
          <div className="p-4 text-center text-muted-foreground">
            Корзина пуста
          </div>
        ) : (
          <>
            <div className="max-h-80 overflow-auto">
              {cartItems.map((item) => (
                <CartItemRow 
                  key={item.id} 
                  item={item} 
                  onRemove={() => removeFromCart(item.id)} 
                />
              ))}
            </div>
            <Separator />
            <div className="p-4">
              <div className="flex justify-between mb-4">
                <span>Итого:</span>
                <span className="font-bold">{totalPrice.toLocaleString()} ₽</span>
              </div>
              <Button className="w-full" onClick={() => setIsOpen(false)}>
                Оформить заказ
              </Button>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
};

interface CartItemRowProps {
  item: CartItem;
  onRemove: () => void;
}

const CartItemRow = ({ item, onRemove }: CartItemRowProps) => {
  return (
    <div className="p-4 flex gap-3 hover:bg-muted/50">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-16 h-16 object-cover rounded" 
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm truncate">{item.name}</h4>
        <div className="text-sm text-muted-foreground">
          {item.quantity} × {item.price.toLocaleString()} ₽
        </div>
        <div className="font-medium">
          {(item.price * item.quantity).toLocaleString()} ₽
        </div>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8" 
        onClick={onRemove}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};
