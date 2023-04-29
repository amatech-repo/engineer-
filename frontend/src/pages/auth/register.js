import styles from '../../styles/Home.module.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
// 現時点で使わないものもあるが今後のことを考えて入れておく
import { Col, Container, Form, FormGroup, Input, Label, Row, Button } from "reactstrap";
import { useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import { useAuth } from "@/context/AuthContext";

export default function Register() {
  // useStateでユーザーが入力したメールアドレスとパスワードをemailとpasswordに格納する
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter()
  const { currentUser } = useAuth();

  // ユーザーが登録ボタンを押したときにdoRegister関数が実行される
  const doRegister = () => {
    const auth = getAuth();

    // Firebaseで用意されているユーザー登録の関数
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // ユーザー登録すると自動的にログインされてuserCredential.userでユーザーの情報を取得できる
        const user = userCredential.user;
        // ユーザー登録ができたかどうかをわかりやすくするためのアラート
        alert('登録完了！');
        console.log(user);

        if (user && router.pathname !== '/') {
          router.push('/');
          return null;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={styles.card}>
      <h1>Sign Up to TailAdmin</h1>
      <div>
        <Form>
        <FormGroup>
            <Label>
              Name
            </Label>
            <Input
              type="text"
              placeholder='Enter your name'
              name="name"
              style={{ height: 50, fontSize: "1.2rem" }}
              // onChangeでユーザーが入力した値を取得し、その値をnameに入れる
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label>
              Email
            </Label>
            <Input
              type="email"
              placeholder='Enter your email'
              name="email"
              style={{ height: 50, fontSize: "1.2rem" }}
              // onChangeでユーザーが入力した値を取得し、その値をemailに入れる
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Password
            </Label>
            <Input
              type="password"
              placeholder='Enter your password'
              name="password"
              style={{ height: 50, fontSize: "1.2rem" }}
              // onChangeでユーザーが入力した値を取得し、その値をpasswordに入れる
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Re-type Password（確認用）
            </Label>
            <Input
              type="password"
              placeholder='Re-enter your password'
              name="password"
              style={{ height: 50, fontSize: "1.2rem" }}
              // onChangeでユーザーが入力した値を取得し、その値をpasswordに入れる
              onChange={(e) => setPassword(e.target.value)}

            />
          </FormGroup>
          
          <Button
            style={{ width: 220 }}
            color="primary"
            // 登録ボタンがクリックされたときdoRegister関数が実行されるようにする
            onClick={() => {
              doRegister();
            }}
          >
            Sign Up
          </Button>
          

        </Form>
            <div>
              <p>Already have an account? <a href="/auth/login">Login</a></p>
            </div>

      </div>
    </div>
  )
}
