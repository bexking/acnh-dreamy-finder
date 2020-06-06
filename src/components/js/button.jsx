import React from 'react'
import '../css/button.css';

/*Followed tutorial by Skillthrive found at https://www.youtube.com/watch?v=JfNjGLGaxR4*/

const STYLES = [
    "btn--primary--solid",
    "btn--previous--solid",
    "btn--next--solid",
]

const SIZES = [
    "btn--large",
    "btn--medium",
    "btn--small",
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    disabled
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0];

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} disabled={disabled} onClick={onClick} type={type}>
            {children}
        </button>
    )

}
