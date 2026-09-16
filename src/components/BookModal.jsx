import React from "react";
import { ShoppingCart, Star, X } from "lucide-react";

export default function BookModal({ book, onClose, onAdd }) {
  if (!book) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="book-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X /></button>
        <div className="modal-cover" style={{ background: book.color }}>
          <span>{book.category}</span><strong>{book.title}</strong><small>{book.author}</small>
        </div>
        <div className="modal-content">
          <span className="eyebrow">{book.category}</span>
          <h2>{book.title}</h2>
          <p className="author">by {book.author}</p>
          <div className="rating"><Star size={16} fill="currentColor" /> {book.rating} / 5</div>
          <p className="description">{book.description}</p>
          <div className="modal-buy"><strong>${book.price.toFixed(2)}</strong><button className="checkout" onClick={() => { onAdd(book); onClose(); }}><ShoppingCart size={18}/> Add to Cart</button></div>
        </div>
      </div>
    </div>
  );
}