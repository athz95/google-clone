import React from 'react';
import "./home.css";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from "@material-ui/core";


function Home() {
    return (
        <div className="home">
            
            <div className="home-header">
               <div className="home-header-left">
                  <Link to="about"> About </Link>
                  <Link to="store"> Store</Link>
               </div>

               <div className="home-header-right">
               <Link to="gmail"> Gmail </Link>
               <Link to="images"> Images</Link>
               <AppsIcon />
               <Avatar />
               </div>
            </div>

            <div className="home-body">
               <img 
                  src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
               />
               <div className="home-input-container">
                    <Search />
               </div>
            </div>
        </div>
    )
}

export default Home
