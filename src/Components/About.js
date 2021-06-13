import React from 'react'
import { Container } from "react-bootstrap";

function About() {
    return (
        <div className="mt-3 p-5">
            <Container>
                <h1 className="my-5">About Me</h1>
                <h3 className="my-4">Hi, my name is Kavya!</h3>
                <div className="d-flex">
                    <p>
                        I am a React developer and creator behind Kavya's Journal. My parents live far from us because
                        of my dad's job. Since lockdown I have to manage meals from breakfast to dinner by myself.
                        Also I think I have flair for cooking, I like experimenting with food and coming up with super tasty dishes.
                        <br />
                        So I thought of sharing this art with rest of the world.
                        All of my dishes, recipes and experiments will be recorded in my daily journal so that viewers could get idea and inspiration
                        and they could come up with these yummy dishes.
                    </p>
                    <img className="rounded mx-3" style={{ height: "25rem" }} src="https://pinchofyum.com/wp-content/assets/images/home-lindsay-pour.jpg" alt="" />
                </div>
            </Container>
        </div>
    )
}

export default About
