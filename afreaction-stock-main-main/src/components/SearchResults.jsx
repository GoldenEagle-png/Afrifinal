import '../css/css/SearchResults.css';
import { useLocation } from 'react-router-dom';
import PageNavBar from "./PageNavBar";
import SliderTab from "./SliderTab";
import Footer from "./Footer";
import PaginatedImageGallery from "./PaginatedImageGallery";

const SearchResults = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search).get('query');
  
  return (
    <div className='SearchResults'>
        <PageNavBar defaultQuery={query} />
        <SliderTab />
        <PaginatedImageGallery query={query} />
        <Footer />
    </div>
  )
}

export default SearchResults