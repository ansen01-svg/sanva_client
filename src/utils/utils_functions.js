import { bottomNavigation } from "./arrays";


const storeInLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
}

const getFromLocalStorage = (key) => {
    const value = localStorage.getItem(key)

    return value;
}

const getPageIndex = (pageTitle) => {
    if(pageTitle === null) return 0;

    const currentPage = bottomNavigation.find(page => page.title === pageTitle)
    return currentPage.id;
}


export {
    storeInLocalStorage,
    getFromLocalStorage,
    getPageIndex,
}