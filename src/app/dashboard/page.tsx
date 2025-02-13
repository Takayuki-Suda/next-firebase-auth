"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/auth/login");
    }
  }, [session, router]);

  return (
    <div>
      <h1>Dashboard</h1>
      {session && <p>Welcome, {session.user?.email}</p>}
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
