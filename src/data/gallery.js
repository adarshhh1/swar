const galleryImages = Array.from({ length: 39 }, (_, i) => ({
  id: i + 1,
  src: `/photoss/swar_pics${i + 1}.jpg`, // Correct path from `public/`
  alt: `Musical Event ${i + 1}`,
}));

export default galleryImages;
