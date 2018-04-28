
export const media = {
  title: '¿Qué es responsive Design?',
  author: 'LeonidasEsteban',
  type: 'video',
  cover: './images/covers/responsive.jpg',
  src: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
};

export const playlist = [
  { ...media, id: 0 },
  { ...media, id: 1 },
];

export const category = {
  description: 'Lo mejor de la semana',
  title: 'Destacados',
  playlist,
};
