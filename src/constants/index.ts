export const data = [
  {
    "id": "prod_01j1a2b3c4",
    "title": "Minimalist Leather Backpack",
    "descritpion": "Water-resistant commuter backpack with a padded 15-inch laptop sleeve and hidden anti-theft pockets.",
    "price": 89.99,
    "quantity": 45,
    "images": [
      "https://unsplash.com",
      "https://unsplash.com"
    ]
  },
  {
    "id": "prod_02k5e6f7g8",
    "title": "Wireless Noise-Canceling Headphones",
    "descritpion": "Over-ear Bluetooth headphones featuring hybrid active noise cancellation and up to 40 hours of battery life.",
    "price": 149.50,
    "quantity": 120,
    "images": [
      "https://unsplash.com",
      "https://unsplash.com"
    ]
  },
  {
    "id": "prod_03m9h0i1j2",
    "title": "Ergonomic Mechanical Keyboard",
    "descritpion": "Hot-swappable tactile switches with RGB backlighting and a detachable braided USB-C cable.",
    "price": 119.00,
    "quantity": 0,
    "images": [
      "https://unsplash.com",
      "https://unsplash.com"
    ]
  },
  {
    "id": "prod_04n3k4l5m6",
    "title": "Stainless Steel Smart Water Bottle",
    "descritpion": "Vacuum-insulated bottle that tracks your daily hydration goals and syncs data to your mobile app.",
    "price": 34.95,
    "quantity": 210,
    "images": [
      "https://unsplash.com"
    ]
  },
  {
    "id": "prod_05p7n8o9p0",
    "title": "4K Ultra-Wide Desktop Monitor",
    "descritpion": "34-inch curved display with a 144Hz refresh rate, HDR10 support, and dual HDMI ports.",
    "price": 429.99,
    "quantity": 15,
    "images": [
      "https://unsplash.com",
      "https://unsplash.com"
    ]
  }
]

export interface Item { id: string, price: number, quantity: number, title: string, descritpion: string, images: string[] }
