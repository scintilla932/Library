console.log("This is ES-6 version.");

class Book{
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

class Display{
  //It is a function to Add a book.
  add(book){
    let tableBody = document.getElementById("tableBody");
    let uiString = `<tr>
                      <td>${book.name}</td>
                      <td>${book.author}</td>
                      <td>${book.type}</td>
                      </tr>`;
    tableBody.innerHTML += uiString;
    console.log("Adding to UI");
  }

  //It is a function to Clear form.
  clear(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
  }

  //It is a function to validate books.
  validate(book){
    if(book.name.length < 2 || book.author.length < 2){
      return false;
    }
    else{
      return true;
    }
  }

  //Show Error || Success
  show(type, displayMessage){
    let message = document.getElementById('message');
    let boldText;
    if(type === 'success'){
      boldText = "Success";
    }
    else{
      boldText = "Error";
    }
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show " role="alert">
                            <strong>${boldText} :</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
    setTimeout(function(){
      message.innerHTML = ``
    }, 5000);
  }
}

//Add submit event listener
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log('Submitted form.');
  let name = document.getElementById('bookName').value;
  let author = document.getElementById('author').value;
  let type;

  let fiction = document.getElementById('fiction');
  let programming = document.getElementById('programming');
  let cooking = document.getElementById('cooking');

  if(fiction.checked){
    type = fiction.value;
  }
  else if(programming.checked){
    type = programming.value;
  }
  else if(cooking.checked){
    type = cooking.value;
  }

  let book = new Book(name , author , type);
  console.log(book);

  let display = new Display();
  if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show('success', 'Your book has been successfully added');
  }
  else{
    //Show an error;
    display.show('danger','Sorry! Your book cannot be added.');
  }
  e.preventDefault();
}

