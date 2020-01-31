import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/core/styles';

import { mediaStyle } from 'Styles/Media';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const sheet = new ServerStyleSheet();
		const sheets = new ServerStyleSheets();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () => originalRenderPage({
				enhanceApp: (App: any) => (props: any) => sheets.collect(sheet.collectStyles(<App {...props} />)),
			});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
						{sheets.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		// @ts-ignore
		const { styleTags } = this.props;

		return (
			<html lang="fr">
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content=""
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="theme-color" content="#ffffff" />
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no, minimal-ui"
					key="viewport"
				/>
				<meta
					name="theme-color"
					content="white"
				/>
				<style type="text/css">{mediaStyle}</style>
				{styleTags}
			</Head>
			<body>
			<Main />
			<NextScript />
			</body>
			</html>
		);
	}
}
