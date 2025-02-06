const StockApi = async (query, page) => {
    try {
        const res = await fetch(`https://pixabay.com/api/?key=47312692-be74d645ff2191fcd8381e33b&q=${query}&page=${page}&per_page=21&safesearch=true`);
        const data = await res.json();
        // console.log(query, page, data);
        return data;
    } catch (err) {
        console.log(err);
    }
}

export default StockApi