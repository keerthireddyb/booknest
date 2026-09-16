import React from "react";
import { ArrowRight, BookOpen, CheckCircle2, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import BookCard from "./components/BookCard";
import CartDrawer from "./components/CartDrawer";
import BookModal from "./components/BookModal";
import { books, categories } from "./data/books";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const filteredBooks = useMemo(() => books.filter((book) => {
    const text = `${book.title} ${book.author} ${book.category}`.toLowerCase();
    return (category === "All" || book.category === category) && text.includes(search.toLowerCase());
  }), [search, category]);

  const addToCart = (book) => {
    setCart((current) => {
      const found = current.find((item) => item.id === book.id);
      return found
        ? current.map((item) => item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { ...book, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return setCart((c) => c.filter((item) => item.id !== id));
    setCart((c) => c.map((item) => item.id === id ? { ...item, quantity } : item));
  };

  const removeItem = (id) => setCart((c) => c.filter((item) => item.id !== id));
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const checkout = () => {
    alert("Demo checkout: your order is ready to be processed!");
    setCart([]);
    setCartOpen(false);
  };

  return (
    <div>
      <Navbar cartCount={cartCount} search={search} setSearch={setSearch} onCart={() => setCartOpen(true)} />

      <main id="home">
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="pill"><Sparkles size={15}/> Curated for curious minds</div>
              <h1>Stories that <span>stay with you.</span></h1>
              <p>Discover your next favorite book from a carefully selected collection of timeless classics, modern bestsellers, and practical guides.</p>
              <a href="#books" className="primary-cta">Explore Books <ArrowRight size={18}/></a>
              <div className="trust-row">
                <span><CheckCircle2 size={17}/> 10k+ readers</span>
                <span><CheckCircle2 size={17}/> Secure checkout</span>
              </div>
            </div>
            <div className="hero-stack" aria-label="Featured books">
              <div className="stack-book stack-one">Atomic<br/>Habits</div>
              <div className="stack-book stack-two">Clean<br/>Code</div>
              <div className="stack-book stack-three">The<br/>Alchemist</div>
            </div>
          </div>
        </section>

        <section className="catalog" id="books">
          <div className="section-head">
            <div><span className="eyebrow">Our collection</span><h2>Find your next read</h2></div>
            <span className="results">{filteredBooks.length} books</span>
          </div>

          <div className="categories" id="categories">
            {categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}
          </div>

          {filteredBooks.length ? (
            <div className="book-grid">
              {filteredBooks.map((book) => <BookCard key={book.id} book={book} onAdd={addToCart} onDetails={setSelectedBook} />)}
            </div>
          ) : (
            <div className="no-results"><BookOpen size={40}/><h3>No books found</h3><p>Try another title, author, or category.</p></div>
          )}
        </section>

        <section className="newsletter">
          <div><span className="eyebrow">BookNest community</span><h2>Get your next great read in your inbox.</h2></div>
          <form onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }}>
            <input type="email" required placeholder="Your email address" aria-label="Email address"/>
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </main>

      <footer><div className="footer-brand"><BookOpen size={19}/> BookNest</div><span>© 2026 BookNest. Demo eCommerce bookstore.</span></footer>

      {cartOpen && <CartDrawer cart={cart} onClose={() => setCartOpen(false)} onUpdate={updateQuantity} onRemove={removeItem} onCheckout={checkout}/>}
      {selectedBook && <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} onAdd={addToCart}/>}
    </div>
  );
}