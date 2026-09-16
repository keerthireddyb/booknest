import React from "react";
import { BookOpen, Menu, Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ cartCount, search, setSearch, onCart }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-icon"><BookOpen size={22} /></span>
          <span>Book<span>Nest</span></span>
        </a>

        <div className="search desktop-search">
          <Search size={18} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search books, authors..."
            aria-label="Search books"
          />
        </div>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#books" onClick={() => setOpen(false)}>Books</a>
          <a href="#categories" onClick={() => setOpen(false)}>Categories</a>
        </nav>

        <button className="cart-button" onClick={onCart} aria-label="Open shopping cart">
          <ShoppingCart size={21} />
          <span className="cart-label">Cart</span>
          {cartCount > 0 && <b>{cartCount}</b>}
        </button>

        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className="mobile-search">
        <div className="search">
          <Search size={18} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search books, authors..."
          />
        </div>
      </div>
    </header>
  );
}