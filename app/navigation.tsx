import Link from "next/link";

const Navigation = () => {
	return (
		<header className="bg-white fixed top-0 w-full shadow-md">
			<nav className="container mx-auto px-6 py-3">
				<div className="flex justify-between items-center">
					<Link href="/" className="text-2xl font-bold text-gray-800">
						MyWebsite
					</Link>
					<div className="md:flex items-center space-x-4">
						<Link href="/" className="text-gray-800 hover:text-blue-600">
							Home
						</Link>
						<a href="#" className="text-gray-800 hover:text-blue-600">
							About
						</a>
						<a href="#" className="text-gray-800 hover:text-blue-600">
							Services
						</a>
						<a href="#" className="text-gray-800 hover:text-blue-600">
							Contact
						</a>
						<a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md">
							Sign Up
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navigation;
