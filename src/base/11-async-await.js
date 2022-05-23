export const getImagen = async () => {
  try {
    const apiKey = "gwYmNzCsQm0Yct0CzJ1umliYT3pp6lo6";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;
    return url;
  } catch (error) {
    return 'No existe';
  }
};
