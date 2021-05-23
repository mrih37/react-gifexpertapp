const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=zqiGgVrnCYx1CS7t96xSGDvyI69lOtba`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( ( img ) => ( {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
    } ) );

    return gifs;
};

export default getGifs;
