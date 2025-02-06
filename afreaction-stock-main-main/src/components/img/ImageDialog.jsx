import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

// import { toast } from 'react-hot-toast';
import { BiArrowBack, BiBookmark, BiHeart } from 'react-icons/bi';
import {  BsFillInfoCircleFill } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { RiShareBoxFill } from 'react-icons/ri';
import SaveCollection from '../SaveCollection';
import MoreInfo from './MoreInfo';
import '../../css/ImageDialog.css';

const ImageDialog = ({ isOpen, closeModal, images }) => {
    // const [downloadToggle, setDownloadToggle] = useState(false);
    // const [active, setActive] = useState('original');
     const [moreInfoModal
        // , setMoreInfoModal
    ] = useState(false);
     const [collectionModal
        // , setCollectionModal
    ] = useState(false);
    // const [isFetchingCollections, setIsFetchingCollections] = useState(false);
     const [collections
        // , setCollections
    ] = useState([]);
     const [submitting
        // , setIsSubmitting
    ] = useState(false);

    // const handleDownloadImage = async (imageUrl, suggestedFileName) => {
    //     try {
    //         const response = await fetch(imageUrl);
    //         if (!response.ok) throw new Error('Image download failed');

    //         const blob = await response.blob();
    //         const url = window.URL.createObjectURL(blob);
    //         const a = document.createElement('a');
    //         a.href = url;
    //         a.download = suggestedFileName;
    //         document.body.appendChild(a);
    //         a.click();
    //         window.URL.revokeObjectURL(url);
    //         toast.success('Your download has started.');
    //     } catch {
    //         toast.error('Failed to download image, please try again.');
    //     }
    // };

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="image-dialog" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-enter"
                    enterTo="transition-enter-active"
                    leave="transition-exit"
                    leaveTo="transition-exit-active"
                >
                    <div className="dialog-backdrop" onClick={closeModal} />
                </Transition.Child>
                <div className="dialog-panel">
                    <div className="nav">
                        <button onClick={closeModal}>
                            <BiArrowBack />
                        </button>
                        <div className="nav-user">
                            {/*<img src={images.user.profile_image.large} alt={images.user.name} />*/}
                            <div>
                                {/*<p>{images.user.name}</p>*/}
                                {/*<p>@{images.user.username}</p>*/}
                            </div>
                        </div>
                        <div className="nav-actions">
                            <button>
                                {submitting ? <AiOutlineLoading3Quarters className="animate-spin" /> : <BiHeart />}
                            </button>
                            <button>
                                <BiBookmark />
                            </button>
                        </div>
                    </div>
                    <div className="image-container">
                        {/*<img src={images.urls.full} alt={images.description} />*/}
                    </div>
                    <div className="info-section">
                        <button>
                            <BsFillInfoCircleFill />
                            More Info
                        </button>
                        <button>
                            <RiShareBoxFill />
                            Share
                        </button>
                    </div>
                </div>
                <SaveCollection isOpen={collectionModal} collections={collections} />
                <MoreInfo isOpen={moreInfoModal} image={images} />
            </Dialog>
        </Transition>
    );
};

export default ImageDialog;
