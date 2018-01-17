let bookList = [ "jadeh_jang", "maan_wa_to", "per_mard_darya", "shah_beshin", "nam_bara", "afringegan", "tarik_khaneh", "khare_dajal", "godi_paran_baz", "sage_velgard"];
console.log(bookList);

//3
function booksReader(books){
    var i;
    for(i=0; i<books.lenth; i++){
        document.getElementById("bookList".innerHTML+=("<li>" +booksArray[i] +"</li>"));
        
    }
}

//4
let book1 = {
  title : 'jadeh jang', 
  language : 'dari',
  author: 'mansor anwari'};
console.log(book1);

let book2 = {
  title : 'man wa to',
  language : 'dari', 
  author: 'reza mir khani'};
console.log(book2);

let book3 = { 
  title : 'per mard darya',
  language : 'persian', 
  author: 'kazim maninani'};
console.log(book3);

let book4 = { 
  title : 'shah beshin',
  language: 'persian', 
  author : 'kazim mazizani'};
console.log(book4);

let book5 = { 
  title: 'afringegan', 
  language: 'persian', 
  author: 'sadiq hedayat'};
console.log(book5);

let book6 = { 
  title: 'tarik khaneh', 
  language: 'dari', author: 
  'asad boda'};
console.log(book6);

let book7 = { 
  title: 'godi paran baz',
  language: 'dari', 
  author: 'kadlid hossaini'};

console.log(book7);


  