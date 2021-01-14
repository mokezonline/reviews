const DB = require('./index.js');
const Product = require('./Product.js');
const Review = require('./Review.js');

const sampleProduct = [{
  productName: 'Men\'s Insulated Fjord Flannel Jacket',
  imgUrl: 'https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw2b58c1e7/images/hi-res/27640_NVYB.jpg?sw=500&sh=500&sfrm=png&q=95&bgcolor=f6f6f6',
  rating: 4.5,
  ratingCount: 113,
  fit: 'True to fit',
  activities: 'Casual Wear, Work, Hiking'
}]

const sampleReviews = [
  {
    rating: 5,
    title: 'Perfect layering item',
    author: 'Sarah',
    body: 'My husband absolutely loves this jacket. Its fits well & gives him the ideal warmth for a hot-natured man.',
    productInfo: {
      size: 'L',
      fit: 'Perfect',
      Height: 'Tall'
    },
    properties: {
      casualWear: true,
      climbing: false,
      yoga: false,
      fishing: false,
      running: false,
      hiking: false,
      mountainBiking: false,
      snowWear: false,
      surfing: false,
      work: true,
      recommended: true
    }
  },
  {
    rating: 5,
    title: 'Nice and warm',
    author: 'Belal',
    body: 'Great winter jacket. Keeps you warm and could combo it with a hoodie if temp drops below freezing. Really stylish as well, it gets lots of compliments',
    productInfo: {
      size: 'L',
      fit: 'Perfect',
      Height: 'Tall'
    },
    properties: {
      casualWear: true,
      climbing: false,
      yoga: false,
      fishing: false,
      running: false,
      hiking: false,
      mountainBiking: false,
      snowWear: false,
      surfing: false,
      work: true,
      recommended: true
    }
  },
  {
    rating: 5,
    title: 'Heavy',
    author: 'Lauren',
    body: 'It\s to heavy and very scratchy',
    productInfo: {
      size: 'L',
      fit: 'Loose',
      Height: 'Tall'
    },
    properties: {
      casualWear: true,
      climbing: false,
      yoga: false,
      fishing: false,
      running: false,
      hiking: true,
      mountainBiking: false,
      snowWear: false,
      surfing: false,
      work: true,
      recommended: true
    }
  },
  {
    rating: 3,
    title: 'Size Disparity',
    author: 'Anthony',
    body: 'I\'ve purchased this jacket two years in a row but opted for the large this time since the medium was a little snug but fit a medium in most everything Patagonia. Unfortunately, there is a massive size discrepancy between the large and medium. I\'m swimming in the large but constricted in the medium. Otherwise, a good casual jacket for moderately cold climates. Adjusting the pattern may be worthwhile.',
    productInfo: {
      size: 'M',
      fit: 'Tight',
      Height: 'Average'
    },
    properties: {
      casualWear: true,
      climbing: false,
      yoga: false,
      fishing: false,
      running: false,
      hiking: true,
      mountainBiking: false,
      snowWear: false,
      surfing: false,
      work: true,
      recommended: true
    }
  }
]

insertSamples= () => {
  Product.create(sampleProduct)
    .then(() => {
      Review.create(sampleReviews)
    }).then(() =>
      DB.disconnect())
      .catch(console.log);
}

insertSamples();