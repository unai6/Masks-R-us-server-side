const Product = require('../models/Product')
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://unai:gomagoma4@cluster0-3co1b.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

Product.collection.drop();

products = [

    {
      brand: 'Benehal',
      name: 'MaskinN95',
      description: 'máscara antipolvo máscara facial no tejida con válvula antipolvo N95 PM 2,5 mascarilla respiradora con válvula',
      originalPrice: '6.65',
      actualPrice: '4.99',
      feedback: [{}],// backlog
      rating: [],
      photo: 'https://ae01.alicdn.com/kf/Habcd80601953490aab3e544c5a8a7e60R/Maskin-N95-m-scara-antipolvo-m-scara-facial-no-tejida-con-v-lvula-antipolvo-N95-PM.png',
      shippingTime: '24h',
      material: 'Tela transpirable de alta calidad',
      color: 'blanco',
      size: 'universal',
      stock: '200',
      category: ['industrial']
    },

    {
      brand: 'Jinxiu Yuexing',
      name: '3600',
      description: ' mascarilla para fumigación máscara de gas protección antipolvo máscara para trabajo de seguridad de spray para soldar de protección contra la contaminación',
      originalPrice: '22.04',
      actualPrice: '',
      feedback: [{}],// backlog
      rating: [],
      photo: 'https://ae01.alicdn.com/kf/H1e8b1309bf3b418ba9d3eb366fbdec159/3600-Half-Face-Gas-Mask-Particulate-Respirator-with-Filter-Cartridge-Protective-Mask-Personal-Protective-Equippment-dust.jpg',
      shippingTime: '24h',
      material: 'Filtro y plástico de alta calidad',
      color: 'verde',
      size: 'universal',
      stock: '55',
      category: ['indsutrial']
    },
  
    {
      brand: 'OLOEY Online Store',
      name: 'AntiDust',
      description: 'Mascarilla anticontaminación adulto Anti PM 2,5 polen mascarilla antipolvo lavable antiniebla antipolvo mascarilla carbón activado filtro con 2 filtros',
      originalPrice: '1.42',
      actualPrice: '',
      feedback: [{}],// backlog
      rating: [],
      photo: 'https://ae01.alicdn.com/kf/H2ae29a535056477f985635b3ce36ff304/Unsex-Masks-Antidust-Mouth-Face-Mask-Muzzle-Pm2-5-Antibacterial-Outdoor-Trip-Protection-Mouth-Mask-Mascarillas.jpg',
      shippingTime: '24h',
      material: ' tela impermeable',
      color: 'azul',
      size: 'universal',
      stock: '1155',
      category: ['sports']
  
    },
  
  
    {
      brand: 'SafeMgr Store',
      name: '6002 Face Respirator',
      description: 'Mascarilla de Gas para pintura facial completa respirador 6800 con cartucho de filtro de carbono máscara protectora completa 6800',
      originalPrice: '27.93',
      actualPrice: '19.90',
      feedback: [{}],// backlog
      rating: [],
      photo: 'https://ae01.alicdn.com/kf/Hc32e6c42971a45609dcf8cd083ba3b404/7pcs-Organic-Vapor-Full-Face-Respirator-Mask-Gas-Mask-Paint-Pesticide-Chemical-Formaldehyde-Anti-Virus-Respiratory.jpg',
      shippingTime: '48h',
      material: ' máscara de plástico con filtro de carbono',
      color: 'azuly negro',
      size: 'universal',
      stock: '350',
      category: ['industrial']
  
    },
  
  
  
    {
      brand: 'Protect Your Heathy Store',
      name: 'mask 6800',
      description: 'Mascarillas N95 máscara con respirador respiración Válvula de kn95 kf95 boca máscara filtro facial enmascarado PM2.5 máscaras ffp1 FFP2 FFP3 KF94 n95 máscara',
      originalPrice: '27.93',
      actualPrice: '',
      feedback: [{}],// backlog
      rating: [],
      photo: 'https://ae01.alicdn.com/kf/Hbb8f52daba33430c9812fe2711ebd4c7A/Mascarilla-de-Gas-para-pintura-facial-completa-respirador-6800-con-cartucho-de-filtro-de-carbono-m.jpg',
      shippingTime: '48h',
      material: 'Tela no tejida, Spray solvente KN95, aislamiento térmico de algodón',
      color: 'blanca',
      size: 'universal',
      stock: '3500',
      category: ['industrial']
  
    },
  
  
    {
      brand: 'Tranto Bike Store',
      name: 'BuckL05',
      description: '2PC boca mufla Anti polvo ciclismo máscaras con filtro media cara de máscara para ciclismo máscaras formación máscara',
      originalPrice: '1.97',
      actualPrice: '',
      feedback: [{}],// backlog
      rating: [],
      photo: 'https://ae01.alicdn.com/kf/H461ee95da75445deb98d293e9275d9adr/KN95-Face-Mask-With-Filter-Carbon-PM-2-5-Anti-Pollution-Dustproof-Mask-Sport-Running-Cycling.jpg',
      shippingTime: '48h',
      material: 'esponja de algodón de alta calidad.',
      color: 'negra',
      size: 'universal',
      stock: '190',
      category: ['sports']
  
    },
    
    {
        brand: 'Ceramic Houseware Store',
        name: 'YYW',
        description: 'Máscaras de dragón decoración máscaras Animales máscara de Halloween accesorios de fiesta de Carnaval dragón Cospaly herramientas realista Masker Prop',
        originalPrice: '7.90',
        actualPrice: '6.50',
        feedback: [{}],// backlog
        rating: [],
        photo: 'https://ae01.alicdn.com/kf/H703675aef796476db64b2e9ae7d45107O/5-Style-Japanese-Dragon-God-Mask-Eco-friendly-Cosplay-Props-Unisex-Halloween-Animal-Tiger-Natural-Resin.jpg',
        shippingTime: '60h',
        material: 'polyester',
        color: 'negra',
        size: 'universal',
        stock: '800',
        category: ['party']
    },
  
  ]

  Product.create(products, (err) => {
    if(err){throw(err)}
    console.log(`Created ${products.length} products in db`);
    mongoose.connection.close();
  });