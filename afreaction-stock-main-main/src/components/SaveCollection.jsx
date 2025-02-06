import React, { useState } from 'react';
import { BsX } from 'react-icons/bs';
import Img from 'react-image';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import toast from 'react-hot-toast';
// import { useSession } from 'next-auth/react';
import '../css/css/SaveCollection.css';

const SaveCollection = ({isOpen, setCollectionModal, collections, isFetchingCollections, imageProperties}) => {
    const [isCreateCollectionOpen, setIsCreateCollectionOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const {data:session} = useSession();
    const [collectionTitle, setCollectionTitle] = useState(null);
    const [collectionDesc, setCollectionDesc] = useState(null);
    const [isEmpty, setIsEmpty] = useState(true);
    const [isAddingToCollection, setIsAddingToCollection] = useState(false);
    const {urls, user, id, color, likes, description, created_at, updated_at, width, height} = imageProperties;

    const createCollection = async () => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/collections/new', {
                method: "POST",
                body: JSON.stringify({
                    // authorName: session?.user.name,
                    title: collectionTitle,
                    collectionDescription: collectionDesc,
                    content: [{urls, user, id, color, likes, description, created_at, updated_at, width, height}],
                    // userId: session?.user.id,
                })
            });

            if(response.ok){
                toast.success('Collection created successfully!');
            } else {
                toast.error('Could not create collection.');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsCreateCollectionOpen(false);
            setIsSubmitting(false);
        }
    };

    const addToCollection = async (collection) => {
        setIsAddingToCollection(true);
        try {
            const response = await fetch(`api/collections/${collection._id.toString()}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({imageProperties}),
            });

            if (response.ok) {
                toast.success('Image added to collection successfully!');
            } else {
                toast.error('Failed to add image to collection.');
                console.error('API error:', response.status, response.statusText);
            }
        } catch (error) {
            toast.error('Failed to add image to collection.');
            console.log(error);
        } finally {
            setIsAddingToCollection(false);
        }
    };

    const handleEmptyTitle = (e) => {
        setIsEmpty(e === '' || e === ' ');
    };

    return (
        <div className={`overlay ${isOpen ? 'flex' : 'hidden'}`}>
            <div className="modal">
                <button
                    className="close-button"
                    onClick={setCollectionModal}
                >
                    <BsX className='w-6 h-6'/>
                </button>
                <div className={`w-full h-full ${!isCreateCollectionOpen ? 'flex' : 'hidden'} flex-col justify-center items-start`}>
                    <h1 className='collection-title'>Add this Shot to a collection</h1>
                    <input
                        type="text"
                        placeholder='filter collections'
                        className='input'
                    />
                    <div className={`collection-list ${isFetchingCollections ? 'justify-center items-center' : ''}`}>
                        <AiOutlineLoading3Quarters className={`loading ${isAddingToCollection ? 'block' : 'hidden'}`}/>
                        {isFetchingCollections ? (
                            <div className='flex items-center gap-1'>
                                <p className='text-[15px] text-[#0d0c22] font-semibold'>Loading collections...</p>
                                <AiOutlineLoading3Quarters className="loading"/>
                            </div>
                        ) : (
                            collections.map((collection) => {
                                const {id, title, content} = collection;
                                const {urls, description} = content[content.length - 1];
                                return (
                                    <button key={id} onClick={() => addToCollection(collection)} className='relative p-2 md:p-3 w-full flex gap-3 items-center rounded-md outline-0 border-[1.5px] border-[#e7e7e9] hover:shadow-red-200 hover:shadow-sm focus:shadow-red-200 focus:shadow-sm'>
                                        <Img src={urls.small} alt={`collection cover image: ${description}`} width={50} height={50} className='rounded-md'/>
                                        <div className="flex flex-col gap-1 items-start">
                                            <p className='text-[15px] text-[#0d0c22] font-semibold'>{title}</p>
                                            <p className='text-[13px] text-[#6e6d7a] font-normal'>{content.length} shot</p>
                                        </div>
                                    </button>
                                );
                            })
                        )}
                    </div>
                    <div className="w-full flex justify-between items-center mt-5">
                        <button
                            onClick={() => setIsCreateCollectionOpen(true)}
                            className='button create-button'
                        >
                            Create a new collection
                        </button>
                        <button onClick={setCollectionModal} className='button cancel-button'>
                            Done
                        </button>
                    </div>
                </div>

                <div className={`w-full h-full ${isCreateCollectionOpen ? 'flex' : 'hidden'} flex-col justify-center`}>
                    <h1 className='text-lg md:text-xl font-medium mb-5 pb-3 border-b-[0.5px] border-gray-300 text-gray-800'>Create a new collection</h1>
                    <label htmlFor="name" className='text-sm md:text-[16px] font-medium text-gray-600'>Name</label>
                    <input
                        name='name'
                        type="text"
                        className='input'
                        onChange={(e) => {setCollectionTitle(e.target.value); handleEmptyTitle(e.target.value)}}
                    />
                    <label htmlFor="description" className='mt-3 text-sm md:text-[16px] font-medium text-gray-600'>Description (Optional)</label>
                    <textarea
                        rows='3'
                        name='description'
                        className='input'
                        onChange={(e) => setCollectionDesc(e.currentTarget.value)}
                    />
                    <div className="w-full flex justify-start gap-3 items-center mt-5">
                        { !isSubmitting ? (
                            <button
                                className={`button ${isEmpty ? 'create-collection-button' : 'create-button'}`}
                                onClick={createCollection}
                                disabled={isEmpty}
                            >
                                Create new collection
                            </button>
                        ) : (
                            <button
                                disabled={isSubmitting}
                                className='button create-button'
                            >
                                Creating collection <AiOutlineLoading3Quarters className="loading"/>
                            </button>
                        )}
                        <button
                            onClick={() => setIsCreateCollectionOpen(false)}
                            className='button cancel-button'
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaveCollection;