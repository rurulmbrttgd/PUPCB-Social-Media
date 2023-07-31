import "./confession.scss";
import { Helmet } from 'react-helmet';

const Confession = ({ post }) => {


  return (
    <div className={`post ${post.note_design === 0 ? 'note-design-a' : post.note_design === 1 ?  'note-design-b' : post.note_design === 2  ?  'note-design-c' :''}`}>
      <Helmet>
        <title>Confession Hall</title>
      </Helmet>
      <div className="container">
        <div className="content">
          <h3>{post.title}</h3>
          <p>{post.confession}</p>
          <p>-{`${post.anonymous === 0 ? post.name : 'Anonymous' }`}</p>
        </div>
      </div>
    </div>
  );
};

export default Confession;