import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>NextJS Starter template with TailwindCSS</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center py-2">
				<main className="mx-auto w-full max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex gap-10">
					<h1 className="bg-gray-200 px-2">Hello World!</h1>
				</main>
			</div>
		</>
	);
};

export default Home;
