import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      <Link href="/auth/register" className="text-blue-500 underline mb-2">
        新規登録
      </Link>
      <Link href="/auth/login" className="text-blue-500 underline">
        ログイン
      </Link>
    </div>
  );
}
