import React from 'react'
import PropTypes from 'prop-types'
import { useState } from "react";
import Books from './Books';
import Contact from './Contact';
import Home from './Home';




export default function NavBar(props) {
  
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index)=> {
    setToggleState(index);
  }
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
                <a class={toggleState === 1 ? "nav-link active" : "nav-link"} aria-current="page" href="#" onClick={() => toggleTab(1)}>Home</a>
              </li>
              <li class="nav-item">
                <a class={toggleState === 2 ? "nav-link active" : "nav-link"} aria-current="page" href="#" onClick={() => toggleTab(2)}>Books</a>
              </li> 
              <li class="nav-item">
                <a class={toggleState === 3 ? "nav-link active" : "nav-link"} aria-current="page" href="#" onClick={() => toggleTab(3)}>Contact</a>
              </li>        
            </ul>
            </div>
        </div>
      </nav>
      <div>
        {toggleState === 1 &&
          <div class="container"><Home/></div>
        }
        {toggleState === 2 &&
          <div class="container"><Books/></div>
        }
        {toggleState === 3 &&
          <div class="container"><Contact/></div>
        }
      </div>
    </div>
  )
}
NavBar.propTypes = {title : PropTypes.string}