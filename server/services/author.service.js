const authors = [{id:1, name: "Author 1"}, {id:2, name: "Author 2"}, {id:3, name: "Author 3"}];

export class AuthorService {
  getAllAuthors(call, callback) {
    return callback(null, { authors });
  }

  findAuthorById(call, callback) {
    const id = call.request.author_id;
		let error = null;
    const author = authors.find((author) => author.id === id);
		if(!author)
		{error = new Error("Author not found");}
    return callback(null, { author });
  }
}
