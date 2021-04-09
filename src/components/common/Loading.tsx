
import React from "react"
import './Loading.scss'
import LoadingIcon from "./icons/LoadingIcon"

export const Loading:React.FC = () => {
    return (
        <div className="overlay">
            <div className="overlay__content">
                <LoadingIcon />
                <span>Loading...</span>
            </div>
        </div>
    )
}

