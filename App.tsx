import React from "react";
import Form from "./components/Form"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-950 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Form />
      </main>
      <footer className="bg-black border-t border-stone-900 text-stone-500 py-12 text-center relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-hell-900 rotate-45 border border-stone-900"></div>
        <p className="font-serif text-lg text-hell-700 mb-2 tracking-widest uppercase">Spike's Personal Hell</p>
        <p className="text-sm text-stone-600">See you in hell (or at the photoshoot).</p>
        <p className="text-xs mt-8 text-stone-500">&copy; 2026 Spike Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;