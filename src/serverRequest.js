export default function request (link, options, resolve, reject) {

    // function init(){
    //     fetch(this.link, this.options)
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(response => {
    //             this.success(response)
    //         })
    //         .catch( () => {
    //             this.reject()
    //         });
    // }
    return function() {
        console.log(link)
        fetch(link, options)
        .then(response => response.json())
        .then(resolve)
        .catch(reject)
    }
    // return () => fetch(link, options)
    //     .then(response => response.json())
    //     .then(resolve)
    //     .catch(reject)
}