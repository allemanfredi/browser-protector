# :lock: browser-protector

Simple module for storing data within the Browser through __`Argon2id`__ and __`AES-GCM`__

&nbsp;

## :rocket: installation

```
npm install browser-protector
```

&nbsp;

## :zap: Usage

```js
import {
  encrypt,
  decrypt
} from'browser-protector'

const password = 'ver1StrongPasswo0rd'
const secrets = {
  hello: 'world'
}

encrypt(password, secrets)
.then(enc => {
  return decrypt(password, enc)
})
.then(result => {
  assert.deepEqual(result, secrets)
})
```

&nbsp;


## :page_with_curl: Details

After the ecryption, the result is an object that includes three base64-encoded fields, data iv and salt.

The data is encrypted using the __`AES-GCM`__ algorithm with a key generated with __`Argon2id`__.

&nbsp;

## :guardsman: Tests:

After having cloned the repo

```
npm run build
```

And then open __/test/index.html__