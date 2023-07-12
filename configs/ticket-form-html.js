export const getTicketForm =(id) =>{
  const formData = `<div class="form-field" id="ith43">
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
  </div>
  <div id="editor"></div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.2.1/axios.min.js"></script>
  <script src="https://uicdn.toast.com/editor/latest/toastui-editor-all.min.js"></script>
  <link rel="stylesheet" href="https://uicdn.toast.com/editor/latest/toastui-editor.min.css" />
  <script>
    const editor = new toastui.Editor({
        el: document.querySelector('#editor'),
        height: '250px',
        events: {
          change: (value)=>{console.log('value editor', editor.getHTML())}
        },
        initialValue: '',
        initialEditType: 'wysiwyg'
      });
  </script>
  `
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
  const formScript = `<script>
  //Initial Service
  const getHeaderRequest  = () => {
   return  {
     // 'TokenCyberSoft':TOKEN_CYBERSOFT,
     // 'Authorization': "Bearer" +' '+ JSON.parse(localStorage.getItem(ACCESS_TOKEN)),
   }
  }
   class baseService {
     put = (url,model) =>{
       return axios({
           url: url,
           method:'PUT',
           data:model,
           headers: getHeaderRequest()
       })
     }
 
 
     post = (url,model)=>{
       return axios({
           url: url,
           method:'POST',
           data:model,
           headers: getHeaderRequest()
           
       })
     }
 
     get = (url) => {
         return axios({
             url: url,
             method:'GET',
             headers: getHeaderRequest()
             
         })
     }
 
     delete =(url) => {
         return axios({
             url: url,
             method:'DELETE',
             headers: getHeaderRequest()
             
         })
     }   
   }
      
   class FieldOptions extends baseService {
     constructor(){
       super();
     }
     getCategoryList = ()=>{
       return this.get('https://jsonplaceholder.typicode.com/users')
     }
     getProductList = (categoryId)=>{
       return this.get('https://jsonplaceholder.typicode.com/users/' + categoryId)
     }
     getClassficationList = ()=>{
       return this.get('https://jsonplaceholder.typicode.com/users')
     }
   }
   const fieldOptionService = new FieldOptions();
   //=============================================
   const getHtmlOption = (value, text) => {
     
     return "<option value='" + value + "'>" + text + "</option>" 
   }
   let issueElement = document.querySelector('[data-key="category-write"]')
   let productElement = document.querySelector('[data-key="product-write"]')
    if(issueElement) {
     issueElement.innerHTML = ''
     fieldOptionService.getCategoryList()
     .then(response => {
       const {data:users} = response
       issueElement.innerHTML = users.map((user)=>{
         const optionValue = JSON.stringify({id:user.id, name:user.name})
         const optionLabel = user.name
         return getHtmlOption(optionValue, optionLabel)
           
       }).join('')
     
     })
     issueElement.addEventListener("change",(event)=>{
       if(productElement) {
         let categoryId = JSON.parse(event.target.value).id
         fieldOptionService.getProductList(categoryId)
         .then(response => {
           const {data:user } = response
           const optionValue = JSON.stringify({id:user.id,name:user.company.name})
           const optionLabel = user.company.name
           productElement.innerHTML = getHtmlOption(optionValue, optionLabel)
         })
       }
      
     })
    }
 
  
   document.querySelectorAll('[data-key="classification"]').forEach((element)=> {
       element.innerHTML = ''
       fieldOptionService.getCategoryList()
       .then(response => {
         const {data:users } = response
         element.innerHTML = users.map((user)=>{
           const optionValue = JSON.stringify(user)
           const optionLabel = user.name
           return getHtmlOption(optionValue, optionLabel)
             
         }).join('')
        
       })
 
       element.addEventListener("change",(event)=>{
         let selectedClassifaction = JSON.parse(event.target.value) 
         let classficationValuElement = element.parentElement.querySelector('[data-key="classification-value"]')
         if(classficationValuElement) {
           classficationValuElement.innerHTML = ''
           classficationValuElement.innerHTML = Object.keys(selectedClassifaction.company).map((companyKey)=>{
             const optionValue = selectedClassifaction.company[companyKey]
             const optionLabel = companyKey 
             return getHtmlOption(optionValue,optionLabel)
           })
 
           classficationValuElement.addEventListener("change",(event)=>{
             let results = [];
             let initClassfication = {
               classfication: {
                 id:selectedClassifaction.id,
                 name:selectedClassifaction.name,
               },
               value: event.target.value
             }
             results.push(initClassfication);
             let classfications  = formWriteElement.querySelector('[data-key="classifications-write"]')
             if(classfications) {
               classfications.value = JSON.stringify(results) 
             }
           })
         }
        
       })
   })
 
  
     </script>`
  return cssFormData  +  formData + formScript
}