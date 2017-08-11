import request from 'request';


function Search({ url }) {
    return new Promise((resolve, reject) => {
        request(url, (err, response, body) => {
            if (err) {
                throw err;
            }
            if (!response || response.statusCode !== 200) {
                return 'NOT 200';
            }

            resolve(body);
            // console.log('error:', err); // Print the error if one occurred
            // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            // console.log('body:', body); // Print the HTML for the Google homepage.
        });
    });
}

export default Search;