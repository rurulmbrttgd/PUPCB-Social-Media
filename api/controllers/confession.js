import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getConfessions = (req, res) => {
  const userId = req.query.userId;
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    console.log(userId);

    const q = //`SELECT p.* FROM confessions AS p ORDER BY p.createdAt DESC`;
    `SELECT p.*, u.id AS userId, name FROM confessions AS p JOIN users AS u ON (u.id = p.userId)
    ORDER BY p.createdAt DESC`;
    //     : `SELECT p.*, u.id AS userId, name, profilePic FROM confessions AS p JOIN users AS u ON (u.id = p.userId)
    // LEFT JOIN relationships AS r ON (p.userId = r.subscribingUserId) WHERE r.subscriberUserId= ? OR p.userId =?
    // ORDER BY p.createdAt DESC`;

    // const values =
    // userId !== "undefined" ? [userId] : [userInfo.id];

    db.query(q,(err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};

export const addConfession = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO confessions(`confession`,`createdAt`, `userId`, `note_design`, `title`, `anonymous`) VALUES (?)";
    const values = [
      req.body.confession,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
      req.body.selectedButton,
      req.body.title,
      req.body.anonymous,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Confession has been posted.");
    });
  });
};
export const deleteConfession = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "DELETE FROM confessions WHERE `id`=? AND `userId` = ?";

    db.query(q, [req.params.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      if(data.affectedRows>0) return res.status(200).json("Post has been deleted.");
      return res.status(403).json("You can delete only your post")
    });
  });
}; 