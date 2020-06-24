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

// Typescript: import Abck from 'abck';

Abck.validateCookie(['=='], "C0E79E904291F0101B699F08B90AE09C~-1~YAAQvnEGF1n4o7ByAQAASRpJwAQ+zePjLXV6UyhVffBSzV8Rjd2nU3orgVbMnYvAao6Xgw8Feycm9b55c0HQgOWFePtq2y1Cc/f+FhPcJQYsSgeFZz1Rs/pBhI6Db/aCcjJd9WFJxZ5G+LOsuFezyoJDmY2FK4BAfTYKQ1oPqKN36Rjmqm6b+KMn8wq2/4rukChJhuFD4b/UDEcqCAdMguRAlosZrDg5y1GTsiMnjOPzxSJLoqsPT9tVf2tjVJw94fLQcyNrYYSPDvliWmI4WDzg6zRpkjBjfmsiXnwtApPKDSoahrM3ykGSOdHAwJGuInCZcrDayC7VwXlPPYYAzO9nVP95qnaVAA==~-1~-1~-1");
// => true

const d3 = Abck.d3();

Abck.gd(Date.now(), d3, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36", {
	availWidth: 1680,
	availHeight: 972,
	width: 1680,
	height: 1050,
	innerWidth: 1680,
	innerHeight: 939,
	outerWidth: 1680,
});
// => Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36,uaend,12147,0030107,en-US,Gecko,3,0,0,0,391828,9560794,1680,972,1680,1050,1680,939,1680,,cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1,8276,0.744979299372,796244780392,loc:

Abck.o9(d3);

// => 914527596

Abck.sed();
// => "0,0,0,0,1,0,0"

Abck.ab("test");
// => 448

Abck.np();
// => "10321144241322243122"

Abck.getmr(); //Needs to be executed inside an electron window
// => "58,60,289,59,113,56,26,21,25,9,9,9,20,588,"

Abck.od("0a46G5m17Vrp4o4c", "afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq");
// => "7a74G7m23Vrp0o5c"

```

## Maintainer

[![ZedDev](https://github.com/zedd3v.png?size=100)](https://abck.dev/)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)