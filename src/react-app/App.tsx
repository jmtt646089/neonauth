import { Routes, Route, useParams } from 'react-router-dom';
import {
  AuthView,
  AccountView,
  SignedIn,
  UserButton,
  RedirectToSignIn,
} from '@neondatabase/neon-js/auth/react';
import { authClient } from '../auth';

const handleGoogleSignIn = async () => {
  try {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: window.location.origin,
    });
  } catch (error) {
    console.error("Google sign-in error:", error);
  }
};


useEffect(() => {
  authClient.getSession().then(({ data }) => {
    if (data?.session) {
      setUser(data.session.user);
    }
    setLoading(false);
  });
}, []);


function Home() {
  return (
    <>
      <SignedIn>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            gap: '2rem',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <h1>Welcome!</h1>
            <p>You're successfully authenticated.</p>
			        <button  
     					onClick={() => {
						fetch("api/auth/get-session")
							.then((res) => res.json() as Promise<{ name: string }>)
							.then((data) => console.log(data));
					}}   
        > haha haha </ button>
            <UserButton size='icon' />
          </div>
        </div>
      </SignedIn>

      <RedirectToSignIn />
    </>
  );
}

function Auth() {
  const { pathname } = useParams();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '2rem 1rem',
      }}
    >
      <AuthView pathname={pathname} />
    </div>
  );
}

function Account() {
  const { pathname } = useParams();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '2rem 1rem',
      }}
    >
      <AccountView pathname={pathname} />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/:pathname" element={<Auth />} />
      <Route path="/account/:pathname" element={<Account />} />
    </Routes>
  );
}
