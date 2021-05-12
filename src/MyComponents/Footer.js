import React from 'react'

export const Footer = () => {
    let footercss = {
        position : "relative",
        // top : "vh",
        width : "100%",
    }
    return (
        <footer className="bg-light text-dark text-center my-4" style={footercss}>
            <p>ToDo Footer</p>
        </footer>
    )
}
