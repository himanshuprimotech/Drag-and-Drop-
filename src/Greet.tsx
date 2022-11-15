import React from 'react'

type GreetProps={
    name:string,
    styles:React.CSSProperties
}
const Greet = (props:GreetProps) => {
    const {name, styles}=props;
  return (
    <div style={styles}>
        Hello My name is  {name}
    </div>
  )
}

export default Greet