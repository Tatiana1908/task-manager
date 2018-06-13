export default function request(link, options, resolve, reject) {

    return function() {
        fetch(link, options)
        .then(response => response.json())
        .then(resolve)
        .catch(reject)
    }

}