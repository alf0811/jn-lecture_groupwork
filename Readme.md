今日も1日頑張るぞい


## 機能要件
https://docs.google.com/document/d/1hJRJtKMUeOPXIBPZxNF7ue0nSifJDNza8lvrH9Ep8Dk/edit


## 動作環境
node.js 最新
mongodb 最新


### install
```
$ cd paper_logger
$ cd npm install mongoose --save
$ npm install --save-dev nodemon
$ npm install express --save
```

### Run
```
$ mongod
$ npm run start
```

### Example  

#### Paper_Create
localhost:3000/papers POST
request body

```
{
	"name":"how_to_deep_learning",
	"url":"https://google.com",
	"outline":"muzukasikute wakaranai",
	"student_name":"tappun"
}
```

localhost:3000/papers GET
response
```
[
    {
        "url": "https://google.com",
        "outline": "iikanji",
        "_id": "5efc25c2be28937ee7aad07b",
        "name": "testpaper",
        "student_name": "tappun",
        "Created_date": "2020-07-01T05:57:22.891Z",
        "__v": 0
    },
    {
        "url": "https://google.com",
        "outline": "iikanji",
        "_id": "5efc25f0214d8a7f3ba09b15",
        "name": "testpaper",
        "student_name": "tappun",
        "Created_date": "2020-07-01T05:58:08.706Z",
        "__v": 0
    },
    {
        "url": "https://google.com",
        "outline": "iikanji",
        "_id": "5efc25fe214d8a7f3ba09b16",
        "name": "ababapaper",
        "student_name": "tappun2",
        "Created_date": "2020-07-01T05:58:22.692Z",
        "__v": 0
    }
]
```