// import Stories from "../../components/stories/Stories"
import Confessions from "../../components/confessions/confessions"
// import Share from "../../components/share/Share"
import "./confession.scss"


const Confession = () => {
  return (
    <div className='navbar'>
        {/* <Navbar1 /> */}
        <div className={styles.container}>
            <div className='sidebar'>
                {/* <Sidebar /> */}
            </div>
            <div className='container'>
               
                <Confessions />
            </div>
            <div className='right-side'>
                {/* <People /> */}
            </div>
        </div>
    </div>
  );
}

export default Confession