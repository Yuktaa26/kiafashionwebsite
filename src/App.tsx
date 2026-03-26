import React, { useState } from 'react';

// --- SUB-COMPONENTS FOR ROUTING ---

function CollectionPage({ title }: { title: string }) {
  return (
    <div className="page-container" style={{ minHeight: '60vh', background: 'var(--cream)', paddingBottom: '70px' }}>
      <div className="page-header">
        <h1>{title}</h1>
        <p>Discover our exclusive, handpicked range of {title.toLowerCase()}.</p>
      </div>
      
      <section className="featured-section" style={{ background: 'transparent', paddingTop: '60px' }}>
        <div className="products-grid">
          {/* Reusing existing product cards as placeholders for the collection */}
          <div className="product-card">
            <div className="product-img">
              <div className="product-img-bg p1">🥻</div>
              <div className="product-wishlist">♡</div>
            </div>
            <div className="product-info">
              <h4>Signature {title} 1</h4>
              <p className="fabric">Premium Weave</p>
              <div className="product-price">
                <span className="price-now">₹2,499</span>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img">
              <div className="product-img-bg p2">🌸</div>
              <div className="product-wishlist">♡</div>
            </div>
            <div className="product-info">
              <h4>Signature {title} 2</h4>
              <p className="fabric">Handcrafted</p>
              <div className="product-price">
                <span className="price-now">₹3,299</span>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img">
              <div className="product-img-bg p3">🌼</div>
              <div className="product-wishlist">♡</div>
            </div>
            <div className="product-info">
              <h4>Signature {title} 3</h4>
              <p className="fabric">Festive Edition</p>
              <div className="product-price">
                <span className="price-now">₹4,999</span>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img">
              <div className="product-img-bg p4">💜</div>
              <div className="product-wishlist">♡</div>
            </div>
            <div className="product-info">
              <h4>Signature {title} 4</h4>
              <p className="fabric">Classic Elegance</p>
              <div className="product-price">
                <span className="price-now">₹1,899</span>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoPage({ title, content }: { title: string, content: string }) {
  return (
    <div className="page-container" style={{ minHeight: '60vh', background: 'var(--cream)' }}>
      <div className="page-header">
        <h1>{title}</h1>
      </div>
      <div className="page-content" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 30px', fontSize: '17px', lineHeight: '1.9', color: 'var(--dark)' }}>
        <p>{content}</p>
        <br/>
        <p style={{ color: 'var(--text-muted)' }}>If you need further assistance regarding this topic, please don't hesitate to contact our support team via WhatsApp or Email. We are always here to help you experience the best of Kia Fashion.</p>
      </div>
    </div>
  );
}

function Home({ navigate }: { navigate: (page: string) => void }) {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-pattern"></div>
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">✦ New Collection 2025</p>
            <h1>Drape Yourself in <em>Timeless Elegance</em></h1>
            <p>Curated by Renu Bhatia, celebrating the grace of Indian womanhood through the finest sarees, suits, and traditional wear.</p>
            <div className="hero-btns">
              <a href="#" className="btn-primary" onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('silk-sarees'); }}>Shop Sarees</a>
              <a href="#" className="btn-outline" onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('party-wear'); }}>View All Collections</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-ornament"></div>
            <div className="hero-logo-large" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '320px', height: '320px', borderRadius: '50%', border: '2px solid var(--gold)', color: 'var(--gold)', fontFamily: 'Cormorant Garamond, serif', fontSize: '120px', animation: 'float 6s ease-in-out infinite', background: 'rgba(201, 169, 110, 0.05)' }}>
              KF
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="stats-inner">
          <div className="stat-item">
            <span className="stat-number">5000+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">800+</span>
            <span className="stat-label">Styles Available</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Fabric Types</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.8★</span>
            <span className="stat-label">Customer Rating</span>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <section>
        <div className="section-header" style={{ paddingTop: '60px' }}>
          <span className="eyebrow">✦ Browse by Category</span>
          <h2>Top Categories</h2>
          <div className="section-divider">
            <div className="divider-line"></div>
            <div className="divider-diamond"></div>
            <div className="divider-line"></div>
          </div>
        </div>
        <div className="categories">
          <div className="categories-grid">
            <div className="cat-card cat-card-1" onClick={() => navigate('silk-sarees')}>
              <div className="cat-bg">
                <div className="cat-pattern"></div>
                <span className="cat-icon">🥻</span>
              </div>
              <div className="cat-badge">Trending</div>
              <div className="cat-label">
                <h3>Sarees</h3>
                <p>200+ styles</p>
              </div>
            </div>
            <div className="cat-card cat-card-2" onClick={() => navigate('party-wear')}>
              <div className="cat-bg">
                <div className="cat-pattern"></div>
                <span className="cat-icon">👘</span>
              </div>
              <div className="cat-label">
                <h3>Salwar Suits</h3>
                <p>Everyday elegance</p>
              </div>
            </div>
            <div className="cat-card cat-card-3" onClick={() => navigate('bridal-collection')}>
              <div className="cat-bg">
                <div className="cat-pattern"></div>
                <span className="cat-icon">🪷</span>
              </div>
              <div className="cat-badge">New</div>
              <div className="cat-label">
                <h3>Lehengas</h3>
                <p>Festive & bridal</p>
              </div>
            </div>
            <div className="cat-card cat-card-4" onClick={() => navigate('cotton-sarees')}>
              <div className="cat-bg">
                <div className="cat-pattern"></div>
                <span className="cat-icon">✨</span>
              </div>
              <div className="cat-label">
                <h3>Kurtis</h3>
                <p>Modern Indian wear</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="featured-section">
        <div className="section-header">
          <span className="eyebrow">✦ Handpicked for You</span>
          <h2>New Arrivals</h2>
          <div className="section-divider">
            <div className="divider-line"></div>
            <div className="divider-diamond"></div>
            <div className="divider-line"></div>
          </div>
        </div>

        <div className="products-grid">
          <div className="product-card" onClick={() => navigate('banarasi-sarees')}>
            <div className="product-img">
              <div className="product-img-bg p1">🥻</div>
              <div className="product-badge">New</div>
              <div className="product-wishlist">♡</div>
            </div>
            <div className="product-info">
              <h4>Crimson Banarasi Silk Saree</h4>
              <p className="fabric">Pure Silk · Woven</p>
              <div className="product-price">
                <span className="price-now">₹2,499</span>
                <span className="price-old">₹5,999</span>
                <span className="price-save">58% off</span>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>

          <div className="product-card" onClick={() => navigate('party-wear')}>
            <div className="product-img">
              <div className="product-img-bg p2">🌸</div>
              <div className="product-badge">Bestseller</div>
              <div className="product-wishlist">♡</div>
            </div>
            <div className="product-info">
              <h4>Powder Blue Chiffon Saree</h4>
              <p className="fabric">Chiffon · Printed</p>
              <div className="product-price">
                <span className="price-now">₹1,299</span>
                <span className="price-old">₹3,200</span>
                <span className="price-save">59% off</span>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>

          <div className="product-card" onClick={() => navigate('kanjivaram-sarees')}>
            <div className="product-img">
              <div className="product-img-bg p3">🌼</div>
              <div className="product-wishlist">♡</div>
            </div>
            <div className="product-info">
              <h4>Golden Kanjivaram Silk Saree</h4>
              <p className="fabric">Kanjivaram · Embroidered</p>
              <div className="product-price">
                <span className="price-now">₹3,999</span>
                <span className="price-old">₹8,500</span>
                <span className="price-save">53% off</span>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>

          <div className="product-card" onClick={() => navigate('party-wear')}>
            <div className="product-img">
              <div className="product-img-bg p4">💜</div>
              <div className="product-badge">Sale</div>
              <div className="product-wishlist">♡</div>
            </div>
            <div className="product-info">
              <h4>Violet Georgette Party Saree</h4>
              <p className="fabric">Georgette · Sequin</p>
              <div className="product-price">
                <span className="price-now">₹1,799</span>
                <span className="price-old">₹4,200</span>
                <span className="price-save">57% off</span>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <div className="banner-strip">
        <div className="inner">
          <h2>The <em>Heritage Saree</em> Collection</h2>
          <p>Paithani · Banarasi · Kanjivaram · Bandhani · Kalamkari · Ikkat</p>
          <a href="#" className="btn-primary" onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('silk-sarees'); }}>Explore Heritage Weaves</a>
        </div>
      </div>

      {/* BESTSELLERS */}
      <section className="featured-section">
        <div className="section-header">
          <span className="eyebrow">✦ Most Loved</span>
          <h2>Bestsellers</h2>
          <div className="section-divider">
            <div className="divider-line"></div>
            <div className="divider-diamond"></div>
            <div className="divider-line"></div>
          </div>
        </div>

        <div className="products-grid">
          <div className="product-card" onClick={() => navigate('cotton-sarees')}>
            <div className="product-img">
              <div className="product-img-bg p5">🍃</div>
              <div className="product-badge">Top Rated</div>
              <div className="product-wishlist">♡</div>
            </div>
            <div className="product-info">
              <h4>Emerald Green Ikkat Saree</h4>
              <p className="fabric">Cotton Silk · Handwoven</p>
              <div className="product-price">
                <span className="price-now">₹999</span>
                <span className="price-old">₹2,500</span>
                <span className="price-save">60% off</span>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>

          <div className="product-card" onClick={() => navigate('bandhani-sarees')}>
            <div className="product-img">
              <div className="product-img-bg p6">🔴</div>
              <div className="product-wishlist">♡</div>
            </div>
            <div className="product-info">
              <h4>Bridal Red Bandhani Saree</h4>
              <p className="fabric">Georgette · Bandhani</p>
              <div className="product-price">
                <span className="price-now">₹2,199</span>
                <span className="price-old">₹5,500</span>
                <span className="price-save">60% off</span>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>

          <div className="product-card" onClick={() => navigate('silk-sarees')}>
            <div className="product-img">
              <div className="product-img-bg p7">🌺</div>
              <div className="product-badge">Festive Pick</div>
              <div className="product-wishlist">♡</div>
            </div>
            <div className="product-info">
              <h4>Rani Pink Paithani Saree</h4>
              <p className="fabric">Silk · Traditional Weave</p>
              <div className="product-price">
                <span className="price-now">₹3,299</span>
                <span className="price-old">₹7,200</span>
                <span className="price-save">54% off</span>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>

          <div className="product-card" onClick={() => navigate('cotton-sarees')}>
            <div className="product-img">
              <div className="product-img-bg p8">🌿</div>
              <div className="product-wishlist">♡</div>
            </div>
            <div className="product-info">
              <h4>Mint Kalamkari Cotton Saree</h4>
              <p className="fabric">Cotton · Kalamkari Print</p>
              <div className="product-price">
                <span className="price-now">₹799</span>
                <span className="price-old">₹1,800</span>
                <span className="price-save">56% off</span>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS DUO */}
      <section>
        <div className="section-header">
          <span className="eyebrow">✦ Explore</span>
          <h2>Special Collections</h2>
          <div className="section-divider">
            <div className="divider-line"></div>
            <div className="divider-diamond"></div>
            <div className="divider-line"></div>
          </div>
        </div>
        <div className="collections-section">
          <div className="collections-duo">
            <div className="coll-card" onClick={() => navigate('bridal-collection')}>
              <div className="coll-bg coll-bg-1">
                <div className="coll-pattern"></div>
                🥻
              </div>
              <div className="coll-overlay">
                <span className="eyebrow">✦ Bridal Season 2025</span>
                <h3>Wedding & Bridal Sarees</h3>
                <a href="#" className="coll-link" onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('bridal-collection'); }}>Shop Bridal →</a>
              </div>
            </div>
            <div className="coll-card" onClick={() => navigate('party-wear')}>
              <div className="coll-bg coll-bg-2">
                <div className="coll-pattern"></div>
                ✨
              </div>
              <div className="coll-overlay">
                <span className="eyebrow">✦ Everyday Chic</span>
                <h3>Office & Daily Wear Sarees</h3>
                <a href="#" className="coll-link" onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('party-wear'); }}>Shop Collection →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="testimonials-inner">
          <div className="section-header" style={{ paddingTop: 0 }}>
            <span className="eyebrow">✦ Customer Love</span>
            <h2>What Our Customers Say</h2>
            <div className="section-divider">
              <div className="divider-line"></div>
              <div className="divider-diamond"></div>
              <div className="divider-line"></div>
            </div>
          </div>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"The Banarasi saree I ordered was absolutely stunning. The fabric quality is exceptional and it arrived beautifully wrapped. Will definitely order again!"</p>
              <div className="reviewer-name">Priya Sharma</div>
              <div className="reviewer-city">New Delhi</div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Renu ji's collection is unmatched. I've been a customer for 2 years and the sarees are always exactly as shown. Superb craftsmanship!"</p>
              <div className="reviewer-name">Meena Agarwal</div>
              <div className="reviewer-city">Jaipur</div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★☆</div>
              <p className="review-text">"Got the Kanjivaram silk for my daughter's wedding, every guest was complimenting me. The colours are so rich and vibrant. Highly recommended!"</p>
              <div className="reviewer-name">Sunita Verma</div>
              <div className="reviewer-city">Mumbai</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section>
        <div className="why-us">
          <div className="why-us-left">
            <h2>Why Choose <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Kia Fashion?</em></h2>
            <p>Founded by Renu Bhatia with a deep love for Indian textiles, Kia Fashion brings you handpicked, authentic women's clothing from the finest weavers and artisans across India. Every piece tells a story.</p>
            <div className="owner-badge">
              <div className="owner-avatar" style={{ overflow: 'hidden', padding: 0, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, var(--crimson), var(--rose))', color: 'white', fontFamily: 'Cormorant Garamond, serif', fontSize: '24px' }}>
                R
              </div>
              <div className="owner-info">
                <div className="name">Renu Bhatia</div>
                <div className="title">Founder & Curator, Kia Fashion</div>
              </div>
            </div>
          </div>
          <div className="why-us-right">
            <div className="feature-item">
              <span className="fi-icon">🧵</span>
              <h4>Authentic Fabrics</h4>
              <p>Sourced directly from weavers and artisans</p>
            </div>
            <div className="feature-item">
              <span className="fi-icon">🚚</span>
              <h4>Fast Delivery</h4>
              <p>Pan India shipping in 3 to 5 business days</p>
            </div>
            <div className="feature-item">
              <span className="fi-icon">↩️</span>
              <h4>Easy Returns</h4>
              <p>7 day hassle free return policy</p>
            </div>
            <div className="feature-item">
              <span className="fi-icon">💬</span>
              <h4>Personal Styling</h4>
              <p>WhatsApp us for personal shopping help</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// --- MAIN APP COMPONENT ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home navigate={navigate} />;
      
      // Collection Pages
      case 'silk-sarees': return <CollectionPage title="Silk Sarees" />;
      case 'banarasi-sarees': return <CollectionPage title="Banarasi Sarees" />;
      case 'kanjivaram-sarees': return <CollectionPage title="Kanjivaram Sarees" />;
      case 'bandhani-sarees': return <CollectionPage title="Bandhani Sarees" />;
      case 'cotton-sarees': return <CollectionPage title="Cotton Sarees" />;
      case 'party-wear': return <CollectionPage title="Party Wear" />;
      case 'bridal-collection': return <CollectionPage title="Bridal Collection" />;

      // Information Pages
      case 'about-us': 
        return <InfoPage title="About Us" content="Kia Fashion was founded by Renu Bhatia with a deep love for Indian textiles and traditional weaves. Our mission is to bring you handpicked, authentic women's clothing from the finest weavers and artisans across India. We believe every piece of clothing tells a story of heritage, culture, and craftsmanship." />;
      case 'contact-us': 
        return <InfoPage title="Contact Us" content="We would love to hear from you! For any inquiries, feedback, or personal styling assistance, please reach out to us on WhatsApp at +91 XXXXX XXXXX or email us at hello@kiafashion.in. Our operating hours are Monday to Saturday, 10:00 AM to 7:00 PM." />;
      case 'faqs': 
        return <InfoPage title="Frequently Asked Questions" content="We strive to provide the best quality fabrics. If you have questions about sizing, please refer to the size chart on the individual product pages. For care instructions, we recommend dry cleaning for all silk and heavy embroidered items to maintain their luster and longevity." />;
      case 'shipping-policy': 
        return <InfoPage title="Shipping Policy" content="We are thrilled to offer Free Shipping on all orders above ₹999 within India. Orders are typically processed within 24 hours and pan India delivery takes 3 to 5 business days. Please note that international shipping is currently unavailable, but we are working on bringing Kia Fashion to the world soon!" />;
      case 'return-policy': 
        return <InfoPage title="Return & Exchange Policy" content="Your satisfaction is our priority. We offer a 7 day hassle free return and exchange policy from the date of delivery. Items must be unworn, unwashed, and have all original tags and packaging intact. Customized or altered items cannot be returned." />;
      case 'privacy-policy': 
        return <InfoPage title="Privacy Policy" content="Your privacy is critically important to us. We secure your data using industry standard encryption and never share your personal details with third parties without your explicit consent. Information collected is used solely to process your orders and improve your shopping experience." />;
      case 'track-order': 
        return <InfoPage title="Track Your Order" content="To track your recent shipment, please check your email for the tracking link provided by our courier partners upon dispatch. If you cannot find the email, contact our support team with your Order ID and we will provide you with live tracking details immediately." />;

      default: return <Home navigate={navigate} />;
    }
  };

  return (
    <div style={{ overflowX: 'hidden', width: '100%', position: 'relative', maxWidth: '100vw' }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --crimson: #8B2E3A;
          --rose: #B85C6E;
          --blush: #E8C4C4;
          --cream: #FAF6F1;
          --warm-white: #FDF9F5;
          --dark: #2A1A1A;
          --gold: #C9A96E;
          --text-muted: #7A6060;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        /* Vite global overrides to remove the gap */
        #root {
          max-width: none !important;
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          text-align: left !important;
        }

        body {
          font-family: 'Jost', sans-serif;
          background: var(--warm-white);
          color: var(--dark);
          margin: 0;
          padding: 0;
        }

        /* NEW PAGE STYLES */
        .page-header {
          background: linear-gradient(135deg, var(--dark) 0%, #4A1A22 100%);
          padding: 80px 30px;
          text-align: center;
          color: white;
          border-bottom: 3px solid var(--gold);
        }
        .page-header h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 52px);
          font-weight: 400;
          margin-bottom: 12px;
          letter-spacing: 1px;
        }
        .page-header p {
          font-size: 15px;
          color: rgba(255,255,255,0.7);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* ANNOUNCEMENT BAR */
        .announcement-bar {
          background: var(--crimson);
          color: white;
          text-align: center;
          padding: 10px 20px;
          font-size: 13px;
          letter-spacing: 2px;
          font-weight: 500;
          font-family: 'Jost', sans-serif;
          text-transform: uppercase;
        }

        /* HEADER */
        header {
          background: var(--warm-white);
          border-bottom: 1px solid rgba(139,46,58,0.15);
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 20px rgba(139,46,58,0.08);
        }

        .header-inner {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          cursor: pointer;
        }

        .css-logo {
          width: 50px;
          height: 50px;
          background: var(--crimson);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-text .brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 600;
          color: var(--crimson);
          letter-spacing: 3px;
          text-transform: uppercase;
          line-height: 1;
        }

        .logo-text .tagline {
          font-size: 10px;
          color: var(--text-muted);
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-top: 3px;
        }

        nav {
          display: flex;
          gap: 30px;
          align-items: center;
        }

        nav a {
          font-size: 13px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--dark);
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }

        nav a::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--crimson);
          transition: width 0.3s;
        }

        nav a:hover { color: var(--crimson); }
        nav a:hover::after { width: 100%; }

        nav a.sale { color: var(--crimson); font-weight: 600; }

        .header-icons {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .header-icons a {
          color: var(--dark);
          text-decoration: none;
          font-size: 20px;
          transition: color 0.3s;
          cursor: pointer;
        }

        .header-icons a:hover { color: var(--crimson); }

        /* HERO SECTION */
        .hero {
          position: relative;
          height: 85vh;
          min-height: 550px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(135deg, #2A1A1A 0%, #5C2D36 40%, #8B2E3A 100%);
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 50%, rgba(201,169,110,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(232,196,196,0.12) 0%, transparent 40%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='0.05'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
          width: 100%;
        }

        .hero-text .eyebrow {
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }

        .hero-text h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(42px, 5vw, 72px);
          font-weight: 300;
          color: white;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .hero-text h1 em {
          font-style: italic;
          color: var(--blush);
        }

        .hero-text p {
          font-size: 15px;
          line-height: 1.8;
          color: rgba(255,255,255,0.7);
          max-width: 420px;
          margin-bottom: 40px;
        }

        .hero-btns {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: var(--gold);
          color: var(--dark);
          padding: 14px 36px;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
          display: inline-block;
          cursor: pointer;
          border: none;
        }

        .btn-primary:hover {
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .btn-outline {
          border: 1px solid rgba(255,255,255,0.4);
          color: white;
          padding: 14px 36px;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s;
          display: inline-block;
          cursor: pointer;
          background: transparent;
        }

        .btn-outline:hover {
          border-color: white;
          background: rgba(255,255,255,0.1);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .hero-ornament {
          position: absolute;
          width: 400px;
          height: 400px;
          border: 1px solid rgba(201,169,110,0.2);
          border-radius: 50%;
          animation: rotate-slow 20s linear infinite;
        }

        .hero-ornament::after {
          content: '';
          position: absolute;
          inset: 20px;
          border: 1px solid rgba(201,169,110,0.1);
          border-radius: 50%;
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* STATS STRIP */
        .stats-strip {
          background: var(--cream);
          border-bottom: 1px solid rgba(139,46,58,0.1);
          padding: 20px 0;
        }

        .stats-inner {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 30px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .stat-item {
          text-align: center;
          padding: 10px 20px;
          border-right: 1px solid rgba(139,46,58,0.15);
        }

        .stat-item:last-child { border-right: none; }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          color: var(--crimson);
          display: block;
        }

        .stat-label {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-top: 2px;
        }

        /* SECTION HEADER */
        .section-header {
          text-align: center;
          padding: 60px 30px 40px;
        }

        .section-header .eyebrow {
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 12px;
          display: block;
        }

        .section-header h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 400;
          color: var(--dark);
          line-height: 1.2;
        }

        .section-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 16px;
        }

        .divider-line {
          width: 60px;
          height: 1px;
          background: var(--gold);
        }

        .divider-diamond {
          width: 6px;
          height: 6px;
          background: var(--crimson);
          transform: rotate(45deg);
        }

        /* CATEGORIES GRID */
        .categories {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 30px 70px;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .cat-card {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
          cursor: pointer;
        }

        .cat-card .cat-bg {
          width: 100%;
          height: 100%;
          transition: transform 0.6s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .cat-card:hover .cat-bg { transform: scale(1.05); }

        .cat-card-1 .cat-bg { background: linear-gradient(160deg, #5C2D36, #8B2E3A); }
        .cat-card-2 .cat-bg { background: linear-gradient(160deg, #3D2B1F, #7A4E3A); }
        .cat-card-3 .cat-bg { background: linear-gradient(160deg, #1F2D3D, #3A4E7A); }
        .cat-card-4 .cat-bg { background: linear-gradient(160deg, #2D3D1F, #4E7A3A); }

        .cat-icon {
          font-size: 60px;
          opacity: 0.3;
          position: absolute;
        }

        .cat-pattern {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='20' cy='20' r='8'/%3E%3C/g%3E%3C/svg%3E");
        }

        .cat-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 30px 20px 20px;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: white;
        }

        .cat-label h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 500;
          margin-bottom: 4px;
        }

        .cat-label p {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
        }

        .cat-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: var(--gold);
          color: var(--dark);
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-weight: 600;
          padding: 5px 10px;
        }

        /* FEATURED PRODUCTS */
        .featured-section {
          background: var(--cream);
          padding: 0 0 70px;
        }

        .products-grid {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 30px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .product-card {
          background: white;
          cursor: pointer;
          transition: box-shadow 0.3s;
          position: relative;
        }

        .product-card:hover {
          box-shadow: 0 15px 40px rgba(139,46,58,0.15);
        }

        .product-img {
          aspect-ratio: 3/4;
          overflow: hidden;
          position: relative;
        }

        .product-img-bg {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 80px;
          transition: transform 0.5s;
        }

        .product-card:hover .product-img-bg { transform: scale(1.04); }

        .p1 { background: linear-gradient(160deg, #F5E6E8, #E8C4C4); }
        .p2 { background: linear-gradient(160deg, #E8EEF5, #C4D4E8); }
        .p3 { background: linear-gradient(160deg, #F5F0E8, #E8DFC4); }
        .p4 { background: linear-gradient(160deg, #EEE8F5, #D4C4E8); }
        .p5 { background: linear-gradient(160deg, #E8F5EE, #C4E8D4); }
        .p6 { background: linear-gradient(160deg, #F5EBE8, #E8C4B8); }
        .p7 { background: linear-gradient(160deg, #F5E8EE, #E8C4D4); }
        .p8 { background: linear-gradient(160deg, #EEF5E8, #D4E8C4); }

        .product-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: var(--crimson);
          color: white;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1px;
          padding: 4px 10px;
          text-transform: uppercase;
        }

        .product-wishlist {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 32px;
          height: 32px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: all 0.2s;
        }

        .product-wishlist:hover { background: var(--blush); }

        .product-info {
          padding: 16px;
        }

        .product-info h4 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-weight: 500;
          color: var(--dark);
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .product-info .fabric {
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 10px;
        }

        .product-price {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .price-now {
          font-size: 18px;
          font-weight: 600;
          color: var(--crimson);
          font-family: 'Cormorant Garamond', serif;
        }

        .price-old {
          font-size: 13px;
          color: var(--text-muted);
          text-decoration: line-through;
        }

        .price-save {
          font-size: 11px;
          background: #E8F5EE;
          color: #2D7A4E;
          padding: 2px 7px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .add-to-cart-btn {
          width: 100%;
          padding: 12px;
          background: transparent;
          border: 1px solid var(--crimson);
          color: var(--crimson);
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
          cursor: pointer;
          margin-top: 12px;
          transition: all 0.3s;
          font-family: 'Jost', sans-serif;
        }

        .add-to-cart-btn:hover {
          background: var(--crimson);
          color: white;
        }

        /* BANNER STRIP */
        .banner-strip {
          background: linear-gradient(135deg, #2A1A1A, #5C2D36);
          padding: 60px 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .banner-strip::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A96E' fill-opacity='0.05'%3E%3Cpath d='M40 0L80 40L40 80L0 40z'/%3E%3C/g%3E%3C/svg%3E");
        }

        .banner-strip .inner {
          position: relative;
          z-index: 1;
        }

        .banner-strip h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          font-weight: 300;
          color: white;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .banner-strip h2 em {
          font-style: italic;
          color: var(--gold);
        }

        .banner-strip p {
          color: rgba(255,255,255,0.65);
          font-size: 15px;
          margin-bottom: 30px;
          letter-spacing: 0.5px;
        }

        /* COLLECTIONS SHOWCASE */
        .collections-section {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 30px 70px;
        }

        .collections-duo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .coll-card {
          position: relative;
          height: 380px;
          overflow: hidden;
          cursor: pointer;
        }

        .coll-bg {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 100px;
          transition: transform 0.6s;
          position: relative;
        }

        .coll-card:hover .coll-bg { transform: scale(1.05); }

        .coll-bg-1 { background: linear-gradient(135deg, #5C2D36 0%, #8B2E3A 50%, #B85C6E 100%); }
        .coll-bg-2 { background: linear-gradient(135deg, #2D3D5C 0%, #3A5C8B 100%); }

        .coll-pattern {
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.1'%3E%3Ccircle cx='25' cy='25' r='20'/%3E%3Ccircle cx='25' cy='25' r='10'/%3E%3C/g%3E%3C/svg%3E");
        }

        .coll-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px 30px 30px;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%);
          color: white;
        }

        .coll-overlay .eyebrow {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 8px;
          display: block;
        }

        .coll-overlay h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 400;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .coll-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: white;
          text-decoration: none;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
          border-bottom: 1px solid rgba(255,255,255,0.4);
          padding-bottom: 2px;
          transition: border-color 0.3s;
        }

        .coll-link:hover { border-color: var(--gold); color: var(--gold); }

        /* TESTIMONIALS */
        .testimonials {
          background: var(--cream);
          padding: 70px 30px;
        }

        .testimonials-inner {
          max-width: 1300px;
          margin: 0 auto;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }

        .review-card {
          background: white;
          padding: 30px;
          border-top: 3px solid var(--crimson);
        }

        .review-stars {
          color: var(--gold);
          font-size: 16px;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .review-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-style: italic;
          color: var(--dark);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .reviewer-name {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .reviewer-city {
          font-size: 11px;
          color: rgba(122,96,96,0.6);
          margin-top: 2px;
        }

        /* WHY US */
        .why-us {
          max-width: 1300px;
          margin: 0 auto;
          padding: 70px 30px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .why-us-left h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 46px;
          font-weight: 400;
          color: var(--dark);
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .why-us-left p {
          color: var(--text-muted);
          line-height: 1.9;
          font-size: 15px;
          margin-bottom: 30px;
        }

        .owner-badge {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: var(--cream);
          border-left: 3px solid var(--crimson);
        }

        .owner-avatar {
          width: 52px;
          height: 52px;
          background: linear-gradient(135deg, var(--crimson), var(--rose));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          color: white;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          flex-shrink: 0;
        }

        .owner-info .name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 19px;
          font-weight: 600;
          color: var(--dark);
        }

        .owner-info .title {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .why-us-right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .feature-item {
          padding: 24px;
          background: var(--cream);
          text-align: center;
          transition: all 0.3s;
          cursor: default;
        }

        .feature-item:hover {
          background: var(--crimson);
          color: white;
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(139,46,58,0.3);
        }

        .feature-item .fi-icon {
          font-size: 32px;
          margin-bottom: 12px;
          display: block;
        }

        .feature-item h4 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          margin-bottom: 6px;
          font-weight: 500;
        }

        .feature-item p {
          font-size: 12px;
          line-height: 1.6;
          color: var(--text-muted);
        }

        .feature-item:hover p { color: rgba(255,255,255,0.7); }

        /* NEWSLETTER */
        .newsletter {
          background: linear-gradient(135deg, var(--crimson), #5C2D36);
          padding: 70px 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .newsletter::before {
          content: '✦';
          position: absolute;
          font-size: 300px;
          color: rgba(255,255,255,0.03);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .newsletter h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 300;
          color: white;
          margin-bottom: 12px;
        }

        .newsletter p {
          color: rgba(255,255,255,0.7);
          font-size: 15px;
          margin-bottom: 30px;
        }

        .newsletter-form {
          display: flex;
          max-width: 480px;
          margin: 0 auto;
          gap: 0;
        }

        .newsletter-form input {
          flex: 1;
          padding: 16px 20px;
          border: none;
          background: rgba(255,255,255,0.15);
          color: white;
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          outline: none;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .newsletter-form input::placeholder { color: rgba(255,255,255,0.5); }

        .newsletter-form button {
          background: var(--gold);
          color: var(--dark);
          border: none;
          padding: 16px 28px;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
          white-space: nowrap;
        }

        .newsletter-form button:hover { background: white; }

        /* FOOTER */
        footer {
          background: var(--dark);
          color: rgba(255,255,255,0.7);
          padding: 60px 30px 30px;
        }

        .footer-inner {
          max-width: 1300px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          margin-bottom: 30px;
        }

        .footer-brand .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .footer-brand .brand-logo .css-logo {
          width: 50px;
          height: 50px;
          font-size: 20px;
        }

        .footer-brand .brand-logo span {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 600;
          color: white;
          letter-spacing: 3px;
        }

        .footer-brand p {
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .footer-social {
          display: flex;
          gap: 12px;
        }

        .social-btn {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: all 0.3s;
          cursor: pointer;
          text-decoration: none;
          color: rgba(255,255,255,0.7);
        }

        .social-btn:hover {
          border-color: var(--gold);
          background: var(--gold);
          color: var(--dark);
        }

        .footer-col h4 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 500;
          color: white;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-col a {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 13px;
          transition: color 0.3s;
          letter-spacing: 0.5px;
          cursor: pointer;
        }

        .footer-col a:hover { color: var(--gold); }

        .footer-contact p {
          font-size: 13px;
          line-height: 2;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          flex-wrap: wrap;
          gap: 10px;
        }

        .footer-bottom span { letter-spacing: 0.5px; }

        /* MOBILE RESPONSIVE */
        @media (max-width: 900px) {
          nav { display: none; }
          .hero-content { grid-template-columns: 1fr; padding: 0 30px; }
          .hero-visual { display: none; }
          .categories-grid { grid-template-columns: repeat(2, 1fr); }
          .products-grid { grid-template-columns: repeat(2, 1fr); }
          .collections-duo { grid-template-columns: 1fr; }
          .reviews-grid { grid-template-columns: 1fr; }
          .why-us { grid-template-columns: 1fr; gap: 40px; }
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .categories-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .products-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .footer-grid { grid-template-columns: 1fr; }
          .banner-strip h2 { font-size: 32px; }
          .section-header h2 { font-size: 30px; }
          .newsletter-form { flex-direction: column; }
        }
      ` }} />

      {/* ANNOUNCEMENT BAR */}
      <div className="announcement-bar">
        ✦ Free Shipping on Orders Above ₹999 &nbsp;|&nbsp; New Arrivals: Kanjivaram & Banarasi Collection ✦
      </div>

      {/* HEADER */}
      <header>
        <div className="header-inner">
          <a className="logo-area" onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('home'); }}>
            <div className="css-logo">KF</div>
            <div className="logo-text">
              <span className="brand-name">Kia Fashion</span>
              <span className="tagline">By Renu Bhatia</span>
            </div>
          </a>

          <nav>
            <a href="#" onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('silk-sarees'); }}>Sarees</a>
            <a href="#" onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('party-wear'); }}>Salwar Suits</a>
            <a href="#" onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('bridal-collection'); }}>Lehengas</a>
            <a href="#" onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('cotton-sarees'); }}>Kurtis</a>
            <a href="#" onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('banarasi-sarees'); }}>Collections</a>
            <a href="#" className="sale" onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('party-wear'); }}>Sale</a>
          </nav>

          <div className="header-icons">
            <a href="#" title="Search">🔍</a>
            <a href="#" title="Wishlist">♡</a>
            <a href="#" title="Cart">🛍</a>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT ROUTER */}
      <main>
        {renderPage()}
      </main>

      {/* NEWSLETTER (Always Visible) */}
      <section className="newsletter">
        <h2>Stay in the Loop</h2>
        <p>Get exclusive offers, new arrival alerts & styling tips from Renu straight to your inbox.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand-logo" style={{ cursor: 'pointer' }} onClick={() => navigate('home')}>
                <div className="css-logo">KF</div>
                <span>Kia Fashion</span>
              </div>
              <p>Celebrating Indian craftsmanship through exquisite sarees and women's clothing. Curated by Renu Bhatia with love.</p>
              <div className="footer-social">
                <a className="social-btn" href="#" title="Instagram">📷</a>
                <a className="social-btn" href="#" title="Facebook">f</a>
                <a className="social-btn" href="#" title="WhatsApp">💬</a>
                <a className="social-btn" href="#" title="YouTube">▶</a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Collections</h4>
              <ul>
                <li><a onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('silk-sarees'); }}>Silk Sarees</a></li>
                <li><a onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('banarasi-sarees'); }}>Banarasi Sarees</a></li>
                <li><a onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('kanjivaram-sarees'); }}>Kanjivaram Sarees</a></li>
                <li><a onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('bandhani-sarees'); }}>Bandhani Sarees</a></li>
                <li><a onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('cotton-sarees'); }}>Cotton Sarees</a></li>
                <li><a onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('party-wear'); }}>Party Wear</a></li>
                <li><a onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('bridal-collection'); }}>Bridal Collection</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Information</h4>
              <ul>
                <li><a onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('about-us'); }}>About Us</a></li>
                <li><a onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('contact-us'); }}>Contact Us</a></li>
                <li><a onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('faqs'); }}>FAQs</a></li>
                <li><a onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('shipping-policy'); }}>Shipping Policy</a></li>
                <li><a onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('return-policy'); }}>Return Policy</a></li>
                <li><a onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('privacy-policy'); }}>Privacy Policy</a></li>
                <li><a onClick={(e: React.MouseEvent) => { e.preventDefault(); navigate('track-order'); }}>Track Order</a></li>
              </ul>
            </div>

            <div className="footer-col footer-contact">
              <h4>Get in Touch</h4>
              <p>
                <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Owner:</strong> Renu Bhatia<br /><br />
                <strong style={{ color: 'rgba(255,255,255,0.8)' }}>WhatsApp:</strong><br />
                <a href="#" style={{ color: 'var(--gold)' }}>+91 XXXXX XXXXX</a><br /><br />
                <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Hours:</strong><br />
                Mon to Sat, 10AM to 7PM<br /><br />
                <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Email:</strong><br />
                <a href="#" style={{ color: 'var(--gold)' }}>hello@kiafashion.in</a>
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Kia Fashion by Renu Bhatia. All rights reserved.Skillfully crafted by Yukta Bhatia</span>
            <span>Made with ♡ for the love of Indian textiles</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
