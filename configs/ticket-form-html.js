export const getTicketForm =(id) =>{
  const formData = ` <form class="form-container" id="ivf6">
  <div data-mytext="MyText" id="i54a">Sample Form
  </div>
  <div class="form-row" id="i574">
    <div class="form-cell">
      <div class="form-field" id="is38">
        <label data-mytext="MyText">Name</label>
        <input type="text" name="name" id="iqax"/>
      </div>
    </div>
  </div>
  <div class="form-row" id="i6duu">
    <div class="form-cell">
      <div class="form-field" id="is2f6">
        <label data-mytext="MyText">Title</label>
        <input type="text" name="title" id="ixoge"/>
      </div>
    </div>
  </div>
  <div class="form-row" id="i2w5g">
    <div class="form-cell">
      <div title="Customer" class="form-field" id="i0bwl">
        <label data-mytext="MyText">Customer</label>
        <select type="text" name="customer" id="izjzf"><option value="opt1">Customer 1</option><option value="opt2">Customer 2</option></select>
      </div>
    </div>
  </div>
  <div class="form-row" id="i9w79">
    <div class="form-cell">
      <div class="form-field" id="ied8o">
        <label data-mytext="MyText">Description</label>
        <textarea name="description" rows="4"></textarea>
      </div>
    </div>
  </div>
  <div class="form-row" id="ibgop">
    <button type="reset" class="muiButton-primary">Reset</button>
    <button type="submit" class="muiButton-primary">Submit</button>
  </div>
</form>`
  const cssFormData = `<style>* {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  *{
    box-sizing:border-box;
  }
  body{
    margin-top:0px;
    margin-right:0px;
    margin-bottom:0px;
    margin-left:0px;
  }
  #ivf6{
    min-height:100vh;
    padding-top:10px;
    padding-right:10px;
    padding-bottom:10px;
    padding-left:10px;
  }
  .form-cell{
    min-height:75px;
    flex-grow:1;
    flex-basis:100%;
  }
  .muiButton-primary{
    display:inline-flex;
    -webkit-box-align:center;
    align-items:center;
    -webkit-box-pack:center;
    justify-content:center;
    position:relative;
    box-sizing:border-box;
    -webkit-tap-highlight-color:transparent;
    outline-color:initial;
    outline-style:initial;
    outline-width:0px;
    border-top-width:0px;
    border-right-width:0px;
    border-bottom-width:0px;
    border-left-width:0px;
    border-top-style:initial;
    border-right-style:initial;
    border-bottom-style:initial;
    border-left-style:initial;
    border-top-color:initial;
    border-right-color:initial;
    border-bottom-color:initial;
    border-left-color:initial;
    border-image-source:initial;
    border-image-slice:initial;
    border-image-width:initial;
    border-image-outset:initial;
    border-image-repeat:initial;
    margin-top:0px;
    margin-right:0px;
    margin-bottom:0px;
    margin-left:0px;
    cursor:pointer;
    user-select:none;
    vertical-align:middle;
    appearance:none;
    text-decoration-line:none;
    text-decoration-thickness:initial;
    text-decoration-style:initial;
    text-decoration-color:initial;
    font-family:Roboto, Helvetica, Arial, sans-serif;
    font-weight:500;
    font-size:0.875rem;
    line-height:1.75;
    letter-spacing:0.02857em;
    text-transform:uppercase;
    min-width:64px;
    padding-top:6px;
    padding-right:16px;
    padding-bottom:6px;
    padding-left:16px;
    border-top-left-radius:4px;
    border-top-right-radius:4px;
    border-bottom-right-radius:4px;
    border-bottom-left-radius:4px;
    transition-duration:250ms, 250ms, 250ms, 250ms;
    transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay:0ms, 0ms, 0ms, 0ms;
    transition-property:background-color, box-shadow, border-color, color;
    color:rgb(255, 255, 255);
    background-color:rgb(25, 118, 210);
    box-shadow:rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  }
  .muiButton-primary:hover{
    text-decoration-line:none;
    text-decoration-thickness:initial;
    text-decoration-style:initial;
    text-decoration-color:initial;
    background-color:rgb(21, 101, 192);
    box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  }
  #i54a{
    text-align:center;
    width:100%;
  }
  #i574{
    min-height:60px;
    width:100%;
    padding:10px;
    display:flex;
    position:relative;
    overflow:hidden;
  }
  #is38{
    display:flex;
    flex-direction:column;
    padding:8px;
    gap:10px;
    width:100%;
  }
  #iqax{
    display:block;
    padding:0.375rem 0.75rem;
    fontSize:1rem;
    fontWeight:400;
    lineHeight:1.5;
    color:#212529;
    background-color:#FFFFFF;
    background-clip:padding-box;
    border:1px solid #CED4DA;
    appearance:none;
    border-radius:0.25rem;
    transition:background-color 0.05s ease-in-out, border-color 0.05s ease-in-out, box-shadow 0.05s ease-in-out;
  }
  #i6duu{
    min-height:60px;
    width:100%;
    padding:10px;
    display:flex;
    position:relative;
    overflow:hidden;
  }
  #is2f6{
    display:flex;
    flex-direction:column;
    padding:8px;
    gap:10px;
    width:100%;
  }
  #ixoge{
    display:block;
    padding:0.375rem 0.75rem;
    fontSize:1rem;
    fontWeight:400;
    lineHeight:1.5;
    color:#212529;
    background-color:#FFFFFF;
    background-clip:padding-box;
    border:1px solid #CED4DA;
    appearance:none;
    border-radius:0.25rem;
    transition:background-color 0.05s ease-in-out, border-color 0.05s ease-in-out, box-shadow 0.05s ease-in-out;
  }
  #i9w79{
    min-height:60px;
    width:100%;
    padding:10px;
    display:flex;
    position:relative;
    overflow:hidden;
  }
  #ied8o{
    display:flex;
    flex-direction:column;
    padding:8px;
    gap:10px;
    width:100%;
  }
  #ibgop{
    min-height:60px;
    width:100%;
    padding:10px;
    display:flex;
    position:relative;
    overflow:hidden;
    justify-content:flex-end;
    gap:10px;
  }
  #i2w5g{
    min-height:60px;
    width:100%;
    padding:10px;
    display:flex;
    position:relative;
    overflow:hidden;
  }
  #i0bwl{
    display:flex;
    flex-direction:column;
    padding:8px;
    gap:10px;
    width:100%;
  }
  #izjzf{
    display:block;
    padding:0.375rem 0.75rem;
    fontSize:1rem;
    fontWeight:400;
    lineHeight:1.5;
    color:#212529;
    background-color:#FFFFFF;
    background-clip:padding-box;
    border:1px solid #CED4DA;
    appearance:none;
    border-radius:0.25rem;
    transition:background-color 0.05s ease-in-out, border-color 0.05s ease-in-out, box-shadow 0.05s ease-in-out;
  }
  </style>`

  return cssFormData  +  formData
}