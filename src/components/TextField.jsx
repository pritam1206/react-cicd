import React from 'react'
import './inputfield.css'

export default function TextField(props) {
    return (
        <React.Fragment><input value={props.value} readOnly />
        </React.Fragment>
    )
}
