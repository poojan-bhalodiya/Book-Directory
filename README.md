# Blog plateforme using Node.js 
This is a Book Directory. User can CRUD opperation in Books.
User can Add Book, Read Book, Update Book, Delete Book.

### Get Todo request 
```http://localhost:8000/```

### How to run this Project

- Install dependency

```npm i``` 

- Run the Project

```npm run dev```


## Packages

| Name             | Version                                                                |
| ----------------- | ------------------------------------------------------------------ |
| cors | ^2.8.5 |
| dotenv | ^16.3.1 |
| express | ~4.18.2 |
| mongoose | ^8.0.3 |
| nodemon | ^3.0.2 |



## API Reference

#### Add Directory

``` POST || http://localhost:8000/directory ```

add details to add directory
"title",
"description",
"author",
"price".

#### Read Directory

```GET || http://localhost:8000/directory ```

Read All Directory.

#### Update Directory

``` PUT || http://localhost:8000/directory/${id}```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Blog to fetch |

#### Delete Directory

``` DELETE || http://localhost:8000/directory/${id}```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Blog to fetch |



## Screenshots

### Add Directory

![image](https://res.cloudinary.com/dhntmsget/image/upload/v1706797085/Projects/Book-Directory/Screen%20Shorts/Add%20directory.png)


### Read Directory

![image](https://res.cloudinary.com/dhntmsget/image/upload/v1706797140/Projects/Book-Directory/Screen%20Shorts/Readdirectory.png)

### Update Directory

![image](https://res.cloudinary.com/dhntmsget/image/upload/v1706797198/Projects/Book-Directory/Screen%20Shorts/upload.png)

### Delete Directory

![image](https://res.cloudinary.com/dhntmsget/image/upload/v1706797247/Projects/Book-Directory/Screen%20Shorts/DELETe.png)
