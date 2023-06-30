function $g(selector) {
  //nodelist至少包含一個node - Element object
  //如果沒有符合的，則會是一個empty NodeList
  let nodelist = document.querySelectorAll(selector);
  if (nodelist.length == 0) {
    return null;
  }
  return nodelist.length == 1 ? nodelist[0] : nodelist;
}

export { $g }