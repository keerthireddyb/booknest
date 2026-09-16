import React from "react";
import { ShoppingCart, Star } from "lucide-react";

export default function BookCard({ book, onAdd, onDetails }) {
  return (
    <article className="book-card">
      <button className="cover" style={{ background: book.color }} onClick={() => onDetails(book)} aria-label={`View ${book.title}`}>
        <span className="cover-tag">{book.category}</span>
        <BookMark />
        <strong>{book.title}</strong>
        <small>{book.author}</small>
      </button>
      <div className="book-info">
        <div className="rating"><Star size={15} fill="currentColor" /> {book.rating}</div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <div className="card-bottom">
          <strong>${book.price.toFixed(2)}</strong>
          <button className="add-button" onClick={() => onAdd(book)}><ShoppingCart size={16} /> Add</button>
        </div>
      </div>
    </article>
  );
}

function BookMark() {
  return <div className="bookmark">BN</div>;
}