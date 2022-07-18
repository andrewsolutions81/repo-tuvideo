<<<<<<< HEAD
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
=======
function SideBar() {
  return (
    <div ClassName="sidebars">
        <div ClassName="main-sidebar">
            <div ClassName="main-sidebar__categories">
                <div ClassName="main-sidebar__category">
                    <i ClassName="material-icons">home</i>
                    <span>Home</span>
                </div>
                <div ClassName="main-sidebar__category">
                    <i ClassName="material-icons">local_fire_department</i>
                    <span>Trending</span>
                </div>
                <div ClassName="main-sidebar__category">
                    <i ClassName="material-icons">home</i>
                    <span>Suscriptions</span>
                </div>
                <div ClassName="main-sidebar__category">
                    <i ClassName="material-icons">subscriptions</i>
                    <span>Subscriptions</span>
                </div>
            </div>
            <hr></hr>
            <div ClassName="main-sidebar__sub-categories">
                <div ClassName="main-sidebar__category">
                    <i ClassName="material-icons">library_add_check</i>
                    <span>Library</span>
                </div>
                <div ClassName="main-sidebar__category">
                    <i ClassName="material-icons">history</i>
                    <span>History</span>
                </div>
                <div ClassName="main-sidebar__category">
                    <i ClassName="material-icons">play_arrow</i>
                    <span>Your Videos</span>
                </div>
                <div ClassName="main-sidebar__category">
                    <i ClassName="material-icons">watch_later</i>
                    <span>Watch Later</span>
                </div>
                <div ClassName="main-sidebar__category">
                    <i ClassName="material-icons">thumb_up</i>
>>>>>>> b6e72d7 (feat fix sidebar, work in progress (#27))
                    <span>Liked Videos</span>
                </div>
            </div>
            <hr></hr>
        </div>
    </div>
  )
}

export default SideBar;
