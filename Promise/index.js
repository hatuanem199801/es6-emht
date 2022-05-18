import fetch from "node-fetch";

function fetchImages(url, onData, onError, timeout = 1000) {
    setTimeout(() => {
        fetch(url)
            .then(res => onData(res.arrayBuffer()))
            .catch(err => onError(err))
    }, timeout);
}

const fecthPromise = (url, timeout) => {
    return new Promise((resolve, reject) => {
        fetchImages(url, resolve, reject, timeout);
    });
};

Promise.all([
    fecthPromise("https://picsum.photos/1080", 500),
    fecthPromise("https://picsum.photos/720", 500),
    fecthPromise("https://picsum.photos/480", 500),
]).then((data) => {
    const [img1080, img720, img480] = data;
    console.log({img1080, img720, img480});
}).catch((err) => {
    console.error(err)
})