var foodList = [];
var formList = document.getElementById('todo-form');
var foodInput = document.getElementById('todo-text')
var foodListUL = document.getElementById('todo-list');


formList.addEventListener("submit", function(e){
    e.preventDefault();
    var foodItem = foodInput.value.trim();
    
    if (foodList.includes(foodItem) ) {
      alert('Meal already in list!');
  }else{
    foodList.push(foodItem);
    localStorage.setItem('foodList', JSON.stringify(foodList));
      renderFoods();
  }
    
  
})
const li = document.createElement('li');
function renderFoods() {
  foodListUL.innerHTML = '';
  for (let i = 0; i < foodList.length; i++) {
    const food = foodList[i];

    const li = document.createElement('li');
    li.textContent = food;
    li.setAttribute('data-index', i);

    
    foodListUL.appendChild(li);
  }
};