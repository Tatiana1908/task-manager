export default function request (link, options, resolve, reject) {

    return function() {
        console.log(options)
        fetch(link, options)
        .then(response => response.json())
        .then(resolve)
        .catch(reject)
    }

}