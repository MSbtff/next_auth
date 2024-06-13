import {register} from '@/lib/action';

export default function RegisterForm() {
  return (
    <>
      <h1>Register Component</h1>
      <form action={register}>
        <input type="text" name="name" placeholder="Enter your name"></input>
        <input type="email" name="email" placeholder="Enter your Email"></input>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        ></input>
        <button>추가</button>
      </form>
    </>
  );
}
