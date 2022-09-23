import React from 'react'

const ButtonComponent = ({text}) => {
  return (
    <div className="button-comp">
      <button>
        {text}
      </button>
    </div>
  )
}

export default ButtonComponent