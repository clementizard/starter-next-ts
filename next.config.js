require('dotenv').config();
const path = require('path');

const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withFonts = require('next-fonts');

const nextConfig = {
	env: {
		GRAPHQL_URL: process.env.GRAPHQL_URL,
	},
	// target: 'serverless',
	analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE || ''),
	analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE || ''),
	bundleAnalyzerConfig: {
		server: {
			analyzerMode: 'static',
			reportFilename: '../bundles/server.html',
		},
		browser: {
			analyzerMode: 'static',
			reportFilename: '../bundles/client.html',
		},
	},
	enableSvg: true,
	webpack(config) {
		config.resolve.alias.Components = path.join(__dirname, 'components');
		config.resolve.alias.Layouts = path.join(__dirname, 'layouts');
		config.resolve.alias.CommonComponents = path.join(__dirname, 'components/common');
		config.resolve.alias.Inputs = path.join(__dirname, 'components/common/Inputs');
		config.resolve.alias.PublicComponents = path.join(__dirname, 'components/public');
		config.resolve.alias.AdminComponents = path.join(__dirname, 'components/admin');
		config.resolve.alias.Services = path.join(__dirname, 'services');
		config.resolve.alias.Public = path.join(__dirname, 'public');
		config.resolve.alias.Styles = path.join(__dirname, 'styles');
		config.resolve.alias.Sizes = path.join(__dirname, 'styles/Sizes');
		config.resolve.alias.Tools = path.join(__dirname, 'tools');
		config.resolve.alias.Hooks = path.join(__dirname, 'tools/hooks');

		return config;
	},
};

module.exports = withBundleAnalyzer(withFonts(nextConfig));
