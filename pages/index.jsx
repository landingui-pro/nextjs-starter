import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Miniature Tools for Everyday needs</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center py-2">
				<main className="mx-auto w-full max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex gap-10">
					<h1>Hello</h1>
				</main>
			</div>
		</>
	);
};

export default Home;
