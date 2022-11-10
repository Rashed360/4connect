import Head from 'next/head'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>4 Connect</title>
				<meta name='description' content='Four Connect Game' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
