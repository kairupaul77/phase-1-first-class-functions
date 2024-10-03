function receivesAFunction(callback) {
    callback()
}
function returnsANamedFunction() {
    return function namefunction() { }
}
function returnsAnAnonymousFunction() {
    return function () { }
}