const apiKey = 'Ks1h8eGHMFY9FcxvgCgcq2blwWFtgB9t';
const peticion = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${apiKey}`);
peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        const body = document.body;
        body.appendChild(img);
    })
    .catch(
        console.warn
    )    
