// Shouldn't break any class loader shit
class StupidClass {

    getMatcher() {
        return "no"
    }

    getDescription() {
        return "no"
    }

    consume(msg) {
        return "no"
    }
}

module.exports = StupidClass;