import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // - promise.all() allows you to execute multiple promises concurrently.
  // - It takes an array of promises and returns a single promise
  // - If one of these promises rejected then promise.all() will be rejected
  // and pass direclty to .catch()
  // - invoke both methods with `()` and save return value in array.
  return Promise.all([uploadPhoto(), createUser()])
    .then((value) => {
      console.log(`${value[0]} ${value[1]} ${value[2]}`);
    })
    .catch(() => console.log('Signup system offline'));
}
