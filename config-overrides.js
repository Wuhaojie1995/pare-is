const {
    override,
    fixBabelImports,
    addLessLoader,
    addDecoratorsLegacy,
    addWebpackResolve
} = require('customize-cra');
const path = require('path');
const setWebpackConfig = () => config => {
    config.output.jsonpFunction = 'jsonpFunctionFp';
    return config;
};
module.exports = override(
    setWebpackConfig(),
    fixBabelImports('import', {
        libraryName: 'antd',
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        localIdentName: '[local]--[hash:base64:5]'
    }),
    addDecoratorsLegacy(),
    addWebpackResolve({
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@coms': path.resolve(__dirname, 'src/containers/components'),
            '@c':path.resolve(__dirname,'src/config'),
            '@page':path.resolve(__dirname,'src/containers/page'),
            '@utils':path.resolve(__dirname,'src/containers/utils/index')
        }
    })

);