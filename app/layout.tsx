import "./globals.css";
import type { Metadata } from "next";
import Navigation from "./navigation";
import SessionPro from "./components/SessionProvider";

export const metadata: Metadata = {
	title: "My Next13 Study",
	description: "first app",
};

interface Props {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body className="bg-[url('/back.png')] bg-cover">
				<SessionPro>
					<Navigation />
					{children}
				</SessionPro>
			</body>
		</html>
	);
}
