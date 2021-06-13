import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import db from "./../firebase";
import moment from "moment";
import "./Body.css";
import { Link } from "react-router-dom";
function Body() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("date", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="body">
      <Container className="p-5">
        <h3 className="mt-5">Latest Post</h3>
        <Link
          to={`/blogs/${posts[0]?.id}`}
          className="text-reset text-decoration-none"
        >
          <Card className="bg-dark text-white mt-4 mb-3">
            <div
              className="main__image"
              style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${posts[0]?.data.image})`,
              }}
            ></div>

            <Card.ImgOverlay>
              <Card.Title>{posts[0]?.data.title}</Card.Title>
              <Card.Text>
                {/* {new Date(posts[posts.length - 1]?.date?.toDate()).toUTCString()} */}
                {moment(new Date(posts[0]?.data.date?.toDate())).fromNow()}
              </Card.Text>
              <Card.Text>{posts[0]?.data.summary.substring(0, 350).trim()}...</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Link>

        <h3 className="mt-5">Recent Posts</h3>
        <Row>
          {posts.map((post) => (

            <Col md={4}>
              <Link
                to={`/blogs/${post.id}`}
                className="text-reset text-decoration-none"
              >
                <Card className=" border-0">
                  <Card.Body>
                    <div
                      className="blogImage rounded mb-3"
                      style={{
                        backgroundImage: ` url(${post.data.image})`,
                      }}
                    ></div>
                    <Card.Title>{post?.data.title}</Card.Title>
                    <Card.Text>
                      {moment(new Date(post?.data.date?.toDate())).fromNow()}
                    </Card.Text>
                    <Card.Text>
                      {post.data.summary.substring(0, 100).trim()}...
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Body;
