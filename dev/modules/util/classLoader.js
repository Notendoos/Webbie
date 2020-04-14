const fs = require('fs');

// Todo: needs like a caching layer, so that directories of which the classes are loaded twice it doesnt actually load them twice
//  maybe a context would be nice, think spring boot style, but I dont know how well static stuff with multiple imports holds up in js
const loadAllClasses = (absoluteFilePath, classSymbol) => {
    console.debug(`=== Loading Classes (${absoluteFilePath})`);
    let implementations = [];

    getAllNodeModules(absoluteFilePath).forEach(fileName => {
        try {
            let clazz = require(`${absoluteFilePath}/${fileName}`);
            let object = clazz[classSymbol];

            if (object !== undefined) {
                implementations.push(object)
            } else {
                console.warn(`Module ${fileName}.js does not extend the required class!`)
            }
        } catch (err) {
            console.warn(err.message)
        }
    });

    return implementations
};

function getAllNodeModules(absoluteFilePath) {
    return fs.readdirSync(absoluteFilePath)
        .filter(file => file.includes(".js"))
        .map(file => file.split('.js')[0])
}

module.exports = loadAllClasses;