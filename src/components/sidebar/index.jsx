import React from 'react'
import  "../Sidebar/styles.css"

function SideBar() {
  return (
    <div ClassName="mainBody">
        <div ClassName="sidebar">
            <div ClassName="sidebar__categories">
                <div ClassName="sidebar__category">
                    <img src="/media/icons/Home-icon.png" alt="Home-icon"/>
                    <span>Home</span>
                </div>
                <div ClassName="sidebar__category">
                    <img src="/media/icons/Trending-icon.png" alt="Trending-icon"/>
                    <span>Trending</span>
                </div>
                <div ClassName="sidebar__category">
                    <img src="/media/icons/Compass.png" alt="Compass-explore-icon"/>
                    <span>Explore</span>
                </div>
                <div ClassName="sidebar__category">
                    <img src="/media/icons/Subscriptions.png" alt="Subcriptions-icon"/>
                    <span>Subcriptions</span>
                </div>
            </div>
            <hr></hr>
            <div ClassName="sidebar__sub-categories">
                <div ClassName="sidebar__category">
                    <img src="/media/icons/Library.png" alt="Library-icon"/>
                    <span>Library</span>
                </div>
                <div ClassName="sidebar__category">
                    <img src="/media/icons/History.png" alt="History-icon"/>
                    <span>History</span>
                </div>
                <div ClassName="sidebar__category">
                    <img src="/media/icons/Yourvideos.png" alt="Yourvideos-icon"/>
                    <span>Your Videos</span>
                </div>
                <div ClassName="sidebar__category">
                <img src="/media/icons/Watchlater.png" alt="Watchlater-icon"/>
                    <span>Watch Later</span>
                </div>
                <div ClassName="sidebar__category">
                <img src="/media/icons/Mylikes.png" alt="Mylikes-icon"/>
                    <span>Liked Videos</span>
                </div>
            </div>
            <hr></hr>
        </div>
    </div>
  )
}

export default SideBar;
