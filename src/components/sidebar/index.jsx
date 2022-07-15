import React from 'react'
import  "../Sidebar/styles.css"
import MaterialIcon from 'material-icons-react';

function SideBar() {
  return (
    <div ClassName="mainBody">
        <div ClassName="sidebar">
            <div ClassName="sidebar__categories">
                <div ClassName="sidebar__category">
                    <MaterialIcon icon="home" />
                    <span>Home</span>
                </div>
                <div ClassName="sidebar__category">
                    <MaterialIcon icon="local_fire_department" />
                    <span>Trending</span>
                </div>
                <div ClassName="sidebar__category">
                    <i ClassName="material-icons">home</i>
                    
                    <span>Suscriptions</span>
                </div>
                <div ClassName="sidebar__category">
                    <i ClassName="material-icons">subscriptions</i>
                    <MaterialIcon icon="" />
                    <span>Subscriptions</span>
                </div>
            </div>
            <hr></hr>
            <div ClassName="sidebar__sub-categories">
                <div ClassName="sidebar__category">
                    <MaterialIcon icon="library_add_check" />
                    <span>Library</span>
                </div>
                <div ClassName="sidebar__category">
                    <MaterialIcon icon="history" />
                    <span>History</span>
                </div>
                <div ClassName="sidebar__category">
                    <MaterialIcon icon="play_arrow" />
                    <span>Your Videos</span>
                </div>
                <div ClassName="sidebar__category">
                    <MaterialIcon icon="watch_later" />
                    <span>Watch Later</span>
                </div>
                <div ClassName="sidebar__category">
                    <MaterialIcon icon="thumb_up" />
                    <span>Liked Videos</span>
                </div>
            </div>
            <hr></hr>
        </div>
    </div>
  )
}

export default SideBar;
