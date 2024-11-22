export function $(selector) {
    if (selector.startsWith('#')) {
        return document.getElementById(selector.slice(1));
    }
    else if (selector.startsWith('.')) {
        return document.getElementsByClassName(selector.slice(1));
    }
    else {
        return document.getElementsByTagName(selector);
    }
}


export function  $$(selector) {
    return Array.from(document.querySelectorAll(selector));
}

export function $id(id) {
    return document.getElementById(id);
}

export function $class(className) {
    return document.getElementsByClassName(className);
}
