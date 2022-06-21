import React from 'react'
import Select from "react-select";

export const ReduxSelectForm = (props) => {
    const {input, options} = props
  return (
    <Select 
        {...input}
        onChange={value => input.onChange(value)}
        onBlur={() => input.onBlur(input.value)}
        options={options}
    />
  )
}
