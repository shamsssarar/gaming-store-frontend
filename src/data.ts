// 1. Group products by their category key
const groupedData = {
  Mice: [
    {
      id: 1,
      name: "Pro Wireless Gaming Mouse",
      price: 129.99,
      description:
        "Ultra-lightweight wireless gaming mouse with a 25K DPI sensor.",
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
    },
  ],
  Keyboards: [
    {
      id: 2,
      name: "Mechanical Keyboard (Cherry MX Red)",
      price: 149.5,
      description: "Tenkeyless mechanical keyboard with customizable RGB.",
      image:
        "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80",
    },
  ],
  Headsets: [
    {
      id: 3,
      name: "Noise-Cancelling Headset",
      price: 199.0,
      description: "Premium over-ear headset with a detachable boom mic.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    },
  ],
  Monitors: [
    {
      id: 4,
      name: "4K IPS Gaming Monitor",
      price: 349.0,
      description: "27-inch 144Hz 4K monitor for ultra-smooth gameplay.",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
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
