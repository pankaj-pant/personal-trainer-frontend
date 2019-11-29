import { useState } from 'react'

function useToggleState(intitalVal = false) {
  const[state, setState] = useState(intitalVal)
  const toggle = () => {
    setState(!state)
  }

  return [state, toggle]
}

export default useToggleState
