export const getTicketForm =(id) =>{
  const formData = ` <form class="form-container" id="ih8p">
  <div class="form-field" id="ith43">
    <label data-mytext="MyText" id="imqb">Subject<span data-mytext="MyText" id="i0s88" draggable="true">*</span></label>
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
  <div class="form-row" id="iqkyl">
    <div class="form-cell" id="i7lh9">
      <div class="form-field" id="ie098">
        <label data-mytext="MyText" id="iyvmj">Issue</label>
        <select type="text" id="iqw6l" data-key="category-write" name="category"><option value="opt1">Option 1</option><option value="opt2">Option 2</option></select>
      </div>
    </div>
    <div class="form-cell" id="if5jc">
      <div class="form-field" title="Assigned Rep" id="ibtig">
        <label data-mytext="MyText" id="iu0zc">Product</label>
        <select type="text" id="iah8l" name="product" data-key="product-write"><option value="opt1">User 1</option><option value="opt2">user 2</option></select>
      </div>
    </div>
  </div>
  <div data-mytext="MyText" id="inojh">Classification
  </div>
  <input hidden type="value" name="classifications" data-key="classifications-write" />
  <div class="form-row" id="iwfe7">
    <div class="form-cell" id="ibmij">
      <div class="form-field" id="ihp1a">
        <label data-mytext="MyText" id="iipvl">Classification</label>
        <select data-key="classification"  id="izosb"><option value="language">Language</option>&lt;</select>
        <select type="text" id="i2u2m" data-key="classification-value"><option value="opt1">Option 1</option><option value="opt2">Option 2</option></select>
      </div>
    </div>
 
  </div>
  <div class="form-field" id="irrur">
    <label data-mytext="MyText" id="i403p">Content</label>
    <textarea name="content" required id="ig5to"></textarea>
  </div>`
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
  div{
    font-family:Roboto, sans-serif;
  }
  .form-cell{
    min-height:75px;
    flex-grow:1;
    flex-basis:100%;
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
    color:black;
    margin-top:0px;
    margin-right:0px;
    margin-bottom:0px;
    margin-left:0px;
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
    row-gap:10px;
    column-gap:10px;
    width:100%;
    padding-top:8px;
    padding-right:8px;
    padding-bottom:8px;
    padding-left:0px;
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
    width:100%;
  }
  #i05p1{
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
  #iah8l{
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
  #iqkyl{
    min-height:60px;
    width:100%;
    display:flex;
    position:relative;
    height:82.5559px;
    color:black;
    overflow-x:hidden;
    overflow-y:hidden;
    padding:10px 10px 10px 0px;
    overflow:hidden;
  }
  #inkxg{
    padding-top:10px;
    padding-right:10px;
    padding-bottom:10px;
    padding-left:10px;
  }
  #ie098{
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
  #inojh{
    padding-top:10px;
    padding-right:10px;
    padding-bottom:10px;
    padding-left:10px;
  }
  #iwfe7{
    min-height:60px;
    width:100%;
    display:flex;
    position:relative;
    height:151.667px;
    overflow-x:hidden;
    overflow-y:hidden;
    padding:10px 10px 10px 0px;
    overflow:hidden;
  }
  #ihp1a{
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
  #izosb{
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
  #in81k{
    padding-top:8px;
    padding-right:8px;
    padding-bottom:8px;
    padding-left:8px;
  }
  #iknvt{
    display:block;
    color:#212529;
    background-color:#FFFFFF;
    background-clip:padding-box;
    appearance:none;
    width:100%;
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
  #in9wy{
    display:block;
    color:#212529;
    background-color:#FFFFFF;
    background-clip:padding-box;
    appearance:none;
    width:100%;
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
  #ihe3a{
    padding-top:8px;
    padding-right:8px;
    padding-bottom:8px;
    padding-left:8px;
  }
  #irrur{
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
  #i2u2m{
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
  #ivmum{
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
  #iipvl{
    color:rgb(140, 140, 140);
  }
  #ij1i2{
    color:rgb(140, 140, 140);
  }
  #iyvmj{
    color:rgb(140, 140, 140);
  }
  #iu0zc{
    color:rgb(140, 140, 140);
  }
  #iqw6l{
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
  
  </style>`
  return cssFormData  +  formData
}