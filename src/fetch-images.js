const { searchImages } = require('pixabay-api')
var AUTH_KEY = '8825240-c7cbb4a0c138d3f87d226a813';
searchImages(AUTH_KEY, 'fish').then((res) => {
  let imgs = res.hits.map(hit => {
    return hit.largeImageURL
  })
  console.log(imgs)
})


['https://pixabay.com/get/ea36b7062ff0063ed1584d05fb1d4e9ee172e0d119ac104497f5c671a3ebb1b0_1280.png',
'https://pixabay.com/get/ea36b40828f0023ed1584d05fb1d4e9ee172e0d119ac104497f5c671a3ebb1b0_1280.jpg',
'https://pixabay.com/get/ea36b70d29f1073ed1584d05fb1d4e9ee172e0d119ac104497f5c671a3ebb1b0_1280.jpg',
'https://pixabay.com/get/eb35b00a28fd093ed1584d05fb1d4e9ee172e0d119ac104497f5c671a3ebb1b0_1280.jpg',
'https://pixabay.com/get/ea36b60c2df4083ed1584d05fb1d4e9ee172e0d119ac104497f5c671a3ebb1b0_1280.png',
'https://pixabay.com/get/ea36b30d2af7013ed1584d05fb1d4e9ee172e0d119ac104497f5c671a3ebb1b0_1280.jpg',
'https://pixabay.com/get/ea36b6062dfd023ed1584d05fb1d4e9ee172e0d119ac104497f5c671a3ebb1b0_1280.jpg',
'https://pixabay.com/get/ea36b0072cf3063ed1584d05fb1d4e9ee172e0d119ac104497f5c671a3ebb1b0_1280.jpg',
'https://pixabay.com/get/ea36b60b2af4003ed1584d05fb1d4e9ee172e0d119ac104497f5c671a3ebb1b0_1280.jpg',
'https://pixabay.com/get/ea36b00a2df6073ed1584d05fb1d4e9ee172e0d119ac104497f5c671a3ebb1b0_1280.jpg',
'https://pixabay.com/get/e833b30f2cf1033ed1584d05fb1d4e9ee172e0d119ac104497f5c671a3ebb1b0_1280.jpg',
'https://pixabay.com/get/ea36b7062ff5013ed1584d05fb1d4e9ee172e0d119ac104497f5c671a3ebb1b0_1280.png',
'https://pixabay.com/get/e831b00a2ff6023ed1584d05fb1d4e9ee172e0d119ac104497f5c671a3ebb1b0_1280.jpg',
  'https://pixabay.com/get/ea36b30d2af5063ed1584d05fb1d4e9ee172e0d119ac104497f5c671a3ebb1b0_1280.jpg']