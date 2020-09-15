let appStorage = {};

appStorage.store = (key, value) => {
    window.localStorage.setItem(key, value)
}

appStorage.get = (key) => {
    window.localStorage.getItem(key)
}
