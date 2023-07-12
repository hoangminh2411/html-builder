export const getTicketForm =(id) =>{
  const formData = ` <form class="form-container" id="ih8p">
  <div class="form-field" id="ith43">
    <label data-mytext="MyText">Subject<span data-mytext="MyText" id="i0s88">*</span></label>
    <input type="text" name="subject" required id="igt4p"/>
  </div>
  <div class="form-row" id="ieb8">
    <div class="form-cell" id="iiwn">
      <div class="form-field" title="Customer" id="i1dmk">
        <label data-mytext="MyText">Customer</label>
        <select type="text" id="i05p1" name="customer"><option value="opt1">Option 1</option><option value="opt2">Option 2</option></select>
      </div>
    </div>
  </div>
  <div data-mytext="MyText" id="inkxg">Category
  </div>
  <div class="form-row" id="inmlc">
    <div class="form-cell" id="ioktv">
      <div class="form-field" id="ibpwe">
        <label data-mytext="MyText" id="iw0hm">Issue</label>
        <input type="text" id="i4z4b"/>
      </div>
    </div>
    <div class="form-cell">
      <div class="form-field" id="iehqn">
        <label data-mytext="MyText" id="iagez">Product</label>
        <input type="text" id="i8kze"/>
      </div>
    </div>
  </div>
  <div class="form-row" id="i8z8k">
    <div class="form-cell">
      <div title="Customer" class="form-field" id="i1dmk">
        <label data-mytext="MyText">Customer</label>
        <select type="text" id="i05p1" name="customer"><option value="opt1">Customer 1</option><option value="opt2">Customer 2</option></select>
      </div>
    </div>
    <div class="form-cell">
      <div title="Assigned Rep" class="form-field" id="ibtig">
        <label data-mytext="MyText">Assigned Rep</label>
        <select type="text" id="iah8l" name="assignedUser"><option value="opt1">User 1</option><option value="opt2">user 2</option></select>
      </div>
    </div>
  </div>
  <div class="form-field" id="irrur">
    <label data-mytext="MyText" id="i403p">Content</label>
    <div id="editor"></div>
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
  .text-field{
    font-style:inherit;
    font-variant-ligatures:inherit;
    font-variant-caps:inherit;
    font-variant-numeric:inherit;
    font-variant-east-asian:inherit;
    font-variant-alternates:inherit;
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
  #i1dmk{
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
  #inmlc{
    min-height:60px;
    width:100%;
    padding-top:10px;
    padding-right:10px;
    padding-bottom:10px;
    padding-left:10px;
    display:flex;
    position:relative;
    overflow-x:hidden;
    overflow-y:hidden;
    padding:10px;
    overflow:hidden;
  }
  #ibpwe{
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
  #i4z4b{
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
  #iehqn{
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
  #i8kze{
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
  #i8z8k{
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
  #i1dmk{
    display:flex;
    flex-direction:column;
    padding:8px;
    gap:10px;
    width:100%;
  }
  #ibtig{
    display:flex;
    flex-direction:column;
    padding:8px;
    gap:10px;
    width:100%;
  }
  #i05p1{
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
  #iah8l{
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