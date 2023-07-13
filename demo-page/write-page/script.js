
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
  
   
    document.querySelectorAll('[data-key="classification"]').forEach((element, index)=> {
        element.innerHTML = ''
        fieldOptionService.getCategoryList().then(response => {
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
              let classfications  = document.querySelector('[data-key="classifications-write"]')
              let results = []
              if(classfications.value){
                results=JSON.parse(classfications.value)
              }
  
       
              let initClassfication = {
                classfication: {
                  id:selectedClassifaction.id,
                  name:selectedClassifaction.name,
                },
                value: event.target.value
              }

               if(results.length - 1 > index ) {
                results[index] = initClassfication
               } else {
                results.push(initClassfication);
               }
              if(classfications) {
                classfications.value = JSON.stringify(results) 
              }
            })
          }
         
        })
    })
  
   
      