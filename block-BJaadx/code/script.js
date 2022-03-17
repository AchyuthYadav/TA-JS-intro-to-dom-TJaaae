// 1. Change the title of the page to `Hello AltCampus!`

documents.title = "Hello AltCampus!"


// 2. Select the element using the children property:

document.body.children

//    - Select the `h1` element and change the value to `Learning DOM`

let h1 = document.getElementById("test")

h1.innerText = 'Learning DOM'
'Learning DOM'



//    - Select the first `li` element inside the `ul` with class `topics` and change the innerText to `all about document`

document.body.children[5]

document.body.children[5].children[0]

let li = document.body.children[5].children[0]

li.innerText =  `all about document`;


//    - Select the input element with name `email`

document.body.children[6].children[4]

// another method

let input = document.querySelectorAll("input")[0]



// 3. Log the number (using console.log) of children of all the `li` element inside the ul with class `topics`

let listli = document.querySelectorAll("li")

listli.forEach((w) => console.log(w))



// 4. Select the first input using the `type` selector and store them in variable named `emailInput`

let input1 = document.querySelector("input")

input1.innerText = "emailInput"


// 5. Select the ul element using class selector and store in `topics`

let topics = document.querySelector(".topics")

// 6. Select the first label element and store in `label`

let firstlabel = document.querySelector(".label")

// 7. Select the input of type `checkbox` with the `id` selector and store in `inputCheckbox`

let inputCheckbox = document.getElementById("remember")

// 8. Select the input of type password using Attribute selectors. (eg: input[type="text"]) and store in `password`

let password = document.input[type="text"]


// 9. Select the input using the placeholder attribute selector with value `password` and store in `attrPassword`

let attrPassword 

// 10. Select all the `li` element and store in `allTopics`

let allTopics = document.querySelectorAll(".topics")

// 11. Select all the input element of any type and store in `allInput`

let allInput = document.querySelectorAll(".input")


// 12. Use forEach to console the `innerText` property of all the li element in `allTopics` variable.


allInput.forEach((q) => console.log(allInput(q)))


// 13. Select all the elements with class `list` and store in variable `listOfSelectedTopics`


let listOfSelectedTopics = document.querySelectorAll(".topics")


// 14. Select the first li element inside the `ul` element using `>` (direct child) and store in `firstLi`

let firstLi = document.querySelector()

// 15. Select all the img element and log the number of element saying `The total number of img element is ---`

let img = document.querySelectorAll("img")

// 16. Select all the `p` element and store in `allPElement`

let allPElement = documents.querySelectorAll("p")

// 17. Select all the buttons and log the count of buttons.

let button = document.querySelectorAll("buttons")

console.log(button)

// 18. Select all the `label` element and log the count.

let allLabel = document.querySelectorAll("label")

console.log(allLabel)

// 19. Select all the elements with `id` of `test`

let allTheElements = document.getElementById("test")

let allTheElements = document.querySelectorAll("#test")


// 20. Select the first element with id `test` using `getElementById`


let firstElement = document.getElementById("test")


// 21. Select the parent element of the element stored in `topics` variable (#5) and log the element.



let parentElement = topics.parentElement
console.log(parentElement)

// 22. Select the next element sibling of the element stored in `topics` variable (#5) and log the element.

let sibling = document

// 23. Select the previous element sibling of the element stored in `topics` variable (#5) and change the `innerText` property to `Learning About Walking the DOM`.

// 24. Select the first element child of the element stored in `topics` variable (#5) and change the `innerText` property of the element to `This is the first child element`.

// 25. Select the last element child of the element stored in `topics` variable (#5) and log the `typeof` the element.

// 26. Select the element with type `fieldset` and store in a variable named `fieldsetElm`.

// 27. Select the parent element of the element stored in `fieldsetElm` variable (#5) and log the `typeof` the element.
