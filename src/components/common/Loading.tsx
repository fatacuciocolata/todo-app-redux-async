
import React from "react"
import './Loading.scss'
import LoadingIcon from "./icons/LoadingIcon"

export const Loading:React.FC = () => {
    return (
        <>
            <div className="loading__background"></div>
            <div className="loading__content">
                <LoadingIcon /> <span>Loading...</span>
            </div>
        </>
    )
}

