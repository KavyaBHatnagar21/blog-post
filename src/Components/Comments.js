import React, { useState, useEffect } from 'react'
import { Divider } from '@material-ui/core';
import { Form, Container, Button } from "react-bootstrap";

import { useStateValue } from './../StateProvider'
import { useParams } from 'react-router-dom';
import db from './../firebase';
import firebase from 'firebase/app';
import moment from "moment";

function Comments() {
    const [{ user },] = useStateValue();
    const [comments, setComments] = useState([]);
    const [input, setInput] = useState("");
    const { blogId } = useParams();

    useEffect(() => {
        db.collection("posts").doc(blogId).collection("comments").orderBy("date", "asc")
            .onSnapshot((snapshot) => setComments(snapshot.docs.map((doc) => doc.data())))
    }, [blogId])

    const postComment = (e) => {
        e.preventDefault();
        db.collection("posts").doc(blogId).collection("comments").add({
            comment: input,
            name: user?.displayName,
            date: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
    }

    return (
        <div>
            <Container className="my-5">
                <div className="my-5 p-3">
                    <div className="my-5 m-auto w-25">
                        <Divider />
                    </div>
                </div>
                <h3>{comments.length} Comments</h3>
                {user ? (
                    <form>
                        <div className="d-flex my-3 w-50">
                            <Form.Control type="text" value={input}
                                onChange={e => setInput(e.target.value)}
                                placeholder="Comment..." className="mr-3" />
                            <Button onClick={postComment} type="submit" variant="secondary">Post</Button>
                        </div>
                    </form>) : (
                    <form>
                        <div className="d-flex my-3 w-50">
                            <Form.Control placeholder="You need to login to Comment..." className="mr-3" />

                        </div>
                    </form>
                )}
                {
                    comments.map((comment) => (
                        <div>
                            <div className="my-5">
                                <Divider />
                            </div>
                            <div className="userComment">
                                <div className="userInfo">
                                    <div className="userName d-flex">

                                        <h3 className="lead">{comment.name}</h3>
                                    </div>

                                    <p style={{ fontSize: "14px" }}>
                                        {moment(new Date(comment?.date?.toDate())).fromNow()}
                                    </p>
                                </div>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                    ))
                }

            </Container>
        </div>
    )
}

export default Comments;
