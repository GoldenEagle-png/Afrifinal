const RetrieveImageByIdApi = async (id) => {
    try {
        const res = await fetch(`https://pixabay.com/api/?key=47312692-be74d645ff2191fcd8381e33b&id=${id}`);
        const data = await res.json();
        console.log(id, data);
        return data;
    } catch (err) {
        console.log(err);
    }
}

export default RetrieveImageByIdApi