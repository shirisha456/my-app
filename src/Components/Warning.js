import React from 'react'

function Warning(props) {
  return (
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
   <strong>{props.alert}</strong> 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Warning
