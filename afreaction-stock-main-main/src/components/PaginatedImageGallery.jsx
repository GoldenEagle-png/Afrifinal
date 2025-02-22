import '../css/ImageGallery.css';
import { useState, useEffect, useRef, useCallback } from "react";
import ImageElement from "./ImageElement";
import StockApi from "../Api/StockApi";
import Loading from "../assets/Loading.gif";
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

const PaginatedImageGallery = ({ query }) => {
    const ref = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [columns, setColumns] = useState([]);
   
    const fetchImages = useCallback(async (query, page) => {
        setIsLoading(true);
        try {
            const incomingData = await StockApi(query, page);
            if (incomingData && incomingData.hits) {
                setImages(prevImages => [...prevImages, ...incomingData.hits]);
                setTotalPages(Math.ceil(incomingData.totalHits / 60)); // Assuming 20 items per page
            }
        } catch (err) {
            console.error("Error fetching images:", err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    
    useEffect(() => {
        setImages([]);
        setPage(1);
        fetchImages(query, 1);
    }, [query, fetchImages]);

    
    useEffect(() => {
        const updateColumns = () => {
            const columnCount = window.innerWidth <= 550 ? 1 : window.innerWidth <= 950 ? 2 : 3;
            setColumns(splitArray([...images], columnCount));
        };

        updateColumns();
        window.addEventListener("resize", updateColumns);

        return () => {
            window.removeEventListener("resize", updateColumns);
        };
    }, [images]);

    
    const splitArray = (array, columnCount) => {
        const result = [];
        for (let i = columnCount; i > 0; i--) {
            result.push(array.splice(0, Math.ceil(array.length / i)));
        }
        return result;
    };

    
    const loadMoreImages = () => {
        if (page < totalPages && !isLoading) {
            const nextPage = page + 1;
            setPage(nextPage);
            fetchImages(query, nextPage);
        }
    };


    const handleImageClick = () => {
        window.location.href = 'http://localhost:63343/Stock-Images/src/assets/html/aseet%20main/photo-details.html?_ijt=hkpo4b0vbhks2kpdvbs9s4p93q&_ij_reload=RELOAD_ON_SAVE';
    };

    return (
        <div className='ImageGallery' ref={ref}>
            <div className="columns">
                {columns.map((column, index) => (
                    <div className='column' key={index}>
                        {column.map((item) => (
                            <ImageElement
                                id={item.id}
                                src={item.webformatURL}
                                key={item.id}
                                alt=""
                                onClick={() => handleImageClick(item.id)} 
                            />
                        ))}
                    </div>
                ))}
            </div>
            {isLoading && (
                <center>
                  <div className="loading-spinner"></div>
                </center>
            )}
            {!isLoading && page < totalPages && (
               <button className="load-more" onClick={loadMoreImages} disabled={isLoading} >
                 {isLoading ? 'Loading...' : 'Load More'}
               </button>
            )}
        </div>
    );
};

export default PaginatedImageGallery;