import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {

    let [title, setTitle] = useState("")

    const addTask = () => {
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTask()
        }
    }

    return (
        <div>
            <div className={s.userMessages}>
                <div className={s.userAvatar}>
                    <img src={props.avatar} alt=""/>
                </div>
                <div className={s.userMessage}>
                    <div className={s.arrow}>
                        <div className={s.arrowHead}></div>
                        <div className={s.circle}></div>
                    </div>
                    <div className={s.messageBody}>
                        <div className={s.userName}>{props.name}</div>
                        <div className={s.userTextMessage}>{props.message}</div>
                        <div className={s.userMessageTime}>{props.time}</div>
                    </div>
                </div>
            </div>
            <div className={s.inputArea}>
                <input placeholder={'Add a new message...'}
                       value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                />
                <button onClick={addTask}>Send</button>
            </div>
        </div>
    )
}

export default Message
