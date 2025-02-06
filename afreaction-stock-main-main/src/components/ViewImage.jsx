import '../css/css/ViewImage.css';
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import RetrieveImageByIdApi from "../Api/RetrieveImageByIdApi";
import Loading from "../assets/Loading.gif";
import PageNavBar from "./PageNavBar";
import SliderTab from "./SliderTab";
import PaginatedImageGallery from "./PaginatedImageGallery";
import ImageDialog from '../components/img/ImageDialog'; // Import the ImageDialog component

const ViewImage = () => {
    const search = useLocation().search;
    const [imageData, setImageData] = useState([]);
    const [tags, setTags] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [relatedImages, setRelatedImages] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false); // State for dialog visibility

    useEffect(() => {
        const id = new URLSearchParams(search).get('id');
        const getData = () => {
            setIsLoading(true);
            RetrieveImageByIdApi(id)
                .then((incomingData) => {
                    if (incomingData && incomingData.hits[0]) {
                        const image = incomingData.hits[0];
                        setImageData(image);
                        const imageTags = image.tags.split(', ');
                        setTags(imageTags);
                        fetchRelatedImages(imageTags);
                    }
                    setIsLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setIsLoading(false);
                });
        };
        getData();
    }, [search]);

    const fetchRelatedImages = (tags) => {
        const relatedTagsQuery = tags.join(',');
        RetrieveImageByIdApi(relatedTagsQuery)
            .then((relatedData) => {
                if (relatedData && relatedData.hits.length > 0) {
                    setRelatedImages(relatedData.hits);
                }
            })
            .catch((err) => {
                console.log("Error fetching related images:", err);
            });
    };

    const download = (src) => {
        fetch(src)
            .then(response => response.arrayBuffer())
            .then((buffer) => {
                const url = window.URL.createObjectURL(new Blob([buffer]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", "download.png");
                document.body.appendChild(link);
                link.click();
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className='ViewImage'>
            <PageNavBar defaultQuery='' />
            <SliderTab />
            {
                isLoading ? (
                    <center>
                        <img className="loading" height='200px' width='200px' src={Loading} alt="Loading..." />
                    </center>
                ) : (
                    <div className='main-img-container'>
                        <div className='img-container' onClick={() => setIsDialogOpen(true)}> {/* Open dialog on click */}
                            <img className='image' src={imageData.webformatURL} alt='search-img' />
                        </div>
                        <div className='img-details'>
                            <h2>{imageData.tags}</h2>
                            <div className='details-btn'>
                                <button className='btn'>
                                    <span className='icon'>❤️</span>
                                    <span className='text'>{imageData.likes}</span>
                                </button>
                                <button className='btn'>
                                    <span className='icon'>💬</span>
                                    <span className='text'>{imageData.comments}</span>
                                </button>
                                <button className='btn' onClick={() => download(imageData.webformatURL)}>
                                    <span className='icon'>⬇️</span>
                                    <span className='text'>Download</span>
                                </button>
                            </div>
                            <div className='other-details'>
                                <div><strong>Views:</strong> <span>{imageData.views}</span></div>
                                <div><strong>Downloads:</strong> <span>{imageData.downloads}</span></div>
                                <div><strong>Resolution:</strong> <span>{imageData.imageWidth} x {imageData.imageHeight}</span></div>
                                <div><strong>Collections:</strong> <span>{imageData.collections}</span></div>
                            </div>
                            <div className='tags'>
                                {
                                    tags.map((tag) => (
                                        <Link to={`/api/search?query=${tag}`} key={tag}>
                                            <span className='tag'>{tag}</span>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            <div className='related-images'>
                <h3>Related Images</h3>
                <div className='related-images-container'>
                    {relatedImages.map((img) => (
                        <div className='related-image' key={img.id}>
                            <PaginatedImageGallery query={img.tags.split(', ')[0]} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
            <ImageDialog
                isOpen={isDialogOpen}
                closeModal={() => setIsDialogOpen(false)}
                images={imageData} // Pass image data to the dialog
            />
        </div>
    );
};

export default ViewImage;