import React from 'react'

function MemoComp(props) {
  const { name } = props
  console.log('Rendering Memo Component')
  return <div>{name}</div>
}

export default React.memo(MemoComp)
