import React from "react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";

export default function CartDrawer({ cart, onClose, onUpdate, onRemove, onCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-head">
          <h2><ShoppingBag size={21} /> Your Cart</h2>
          <button onClick={onClose} aria-label="Close cart"><X /></button>
        </div>
        {cart.length === 0 ? (
          <div className="empty-cart"><ShoppingBag size={48} /><h3>Your cart is empty</h3><p>Add a book to get started.</p></div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="mini-cover" style={{ background: item.color }}>{item.title.slice(0, 1)}</div>
                  <div className="cart-meta">
                    <strong>{item.title}</strong><span>{item.author}</span><b>${item.price.toFixed(2)}</b>
                    <div className="qty">
                      <button onClick={() => onUpdate(item.id, item.quantity - 1)}><Minus size={14}/></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdate(item.id, item.quantity + 1)}><Plus size={14}/></button>
                      <button className="remove" onClick={() => onRemove(item.id)}><Trash2 size={15}/></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div><span>Subtotal</span><strong>${total.toFixed(2)}</strong></div>
              <small>Taxes and shipping calculated at checkout.</small>
              <button className="checkout" onClick={onCheckout}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}