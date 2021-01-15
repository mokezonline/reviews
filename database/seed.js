const faker = require('faker');
const DB = require('./index.js');
const Product = require('./Product.js');

const offSetBoolean = () => (Math.random() < 0.4);
const sizeChart = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const fitChart = ['loose', 'tight', 'good', 'perfect'];
const heightChart = ['average', 'tall'];
const randVal = (array) => array[Math.floor(Math.random() * array.length)];

const fakeData = new Array(100).fill(null).map(() => (
  {
    rating: (Math.floor(Math.random() * (5 - 1) + 1)),
    title: faker.commerce.productAdjective(),
    author: faker.name.firstName(),
    body: faker.commerce.productDescription(),
    productInfo: {
      size: randVal(sizeChart),
      fit: randVal(fitChart),
      height: randVal(heightChart),
    },
    properties: {
      casualWear: offSetBoolean(),
      climbing: offSetBoolean(),
      yoga: offSetBoolean(),
      fishing: offSetBoolean(),
      running: offSetBoolean(),
      hiking: offSetBoolean(),
      mountainBiking: offSetBoolean(),
      snowWear: offSetBoolean(),
      surfing: offSetBoolean(),
      work: offSetBoolean(),
      recommended: offSetBoolean(),
    },
  }));

const sampleProduct = [{
  productName: 'Men\'s Insulated Fjord Flannel Jacket',
  imgUrl: 'https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw2b58c1e7/images/hi-res/27640_NVYB.jpg?sw=500&sh=500&sfrm=png&q=95&bgcolor=f6f6f6',
  rating: 4.5,
  ratingCount: 113,
  fit: 'True to fit',
  activities: 'Casual Wear, Work, Hiking',
  reviews: fakeData,
}];

const insertSamples = () => {
  Product.create(sampleProduct)
    .then(() => DB.collection.close())
    .catch(console.log);
};

insertSamples();

// Hard-coded sampleReviews
// [
//   {
//     rating: 5,
//     title: 'Perfect layering item',
//     author: 'Sarah',
//     body: 'My husband absolutely loves this jacket. Its fits well & gives him the ideal warmth
//       for a hot-natured man.',
//     productInfo: {
//       size: 'L',
//       fit: 'Perfect',
//       Height: 'Tall',
//     },
//     properties: {
//       casualWear: true,
//       climbing: false,
//       yoga: false,
//       fishing: false,
//       running: false,
//       hiking: false,
//       mountainBiking: false,
//       snowWear: false,
//       surfing: false,
//       work: true,
//       recommended: true,
//     },
//   },
//   {
//     rating: 5,
//     title: 'Nice and warm',
//     author: 'Belal',
//     body: 'Great winter jacket. Keeps you warm and could combo it with a hoodie if temp
//       drops below freezing. Really stylish as well, it gets lots of compliments',
//     productInfo: {
//       size: 'L',
//       fit: 'Perfect',
//       Height: 'Tall',
//     },
//     properties: {
//       casualWear: true,
//       climbing: false,
//       yoga: false,
//       fishing: false,
//       running: false,
//       hiking: false,
//       mountainBiking: false,
//       snowWear: false,
//       surfing: false,
//       work: true,
//       recommended: true,
//     },
//   },
//   {
//     rating: 5,
//     title: 'Heavy',
//     author: 'Lauren',
//     body: 'It\'s to heavy and very scratchy',
//     productInfo: {
//       size: 'L',
//       fit: 'Loose',
//       Height: 'Tall',
//     },
//     properties: {
//       casualWear: true,
//       climbing: false,
//       yoga: false,
//       fishing: false,
//       running: false,
//       hiking: true,
//       mountainBiking: false,
//       snowWear: false,
//       surfing: false,
//       work: true,
//       recommended: true,
//     },
//   },
//   {
//     rating: 3,
//     title: 'Size Disparity',
//     author: 'Anthony',
//     body: 'I\'ve purchased this jacket two years in a row but opted for the large this time
//       since the medium was a little snug but fit a medium in most everything Patagonia.
//       Unfortunately, there is a massive size discrepancy between the large and medium.
//       I\'m swimming in the large but constricted in the medium. Otherwise, a good casual
//       jacket for moderately cold climates. Adjusting the pattern may be worthwhile.',
//     productInfo: {
//       size: 'M',
//       fit: 'Tight',
//       Height: 'Average',
//     },
//     properties: {
//       casualWear: true,
//       climbing: false,
//       yoga: false,
//       fishing: false,
//       running: false,
//       hiking: true,
//       mountainBiking: false,
//       snowWear: false,
//       surfing: false,
//       work: true,
//       recommended: true,
//     },
//   },
// ],
