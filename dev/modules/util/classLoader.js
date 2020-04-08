const fs = require('fs')

const loadAllClasses = (absoluteFilePath, classSymbol) => {
  let implementations = []

  getAllNodeModules(absoluteFilePath).forEach(fileName => {
    try {
      let clazz = require(`${absoluteFilePath}/${fileName}`);
      let object = new clazz()[classSymbol]

      if (object !== undefined) {
        implementations.push(object)
      } else {
        console.warn(`Module ${fileName}.js does not extend the required class!`)
      }
    } catch (err) {
      console.warn(err.message)
    }
  })

  return implementations
}

function getAllNodeModules(absoluteFilePath) {
  return fs.readdirSync(absoluteFilePath)
      .filter(file => file.includes(".js"))
      .map(file => file.split('.js')[0])
}

module.exports = loadAllClasses