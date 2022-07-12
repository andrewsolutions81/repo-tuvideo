import react from 'react'

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
            <hr/>
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
                    <span>Liked Videos</span>
                </div>
            </div>
        </div>
        <hr/>
    </div>
  )
}

export default SideBar;