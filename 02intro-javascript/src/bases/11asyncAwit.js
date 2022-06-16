


const getImage = async () => {

    try {

        const image = document.createElement('img');
        const apiKey = 'Ks1h8eGHMFY9FcxvgCgcq2blwWFtgB9t';
        const request = await fetch(`https://api.giphy.com/v1/stickers/random?api_key=${apiKey}`);
        const { data } = await request.json();
        const { url } = data.images.original
        image.src = url;
        document.body.appendChild(image);
    } catch (error) {

        throw error;
    }




}


getImage();




