export default function BondAuthor(authors: string[]){
    var author = "";
    for(let i = 0; i < authors.length; i++){
        if(author == "") author = authors[i];
        else author = author + "、" + authors[i];
    }
    return author;
}