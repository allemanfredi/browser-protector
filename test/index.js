import {
  encrypt,
  decrypt
} from'../index'

QUnit.module('encryptor')

QUnit.test('Should encrypt and then decypt an object', async assert => {
  const password = 'ver1StrongPasswo0rd'
  const obj = {
    hello: 'world'
  }

  const encrypted = await encrypt(password, obj)
  const decrypted = await decrypt(password, encrypted)
  assert.deepEqual(obj, decrypted)
})