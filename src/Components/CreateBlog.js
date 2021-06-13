import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import db from "./../firebase";
import firebase from 'firebase/app';

function CreateBlog() {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            date: firebase.firestore.FieldValue.serverTimestamp(),
            title: title,
            image: image,
            summary: content,
        });

        setTitle("");
        setImage("");
        setContent("");
    }

    return (
        <div className="my-5 p-3">
            <Container>
                <form>
                    <div className="my-3">
                        <Form.Label className="my-3">Title</Form.Label>
                        <Form.Control
                            placeholder="Enter title"
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)} />

                        <Form.Label className="my-3">Image</Form.Label>
                        <Form.Control
                            placeholder="Enter Image URL"
                            type="text"
                            value={image}
                            onChange={e => setImage(e.target.value)}
                        />

                        <Form.Label className="my-3">Enter Content</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={10}
                            placeholder="Write your blog!"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                        />

                        <Button className="my-3" variant="secondary" type="submit" onClick={sendPost}>
                            Post
                        </Button>
                    </div>
                </form>
            </Container>
        </div>
    );
}

export default CreateBlog;
