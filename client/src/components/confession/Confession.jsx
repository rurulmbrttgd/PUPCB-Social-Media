import "./confess.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
// import Comments from "../comments/Comments";
import { useState } from "react";
import moment from "moment";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Confession = ({confession }) => {

  // const { currentUser } = useContext(AuthContext);

  // const { isLoading, error, data } = useQuery(["likes", confess.id], () =>
  //   makeRequest.get("/likes?confessId=" + confess.id).then((res) => {
  //     return res.data;
  //   })
  // );

  // const queryClient = useQueryClient();
  // const deleteMutation = useMutation(
  //   (confessId) => {
  //     return makeRequest.delete("/confess/" + confessId);
  //   },
  //   {
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //       queryClient.invalidateQueries(["confess"]);
  //     },
  //   }
  // );
  // const handleDelete = () => {
  //   deleteMutation.mutate(confession.id);
  // };

  return (
    <div className="confess">
      <div className="container">
        <div className="content">
          <p>{confession.confession}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Confession;