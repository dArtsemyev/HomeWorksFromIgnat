import React from 'react'
import s from "./Affair.module.css"
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    id: number
    name: string
    priority: string
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => { // need to fix
        props.deleteAffairCallback(props.id)
    }

    return (
        <div className={s.affairInfo}>
            <div className={s.item}>
                {props.id}
            </div>
            <div className={s.item}>
                {props.name}
            </div>
            <div className={`${s.item} + ${props.priority === "high" ? s.high : (props.priority === "middle" ? s.middle : s.low)}`}>
                {props.priority}
            </div>
            <div>
                <button onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
