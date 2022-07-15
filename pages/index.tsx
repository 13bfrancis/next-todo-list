import { signIn, signOut, useSession } from "next-auth/react";

export default function IndexPage() {
  const { data: session } = useSession();
  // console.log(session);

  if (!session || !session.user) {
    return (
      <div>
        <p>You are not signed in.</p>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }

  return (
    <div>
      <p>Welcome {session.user.name}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
