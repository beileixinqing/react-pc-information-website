const NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV === 'development') {
    // module.exports = `http://120.77.215.34:9001`
    module.exports = `https://zkapi.shuzizhongwen.com`
} else if (NODE_ENV === 'test') {
    module.exports = `http://120.77.215.34:9001`
} else {
    module.exports = `https://zkapi.shuzizhongwen.com`
}
