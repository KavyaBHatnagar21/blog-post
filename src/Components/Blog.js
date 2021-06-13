import React from "react";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import db from "./../firebase";
import moment from "moment";

function Blog() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState("");

  useEffect(() => {
    db.collection("posts").doc(blogId).get().then(snapshot => setBlog(snapshot.data()))
  }, [blogId]);

  console.log("summary", blog?.summary);
  return (
    <div className="container">
      <div className=" mt-5 pt-5">
        <h1 className="text-center display-4">{blog?.title}</h1>
        <p className="text-center my-3 w-100">
          <img className="rounded mw-100 " src={blog?.image} alt="" style={{ height: "20rem" }} />
        </p>
        <div className="w-75 mx-auto">
          <p className="lead">
            {moment(new Date(blog?.date?.toDate())).fromNow()}
          </p>
          <p style={{ whiteSpace: 'pre-line' }}>
            {blog?.summary}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
