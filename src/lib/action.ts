'use server';

import {auth, signIn, signOut} from '@/auth';
import {User} from './schema';
import {hash} from 'bcryptjs';
import {redirect} from 'next/navigation';
import connectDB from './db';

export async function register(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password'); //암호화를 해줘야함 hash화 해줘야함 안 그러면 불법

  if (!name || !email || !password) {
    console.log('입력값이 부족합니다.');
    // throw new Error('입력값이 부족합니다.)
  }

  connectDB();

  //있는 회원 조회
  const existingUser = await User.findOne({email});
  if (existingUser) {
    console.log('이미 가입된 회원입니다.');
  }
  //없는 회원 db에 추가
  const hashedPassword = await hash(String(password), 10);
  const user = new User({name, email, password: hashedPassword});

  await user.save();

  redirect('/');
}

//로그인

export async function login(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');
  if (!email || !password) {
    return console.log('입력값이 부족합니다.');
  }

  try {
    //auth.js 연동
    // 로그인 과정을 credential이라 부름
    await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: '/',
    });
  } catch (err) {
    console.log(err);
  }
  redirect('/');
}

// 깃허브 로그인
export async function githubLogin() {
  try {
    await signIn('github', {callbackUrl: '/'});
  } catch (err) {
    console.log(err);
  }
}

export async function logout() {
  await signOut();
}
