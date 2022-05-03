const uuid = require('uuid')

var BookList = []

module.exports = {

    //create books
    async CreateBooks(req, res) {
        const { thumbnaiUrl, title, description, author } = req.body
        BookList.push({
            id: uuid.v4(),
            thumbnaiUrl: thumbnaiUrl,
            title: title,
            description: description,
            author: author
        })
        return res.send(BookList)
    },

    //get all books
    async GetAllBooks(req, res) {
        return res.send([{
            "count": BookList.length
        },{
            "row":[BookList]
        }])
    },

    //get books by id
    async GetBookById(req,res){
        const id = req.params.id   
        const book =  BookList.find((books)=>books.id === id)
        console.log(book);
        return res.send(book)
    },

    //deleted by id

    async DeleteById(req,res){
        const id = req.params.id
        const booksIndex =  BookList.findIndex((books)=>books.id === id)
        BookList.splice(booksIndex,1)
        return res.send('True')
    },
    
    async EditBook(req,res){
        const id = req.params.id
        const book =  BookList.find((books)=>books.id === id)
        const {title,description,author} = req.body;

        if (title){
            book.title = title
        }
        if (description){
            book.description = description
        }
        if(author){
            book.author = author
        }

        return res.send ('True')
    }
}