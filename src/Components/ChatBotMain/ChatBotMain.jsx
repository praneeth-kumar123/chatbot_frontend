import React from 'react'
import LeftComponent from '../LeftHeaderComponent/LeftComponent'
import RightHeaderComponent from '../RightHeaderComponent/RightHeaderComponent'
import "./chatBotMain.css"
const ChatBotMain = () => {
    return (
        <section id="userBlock">
                <article>
                    <h1>hello</h1>
                    <LeftComponent/>
                    <RightHeaderComponent/>
                </article>
            </section>
    )
}

export default ChatBotMain
