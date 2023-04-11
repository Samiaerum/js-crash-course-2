///////////question 1/////////


function addNumberTo(numberToAdd) {
    return function (number) {
      return number + numberToAdd;
    };
  }
  const add5 = addNumberTo(5);
  console.log(add5(10)); // outputs 15
  console.log(add5(20)); // outputs 25
  console.log(add5(30)); // outputs 35

  ///question 2//
  function searchArray(array, value) {
    // Base case: If the array is empty, the value is not found
    if (array.length === 0) {
      return false;
    }

    // Recursive case: Check the first element of the array and recurse with the rest of the array
    if (array[0] === value) {
      return true;
    } else {
      return searchArray(array.slice(1), value);
    }
  }
  const myArray = [1, 2, 3, 4, 5];
  console.log(searchArray(myArray, 3)); // true
  console.log(searchArray(myArray, 6)); // false

////////question 3//////

function addParagraph(text) {
    const newParagraph = document.createElement('p');
    const newText = document.createTextNode(text);
    newParagraph.appendChild(newText);
    document.body.appendChild(newParagraph);
  }
  addParagraph('This is a new paragraph!');

////////question 4///////////

function addListItem(text) {
  const newListItem = document.createElement('li');
  const newText = document.createTextNode(text);
  newListItem.appendChild(newText);
  const unorderedList = document.querySelector('ul');
  document.body.appendChild(newListItem);
}
addListItem('This is a new list item!');
addListItem('Another list item!');
// /////////question 5 ////////

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  const myElement = document.getElementById('my-element');
changeBackgroundColor(myElement, 'red');

//////question 6 ///////////

function saveObjectToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  const myObject = {
    name: 'samia',
    age: 19,
    city: 'Karachi'
  };

  saveObjectToLocalStorage('my-object', myObject);

///////question 7//////

// function getObjectFromLocalStorage(key) {
//     const objectString = localStorage.getItem(key);
//     return JSON.parse(objectString);
//   }
//   const myObject = getObjectFromLocalStorage('my-object');
//   console.log(myObject);

///////question 8////////

// function saveObjectToLocalStorage(object) {
//     for (const property in object) {
//       localStorage.setItem(property, JSON.stringify(object[property]));
//     }

//     const newObject = {};
//     for (const property in object) {
//       const valueString = localStorage.getItem(property);
//       newObject[property] = JSON.parse(valueString);
//     }

//     return newObject;
//   }
//   const myObject = {
//     name: 'samia',
//     age: 19,
//     city: 'karachi'
//   };

//   const newObject = saveObjectToLocalStorage(myObject);
//   console.log(newObject);
