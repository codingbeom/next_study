import Link from "next/link";

export default function NotFound() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-10`}
		>
			<div className="flex flex-col items-center">
				<h2>잘못된 페이지 입니다.</h2>
				<Link href="/">홈으로</Link>
			</div>
		</main>
	);
}
