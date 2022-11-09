import React from 'react'

export default function Contact() {
  return (
    <div>
        <form style = {{"margin-top": "12px", "padding-left": "50px"}}>
            <div class="form-group my-3">
                <label  class="input-group-text" for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>                        
            <div class="form-group my-3">
                <label class="input-group-text" for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="my-3">
            <button type="submit" class="btn btn-primary mb-2">Send Mail</button>
            </div>
        </form>
    </div>
  )
}
