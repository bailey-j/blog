import React from 'react'

export default function App() {
    return (
        <div class="container">
            <div class="section">
              <h4>Create New Post</h4>
              <div class="container">
                <form
                  class="col s12 center"
                  onSubmit={handleSubmit}
                  enctype="multipart/form-data"
                >
                  <div class="row">
                    <div class="file-field input-field">
                      <div class="btn blue darken-1 waves-effect">
                        <span>Upload Image</span>
                        <input
                          type="file"
                          name="imageUrl"
                          
                          value={imageUrl[0] && imageUrl[0].name}
                          onChange={handleChange}
                        />
                        {console.log(imageUrl.name && imageUrl.name.name)}
                      </div>
                      <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" />
                      </div>
                    </div>
                  </div>
                  <button
                    class="btn blue darken-1 waves-effect waves-light"
                    type="submit"
                    name="action"
                  >
                    Submit
                  </button>
                </form>
              </div>
              </div>
              </div>
    )
}


