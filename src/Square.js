import React from 'react'

const Square = ({colorValue, hexValue, isDarkText}) => {
  return (
    <section className='square'
    style={{backgroundColor: colorValue, color: isDarkText ? "#000" : "#FFF"}}
    >
        <p><strong>{colorValue ? colorValue : "Empty value"}</strong></p>
        <p><strong>{hexValue ? hexValue : null}</strong></p>
    </section>
  )
}

Square.defaultProps = {
    colorValue: "Empty color Value"
}

export default Square