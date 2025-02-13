"use client";

import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("ログアウトエラー:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">ダッシュボード</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white p-2 rounded"
      >
        ログアウト
      </button>
    </div>
  );
}
