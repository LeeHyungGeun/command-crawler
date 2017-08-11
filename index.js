import { Search, Filter } from './core';

// Search({
//     url: 'https://line.worksmobile.com'
// })
// .then((result) => {
//     console.log(Filter(result, 'Works'));
// });

async function Find (args) {
    if (typeof args !== 'object' || Array.isArray(args)) {
        throw 'Invalid Argument';
    }
    const { url, keyword } = args;

    const text = await Search({
        url
    });

    const result = await Filter({
        text, 
        keyword
    });

    console.log(result);
}

Find({
    url: 'https://www.naver.com',
    keyword: 'NAVER'
});