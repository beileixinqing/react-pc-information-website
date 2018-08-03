'use strict';

const NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV === 'development') {
    // module.exports = `586b5112abb8aa1973d1a661`
    module.exports = `5b63cb7baae6975374676173`
} else if (NODE_ENV === 'test') {
    module.exports = `586b5112abb8aa1973d1a661`
} else {
    module.exports = `5b63cb7baae6975374676173`
}