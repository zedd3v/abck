# Abck

Abck is a library that makes generating akamai cookies easier.

Currently does not support all of the functions/methods. Expect much more in an upcoming update.


## Installation

```bash
$ npm install abck
```

## Usage

```javascript
const Abck = require('abck').default;

const abck = new Abck(['=='], Date.now(), "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36", {
	availWidth: 1680,
	availHeight: 972,
	width: 1680,
	height: 1050,
	innerWidth: 1680,
	innerHeight: 939,
	outerWidth: 1680,
});

abck.validateCookie("C0E79E904291F0101B699F08B90AE09C~-1~YAAQvnEGF1n4o7ByAQAASRpJwAQ+zePjLXV6UyhVffBSzV8Rjd2nU3orgVbMnYvAao6Xgw8Feycm9b55c0HQgOWFePtq2y1Cc/f+FhPcJQYsSgeFZz1Rs/pBhI6Db/aCcjJd9WFJxZ5G+LOsuFezyoJDmY2FK4BAfTYKQ1oPqKN36Rjmqm6b+KMn8wq2/4rukChJhuFD4b/UDEcqCAdMguRAlosZrDg5y1GTsiMnjOPzxSJLoqsPT9tVf2tjVJw94fLQcyNrYYSPDvliWmI4WDzg6zRpkjBjfmsiXnwtApPKDSoahrM3ykGSOdHAwJGuInCZcrDayC7VwXlPPYYAzO9nVP95qnaVAA==~-1~-1~-1");
// => true

abck.gd();
// => 

abck.sed();
// => "0,0,0,0,1,0,0"

abck.ab("test");
// => 448

abck.np();
// => "10321144241322243122"

abck.getmr(); //Needs to be executed inside an electron window
// => "58,60,289,59,113,56,26,21,25,9,9,9,20,588,"

```

## Maintainer

[![ZedDev](https://github.com/zedd3v.png?size=100)](https://abck.dev/)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)