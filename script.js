var names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant", "Abid", "Abir", "Abraham", "Abu", "Abubakar", "Ace", "Adain", "Adam", "Adam-James", "Addison", "Addisson", "Adegbola", "Adegbolahan", "Aden", "Adenn", "Adie", "Adil", "Aditya", "Adnan", "Adrian", "Adrien", "Aedan", "Aedin", "Aedyn", "Aeron", "Afonso", "Ahmad", "Ahmed", "Ahmed-Aziz", "Ahoua", "Ahtasham", "Aiadan", "Aidan", "Aiden", "Aiden-Jack", "Aiden-Vee", "Aidian", "Aidy", "Ailin", "Aiman", "Ainsley", "Ainslie", "Airen", "Airidas", "Airlie", "AJ", "Ajay", "A-Jay", "Ajayraj", "Akan", "Akram", "Al", "Ala", "Alan", "Alanas", "Alasdair", "Alastair", "Alber", "Albert", "Albie", "Aldred", "Alec", "Aled", "Aleem", "Aleksandar", "Aleksander", "Aleksandr", "Aleksandrs", "Alekzander", "Alessandro", "Alessio", "Alex", "Alexander", "Alexei", "Alexx", "Alexzander", "Alf", "Alfee", "Alfie", "Alfred", "Alfy", "Alhaji", "Al-Hassan", "Ali", "Aliekber", "Alieu", "Alihaider", "Alisdair", "Alishan", "Alistair", "Alistar", "Alister", "Aliyaan", "Allan", "Allan-Laiton", "Allen", "Allesandro", "Allister", "Ally", "Alphonse", "Altyiab", "Alum", "Alvern", "Alvin", "Alyas", "Amaan", "Aman", "Amani", "Ambanimoh", "Ameer", "Amgad", "Ami", "Amin", "Amir", "Ammaar", "Ammar", "Ammer", "Amolpreet", "Amos", "Amrinder", "Amrit", "Amro", "Anay", "Andrea", "Andreas", "Andrei", "Andrejs", "Andrew", "Andy", "Anees", "Anesu", "Angel", "Angelo", "Angus", "Anir", "Anis", "Anish", "Anmolpreet", "Annan", "Anndra", "Anselm", "Anthony", "Anthony-John", "Antoine", "Anton", "Antoni", "Antonio", "Antony", "Antonyo", "Anubhav", "Aodhan", "Aon", "Aonghus", "Apisai"];
var authorMap = new Map();
var authorBookCount = new Map();
for (let i = 0; i < names.length; i++){
    authorMap.set(names[i], []);
    authorBookCount.set(names[i], 0);
    console.log(authorBookCount.get(names[i]));
}
let getRandomName = function(){
    return names[Math.floor(Math.random() * names.length)];
}
let getInput = function(){
    let firstNameInput = prompt('First name', 'defaultAnswer');
    let lastNameInput = prompt('Last name', 'defaultAnswer');
    let phoneInput = prompt('Phone', 'defaultAnswer');
    let emailInput = prompt('Email', 'defaultAnswer');
    return new Employee(firstNameInput, lastNameInput, phoneInput, email);
}
//counter for Books 
function makeCounter() {
  function counter() {
    return counter.count++;
  };
  counter.count = 1;
  return counter;
}
let counter = makeCounter();
class RandomNameGenerator{
    constructor(x){
        this.name="";
        for (let i = 0; i < x; i++){
            let idx = Math.floor(Math.random() * 26);
            let a = 97;
            a += idx;
            this.name += String.fromCharCode(a);
        }
    }
}
class Book{
    constructor(){
        this.id = counter();
        this.title = new RandomNameGenerator(Math.floor(Math.random() * 15) + 1).name;
        this.author = getRandomName();
        this.amount = Math.floor(Math.random() * 501);
        this.text = new RandomNameGenerator(Math.floor(Math.random() * 450)).name;
    }
}
class Employee{
    constructor(firstName, lastName, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
    }
}
class Library{
    constructor(){
        this.libraryEmployee = [];
        this.takenBooks = [];
        this.books = [];
        for (let i = 0; i < 1000; i++){
            let a =  new Book();
            authorMap.get(a.author).push(a.title);
            this.books.push(a);
            authorBookCount.set(a.author, authorBookCount.get(a.author) + 1);
        }
    }
    registerBook(){
        let author = prompt('Author name', 'defaultAnswer');
        let newBook = new Book();
        newBook.author = author;
        this.books.push(newBook);
    }
    getAllAuthors(){
        console.log("All authors.. \n\n\n\n");
        for (let i = 0; i < this.books.length; i++){
            console.log(this.arr[i].author);
        }
    }
    getBooksOfAuthor(author_name){
        let booksOfAuthor = authorMap.get(author_name);
        for (let i = 0; i < booksOfAuthor.length; i++){
            console.log(arr[i]);
        }
        return booksOfAuthor;
    }
    authorReport(author_name){
        let res = authorBookCount.get(author_name);
        console.log(res);
        return res;
    }
    takeBook(bookId){
        this.takenBooks.push(bookId);
    }
    returnBook(bookId){
        return this.books[bookId - 1];
    }
    getAllTakenBooks(){
        return this.takenBooks;
    }
    addLibraryEmployee(firstName, lastName, phone, email){
        this.libraryEmployee.push(getInput());
    }
    editLibraryEmployee(email){
        //find employee
        for (let i = 0; i < this.libraryEmployee.length; i++){
            if (this.libraryEmployee[i].email == email){
                this.libraryEmployee[i] = getInput();
                break;
            }
        }
    }
    removeLibraryEmployee(email){
        //find employee
        for (let i = 0; i < this.libraryEmployee.length; i++){
            if (this.libraryEmployee[i].email == email){
                this.libraryEmployee.splice(i, 1);
                break;
            }
        }
    }
    // show books which content contains provided search-text
    searchBooks(text){
        let idx = 0;
        let booksContainsTextId = [];
        for (let i = 0; i < this.books.length; i++){
            for (let j = 0; j < this.books[i].text.length; j++){
                if (this.books[i].text.length - j < text.length){
                    break;
                }
                if (text[idx] == this.books[i].text[j]){
                    let ok = true;
                    j++; idx++;
                   
                    while (j < this.books[i].text.length && idx < text.length){
                        if (text[idx] == this.books[i].text[j]){
                            j++; idx++;
                        }else{
                            idx = 0;
                            ok = false;
                            break;
                        }
                    }
                    if (ok == true){
                        booksContainsTextId.push(i);
                        break;
                    }
                }
            }
        }
        return booksContainsTextId;
    }
}
let library = new Library();
for (let i = 0; i < library.books.length; i++){
    console.log(library.books[i].title + ' ' + library.books[i].author + ' ' + library.books[i].amount);
}
//library.registerBook();
//library.getAllAuthors();
//library.getBooksOfAuthor('Adrien');
library.authorReport('Adrien');
