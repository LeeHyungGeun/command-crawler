function Filter({ text, keyword }) {
    return new Promise((resolve, reject) => {
        const result = new RegExp(`${keyword}`, 'ig').test(text);
        resolve(result);
    });
}

export default Filter;