const Product = require('../models/Product')
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/masksrus', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

Product.collection.drop();

products = [
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Disposable 3-Layer Protective Earloop Face Masks (8-pcs)",
      "originalPrice": "13.50",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71kh8TyqtVL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Mascarillas 3 capas. 10 Pcs paquet",
      "originalPrice": "10.00",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61A2B3r3n7L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Face Cover Disposable Mouth Cover (100PCS)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.6 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51+rWir1kGL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Hotodeal Disposable Face Mask Protective Mask 3 Ply Dust Anti droplets Mask HO008 50pack",
      "originalPrice": "39.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61-mWIJl74L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Mascarilla desechables Mascarillas 20 piezas Antipolvo Máscaras transpirables de 3 capas Máscaras de polipropileno",
      "originalPrice": "16.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61AYPu4WLYL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "SKYLMW 60 PCS 3 Layer Cover, Breathable Face Covers",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51D-SZWkF7L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "8 pcs Face Mask, Anti Particle Dust-Proof Anti-Pollution Face Mask with Breathing Valve, Skin-Friendly Unisex Face Masks, Reusable and Washable Masks for Outdoor Activities (Black)",
      "originalPrice": "14.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61CklruPMAL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "50Pcs Disposable 3-PLY Non-woven Earloop Face Respirator for Children and Adults-Blue",
      "originalPrice": "28.40",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61ejF-OPqgL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "VCAN unisex-adult 50 Pcs Disposable Earloop (Blue), one size",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.8 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71WjMXFIUoL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "FASHIONOLIC 4 Pack Fashion Protective Face Mask, Unisex Anti Dust 100% Cotton Mouth Mask, Washable, Reusable",
      "originalPrice": "18.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.1 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61s061xCF2L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "The Mask1994",
      "originalPrice": "3.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.7 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/91lNtUFj09L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "BRINCH Comfortable Cover,40pcs",
      "originalPrice": "35.98",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71GoWfhImXL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "wolf 3D Anti-dust Anti-vehicle exhaust Personalized pattern printing Unisex Respirators",
      "originalPrice": "11.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61Qhdaqu7fL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "SAMEFAR Unisex Seamless Rave Bandana Neck Gaiter Tube Headwear Bandana, Motorcycle Face Bandana for Women Men Face Scarf",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.8 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/81Tzlq02VkL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "20 Pcs PM2.5 Activated Carbon Filter with 2Pcs Face Mask, Anti Particle Dust-Proof Anti-Pollution for Breathing Insert Protective Mask, Washable Cotton Face Mask for Adult Outdoor Activities(Black)",
      "originalPrice": "18.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/612Y8z+2v9L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Disposible 3-Layer Protective Earloop Face Masks (20-pcs)",
      "originalPrice": "23.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71kh8TyqtVL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "50 Pcs Disposable Medical Face 𝐌𝐀𝐒𝐊 - Anti-Dust Filter, Breathable,Protection and Personal Health Professional, 3 Layers of Purifying, Cotton",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71UiUki6cuL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "50Pcs Disposable Filter Mask 3 Ply Earloop Face Masks",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.6 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61M4dTyfhHL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "50 Pcs Disposable Face Cover 3 Layers (US Stock)",
      "originalPrice": "49.90",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.7 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71fmOc7HtBL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Mascarillas Médicas Caseras: Cómo hacer una mascarilla reusable, lavable, reversible y de varios talles, sin coser, para protegerte de los contagios (Spanish Edition)",
      "originalPrice": "0.00",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/71T6-jPoQhL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "50PCS Disposable Mouth Cover，3-Ply Face Mouth Cover",
      "originalPrice": "45.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/41A11NmDZmL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Disposable Face Mask, 3-Ply Facial Cover Masks with Ear Loop, Breathable Non-Woven Mouth Cover for Personal, Suitable for Home, Office, Outdoor- 50 PCS",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71NoYoIx59L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Pack x 3 Units Environment Protective washable neoprene reusable face mask, unisex soft and comfortable. Protects mouth and nose. Anti dust, pollen droplets and much more (Men, Black)",
      "originalPrice": "6.88",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "1.8 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61v50uYs++L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "TATUBE 50Pcs Mouth, Disposable Face Mask for Unisex Outdoor, Protection Anti Dust Mask",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/6101TEMBE1L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "MQUPIN Black Anti Dust Personal Care Breathing Face Mouth Mascarilla 5PCS",
      "originalPrice": "19.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61s3FiB+oRL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Yoodelife Anti-dust Black Mouth Mask, Unisex Cotton Face Mask Muffle Mask Anime Mask for Cycling Travel Outdoors for Adult Men Women,Style 2, Pack of 3",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.3 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61h2hmTzETL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Mascarillas Médicas Caseras: Guía de Bricolaje Paso a Paso para Hacer Mascarillas Protectoras Reusables y Lavables, Ahorrando Dinero y Defendiéndote de ... e Infecciones (Libro 2) (Spanish Edition)",
      "originalPrice": "0.00",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/81A2xPBIN9L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Mouth Face cover Cotton Dust Reusable and Washable Fashion Cute Adjustable Protection Half Cloth Shields for Pollution,Pollen,Smoke, Running, Personal Health",
      "originalPrice": "12.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.3 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61m3GeuDBbL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "10 Pcs Outdoor Sport Cloth Face Covers, Washable Reusable Protective Face Shield for Running, Breathable Dustproof, for Women Men",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/81bJet8MNqL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "MASKGUARD Reusable Washable Kawaii Anime Mouth Cover - 2pcs for Cosplay & Travel",
      "originalPrice": "11.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51W2vvqo40L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "100 PCS 3-Ply Universal Face mαsks Dustproof Mouth Protector Prevent Sneeze Droplets (100, Blue)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/71FzireF7HL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "kungfuren 3 Sets Sports Facial Masks with Activated Carbon Filter, Cycling Mask with 6 Breathing Valve and 12 Soft Foam Padding for Walking Running Cycling",
      "originalPrice": "31.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/81Y-4zmmWVL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "DTBG 3 Layer Face Mouth Covers (Options: 20 Pieces / 40 Pieces / 60 Pieces / 100 Pieces)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/81IaaEW9kDL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Disposable Face Mouth Cover (100 Packs)",
      "originalPrice": "69.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61qZZKdrP2L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Dylan excellent 50PCS Disposable Face Masks, 3-Layer, Anti Dust Breathable Comfortable Sanitary Personal Health Protection",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.2 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71-vLkHEP-L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Breathing Safety Masks Set for Protection from Dust, Pollen, Pet Dander - Pack of 5",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61jXUF98Y1L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Adjustable Anti-Fog Full Face Shield with 10 Replaceable Plastic Protective Film Blue",
      "originalPrice": "15.85",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51zlGNb-uwL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "CosTribe Steampunk Mask Long Nose Bird Beak Props for Halloween Costume (Style-3)",
      "originalPrice": "15.78",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61eoHoBW-kL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "NP 3 pcs Cotton Face Cover with 6 pcs Actived Carbon Filter, Washable & Reusable Face Shield with Adjustable Earband, for Men",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/81X-h9GvRsL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Mascarilla desechables Mascarillas 10 piezas Antipolvo Máscaras transpirables de 3 capas con gancho para la oreja Cómodo y grueso Máscaras de polipropileno azul (5 piezas)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61uRiYPnz6L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "10 Pcs PM2.5 Activated Carbon Filter with 2Pcs Civil Face Mask Breathing Insert Protective Washable Cotton Face Mask for Adult Outdoor Activities",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61BgT+zzY7L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "SANGQU Máscaras reutilizables lavables Mascarilla antipolución del aire para Ciclismo Camping Viajes Vida cotidiana(10pcs)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/41MXZE4pxdL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "6pcs Bandana Face Mask Neck Gaiter Headwear Sports Scarf Headband For Women And Men",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71pTaEsZUSL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "queenneeup Kpop Fashion Mask Exo Mask Bigbang Mask Beast Mask Kpop Mask",
      "originalPrice": "7.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51mjh9kXqlL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "evelove Unisex Anti-smog Activated Carbon Cycling Sunscreen Safety Face Shields",
      "originalPrice": "4.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/41BnsTwhz2L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Disposable Face Masks - 50 PCS - For Home & Office - 3-Ply Breathable & Comfortable Filter Safety Mask",
      "originalPrice": "21.4959.90",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.7 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51NnR-szBFL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "AFGQIANG Máscara de Gas de limpieza reutilizable Proteja la Boca Respiración Antipolvo Mascarilla antipolución con 15 filtros de carbono Extra 2 válvulas para soldar",
      "originalPrice": "17.55",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61q6zx2Ab1L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Mascarillas naturales para una belleza radiante (Spanish Edition)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/91dCawGhy3L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Need help?",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "HONGYAO Reusable Dust Face Mask Earloop Dust Masks with Activated Carbon Filter and Valves for Allergy, Woodworking, Mowing, Outdoor Activities, Etc（Black）",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.3 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71l18ytWgEL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "AFGQIANG Máscara de Gas de limpieza reutilizable Proteja la Boca Respiración Antipolvo Mascarilla antipolución con 15 filtros de carbono Extra 2 válvulas para soldar",
      "originalPrice": "17.55",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61q6zx2Ab1L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Dust mask with Filter,Sports Face Mask, 4 Filters and 2 Valves Included,Men's and Women's Universal Masks,Suitable for Woodworking, Outdoor Activities.",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71v7VYn8acL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Riding Protective Anti Dust Ride Haze Pollution Respirator Washable Reuse",
      "originalPrice": "3.94",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61JRCbuH7IL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "NEWMARK Disposable Face Mask for Air Pollution,Dustproof Mouth Cover, Men Women Adult Child 3-ply Safety Mask for Work and Home (50)",
      "originalPrice": "39.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.1 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71bBPcNn8JL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Safety Face Shield 2 Pack, All-Round Protection Cap with Clear Wide Visor Spitting Anti-Fog Lens, Lightweight Transparent Shield with Adjustable Elastic Band for Men Women",
      "originalPrice": "1.6713.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.4 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61-cno5ItgL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "60pcs Face Mouth Cover Unisex,Blue",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71K+xKiSRkL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "AFGQIANG Máscaras reutilizables lavables 95% Mascarilla antipolución del aire con respirador y 2 filtros para Ciclismo Camping Viajes Vida cotidiana (Black)",
      "originalPrice": "10.9919.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/51w3Kh4JZYL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "CoolBELL Mouth Cover (10PCS, 20PCS, 40PCS, 60PCS)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.4 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/81ype77vscL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Mask1985",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.7 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/81sQTsQFIsL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "UTOTEBAG 20 Pack, 40 Pack, 60 Pack, 100 Pack 3 Layer Protective Covers",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/715A6WpvZ4L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "KISSBUTY 3 Pack Unisex Mouth Mask Anti Dust Face Mouth Mask, Black Cotton Face Mask for Cycling Camping Travel (3)",
      "originalPrice": "17.94",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61AiQk+qvgL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Cute Kitten Face Anti-dust Masks Washable Reusable Masks Balaclava Mask1",
      "originalPrice": "8.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "1.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61xN2IlogGL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Dust mask with Filter,Sports Face Mask, 6 Filters and 2 Valves Included,Men's and Women's Universal Masks,Suitable for Woodworking, Outdoor Activities",
      "originalPrice": "20.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71wwQkcSo4L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Cotton Mask, 3 pcs Washable Reusable Cloth Mask Unisex Dustproof Anti-pollen Pet Dander, Droplet Pollution",
      "originalPrice": "16.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61lWHEzFhgL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "PM2.5 Activated Carbon Filter - 5 Layers Replaceable Anti Haze Filter PM2.5 Replaceable Filters (50PCS)",
      "originalPrice": "13.2831.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.9 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/612pnfib+aL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Julvie 6 pcs Cotton Mask, Washable Reusable Cloth Mask Unisex Dustproof Anti-pollen Pet Dander, Droplet Pollution (3 color)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "1.9 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51Dm3mNo+SL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "LuxSweet Image Custom Face Mouth Mask Fashion Anti Dust Pollution Mask Unisex for Men Women",
      "originalPrice": "10.9913.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/614oo2LcGvL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "100PCS Anti Pollution Face Cover Mouth Filter Air Breathing Filter Accessories - Face Cover Valves Breathing Activated Carbon Dustproof Windproof Foggy Haze Cover Filter",
      "originalPrice": "39.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61LpZP1hOhL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "SKYLMW 20 Pcs 40 Pcs 60 Pcs, 3 Layer Covers-5",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "1.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71JLvzVUrLL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "YAO STARS 9pcs Magic Scarf Outdoor Headwear Bandana Sports Tube UV Face Mask for Workout Yoga Running Hiking Riding",
      "originalPrice": "22.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.7 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/91ONVGwnzzL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "100 Pieces Anti Dust PM 2.5 Mask Activated Carbon Filter 5 Layers Replaceable Anti Haze Filters for Mouth Respirator",
      "originalPrice": "37.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.7 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71K6ewn44kL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "MASKGUARD Reusable Kawaii Anime Face Mask - Washable Mouth Cover for Anti Dust, Great for Outdoors, Sun Protection, Riding, Cosplay, Airplanes, Travel",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/617I8NtDbqL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Simliber 3 Pack Unisex Fashion Mouth Mask Washable Reusable Cloth Masks Anti Dust Warm Ski Cycling Safety Face Mouth Mask,Black Cotton Face Mask for Cycling Camping Travel",
      "originalPrice": "17.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.1 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61uFABWjK1L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Outdoor Anti-dust Mask, PM 2.5 Windproof Cycling Facemask Washable Face Cover for Outdoor, Sports, Motorcycles (Black-Type 2)",
      "originalPrice": "9.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/6171DEkCI5L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Titan Protect – Disposable 3-Layered Protective Ear Loop Face-Masks – Adjustable, Comfortable, and Offers Protection – FULL CASE of 2,500 Masks (Light Blue)",
      "originalPrice": "1,825.00",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/81OLlttrAZL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Jaromepower DIY Art Living Room Bedroom Wall Decorations,Family Home Kitchen Office Wall Sticker Quotes,Inspirational Text Decor Vinyl Peel and Stick Bible Wall Decals (A, 50PC)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "1.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71ZlQmBFfML._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "2+20",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/71Dd6iOzaWL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Kaneki Ken Mouth Mask Anime Halloween Cosplay Props Cycling Face Masks Accessories Cotton",
      "originalPrice": "12.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.9 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51p8r6r62RL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Youmymine White 109-Yards Length 1/8\" Width Braided Elastic Cord/Elastic Band/Elastic Rope/Bungee/White Heavy Stretch Knit Elastic Spool (White, A)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61Vyd+cDM-L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Pioneeryao Sport Dust Mask Cycling Running Outdoor Face Mask Starter Training Mask Dustproof Carbon Filtration Workout Running Motorcycle Cycling Mask",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.8 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71hROXHKqnL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Mascarillas Caseras: Como hacer Mascarillas para el Rostro de Forma Natural con Ingredientes Sencillos que tienes en Casa (Spanish Edition)",
      "originalPrice": "9.9929.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/81YnhHkMq4L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "50 PCS PM2.5MASK Activated Carbon Filter, 5 Layers Replaceable Anti Haze Filters, Protective Mouth Filter for Outdoor",
      "originalPrice": "26.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/719ZSNkbiEL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "BONFASH 50Pcs Face Cover Ear Loops Disposable Non-Woven Daily Care Respirators Dust Safety Wear Blue",
      "originalPrice": "25.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.8 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61iIKI18UZL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "noop 10 Pcs Outdoor Sport Cloth Face Covers, Washable Reusable Protective Face Cover for Running, Breathable Dustproof, for Women Men",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/813+icfN5EL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "50Pcs PM2.5 Filter for Adult Mask Filters Activated Carbon Insert Protective Mouth Mask Filter",
      "originalPrice": "29.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61wrYzgnUvL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Disposable Face Masks (Pack of 10ct)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.1 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/41Lu2ol+pSL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Los Angeles Apparel 3 Pack Fashion Black Mask [Same Day Shipping] [Made in USA]",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.6 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61uWF+ZgxfL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Luwsldirr 10Pcs Non Woven Disposable Face Mouth s Anti-Dust Surgical Earloops",
      "originalPrice": "3.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61W5Bto403L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "3 Pack Unisex Mouth Mask Adjustable Anti Dust Face Mask,Black Cotton Mouth Mask Muffle Mask for Cycling Camping Travel,100% Cotton Washable Reusable Cloth Masks",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.4 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/617UcwpXb1L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "DTBG Disposable Face Covers 3 Layer Clear Facial Cover,10 Pieces",
      "originalPrice": "9.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.1 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71huvWvvxEL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Mascarilla desechables Mascarillas 10 piezas Antipolvo Máscaras transpirables de 3 capas Máscaras de polipropileno",
      "originalPrice": "12.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61SAMjcmCLL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Outdoor Anti-dust Mask, PM 2.5 Windproof Cycling Facemask Washable Face Cover for Outdoor, Sports, Motorcycles (Gray)",
      "originalPrice": "9.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "1.8 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71haUZnQl8L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Anewoneson 2020 Reusable Dustproof,Dust PM2.5 Windproof Foggy Haze Pollution Respirato Washable, Reusable Pink",
      "originalPrice": "9.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/41M9R2m2BAL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Reusable Filter Outdoor Masks with Respirator Valve Washable Dustmask Camouflage Outdoor Sports Masks Unisex Adult Breathable Face Masks for Pollen Allergy, Woodworking, Running, Cycling (1, Wind red)",
      "originalPrice": "8.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "1.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51ALjtLX0xL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "(50 Pieces) Dust Protection, Disposable Face No Breathing Valve, FDA certific, Thick 3Ply",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61M3191jOFL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Bluelans Protective Visor Face Shield Clear Visor Transparent Face Shield Anti Splash Full Face Cover Mask with Detachable Safe Google Eye Glasses for Workshop Cooking Cleaning Clear",
      "originalPrice": "18.73",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61feIk-wKGL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "3 Ply Disposable Balaclavas with Elastic Ear Loops - Balaclavas 50 PCS - Soft & Comfortable Filter Safety Mask for Dust Protection - Protective Blue",
      "originalPrice": "22.98",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "1.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71GKvKqRagL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Need help?",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Mascarilla efecto rápido antiarrugas, tratamiento natural rejuvenecedor2016",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/81N6vtaWVLL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "3 Ply Disposable Balaclavas with Elastic Ear Loops - Balaclavas 50 PCS - Soft & Comfortable Filter Safety Mask for Dust Protection - Protective Blue",
      "originalPrice": "22.98",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "1.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71GKvKqRagL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "KISSBUTY 1 Pack Mouth Mask Teens Women Anti Dust Face Mask Cotton Mouth Mask, Black 3 Layers Cotton Face Mask for Cycling Camping Travel, Women or Teens 12 to 16 Years (1)",
      "originalPrice": "10.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.2 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71pHMBOMyIL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "SAS Safety 6940 Moon suit Nylon-Cotton Coverall, Triple-Extra Large",
      "originalPrice": "27.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.6 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/515OVF+jj8L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Karooch Dust Mạsks - Anti Air Pollution Smoke Mạsks - Reusable Face Mạsks, Adjustable PM2.5 Air Filter Mạsks, Activated Carbon Dustproof Sport Mạsks for Outdoor Light Bicycle Helmet(Black)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61CDmvU6C2L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "MASCARILLA PROTECTORA CASERA: Cómo Protegerse de los Virus y las Bacterias usando simple Mascarilla Hecha en Casa. Cómo Hacer un Desinfectante Casero para ... más Saludable y Seguro (Spanish Edition)",
      "originalPrice": "3.97",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/81bQlq73fsL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "nobrand Disposable Oral Protective Cover, 5 Layers of Anti-Pollution Protection Respiratory Tract, Activated Carbon Filter Element",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/41oMC75cagL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Lossky Anti-Virus UV Mask Sanitizer Cell Phone Sterilizer Disinfector with USB Charging for iOS Android Mobile Phone Toothbrush Jewelry Watches DisinfectionAnti-Virus UV Mask Sanitizer",
      "originalPrice": "28.82",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/51+NhywTW7L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "NASUM Replaceable Carbon Filters Protective Mouth, Filter Accessories, for M101, M201, M301, M401 Face Cover",
      "originalPrice": "22.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.7 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61MhviJWWHL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Janwalker 2 Pack Kids Scarf Balaclava Multifunctional Neck Gaiter Headwear Headbands Bandana, Non-Slip Breathable Face Cover for Sun UV, Cycling, Outdoors",
      "originalPrice": "14.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/818FOV4yauL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "【New Arrival】50Pcs PM2.5 Activated Carbon Filter, placed in a protective cover mask (5 Layers)",
      "originalPrice": "19.88",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.3 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71BreKjkG4L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "100Pcs Disposable Non-Woven Mǎsk Pad - Breathable Respirator Filter Disposable Face Ma-sk Filter Pad Safety Protection Māsks Gasket for Outdoor Travel Cycling (Color : White)",
      "originalPrice": "46.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/51PnJ0JqQWL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "XIQI Disposable 3-Layer Breathable Face Cover",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/81JY1872W9L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "50 PCS Mascarilla quirúrgica Mascarilla desechable Filtro de 3 capas transpirable (Almacén de EE. UU, 4-8 días hábiles + envío Gratis",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61yh5YcGj6L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Anewoneson 2020 Reusable Dustproof,Dust PM2.5 Windproof Foggy Haze Pollution Respirato Washable, Reusable Red",
      "originalPrice": "9.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/41gNk7qv7nL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "MASCARILLA CAPILAR KABA",
      "originalPrice": "45.00",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/31gfssKE1oL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Youmymine White 109-Yards Length 1/8\" Width Braided Elastic Cord/Elastic Band/Elastic Rope/Bungee/White Heavy Stretch Knit Elastic Spool (White, A)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61Vyd+cDM-L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Vankcp 6Pcs Luminous Cosplay Mouth Mask Individuality Unisex for Halloween Party, Masquerade Ball",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61iQVax7ThL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Meltblown Cloth, Original Cloth Material, Nonwoven Filter Fabric Filtering Layer Application, Meltblown Roll Making the Efficiency Filters (10M)",
      "originalPrice": "14.9836.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.9 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61b18WaHfhL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Meltblown Cloth, Original Màsk Cloth Material Filter Fabric Meltblown Roll Nonwoven Fabric Cloth Material for air wrap 1 Micron Making The Efficiency Filters of Måsk (1 pcs, White)",
      "originalPrice": "13.78",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "1.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51q071TAVHL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "UNIME 3 Pack Cotton Mouth Mask Anti Dust Mouth Mask,Unisex White Face Mask Reusable Fashion Mask Anime Face Mask Washable Mask Reusable Mask for Cycling Camping Travel for Adults Men Women",
      "originalPrice": "19.98",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/618SlcaJGzL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Thermal Neck Warmer/Neck Gaiter Face Scarf/Face Cover Winter Ski Mask - Cold Weather Balaclava",
      "originalPrice": "15.60",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.4 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71Vxy-t7rSL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "W&HH Gas Mask Half Face Covered for Barrier Protection Against Fine Airborne Dust, Fumes and Pollutants",
      "originalPrice": "49.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61xPli8UzWL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Reusable Half Face Cover, NASUM M201 Face Cover, Paint Face Cover for Painting, Machine Polishing, Welding and Other Work Protection",
      "originalPrice": "39.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.4 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61TQ0EaJSxL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "CJ Unisex Anti-Dust Cycling Covers，Activated Carbon Filter Sport Shields，Reusable Sports Covers for Outdoor Activities",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/81h8wvlBwaL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Ebanel Korean Collagen Facial Face Mask Sheet, 15 Pack, Instant Brightening and Hydrating, Deep Moisturizing with Hyaluronic Acid Face Masks, Anti-Aging Anti-Wrinkle with Stem Cell Extracts, Peptide",
      "originalPrice": "15.95",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.3 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61uBGUTrlIL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "20PC Activated Car-Bon Fil-TER, Disposable 5 Multiple Layers Fabric Inserts Pads for Face Mouth",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.1 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61Q8+Gp2aOL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "1Set Half Face Gas Masks with Goggles Filter Breathing Respirators for Painting Spray Welding Industrial Accessories",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61rB9YGVpvL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "STARFO Reusable Safety Face Shield, 10Pcs Transparent Protective Sheild,Anti-Saliva Windproof Dustproof Full Face Cover Hat for Men and Women …",
      "originalPrice": "33.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.2 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61iYcdTiaxL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Black Facial Shield Protective Face Covers Breathable Washable Reusable Black Mouth Cover for Outdoors Cycling Travel (5)",
      "originalPrice": "11.98",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61Rnz4BWpYL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Non-woven 3-Layer DIY Electrostatic Meltblown Fabric, Polypropylene Water-Blocking SMS Skin-Friendly 95% Filter Fine Particles with Nose Bridge and Ear Strap",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/519cwmpcmjL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Rasta Imposta Breaking Bad Costume Hazmat Suit",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.3 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71I6fkRz7HL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "50/100 Purple Disposable Latex Gloves, Dishwashers/Kitchen/Work/Rubber/Garden Gloves, Ambidextrous for Cleaning, Sanitary or Mechanic Tasks (Color : 50pcs, Tamaño : L)",
      "originalPrice": "38.66",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/4186y2VK4UL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "YOACHEY 50pcs Disposable Face Cover - 3 Layer Protective Filter and Remove Pollens, Catkins, Bacterial Particles from Nasal Cavity or Mouth",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/614vvNUnogL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "HOMEMADE MEDICAL FACE MASK FOR BEGINNERS: Step By Step Guide on How to Make Your Surgical Face Mask At Home, Tips to Wear Face Mask and Prevent Viral Diseases and Infections",
      "originalPrice": "0.00",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.4 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/81UA0L+EghL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Plastic Mask Full Face 5 Pack Face Mask for Man and Women Protect Eyes and Face Shield Windproof Dustproof Anti-Fog Protective Cap Mask (5pcs)",
      "originalPrice": "16.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "1.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51KhaozRs3L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "4pcs",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/3174NkcdcQL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "XMWEALTHY Anti-Spitting Full Protective Hats Anti-Saliva Kids Safety Outdoor Face Shield Mask Hats Toddlers Waterproof Windproof Dustproof Fisherman Hats for Baby Boys Girls(YELLOW-19.6\"/1-3 Y)",
      "originalPrice": "10.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61qpEHYNA2L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Multifunctional Snood Neck Warmer for Men. Scarf Hat Hood Balaclava with Fleece Section",
      "originalPrice": "8.00",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.7 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61ShOufCIKL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "iHeartRaves Seamless Face Mask Mouth Cover Bandanas for Dust, Outdoors, Festivals, Sports",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.8 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71qeZOhrL8L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "noop Outdoor Sports Face Covers, Washable, Reusable, Protective Face Shield for Running, Breathable Dustproof, for Women Men",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/81lonUCpA8L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Bucket Hat Full-face Fisherman Cap with Removable Clear Plastic, Windproof Dust-Proof Unisex Black Sun Hat",
      "originalPrice": "19.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61OWmYn-JrL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "MASCARILLAS: Datos Basicos a Conocer (Spanish Edition)",
      "originalPrice": "0.00",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/71Sc74DNZ3L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "2Pcs Disposable Face Mouth Cover Storage Box, Portable Rectangle Dust-proof Mouth Face Cover Storage Container Plastic Seal Box Case",
      "originalPrice": "11.9922.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/41pTxMFjo0L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "R-EAL Madrid Face Mask for Dust Outdoors Festivals Sports Riding On Foot",
      "originalPrice": "13.69",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61RIG5qsvgL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "SKYLMW 3-Ply Disposable Protection Cover",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51D-SZWkF7L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Secrets of Archeology2014",
      "originalPrice": "0.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.1 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71m-5KFwa1L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "80 PCS Adult PM2.5 Activated Carbon Filter 5 Layers Replaceable Anti Haze Filter Paper",
      "originalPrice": "25.9844.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.6 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/716b-XRKZmL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Non-woven Disposable Cloth Waterproof Fabric, 95% Polypropylene Fiber Cloth, High Static Dustproof Melt-Blown Cloth, DIY Four-Layer Material",
      "originalPrice": "64.80",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61V5BU7m-WL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Radish Stars Anti Dust PM 2.5 Activated Carbon Filter Insert Cotton Face Masks Replaceable Face Mouth Cover Masks",
      "originalPrice": "11.77",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.3 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61XyHy0ucRL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Kaptin 5 Pack Black Teeth Pattern Mouth Mask, Unisex Cotton Blend Anti Dust Face Mask for Men Women Kids Teens (5Pcs, Ordinary Mouth Mask)",
      "originalPrice": "15.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.4 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61DydQ73pPL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Mascarilla De Barro Arcilla Para El Acne Facial - Elimina El Acne, Granos, Espinillas Y Cicatrices Del Acne",
      "originalPrice": "24.95",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.9 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51vtM-Fc0ML._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "DLLL Motorcycle Outdoor Riding Mask PM2.5 Anti-Dust Respirator Mouth Face Mask for Cyclist Cycle Bike Runningf Cycling",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "1.7 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/615UjiSUAgL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "iHeartRaves Seamless Face Mask Mouth Cover Bandanas for Dust, Outdoors, Festivals, Sports",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.8 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71qeZOhrL8L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Honeywell 80836A North by Peel-Away Window for North 7",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.2 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/31Rm72OnnCL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Saving Sight: An Eye Surgeon's Look at Life Behind the Mask and the Heroes Who Changed the Way We See",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61DOh1-DWFL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Junejour 8PCS Cotton Fabric Set 19.7x19.7 Inches Prints Flower Cloth Quilting Patchwork for Manual DIY Sewing Crafts with Nose Bridge Strip Elastic Band (Style2)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/71BozYLVI8L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "MASCARILLA color rubio 300 ml",
      "originalPrice": "9.89",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.6 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61ELEWskbfL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Cyzone Skin First Set, Gel Facial Cleanser, Gel Facial Moisturizer and Clay Facial Mask - Refresh, Moisturize and Purify Your Face!",
      "originalPrice": "29.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61ZO1Ht3LcL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "100Pcs Disposable Non-Woven Mǎsk Pad - Breathable Respirator Filter Disposable Face Ma-sk Filter Pad Safety Protection Māsks Gasket for Outdoor Travel Cycling (Color : White)",
      "originalPrice": "46.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/51PnJ0JqQWL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Secrets of Archeology2014",
      "originalPrice": "0.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.1 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71m-5KFwa1L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Mouth Masks for Dust Protection Anti Face Mask Washable Earloop Mask Peace Dove",
      "originalPrice": "12.9916.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "1.4 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61UQlZlrLiL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "6 Pieces Summer UV Protection Face Clothing Neck Gaiter Scarf Sunscreen Breathable Bandana (Black, White, Royal Blue)",
      "originalPrice": "17.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.4 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71P8bNlFMEL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "SUNICOL Protective Hat Cover with Face Shield Outdoor Safety Anti-Saliva Anti Spitting, Full Face Isolution Fishing Hat Cap for Women Men Children",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61Uiw2lct1L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "20PC Activated Car-Bon Fil-TER, Disposable 5 Multiple Layers Fabric Inserts Pads for Face Mouth",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.1 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61Q8+Gp2aOL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Kaba Hair Bio-Mask + Detangling Comb | Bio Mascarilla Capilar (16.9oz-500ml) + Peinilla Desenredante",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/51ea261rlAL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "PLJ Unisex Anti-Dust Cycling Covers，Activated Carbon Filter Sport Shields，Reusable Sports Covers for Outdoor Activities",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/81WeBapPQEL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Seytu Deep Repair Hair Mask (Omnilife)",
      "originalPrice": "23.71",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.1 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51cG5a8UERL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Electrostatic melt-Blown Fabric,3 Layers of Fabric can be DIY Finished Product ×30 with Nose Bridge Strip and Ear Band,Elasticity Knit Elastic Band for DIY Sewing Crafts",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61HDg6Kng6L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Transparent Adjustable Cover, Anti-Saliva Anti Spitting Droplet Anti Fog Dust-Proof Cover Face Mask Visor Shield Protection Hat",
      "originalPrice": "9.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/6122UqmWmdL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "120 Yard Elastic Band Braid Rope Spool Elastic String for Sewing Craft DIY Mask (1/8inch, White)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61aSd6y8FhL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "sanrense 4 PCS Safety Face Shield/Protective Isolation Full Mask, Anti-Fog Dust Lens Visor Cap Reusable Windproof Hat, Lightweight Sponge Transparent Adjustable Elastic Band For Men Women(Blue)",
      "originalPrice": "8.50",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61VEA4bPMKL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "100 Mascarillas elaboradas con Alimentos (Spanish Edition)",
      "originalPrice": "0.00",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/81VLnGdFAYL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Personalized Skull Face Covering Bandanas for Men Women Neck Gaiter Balaclavas Headwear for Dust Sun Wind, Magic Scarf",
      "originalPrice": "14.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/613G5c9w2LL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "2Pcs Disposable Face Mouth Cover Storage Box, Portable Rectangle Dust-proof Mouth Face Cover Storage Container Plastic Seal Box Case",
      "originalPrice": "11.9922.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/41pTxMFjo0L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Reusable Face Shield 10PCS - Plastic Face Shield Anti-Saliva Windproof Dustproof Safety Face Shield Full Face Shield",
      "originalPrice": "33.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/41dFLlj1CpL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Reusable Half Face Cover, NASUM M201 Face Cover, Paint Face Cover for Painting, Machine Polishing, Welding and Other Work Protection",
      "originalPrice": "39.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.4 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61TQ0EaJSxL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Martiderm Mask DSP Depigmenting Mask Night Mascarilla Despigmentante 30Ml",
      "originalPrice": "62.62",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51kjs8QHslL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "UNIME 3 Pack Cotton Mouth Mask Anti Dust Mouth Mask,Unisex White Face Mask Reusable Fashion Mask Anime Face Mask Washable Mask Reusable Mask for Cycling Camping Travel for Adults Men Women",
      "originalPrice": "19.98",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/618SlcaJGzL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "USHAKE Heavy Fleece Unisex Balaclavas, Ski Face Mask, Winter Neck Warmer Protective Headgear",
      "originalPrice": "18.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.7 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71SEaaBXt0L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "2 Pack Genové Pilopeptan Woman Regenerative Hair Mask 200ml - Repairs, Nourishes and Softens Hair - Hair Loss Treatment - Spain",
      "originalPrice": "49.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51xF2MX0ueL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "50 Pcs Activated Carbon Filters, Meltblown Cloth Non-Woven Cloth with 5 Layers Filters for Women Mens Kids - Breathable, Free Cotton,Anti Dust Pollution-Fast Shipping",
      "originalPrice": "48.89",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71m6d44YWbL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "5 Packs Reusable Safety Face Shield with Eye & Head Protection,Transparent Full Face Mask Protective Visor, Anti-Spitting Splash Facial Cover for Women Men (5)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.4 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51wJa3DUJTL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "SKYLMW 3-Ply Disposable Protection Anti-Dust Face Cover",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.6 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71JLvzVUrLL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Oldelf Tactical Heavyweight Balaclava Outdoor Sports Mask",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.3 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61CohzdwwRL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "SANGQU Unisex Sun Baseball Cap Summer UV Protection Adult Anti-Spitting Protective Sun Hat with Removable Face Cover",
      "originalPrice": "7.22",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/51JsuCij+eL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Outdoor Anti-dust Mask, PM 2.5 Windproof Cycling Facemask Washable Face Cover for Outdoor, Sports, Motorcycles (5PCS, Mix colors)",
      "originalPrice": "10.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.1 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61Qko3Aa4CL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Salerm Wheat Germ Mascarilla Capilar Conditioning Treatment, 33.7 Ounce",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/91yB1pne0lL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "10PCS PM2.5 Mask Filter Cartridge,5 Layers Anti Haze Dust Proof Square Arc Active Carbon Filter for PM2.5 Mask Filter,Adult Size",
      "originalPrice": "6.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.9 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51NHFR81sYL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Startview Face Shields with Flip-up Visor - All-Purpose Face Shield,Clear Face Mask Face Shield Protector & with 10 Replaceable Plastic Protective Film for Lab, Household, Kitchen Personal Use (blue)",
      "originalPrice": "13.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/513DCF0aoPL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "ZYC 7 in 1 Gas Mask Full Face Facepiece Respirator Same for Gas Respirator with Carbon Filters Painting Pesticide，with 6004",
      "originalPrice": "75.49",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61UFrijCZeL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "6 Pieces Winter Balaclava Face Mask Breathable Sun Dust Protection Mask Long Neck Cover for Outdoor Activities (Chic Camouflage Colors)",
      "originalPrice": "23.59",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/81ixnENHuzL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Fabric Meltblown+Nonwoven Filter Fabric Original Cloth Material Cloth Meltblown Filter 3-Layer DIY Application (10M)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/71E9DrD3ycL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "200 Yards Length Braided Elastic Band, Cnebo 1/4 Inch Width White Elastic String Cord Heavy Stretch High Elasticity Rope for Sewing Craft DIY, Mascarilla",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/51e0+KesIRL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Reusable Dustproof M-as-k with Exhalation Valve,Air Purifying M as k, Dust M as k PM2.5 Windproof Foggy Haze Pollution Respirator (Style-03)",
      "originalPrice": "7.95",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.9 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51etiOqNHpL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "QueensFace 3D Cotton Face Mask Mouth Cover 2 Layer Thin Black (6 Pack)",
      "originalPrice": "12.37",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.8 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/715-+FmFjeL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Transparent Adjustable Cover, Anti-Saliva Anti Spitting Droplet Anti Fog Dust-Proof Cover Face Mask Visor Shield Protection Hat",
      "originalPrice": "9.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/6122UqmWmdL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "INTO THE AM Face Mask Mouth Cover Bandanas for Dust, Outdoors, Festivals, Sports",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.9 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61PDCHIS2SL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "La Vogue Kids Boys Girls Cartoon Mouth Mask Children Cotton Breathable 5-Layer Mask Anti-Dust Half Face Mouth Masks Yellow car",
      "originalPrice": "11.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61UaEhncvhL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "50PCS PM2.5 JingXiGuoJi Mask Filter Cartridge, 5 Layers Anti Haze Dust Proof Square Arc Active Carbon Filter for PM2.5 Mask Filter, Adult Size",
      "originalPrice": "45.89",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.6 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/41u8DcjoA7L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "MISAZ 100 Yards Length 6MM Width Braided Elastic Band Heavy Stretch Cord Knit Elastic Ropes for Sewing Craft DIY, Mask, Bedspread, Cuff, Bracelet Necklace String for Jewelry Making Beading Crafting",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/51AeRCgouZL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Carbon sold out",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71SdigXz9PL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Honeywell 80836A North by Peel-Away Window for North 7",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.2 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/31Rm72OnnCL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "MASCARILLA color rubio 300 ml",
      "originalPrice": "9.89",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.6 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61ELEWskbfL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "5-Pack Rush Deer Face Shield,Adjustable Anti-Fog Dental Full Face Shield with Protective Clear Film Elastic Band and Comfort Sponge",
      "originalPrice": "19.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.4 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61OUAbHqgML._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "120 Yard Elastic Band Braid Rope Spool Elastic String for Sewing Craft DIY Mask (1/8inch, White)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61aSd6y8FhL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Rael Bamboo Face Sheet Mask - (Collagen, 5 Sheets) Youth Island Real Natural Facial Mask With Collagen Essence For Wrinkles and Aging Skin by Rael",
      "originalPrice": "14.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61PomRYatKL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Kleravitex Goat Milk Treatment Mask For Dry Hair / Tratamiento Leche De Cabra Cabello Seco 35oz.",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.2 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/81PNE8zhoUL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Safety Face Shield, 5 Pcs Reusable Adjustable Transparent Full Face Anti-spitting Protective Mask Hat Protect Eyes and Face Anti Drool Splash-Proof Facial Cover Men Women",
      "originalPrice": "13.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.3 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61No-snK+ZL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "POTENCO Face Shield,Protection Mask Hat Dustproof Sand Saliva Splash Protective Safety Full Face Anti-Spitting Splash Fisherman Fishing Hat Effectively Isolates Saliva Reusable Adjustable for Outdoor",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51ovMAhPD+L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Gasket PM2.5 5 Layer Protective Activated Carbon Filter 200 Pcs (Adult 12.5 * 8)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61hNiMxGDfL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Mascarilla De Barro Arcilla Para El Acne Facial - Elimina El Acne, Granos, Espinillas Y Cicatrices Del Acne",
      "originalPrice": "24.95",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.9 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51vtM-Fc0ML._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "White Elastic Cord Earloop for face mask - Elastic Loop Ear Rope Stretch Flat String Craft Project Bracelet String Trim for Crafting,Hanging, Mask Making 10m (10.93 Yard)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.3 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61sjWgkt1uL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "2 Pack Genové Pilopeptan Woman Regenerative Hair Mask 200ml - Repairs, Nourishes and Softens Hair - Hair Loss Treatment - Spain",
      "originalPrice": "49.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51xF2MX0ueL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "MASCARILLAS CASERAS PARA HOMBRES: ¡Recetas Naturales y efectivas para hacer en casa! (Spanish Edition)",
      "originalPrice": "0.00",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/81Mo3yikNNL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "100 PCS Face Cover Mouth Cover Disposable - Anti Dust - Breathable three Layer - Blue",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61IVQz4lMnL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Reusable Dustproof M-as-k with Exhalation Valve,Air Purifying M as k, Dust M as k PM2.5 Windproof Foggy Haze Pollution Respirator (Style-03)",
      "originalPrice": "7.95",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.9 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51etiOqNHpL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "10PCS Disposable Face Masks, 3-Ply Earloop Mouth Mask for Dust and Personal Health, Respirator Masks Thicker Breathable and Comfortable Safety Face Masks for Home Office Use",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.7 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/410N0snQ0QL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Lucoss Hydrating Facial Mask Plant Essence Mask Whitening Anti-Aging Facial Mask (Blueberry, Strawberry, Avocado)",
      "originalPrice": "3.79",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/512zrXhwInL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Fabric Meltblown+Nonwoven Filter Fabric Original Cloth Material Cloth Meltblown Filter 3-Layer DIY Application (10M)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/71E9DrD3ycL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Personal Care Health Protective Face Mask 20pc, with Free Signare Shopping Bag in Floral Design",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/81oLev-DV-L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Startview Face Shields with Flip-up Visor - All-Purpose Face Shield,Clear Face Mask Face Shield Protector & with 10 Replaceable Plastic Protective Film for Lab, Household, Kitchen Personal Use (blue)",
      "originalPrice": "13.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/513DCF0aoPL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Martiderm Mask DSP Depigmenting Mask Night Mascarilla Despigmentante 30Ml",
      "originalPrice": "62.62",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51kjs8QHslL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Balaclava Windproof Ski Mask Motorcycle Neck Breathable Tactical Hood Travelling Outdoor Sports",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.6 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61C8kB8KavL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "SANGQU Unisex Sun Baseball Cap Summer UV Protection Adult Anti-Spitting Protective Sun Hat with Removable Face Cover",
      "originalPrice": "7.22",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/51JsuCij+eL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "1+10 (8 Years Old and up)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61cQQ8BK0EL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Reusable Dustproof M-as-k with Exhalation Valve,Air Purifying M as k, Dust M as k PM2.5 Windproof Foggy Haze Pollution Respirator (Style-05)",
      "originalPrice": "8.95",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.4 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71ehP3QyijL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Julvie Cotton Mask, 5 pcs Washable Reusable Cloth Mask Unisex Dustproof Anti-pollen Pet Dander, Droplet Pollution",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.3 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51iOAXeX6FL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "PONATTENO Kids Full Face Shield Anti-Saliva Cap,Plain Cotton Toddler Baseball Cap with Detachable Visor Anti-Spitting Protective Clear Cover Mask Outdoor Baseball Hat for Boys & Girls (Pink)",
      "originalPrice": "20.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.7 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/613uH+D5iaL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "R-EAL Madrid Face Mask for Dust Outdoors Festivals Sports Riding On Foot",
      "originalPrice": "13.69",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61RIG5qsvgL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Seytu Deep Repair Hair Mask (Omnilife)",
      "originalPrice": "23.71",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.1 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51cG5a8UERL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "50 PCS Earloop Disposable Medial Face Masks For dust protection,Personal Health",
      "originalPrice": "68.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.7 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/414ddqBrt8L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Luwsldirr PM2.5 Children Anti Haze Air Breather Cartoon Mouth Replacement Filter",
      "originalPrice": "4.39",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/51AA-hAll9L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Graoll Face Towel with Earloops Protective for Germs Pollen Smoke Dust Pollen",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.8 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/41d9jklX44L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Assorted Color Elastic Bands for DIY Making Kits Accessories - Facial Shield Cover Appliacble 3mm Width Stretchy Ropes Homemade Art Craft Tools (Multicolor)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/71kiuue9H4L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "ReachTop Unisex Anti-Dust Cycling Mask Half Face Sports Mask Activated Carbon Filtration Exhaust Gas Windproof Mouth Mask for Outdoor Sports Running",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.1 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51+dh6tX9qL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "BBesty Full Cover Safety Face Shield Protective Dust Proof Fisherman Hat Face Cover Waterproof Wide Brim Splashing Proof Clear Visor Outdoor Facial Cover",
      "originalPrice": "11.89",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.1 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51wU5oBEAFL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "DIY HOMEMADE FACE MASK HAND SANITIZER AND DISINFECTANT WIPES GUIDE: Quick Guide to Make Reusable Face Mask,Alcoholic & Non-Alcoholic Hand Sanitizer and Disinfectant Wipes at Home for your Family",
      "originalPrice": "0.00",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.6 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/81S8LjitZKL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Disposable Safety Face Shield with Protective Clear Film Protect Eyes and Face from Splash and Splatter Elastic Band and Comfort Sponge (1PCS, Clear)",
      "originalPrice": "3.98",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61Qckt-+sQL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Atwood Rope MFG 1/4in 16.5 Yards / 50 feet Plush White Round Sewing Elastic | Elastic Cord for Sewing | Braided Elastic | Elastic for Masks | Tela para Mascarillas (1/4)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61ZFTQ-trnL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "CARBÓN ACTIVADO Mascarilla Remueve Puntos negros Celulas muertas Sheló NABEL",
      "originalPrice": "19.00",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/51xilCZjo0L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Pheroways Costume Reusable Cotton Cloth Mask for Face Protection (5-Pack) White",
      "originalPrice": "20.9928.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.1 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/619YbQ88eTL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "AWSL Flat Mask Aluminum Wire,100Pcs 90mm Strip Nose Bridge for Face DIY Making Accessories Crafts(No Adhesive, 100)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/51Xk91SHyQL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Reusable Filter Outdoor Masks with Respirator Valve Washable Dustmask Camouflage Outdoor Sports Masks Unisex Adult Breathable Face Masks for Pollen Allergy, Woodworking, Running, Cycling (1, Gray)",
      "originalPrice": "8.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51vGU-CIJrL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Reusable Filter Outdoor Masks with Respirator Valve Washable Dustmask Camouflage Outdoor Sports Masks Unisex Adult Breathable Face Masks for Pollen Allergy, Woodworking, Running, Cycling (1, Gray)",
      "originalPrice": "8.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51vGU-CIJrL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Cloth High Static Blue spunbond Fabric, White Waterproof meltblown Fabric, Three-Layer Handmade kit with Ear Straps and Nose Bridge",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/41YiY3nfLOL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "50 PCS PM2.5MASK Activated Carbon Filter, 5 Layers Replaceable Anti Haze Filters, Protective Mouth Filter for Outdoor",
      "originalPrice": "31.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/719ZSNkbiEL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "ZYC 7 in 1 Gas Mask Full Face Facepiece Respirator Same for Gas Respirator with Carbon Filters Painting Pesticide，with 6004",
      "originalPrice": "75.49",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61UFrijCZeL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "iQuark 100 Pack PM 2.5 Activated Carbon Filter Insert 5 Layers, Eternal Home Protective Filter, Effective Non-Woven Fabrics Cotton Filter (Adult Size)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "1.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61beyVjljtL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Floral Winter Plants Anti-dust Masks Washable Reusable Masks Balaclava Mask Black",
      "originalPrice": "9.9912.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "1.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/714qi7GtpwL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "ATMOMO 6mm Width Flat Elastic Bands Elastic Cord Stretch String Rope Earloop Sewing String for DIY Craft Clothes Making 180 Yards, White",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.9 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51jdXSxn7oL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "50pcs Face Shield Disposable Three-Layer dust-Proof and Anti-Fog Elastic Earrings",
      "originalPrice": "25.9829.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61KOEBmk8yL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Dermal Korea Collagen Essence Full Face Facial Mask Sheet, 16 Combo Pack",
      "originalPrice": "12.9929.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.4 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/81ypXr-s3ML._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "HCTX PM 2.5 Activated Carbon Filter Insert 5 Layers, Non-Woven Fabrics Cotton Filter, Eternal Home Protective Filter - 50 Pack, Adult Size",
      "originalPrice": "24.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61KUgvcR80L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Anewoneson 2020 Cotton Face PM2.5 Activated Carbon Washable and Reusable Lot Washable, Reusable",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51HF2WexAEL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Particulate Filter Compatible with 5p71, Installed on 501 Filter Retainer use (10PCS)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/511vnY6wZJL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "200-Yards Length 1/8 Inch Elastic for Sewing/DIY Elastic Cord/Elastic Bands for Sewing/Elastic String for Masks,Weaving, Crafts, Jewelry-White",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51pXZIdGXdL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Reusable Filter Outdoor Masks with Respirator Valve Washable Dustmask Camouflage Outdoor Sports Masks Unisex Adult Breathable Face Masks for Pollen, Woodworking, Running, Cycling (10, carbon filter)",
      "originalPrice": "5.9912.98",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61B+kwETOcL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "SUPPETS Face Cover with Elastic Ear Loop,20PCS",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.3 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/81dQApKqQsL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Dust Mask, Washable Reusable Anti Air Pollution Half Face Mouth Mask Adjustable PM2.5 Air Filter Mask Respirator (RED)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61sD0uLCrRL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Colouring Hair Mask - Repairs and Colours - 300 Ml/Natural & Organic. (Black Hair)",
      "originalPrice": "16.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.4 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71XwQpaqXGL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Anewoneson 2020 Women Silk Reusable Filter PM2.5 Air Filtration Washable, Reusable Black",
      "originalPrice": "7.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/51y1b6eyRjL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "KIDVOVOU Seamless Rave Bandana for Men Women Neck Gaiter Scarf Dust Wind Balaclava Headwear",
      "originalPrice": "12.9913.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.2 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51FeYn7kfLL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Breathing Valves,Outdoor Anti-dust Face Cover Mouth Filter Air Breathing Valves Replacements,DIY Craft Mascarilla Accessories (White, 90PC)",
      "originalPrice": "22.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/71224KfnmJL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Permotary 6 PCS 24k Gold Gel Collagen Face Masks, Facial Treatment Deep Moisturizing Masks For Anti Aging Puffiness Skincare Anti Wrinkle Tighten Skin & Revitalize Skin",
      "originalPrice": "13.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.4 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71FyF-9YK9L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "PUREDERM GALAXY PEEL-OFF MASK x 5ea (Black, Gold, Green, Red, Silver)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.9 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71gx7ygM4-L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Safeguard Nitrile Disposable Gloves, Powder Free, Food Grade Gloves, Latex Free, 100 Pc. Dispenser Pack, X-Large Size, Blue",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/81Rhzlq6PlL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Ana Maria Honey and Chamomile Extract Moisturizing Facial Mask Mascarilla Facial Hidratante Con Miel y Extracto de Manzanilla 2.8oz-80g",
      "originalPrice": "15.97",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/711gij2SNkL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Salerm Wheat Germ Mascarilla Capilar Conditioning Treatment, 33.7 Ounce",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/91yB1pne0lL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Thethys Anti-Spitting Protective Hat Dustproof Cover Hat Safety Face Shield for Kids Boys Girls Cap",
      "originalPrice": "11.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/51NBKa3VkcL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Fasttop Heavy Stretch Knit Elastic Band 1/8\" Wide 109 Yards Premium Quality Elastic Cord Elastic Rope for Face, DIY, Arts and Crafts",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61Vyd+cDM-L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Mascarillas caseras para tener la piel perfecta: 15 mascarillas caseras para la piel (Spanish Edition)",
      "originalPrice": "0.00",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/81G1rJiE3rL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "LDPF 6pcs Filters for Bike Face Cover Anti Dust Safety Men Women Pollution Anti-Fog Running Cycling Reusable Respirator Activated Carbon",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/81UEb3JMwML._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Mysteries of Ancient Mexico2018",
      "originalPrice": "1.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/81I0Y+RUUsL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "ETGLCOZY Dust Mask with 5 Activated Carbon Filters, Dustproof Respirator Breathing Mask for Pollen Allergy Woodworking Mowing Running Cycling Outdoor Activities (Black)",
      "originalPrice": "20.79",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61vb9aJhd2L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "1 Pack Unisex Mouth Mask Adjustable Anti Dust Face Mask,Black Cotton Mouth Mask Muffle Mask for Cycling Camping Travel,100% Cotton Washable Reusable Cloth Masks",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.6 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51u9vBhbZrL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Aniji Face Mask Made in USA Face Mask with Nose Wire Reusable Washable Face Shield Protective Cloth Mask (Ear Loops) Black. No Filter Pocket (1pc)",
      "originalPrice": "12.49",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.3 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71W8BvADebL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "combnine Replacement Pre Filter Cloth - Disposable Meltblown Cloth Nonwoven Filter Fabric for Mask Filtering Layer Application",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.4 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51lm+H7abhL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "CLERO& Scarf Fleece Neck Warmer Ancient Egyptian Hieroglyphs Black Gold Windproof Winter Ski Face Mask Balaclava Half Mask Gaiter Warmer for Women Men",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/61HHoJIvsoL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "CGFJEIN Puerto Rico Face Mask for Mouth Mask Anti-Dust On White Background Display Sun-Proof Fashion Bandana Headwear",
      "originalPrice": "7.56",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51RQd-TuqcL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Reusable Filter Outdoor Masks with Respirator Valve Washable Dustmask Camouflage Outdoor Sports Masks Unisex Adult Breathable Face Masks for Pollen Allergy, Woodworking, Running, Cycling (1, Purple)",
      "originalPrice": "8.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          ""
      ],
      "photo": "https://m.media-amazon.com/images/I/51IxoCHjZjL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Genové Pilopeptan Woman Regenerative Hair Mask 200ml - Repairs, Nourishes and Softens Hair - Hair Loss Treatment - Spain",
      "originalPrice": "33.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.7 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/51p6Tzu7THL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Anti Pollution Protective Hat Transparent Adjustable Shield Dustproof Outdoor Mask Cover - 2 Pack",
      "originalPrice": "16.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "2.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71T3lNSHgQL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "3-Ply Disposable Comfortable Earloop Marsk 50 Pcs Anti Dust Mark",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61TvnwEM55L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "OneTigris 6\" Foldable Half Face Mesh Mask Military Style Comfortable Adjustable Tactical Lower Face Protective Mask",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/710bX+A+9KL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": ":DuPont Tyvek 400 TY122S Individually Packed Disposable Protective Coverall with Elastic Cuffs, Attached Hood and Boots, White, Large",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.5 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71ZwCRqOB7L._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Ohvivid Anti Pollution Face Cover Mouth Filter Air Breathing Filter Accessories - Face Cover Valves Breathing Activated Carbon Dustproof Windproof Foggy Haze Cover Filter (20pc)",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "5.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61ixCTcSbiL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "(5m/196.85in) Cloth Disposable Waterproof Non-Woven Fabric, 95% Polypropylene Fabric, Necessities Thickened Disposable Non-Woven Fabric, DIY Handmade Material WFB05001",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61R8mkNh1QL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Five-layer Activated carbon PM2.5 filters Set of 20 Activated Carbon with 5 Exhaust Valves Replacement Dust，Active Carbon Filters for Mesh or Neoprene Mask",
      "originalPrice": "21.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "4.0 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/71VyHCt3bkL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Kids Protective Hat Full Face Shield Fisherman Hat for Children, Safety Cover Windproof Dustproof Face Protection Isolation Mask Anti UV Sun Cap (One Size for 3-13Y, Orange)",
      "originalPrice": "12.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.8 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61AaKWQiPRL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Outdoor Anti-dust Mask, PM 2.5 Windproof Cycling Facemask Washable Face Cover for Outdoor, Sports, Motorcycles (Black_Type1)",
      "originalPrice": "9.99",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.3 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61-aKmvuxHL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  },
  {
      "brand": "amazon masks",
      "name": "",
      "description": "Luntus 50Pcs/Lot 5",
      "originalPrice": "",
      "actualPrice": "",
      "feedback": [
          {}
      ],
      "rating": [
          "3.3 out of 5 stars"
      ],
      "photo": "https://m.media-amazon.com/images/I/61JV92CilxL._AC_UL320_.jpg",
      "shippingTime": "",
      "material": "",
      "color": "",
      "size": "universal",
      "category": [
          "industrial",
          "beauty",
          "party"
      ]
  }
]
  Product.create(products, (err) => {
    if(err){throw(err)}
    console.log(`Created {products.length} products in db`);
    mongoose.connection.close();
  });