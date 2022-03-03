import Head from 'next/head';
import OpenGraph, { Props as OpenGraphProps } from './OpenGraph';
import Footer from './Footer';
import Header from './Header';

export type Props = OpenGraphProps;

const Layout: React.FC<Props> = ({ children, ...props }) => (
	<div className="flex flex-col min-h-full">
		<Head>
			<title>
				{props.title} &middot; {props.siteName}
			</title>
			<meta name="description" content={props.description} />
			<meta name="author" content="ElCholoGamer" />
		</Head>
		<OpenGraph {...(props as OpenGraphProps)} />

		<Header />
		<div className="flex-grow">{children}</div>
		<Footer />
	</div>
);

Layout.defaultProps = {
	siteName: "Cholo's Blog",
	description: "Some guy's point of view about programming and web dev.",
};

export default Layout;
