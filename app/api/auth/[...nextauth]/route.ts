import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: {
					label: "이메일",
					type: "text",
					placeholder: "이메일 주소 입력",
				},
				password: { label: "비밀번호", type: "password", autocomplete: true },
			},
			async authorize(credentials, req) {
				console.log(credentials);

				const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						username: credentials?.username,
						password: credentials?.password,
					}),
				});
				const user = await res.json();

				if (user) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},

		async session({ session, token }) {
			session.user = token as any;
			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
});

export { handler as GET, handler as POST };
