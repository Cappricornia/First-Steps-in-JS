function oldLibrary(input){
    let index = 0;
    let bookSearched = input[index];
    index++
    let countBooks = 0;
    let isBookFound = false;

    while (true){
        let currentBook = input[index];
        index++;

        if (bookSearched === currentBook){
            isBookFound = true;
            break;
        } 

        if (currentBook === "No More Books"){
            break;
        }

        countBooks += 1;
    }

    if (isBookFound){
        console.log(`You checked ${countBooks} books and found it.`);

    } else{
        console.log(`The book you search is not here!\nYou checked ${countBooks} books.`);
    }
}



oldLibrary(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"]);

oldLibrary(["Bourne","True Story","Forever","More Space","The Girl","Spaceship","Strongest","Profit","Tripple","Stella","The Matrix","Bourne"]);



