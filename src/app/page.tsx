"use client";

import { useState } from "react";
import SplashLoader from "@/components/SplashLoader";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import BrandMarquee from "@/components/BrandMarquee";
import CollectionsGrid from "@/components/CollectionsGrid";
import FeaturedCatalog from "@/components/FeaturedCatalog";
import QuickViewModal from "@/components/QuickViewModal";
import OurHeritage from "@/components/OurHeritage";
import CherishedGuests from "@/components/CherishedGuests";
import BookAppointment from "@/components/BookAppointment";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SearchModal from "@/components/SearchModal";
import CheckoutModal from "@/components/CheckoutModal";
import ToastNotification, { ToastMessage } from "@/components/ToastNotification";

import { Product, CartItem } from "@/types";

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<number[]>([]);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Modals & Drawers state
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [appointmentProduct, setAppointmentProduct] = useState<string | undefined>(undefined);

  // Add toast helper
  const addToast = (type: "cart" | "wishlist" | "info", title: string, description: string) => {
    const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    setToasts((prev) => [...prev, { id, type, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart Handlers
  const handleAddToCart = (product: Product, size: string = "M") => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.selectedSize === size
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1, selectedSize: size }];
    });
    addToast(
      "cart",
      "Added to Selection",
      `${product.name} (Size: ${size}) added to your bag.`
    );
  };

  const handleUpdateQuantity = (id: number, size: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id && item.selectedSize === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (id: number, size: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === id && item.selectedSize === size))
    );
  };

  // Wishlist Handler
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      if (prev.includes(product.id)) {
        addToast("info", "Removed from Saved", `${product.name} removed.`);
        return prev.filter((id) => id !== product.id);
      } else {
        addToast("wishlist", "Saved to Lookbook", `${product.name} saved.`);
        return [...prev, product.id];
      }
    });
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="relative min-h-screen bg-[#f2f1ed] text-[#121212] font-sans selection:bg-[#007a5e] selection:text-white">
      {/* Initial Brand Splash Loader */}
      <SplashLoader />

      {/* Blueprint Grid Navbar */}
      <Navbar
        cartCount={cartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onSearchOpen={() => setIsSearchOpen(true)}
      />

      {/* Hero Blueprint Section */}
      <HeroSlider />

      {/* Luxury Brand Marquee Banner (Right to Left Scrolling) */}
      <BrandMarquee />

      {/* Collections Grid */}
      <CollectionsGrid
        onSelectCategory={(category) => {
          setSelectedCategory(category);
          const catalogElem = document.getElementById("catalog");
          if (catalogElem) {
            catalogElem.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />

      {/* Featured Catalog Slider */}
      <FeaturedCatalog
        onQuickView={(product) => setQuickViewProduct(product)}
        onAddToCart={(product) => handleAddToCart(product)}
        onToggleWishlist={handleToggleWishlist}
        wishlistIds={wishlistIds}
        selectedCategoryFilter={selectedCategory}
      />

      {/* Our Heritage Dabra */}
      <OurHeritage />

      {/* Cherished Guests Reviews */}
      <CherishedGuests />

      {/* Booking Form */}
      <BookAppointment preselectedProduct={appointmentProduct} />

      {/* Blueprint Grid Footer with Hand-Drawn Character Lineup */}
      <Footer />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onBookConsultation={(product) => {
          setAppointmentProduct(product.name);
          const visitElem = document.getElementById("visit");
          if (visitElem) {
            visitElem.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onQuickView={(product) => setQuickViewProduct(product)}
        onAddToCart={(product) => handleAddToCart(product)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onClearCart={() => setCartItems([])}
      />

      {/* Toast Notification Stack */}
      <ToastNotification toasts={toasts} onDismiss={handleDismissToast} />
    </main>
  );
}

