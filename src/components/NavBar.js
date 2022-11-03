import React from 'react'
import PropTypes from 'prop-types'
export default function NavBar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a style = {{"padding-left": "120px"}} class="navbar-brand" href="#">{props.title}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Books</a>
        </li> 
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Contact</a>
        </li>        
      </ul>
      </div>
  </div>
</nav>
    </div>
  )
}
NavBar.propTypes = {title : PropTypes.string}