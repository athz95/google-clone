import React from "react";
import "./searchpage.css";
import { useStateValue } from "../StateProvider";
import Search from "./Search";
import useGoogleSearch from "../useGoogleSearch";
import {Link} from "react-router-dom";
import Response from "../response";
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function SearchPage() {

  const [{ term }, dispatch] = useStateValue();

 // Live API CALL
 const { data } = useGoogleSearch(term);
  
   // Mock API CALL
  //const data = Response;

  console.log(data);

  return (
    <div className="searchpage">
      <div className="searchpage-header">
        <Link to="/">
            <img 
              className="searchpage-logo"
                  src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
            />
        </Link>

        <div className="searchpage-headerbody">
            <Search  hideButtons />
            
            <div className="searchpage-options">
                 <div className="searchpage-options-left">
                    <div className="searchpage-option">
                      <SearchIcon />
                      <Link to="/all">All</Link>
                    </div>
                    <div className="searchpage-option">
                      <DescriptionIcon />
                      <Link to="/all">News</Link>
                    </div>
                    <div className="searchpage-option">
                      <ImageIcon />
                      <Link to="/all">Images</Link>
                    </div>
                    <div className="searchpage-option">
                      <LocalOfferIcon />
                      <Link to="/all">Shopping</Link>
                    </div>
                    <div className="searchpage-option">
                      <RoomIcon />
                      <Link to="/all">Maps</Link>
                    </div>
                    <div className="searchpage-option">
                      <MoreVertIcon />
                      <Link to="/all">More</Link>
                    </div>

                 </div>

                 <div className="searchpage-options-right">
                 <div className="searchpage-option">
                      <Link to="/settings">Settings</Link>
                    </div>
                    <div className="searchpage-option">
                      <Link to="/tools">Tools</Link>
                    </div>
                 </div>
            </div>
        </div>
      </div>
       
       {term && (
      <div className="searchpage-results">
        <p className="searchpage-resultcount">
             About {data?.searchInformation.
             formattedTotalResults} results 
             ({data?.searchInformation.
             formattedSearchTime} seconds) 
             for {term}
        </p>

        {data?.items.map(
            item => (
                <div className="searchpage-result">
                <a href={item.link}> 
                {item.pagemap?.cse_image?.length > 0 &&
                 item.pagemap?.cse_image [0]?.src && (
                     <img className="searchpage-result-image"
                       src={
                           item.pagemap?.cse_image?.length >
                            0 && item.pagemap?.cse_image[0]?.src
                       }
                     />
                 ) }

                {item.displayLink} <ArrowDropDownIcon className="searchpage-arrow" />
                </a> 

                <a className="searchpage-result-title"
                   href={item.link} >
                   <h2>{item.title}</h2>
                </a>
                <p className="searchpage-result-snippet">
                   {item.snippet}
                </p>

              </div>

            )
        )}

      </div>
       )}
    </div>
  );
}

export default SearchPage;
