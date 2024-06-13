import {githubLogin, login} from '@/lib/action';

export default function LoginForm() {
  return (
    <>
      <form action={login}>
        <input type="text" name="email" placeholder="Enter your email"></input>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        ></input>
        <button>로그인</button>
      </form>
      <form action={githubLogin}>
        <button>GITHUB 로그인</button>
      </form>
    </>
  );
}
