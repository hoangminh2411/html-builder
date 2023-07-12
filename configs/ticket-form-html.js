export const getTicketForm =(id) =>{
  const formData = `<form class="form-container" id="ih8p">
  <div class="form-field" id="ith43">
    <label data-mytext="MyText">Subject<span data-mytext="MyText" id="i0s88">*</span></label>
    <input type="text" name="subject" required id="igt4p"/>
  </div>
  <div class="form-row" id="ieb8">
    <div class="form-cell" id="iiwn">
      <div class="form-field" id="ia33">
        <label data-mytext="MyText" id="ic2am">Ticket Id</label>
        <input type="text" id="id8ek" readonly="" class="text-field"/>
      </div>
    </div>
    <div class="form-cell" id="i2fr2">
      <div class="form-field" id="i2lt9">
        <label data-mytext="MyText" id="ialgs">Priority</label>
        <input type="text" id="ix8f2"/>
      </div>
    </div>
  </div>
  <div class="form-row" id="iqkyl">
    <div class="form-cell">
      <div class="form-field" title="Customer" id="i1dmk">
        <label data-mytext="MyText">Customer</label>
        <select type="text" id="i05p1" name="customer"><option value="opt1">Option 1</option><option value="opt2">Option 2</option></select>
      </div>
    </div>
    <div class="form-cell">
      <div class="form-field" title="Assigned Rep" id="ibtig">
        <label data-mytext="MyText">Assigned Rep</label>
        <select type="text" id="iah8l" name="assignedUser"><option value="opt1">User 1</option><option value="opt2">user 2</option></select>
      </div>
    </div>
  </div>
  <div class="form-field" id="ia1yg">
    <label data-mytext="MyText" id="isad9">Content<span data-mytext="MyText" id="iqo7i" draggable="true">*</span></label>
    <textarea name="content" required id="ixo63"></textarea>
  </div>
  <div class="form-field" id="ir9do">
    <label data-mytext="MyText">Description</label>
    <textarea name="description" id="ium8j"></textarea>
  </div>
  <div class="form-row" id="ivnzg">
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
  *{
    box-sizing:border-box;
  }
  body{
    margin-top:0px;
    margin-right:0px;
    margin-bottom:0px;
    margin-left:0px;
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
  .text-field{
    font-style:inherit;
    font-variant-ligatures:inherit;
    font-variant-caps:inherit;
    font-variant-numeric:inherit;
    font-variant-east-asian:inherit;
    font-weight:inherit;
    font-stretch:inherit;
    font-size:inherit;
    line-height:inherit;
    font-family:inherit;
    font-optical-sizing:inherit;
    font-kerning:inherit;
    font-feature-settings:inherit;
    font-variation-settings:inherit;
    letter-spacing:inherit;
    color:currentcolor;
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
    box-sizing:content-box;
    background-image:none;
    background-position-x:initial;
    background-position-y:initial;
    background-size:initial;
    background-repeat-x:initial;
    background-repeat-y:initial;
    background-attachment:initial;
    background-origin:initial;
    background-clip:initial;
    background-color:initial;
    height:1.4375em;
    margin-top:0px;
    margin-right:0px;
    margin-bottom:0px;
    margin-left:0px;
    -webkit-tap-highlight-color:transparent;
    display:block;
    min-width:0px;
    width:100%;
    animation-name:mui-auto-fill-cancel;
    animation-duration:10ms;
    padding-top:10.5px;
    padding-right:14px;
    padding-bottom:10.5px;
    padding-left:12px;
  }
  div{
    font-family:Roboto, sans-serif;
  }
  #ih8p{
    min-height:100vh;
    padding-top:10px;
    padding-right:10px;
    padding-bottom:10px;
    padding-left:10px;
  }
  #ieb8{
    min-height:60px;
    width:100%;
    display:flex;
    position:relative;
    padding-top:10px;
    padding-right:10px;
    padding-bottom:10px;
    padding-left:10px;
    overflow-x:hidden;
    overflow-y:hidden;
    padding:10px;
    overflow:hidden;
  }
  #ia33{
    display:flex;
    flex-direction:column;
    padding-top:8px;
    padding-right:8px;
    padding-bottom:8px;
    padding-left:8px;
    row-gap:10px;
    column-gap:10px;
    width:100%;
  }
  #id8ek{
    display:block;
    color:#212529;
    background-color:#FFFFFF;
    background-clip:padding-box;
    appearance:none;
    width:445px;
    padding-top:0.375rem;
    padding-right:0.75rem;
    padding-bottom:0.375rem;
    padding-left:0.75rem;
    border-top-width:1px;
    border-right-width:1px;
    border-bottom-width:1px;
    border-left-width:1px;
    border-top-style:solid;
    border-right-style:solid;
    border-bottom-style:solid;
    border-left-style:solid;
    border-top-color:rgb(206, 212, 218);
    border-right-color:rgb(206, 212, 218);
    border-bottom-color:rgb(206, 212, 218);
    border-left-color:rgb(206, 212, 218);
    border-image-source:initial;
    border-image-slice:initial;
    border-image-width:initial;
    border-image-outset:initial;
    border-image-repeat:initial;
    border-top-left-radius:0.25rem;
    border-top-right-radius:0.25rem;
    border-bottom-right-radius:0.25rem;
    border-bottom-left-radius:0.25rem;
    transition-duration:0.05s, 0.05s, 0.05s;
    transition-timing-function:ease-in-out, ease-in-out, ease-in-out;
    transition-delay:0s, 0s, 0s;
    transition-property:background-color, border-color, box-shadow;
    padding:0.375rem 0.75rem;
    fontSize:1rem;
    fontWeight:400;
    lineHeight:1.5;
    border:1px solid #CED4DA;
    border-radius:0.25rem;
    transition:background-color 0.05s ease-in-out, border-color 0.05s ease-in-out, box-shadow 0.05s ease-in-out;
  }
  #i2lt9{
    display:flex;
    flex-direction:column;
    padding-top:8px;
    padding-right:8px;
    padding-bottom:8px;
    padding-left:8px;
    row-gap:10px;
    column-gap:10px;
    width:248.86%;
  }
  #ix8f2{
    display:block;
    color:#212529;
    background-color:#FFFFFF;
    background-clip:padding-box;
    appearance:none;
    padding-top:0.375rem;
    padding-right:0.75rem;
    padding-bottom:0.375rem;
    padding-left:0.75rem;
    border-top-width:1px;
    border-right-width:1px;
    border-bottom-width:1px;
    border-left-width:1px;
    border-top-style:solid;
    border-right-style:solid;
    border-bottom-style:solid;
    border-left-style:solid;
    border-top-color:rgb(206, 212, 218);
    border-right-color:rgb(206, 212, 218);
    border-bottom-color:rgb(206, 212, 218);
    border-left-color:rgb(206, 212, 218);
    border-image-source:initial;
    border-image-slice:initial;
    border-image-width:initial;
    border-image-outset:initial;
    border-image-repeat:initial;
    border-top-left-radius:0.25rem;
    border-top-right-radius:0.25rem;
    border-bottom-right-radius:0.25rem;
    border-bottom-left-radius:0.25rem;
    transition-duration:0.05s, 0.05s, 0.05s;
    transition-timing-function:ease-in-out, ease-in-out, ease-in-out;
    transition-delay:0s, 0s, 0s;
    transition-property:background-color, border-color, box-shadow;
    padding:0.375rem 0.75rem;
    fontSize:1rem;
    fontWeight:400;
    lineHeight:1.5;
    border:1px solid #CED4DA;
    border-radius:0.25rem;
    transition:background-color 0.05s ease-in-out, border-color 0.05s ease-in-out, box-shadow 0.05s ease-in-out;
  }
  #ith43{
    display:flex;
    flex-direction:column;
    padding-top:8px;
    padding-right:8px;
    padding-bottom:8px;
    padding-left:8px;
    row-gap:10px;
    column-gap:10px;
    width:100%;
  }
  #i0s88{
    color:red;
  }
  #igt4p{
    display:block;
    color:#212529;
    background-color:#FFFFFF;
    background-clip:padding-box;
    appearance:none;
    padding-top:0.375rem;
    padding-right:0.75rem;
    padding-bottom:0.375rem;
    padding-left:0.75rem;
    border-top-width:1px;
    border-right-width:1px;
    border-bottom-width:1px;
    border-left-width:1px;
    border-top-style:solid;
    border-right-style:solid;
    border-bottom-style:solid;
    border-left-style:solid;
    border-top-color:rgb(206, 212, 218);
    border-right-color:rgb(206, 212, 218);
    border-bottom-color:rgb(206, 212, 218);
    border-left-color:rgb(206, 212, 218);
    border-image-source:initial;
    border-image-slice:initial;
    border-image-width:initial;
    border-image-outset:initial;
    border-image-repeat:initial;
    border-top-left-radius:0.25rem;
    border-top-right-radius:0.25rem;
    border-bottom-right-radius:0.25rem;
    border-bottom-left-radius:0.25rem;
    transition-duration:0.05s, 0.05s, 0.05s;
    transition-timing-function:ease-in-out, ease-in-out, ease-in-out;
    transition-delay:0s, 0s, 0s;
    transition-property:background-color, border-color, box-shadow;
    padding:0.375rem 0.75rem;
    fontSize:1rem;
    fontWeight:400;
    lineHeight:1.5;
    border:1px solid #CED4DA;
    border-radius:0.25rem;
    transition:background-color 0.05s ease-in-out, border-color 0.05s ease-in-out, box-shadow 0.05s ease-in-out;
  }
  #ia1yg{
    display:flex;
    flex-direction:column;
    padding-top:8px;
    padding-right:8px;
    padding-bottom:8px;
    padding-left:8px;
    row-gap:10px;
    column-gap:10px;
    width:100%;
  }
  #ir9do{
    display:flex;
    flex-direction:column;
    padding-top:8px;
    padding-right:8px;
    padding-bottom:8px;
    padding-left:8px;
    row-gap:10px;
    column-gap:10px;
    width:100%;
  }
  #i1dmk{
    display:flex;
    flex-direction:column;
    padding-top:8px;
    padding-right:8px;
    padding-bottom:8px;
    padding-left:8px;
    row-gap:10px;
    column-gap:10px;
    width:100%;
  }
  #ibtig{
    display:flex;
    flex-direction:column;
    padding-top:8px;
    padding-right:8px;
    padding-bottom:8px;
    padding-left:8px;
    row-gap:10px;
    column-gap:10px;
    width:377.62%;
  }
  #i05p1{
    display:block;
    padding-top:0.375rem;
    padding-right:0.75rem;
    padding-bottom:0.375rem;
    padding-left:0.75rem;
    color:#212529;
    background-color:#FFFFFF;
    background-clip:padding-box;
    border-top-width:1px;
    border-right-width:1px;
    border-bottom-width:1px;
    border-left-width:1px;
    border-top-style:solid;
    border-right-style:solid;
    border-bottom-style:solid;
    border-left-style:solid;
    border-top-color:rgb(206, 212, 218);
    border-right-color:rgb(206, 212, 218);
    border-bottom-color:rgb(206, 212, 218);
    border-left-color:rgb(206, 212, 218);
    border-image-source:initial;
    border-image-slice:initial;
    border-image-width:initial;
    border-image-outset:initial;
    border-image-repeat:initial;
    appearance:none;
    border-top-left-radius:0.25rem;
    border-top-right-radius:0.25rem;
    border-bottom-right-radius:0.25rem;
    border-bottom-left-radius:0.25rem;
    transition-duration:0.05s, 0.05s, 0.05s;
    transition-timing-function:ease-in-out, ease-in-out, ease-in-out;
    transition-delay:0s, 0s, 0s;
    transition-property:background-color, border-color, box-shadow;
    padding:0.375rem 0.75rem;
    fontSize:1rem;
    fontWeight:400;
    lineHeight:1.5;
    border:1px solid #CED4DA;
    border-radius:0.25rem;
    transition:background-color 0.05s ease-in-out, border-color 0.05s ease-in-out, box-shadow 0.05s ease-in-out;
  }
  #iah8l{
    display:block;
    padding-top:0.375rem;
    padding-right:0.75rem;
    padding-bottom:0.375rem;
    padding-left:0.75rem;
    color:#212529;
    background-color:#FFFFFF;
    background-clip:padding-box;
    border-top-width:1px;
    border-right-width:1px;
    border-bottom-width:1px;
    border-left-width:1px;
    border-top-style:solid;
    border-right-style:solid;
    border-bottom-style:solid;
    border-left-style:solid;
    border-top-color:rgb(206, 212, 218);
    border-right-color:rgb(206, 212, 218);
    border-bottom-color:rgb(206, 212, 218);
    border-left-color:rgb(206, 212, 218);
    border-image-source:initial;
    border-image-slice:initial;
    border-image-width:initial;
    border-image-outset:initial;
    border-image-repeat:initial;
    appearance:none;
    border-top-left-radius:0.25rem;
    border-top-right-radius:0.25rem;
    border-bottom-right-radius:0.25rem;
    border-bottom-left-radius:0.25rem;
    transition-duration:0.05s, 0.05s, 0.05s;
    transition-timing-function:ease-in-out, ease-in-out, ease-in-out;
    transition-delay:0s, 0s, 0s;
    transition-property:background-color, border-color, box-shadow;
    padding:0.375rem 0.75rem;
    fontSize:1rem;
    fontWeight:400;
    lineHeight:1.5;
    border:1px solid #CED4DA;
    border-radius:0.25rem;
    transition:background-color 0.05s ease-in-out, border-color 0.05s ease-in-out, box-shadow 0.05s ease-in-out;
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
  #ivnzg{
    min-height:60px;
    width:100%;
    padding:10px;
    display:flex;
    position:relative;
    overflow:hidden;
    justify-content:flex-end;
    gap:10px;
  }
  #iqkyl{
    min-height:60px;
    width:100%;
    padding:10px;
    display:flex;
    position:relative;
    overflow:hidden;
  }
  .form-cell{
    min-height:75px;
    flex-grow:1;
    flex-basis:100%;
  }
  </style>`

  return cssFormData  +  formData
}