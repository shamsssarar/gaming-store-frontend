// 1. Group products by their category key
const groupedData = {
  Mice: [
    {
      id: 1,
      name: "Pro Wireless Gaming Mouse",
      price: 129.99,
      description:
        "Ultra-lightweight wireless gaming mouse with a 25K DPI sensor and 70-hour battery life.",
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
    },
    {
      id: 2,
      name: "Ultralight Honeycomb Mouse",
      price: 89.5,
      description:
        "Ergonomic 60g shell design for frictionless flick shots and tracking.",
      image:
        "https://images.unsplash.com/photo-1615663245857-3147e62a559d?w=800&q=80",
    },
    {
      id: 3,
      name: "MMO 12-Button Side Panel Mouse",
      price: 109.99,
      description:
        "Fully programmable 12-button side panel for complex macros and ability mapping.",
      image:
        "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=800&q=80",
    },
    {
      id: 4,
      name: "Ambidextrous Esports Mouse",
      price: 79.0,
      description:
        "Symmetrical design with magnetic side buttons, perfect for left or right-handed claw grips.",
      image:
        "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80", // Using placeholder
    },
  ],
  Keyboards: [
    {
      id: 5,
      name: "Mechanical Keyboard (Cherry MX Red)",
      price: 149.5,
      description:
        "Tenkeyless mechanical keyboard with customizable RGB and linear, quiet switches.",
      image:
        "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
    },
    {
      id: 6,
      name: "60% Optical Gaming Keyboard",
      price: 119.99,
      description:
        "Ultra-compact footprint with light-actuated switches for zero debounce delay.",
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
    },
    {
      id: 7,
      name: "Low-Profile Tactile Wireless",
      price: 169.0,
      description:
        "Sleek aluminum chassis with low-profile tactile switches for seamless typing and gaming.",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
    },
    {
      id: 8,
      name: "Custom Hot-Swappable TKL",
      price: 199.99,
      description:
        "Enthusiast-grade board allowing you to change switches on the fly without soldering.",
      image:
        "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80",
    },
  ],
  Headsets: [
    {
      id: 9,
      name: "Noise-Cancelling Studio Headset",
      price: 199.0,
      description:
        "Premium over-ear headset with active noise cancellation and a broadcast-grade boom mic.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    },
    {
      id: 10,
      name: "Open-Back Audiophile Headphones",
      price: 249.5,
      description:
        "Wide soundstage for pinpointing footsteps and immersive, natural audio landscapes.",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
    },
    {
      id: 11,
      name: "Wireless 7.1 Surround Headset",
      price: 159.99,
      description:
        "Lossless 2.4GHz audio with virtual 7.1 surround sound for spatial awareness.",
      image:
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80",
    },
    {
      id: 12,
      name: "Pro In-Ear Monitors (IEMs)",
      price: 89.0,
      description:
        "Triple-driver IEMs providing passive noise isolation and crystal-clear high frequencies.",
      image:
        "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&q=80",
    },
    {
      id: 13,
      name: "Haptic Bass Gaming Headset",
      price: 179.99,
      description:
        "Feel the impact of every explosion with integrated sensory bass sliders.",
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
    },
    {
      id: 14,
      name: "Lightweight Esports Headset",
      price: 99.0,
      description:
        "Stripped-down, 240g headset designed specifically to prevent fatigue during 12-hour sessions.",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    },
  ],
  Games: [
    {
      id: 15,
      name: "Tactical Special Ops",
      price: 39.99,
      description:
        "Lead your elite squad through tense, high-stakes tactical infiltrations where every bullet counts.",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    },
    {
      id: 16,
      name: "Age of Strategy: Definitive Edition",
      price: 19.99,
      description:
        "Build your civilization, execute flawless build orders, and conquer enemies in this real-time strategy masterpiece.",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    },
    {
      id: 17,
      name: "Underworld Mastermind",
      price: 49.99,
      description:
        "Rise to power in the criminal underworld. Outsmart rivals and build your empire in this gritty crime thriller.",
      image:
        "https://images.unsplash.com/photo-1605901309584-818e25960b8f?w=800&q=80",
    },
    {
      id: 18,
      name: "Cyber-Future 2077",
      price: 59.99,
      description:
        "A narrative-driven, open-world RPG set in a dystopian metropolis obsessed with power and body modification.",
      image:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&q=80",
    },
    {
      id: 19,
      name: "Grand Open World Survival",
      price: 29.99,
      description:
        "Scavenge, craft, and survive in a sprawling, unforgiving multiplayer environment.",
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
    },
  ],
  Monitors: [
    {
      id: 20,
      name: "4K IPS Gaming Monitor",
      price: 349.0,
      description:
        "27-inch 144Hz 4K monitor for ultra-smooth, color-accurate gameplay.",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    },
    {
      id: 21,
      name: "240Hz OLED Esports Display",
      price: 799.0,
      description:
        "27-inch panel with a 0.03ms response time and perfect blacks for uncompromising competitive advantage.",
      image:
        "https://images.unsplash.com/photo-1586952518485-11b180e92764?w=800&q=80",
    },
    {
      id: 22,
      name: "34-Inch Curved Ultrawide",
      price: 549.5,
      description:
        "Massive 21:9 aspect ratio providing ultimate immersion for story-driven adventures and productivity.",
      image:
        "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=800&q=80",
    },
  ],
};

export const products = Object.entries(groupedData).flatMap(
  ([categoryName, items]) =>
    items.map((item) => ({
      ...item,
      category: categoryName,
    })),
);

export const categoryList = Object.keys(groupedData);
