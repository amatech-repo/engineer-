import styles from '../../styles/Home.module.css'
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Col, Container, Form, FormGroup, Input, Label, Row, Button } from "reactstrap";
import { useState } from 'react';

import Header from './Header'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const auth = getAuth();
  // Google 認証の処理
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // Google 認証に成功した場合の処理
        console.log(result);
        if (router.pathname !== '/') {
          router.push('/');
        }
      })
      .catch((error) => {
        // Google 認証に失敗した場合の処理
        console.log(error);
      });
  };

  // GitHub 認証の処理
  const handleGithubSignIn = () => {
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // GitHub 認証に成功した場合の処理
        console.log(result);
        if (router.pathname !== '/') {
          router.push('/');
        }
      })
      .catch((error) => {
        // GitHub 認証に失敗した場合の処理
        console.log(error);
      });
  };

  const doLogin = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // alert( 'ログインOK！' );
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



  // パスワードを忘れた場合のリンクタグを追加
  return (
    <div className={styles.card}>
      <h1>ログイン</h1>
      <Header />
      <div style={{ paddingBottom: "1rem" }}>
        <Form>
          <FormGroup>
            <Label>
              メールアドレス：
            </Label>
            <Input
              type="email"
              name="email"
              style={{ height: 50, fontSize: "1.2rem" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              パスワード：
            </Label>
            <Input
              type="password"
              name="password"
              style={{ height: 50, fontSize: "1.2rem" }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button
            style={{ width: 220 }}
            color="primary"
            onClick={() => {
              doLogin();
            }}
          >
            ログイン
          </Button>
        </Form>
      </div>
      <div style={{ marginTop: '16px' }}>
        <Button
          style={{ width: 220, marginRight: '16px' }}
          color="primary"
          onClick={() => {
            // Google認証を行う関数を呼び出す
            handleGoogleSignIn();

          }}
        >
          Googleで登録
        </Button>
        <Button
          style={{ width: 220 }}
          color="primary"
          onClick={() => {
            // Github認証を行う関数を呼び出す
            handleGithubSignIn();
          }}
        >
          Githubで登録
        </Button>
      </div>
      <div>

        <Link
          href="/auth/register">
          新規登録はこちら
        </Link>
      </div>
      <div>
        <Link
          href="/auth/forgot_password">
          パスワードを忘れた場合
        </Link>
      </div>
    </div>
  )
}
