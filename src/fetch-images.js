const { searchImages } = require('pixabay-api')
var AUTH_KEY = '8825240-c7cbb4a0c138d3f87d226a813';
searchImages(AUTH_KEY, 'star wars').then((res) => {
  let imgs = res.hits.map(hit => {
    return hit.largeImageURL
  })
  console.log(imgs)
})

['https://pixabay.com/get/e833b3082bf6033ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.jpg',
'https://pixabay.com/get/e037b30a2af41c22d2524518b7444e94e675e6d504b0144390f6c971aee4b2_1280.png',
'https://pixabay.com/get/ea37b20c28fc033ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.jpg',
'https://pixabay.com/get/ea36b50721fc093ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.jpg',
'https://pixabay.com/get/ef30b10e20fd1c22d2524518b7444e94e675e6d504b0144390f6c971aee4b2_1280.jpg',
'https://pixabay.com/get/ea37b20c28f3073ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.jpg',
'https://pixabay.com/get/e835b90b2ff3073ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.jpg',
'https://pixabay.com/get/ea36b50a21f0093ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.jpg',
'https://pixabay.com/get/eb3db50e2af3073ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.png',
'https://pixabay.com/get/ea37b60e2ff0003ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.jpg',
'https://pixabay.com/get/eb3cb10729f0053ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.png',
'https://pixabay.com/get/ea37b80b28f1023ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.jpg',
'https://pixabay.com/get/eb32b90a2cf4083ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.png',
'https://pixabay.com/get/ea37b20c2af6073ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.jpg',
'https://pixabay.com/get/ea34b10a20f4033ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.png',
'https://pixabay.com/get/eb32b90a2cf4073ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.png',
'https://pixabay.com/get/e836b50c20f3063ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.jpg',
'https://pixabay.com/get/eb3db8082afc013ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.jpg',
'https://pixabay.com/get/e83db40c2afc073ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.jpg',
  'https://pixabay.com/get/e835b10b2ff5053ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.jpg']