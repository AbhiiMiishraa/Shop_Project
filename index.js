//search for item

const SEARCH = document.forms['search-item'].querySelector('input');

//add out event listner

SEARCH.addEventListener('keyup', (e) =>{

    //lets grab user text and lowercase conversion

    let text=e.target.value.toLowerCase();
    
    //lets grab each LI tag

    let GroceryList=document.querySelector('#grocery-list ul')

    //grab each LIST

    let groceries=GroceryList.getElementsByTagName('li');

    //to convert tge grocereis in aray so we can access forecah methid

    let grocereisArray=Array.from(groceries);

    //loop theough each grocery item

    grocereisArray.forEach((grocery) =>{

        let groceryName=grocery.firstElementChild.textContent;

        //convert all our text into lower case

           groceryNameLower=groceryName.toLowerCase();

           //matching serach item with list items, use index of 


          if(groceryNameLower.indexOf(text)==-1)
          {
          grocery.style.display='none';
          }

          else
          {
            grocery.style.display='block';
          }


        
        
    })
    
})





// Hide Items

let checkbox=document.querySelector('#hide');

checkbox.addEventListener('change',(e) =>{

    let GroceryList=document.getElementById('grocery-list');

    if(checkbox.checked)
    {
        GroceryList.style.display='none'
    }
        else{
            GroceryList.style.display='block';
        }
    
})




//add items:

let formAdd=document.getElementById('add-item');

//add event listner

formAdd.addEventListener('submit',(e) => {

    let ul=document.getElementsByTagName('ul')[0];
    //prevent the page from refresh

    e.preventDefault();

    //lets grab user text

    let text = formAdd.querySelector('input').value;

    //clear what user typed

    formAdd.querySelector('input').value=null;
    
    //creating the list items dynamic

    let li=document.createElement('li');
    let groceryName=document.createElement('span')
    let deleteButton=document.createElement('span')


    li.appendChild(groceryName);
    li.appendChild(deleteButton);

    // attache to DOM 

    ul.appendChild(li);

    // add text

    groceryName.textContent=text;
    deleteButton.textContent='delete';

    // add classes
    groceryName.classList.add('name')
    deleteButton.classList.add('delete')
    
})








//delete item from a list



// let buttons=document.querySelectorAll('#grocery-list li .delete');
// // inefficeint code--loop through each and add event listner

// buttons.forEach((button)=>{
//         button.addEventListener('click',(e)=>{

//             const LI=e.target.parentElement;

//             // old school

//             LI.parentElement.removeChild(LI);
//         });
// });


// good way of deletingbthe elements 

let GroceryList=document.querySelector('#grocery-list ul');

//add event istner

GroceryList.addEventListener('click',remove);

// define remove function

function remove(e){
    let target=e.target;

    if(target.className=='delete')
    {
        let li=target.parentElement;
        li.remove();
    }
};


// ---------------------------------- ----------------------------------

//form:
//submit and refreesh happens when clicked



// lets grab our headings - our parent UL tag
let headings = document.querySelector('.heading');
let panels = document.querySelectorAll('.panel');
// define a selectedItem variable to toggle between classes
let selectedPanel = null; 

// taking advantage of event bubbling, lets attach an event listener on the ul parent element
headings.addEventListener('click', (event) => {
    // lets find out which <li> tag triggered the event
    let target = event.target; 
    // lets use dataset to get our data value ... we've called ours clicked but you can call it whatever you want
    let dataAttribute = event.target.dataset.clicked;
     
    if(target.tagName == 'LI') {
        // remove current selected element
        if(selectedPanel != null) {
            selectedPanel.classList.toggle('selected');
        } 
        selectedPanel = target;
        selectedPanel.classList.toggle('selected');

        // now lets find the panel we want to show
        let targetPanel = document.querySelector(dataAttribute);
    
        // now we need to determine whether the panel currently selected is the one displayed. We can use the forEach function because querySelectorAll returns a NodeList. 
        panels.forEach((panel) => {
            if(panel == targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    }
});

// lets deal with our button to display answer 
let answerButton = document.getElementById('showAnswer');
answerButton.addEventListener('click', answer);

function answer(e) {
    document.getElementById('answer').classList.add('show');
    document.getElementById('answer').textContent = "AN IMPASTA";
    answerButton.style.display = 'none';
};

