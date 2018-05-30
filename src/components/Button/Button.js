import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

export default class Button extends Component {
  render() {
    const { type, children } = this.props
    const styleChoice = styles[type ? type : styles.default]
    return (
      <StyledButton style={Object.assign({}, btnBase, styleChoice)}>
        {children}
      </StyledButton>
    )
  }
}

let btnBase = {
  padding: 12,
  borderRadius: "2.4rem",
  cursor: "pointer",
  textTransform: "uppercase",
  height: 50,
  fontWeight: 100,
  fontSize: ".86rem",
  minWidth: "14rem",
  outline: "none"
}

let white = {
  border: ".219rem solid transparent",
  borderColor: "#f1f4f6",
  fontWeight: "bold"
}

let pink = {
  backgroundColor: "#e24f54",
  color: "white",
  outline: "none"
}

const StyledButton = styled.button`
  color: #282a2d;
  outline: none;
  background-color: #fff;
`
let styles = {
  white: white,
  pink: pink,
  default: btnBase
}