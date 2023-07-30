import "./confess.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
const Confess = () => {
  // const [file, setFile] = useState(null);
  const [confession, setConfession] = useState("");

  

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newConfession) => {
      return makeRequest.post("/confessions", newConfession);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["confessions"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    // let imgUrl = "";
    // if (file) imgUrl = await upload();
    mutation.mutate({ confession });
    setConfession("");
    // setFile(null);
  };

  return (
    <div className="confess">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={currentUser.profilePic} alt="" />
            <input
              type="text"
              placeholder={`Click to Add a Confession`}
              onChange={(e) => setConfession(e.target.value)}
              value={confession}
            />
          </div>
          <div className="right">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="right">
            <button onClick={handleClick}> + </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confess;