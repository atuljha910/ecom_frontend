import React from 'react'

export default function Books() {
  return (
    <div>
      <div style = {{"margin-top": "12px", "padding-left": "50px"}} class="input-group mb-3" >
        <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">Choose Genre</label>
        </div>
        <select style = {{"width":"500px"}} class="custom-select" id="inputGroupSelect01">
          <option selected>All Books</option>
          <option value="1">Sci-fi</option>
          <option value="2">Self help</option>
          <option value="3">Horror</option>
        </select>
      </div>
    </div>
  )
}
