# Steps that work locally
```zsh
> yarn
> docker-compose up -d
> node main.js
[
  TextRow { User: 'root' },
  TextRow { User: 'mysql.session' },
  TextRow { User: 'mysql.sys' },
  TextRow { User: 'root' }
]
[
  ColumnDefinition {
    _buf: <Buffer 01 00 00 01 01 2b 00 00 02 03 64 65 66 05 6d 79 73 71 6c 04 75 73 65 72 04 75 73 65 72 04 55 73 65 72 04 55 73 65 72 0c e0 00 80 00 00 00 fe 83 40 00 ... 70 more bytes>,
    _clientEncoding: 'utf8',
    _catalogLength: 3,
    _catalogStart: 10,
    _schemaLength: 5,
    _schemaStart: 14,
    _tableLength: 4,
    _tableStart: 20,
    _orgTableLength: 4,
    _orgTableStart: 25,
    _orgNameLength: 4,
    _orgNameStart: 35,
    characterSet: 224,
    encoding: 'utf8',
    name: 'User',
    columnLength: 128,
    columnType: 254,
    flags: 16515,
    decimals: 0
  }
]
>
```

<a href="https://gitpod.io/#https://github.com/takuyahara/gitpod-mysql2" target="_blank" rel="noopener noreferrer"><img src="https://gitpod.io/button/open-in-gitpod.svg" /></a>
