import styles from '../../styles/Home.module.css'
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

  const doLogin = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
         alert( 'ログインOK！' );
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
              Email
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
              Password
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
            Sign In
          </Button>
        </Form>
      </div>
      <div>

        
          
          <p>Don't have an account?<a href="/auth/register"> Sign Up</a></p>
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
