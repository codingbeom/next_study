import Image from "next/image";
import LoginButton from "./components/LoginButton";

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-20`}
		>
			<div>이곳은 모든 유저에게 보여줄 페이지 입니다.</div>
			<LoginButton />
		</main>
	);
}
