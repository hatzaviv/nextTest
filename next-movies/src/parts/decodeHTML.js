// Needed because some of the titles have special HTML characters in them such as &uuml;
const decodeHTML = (str) => {
    var txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
}

export default decodeHTML;