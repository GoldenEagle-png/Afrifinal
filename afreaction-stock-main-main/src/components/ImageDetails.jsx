import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BiArrowBack, BiBookmark, BiHeart } from 'react-icons/bi';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { RiShareBoxFill } from 'react-icons/ri';
import SaveCollection from '../components/SaveCollection';
// import MoreInfo from '../MoreInfo';
// import '../../css/ImageDialog.css'; // Import your CSS file for styles

const ImageDetails = ({ isOpen, closeModal, images }) => {
    const [submitting, setIsSubmitting] = useState(false);
    const [collectionModal, setCollectionModal] = useState(false);
    const [moreInfoModal, setMoreInfoModal] = useState(false);

    const handleDownloadImage = async (imageUrl, suggestedFileName) => {
        try {
            const response = await fetch(imageUrl);
            if (!response.ok) throw new Error('Image download failed');

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = suggestedFileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            toast.success('Your download has started.');
        } catch {
            toast.error('Failed to download image, please try again.');
        }
    };

    return (
        <div className="breadcumnd__bannerattach ralt">
            <header className="header-section header__sectiontheme">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo-menu">
                            <a href="index.html" className="logo">
                                <img src="assets/img/logo/logo.png" alt="logo" />
                            </a>
                        </div>
                        <div className="menu__components d-flex align-content-center">
                            <button onClick={closeModal}>
                                <BiArrowBack />
                            </button>
                            <div className="nav-actions">
                                <button>
                                    {submitting ? (
                                        <AiOutlineLoading3Quarters className="animate-spin" />
                                    ) : (
                                        <BiHeart />
                                    )}
                                </button>
                                <button>
                                    <BiBookmark />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="images__detialswrap pt-60 pb-120">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="img__thumbdetails">
                                <img src={images.urls.full} className="w-100 mb-30" alt={images.description} />
                                <h4 className="title tites__head mb-30">
                                    {images.description || 'Image Description'}
                                </h4>
                                <div className="d-flex image__flexing mb-60">
                                    <div className="imgae__autor d-flex align-items-center">
                                        <img src={images.user?.profile_image?.large} className="autor round50" alt={images.user?.name} />
                                        <a href="author-page.html" className="content">
                                            <span className="fz-16 d-block fw-500 title">By: {images.user?.name}</span>
                                            <span className="fz-14 ftext">{images.user?.total_likes} likes</span>
                                        </a>
                                        <a href="javascript:void(0)" className="follow">Follow</a>
                                    </div>
                                    <ul className="social d-flex align-items-center">
                                        <li className="fz-16 fw-500 fbase">Share:</li>
                                        <li><a href="#0"><i className="fab fa-facebook"></i></a></li>
                                        <li><a href="#0"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#0"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                                <h4 className="title mb-20">Related tags</h4>
                                <ul className="related__tag gap-2 flex-wrap d-flex align-items-center">
                                    {images.tags?.map(tag => (
                                        <li key={tag.title}>
                                            <a href="javascript:void(0)" className="tcapi">{tag.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="image__details__sidebar">
                                <ul className="image__tags mb-60">
                                    {[
                                        { label: 'Image Type:', value: 'Jpg' },
                                        { label: 'Resolution:', value: `${images.width}×${images.height}` },
                                        { label: 'Published:', value: new Date(images.created_at).toLocaleDateString() },
                                        { label: 'Views:', value: images.views },
                                        { label: 'Downloads:', value: images.downloads }
                                    ].map(item => (
                                        <li key={item.label}>
                                            <a href="#0" className="d-flex align-items-center justify-content-between">
                                                <span className="title fw-500">{item.label}</span>
                                                <span className="title text-uppercase">{item.value}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={images.urls.full}
                                    className="cmn--btn d-flex gap-3 justify-content-center align-items-center"
                                    onClick={() => handleDownloadImage(images.urls.full, `image-${images.id}.jpg`)}
                                    download
                                >
                                    <span>Download Now</span>
                                    <span>
                                        <i className="material-symbols-outlined">cloud_download</i>
                                    </span>
                                </a>
                                <div className="checktag d-grid gap-3 mt-40">
                                    <a href="javascript:void(0)" className="d-flex align-items-center gap-2 ftext">
                                        <i className="material-symbols-outlined">done</i>
                                        <span>Free license</span>
                                    </a>
                                    <a href="javascript:void(0)" className="d-flex align-items-center gap-2 ftext">
                                        <i className="material-symbols-outlined">done</i>
                                        <span>Attribution is required</span>
                                    </a>
                                    <a href="javascript:void(0)" className="d-flex align-items-center gap-2 ftext">
                                        <i className="material-symbols-outlined">done</i>
                                        <span>File type: JPG</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SaveCollection isOpen={collectionModal} />
            {/*<MoreInfo isOpen={moreInfoModal} image={images} />*/}
        </div>
    );
};

export default ImageDetails;