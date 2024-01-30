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

![image](https://github.com/poojan-bhalodiya/Book-Directory/assets/120900697/90d80871-dce4-41b4-9b45-2eebd151f353)


### Read Directory

![image](https://github.com/poojan-bhalodiya/Book-Directory/assets/120900697/1012d5b8-b93d-400f-a69d-8427fd02cb0a)

### Update Directory

![image](https://github.com/poojan-bhalodiya/Book-Directory/assets/120900697/21400b86-ca9d-41bd-8223-12bc1d1228ac)

### Delete Directory

![image](https://github.com/poojan-bhalodiya/Book-Directory/assets/120900697/0814097e-b2c5-42c6-a3e1-3c20b2a5db7e)
