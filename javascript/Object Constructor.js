function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        let isItReadYet = 'not read yet'
        if (read) {
            isItReadYet = 'read already'
        }
        return `${title} by ${author}, ${pages} pages, ${isItReadYet}`
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
console.log(theHobbit.info())

