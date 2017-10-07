export default function getBaseUrl() {
  // const inDev = window.location.hostname === 'localhost';
  // return inDev ? 'http://localhost:3001/' : '/';
  return getQueryStringParamenterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

function getQueryStringParamenterByName(name, url) {
  if(!url) { url = window.location.href; }

  name = name.replace(/[[\]]/g, '\\$&');
  var regExp = '[?&]' + name + '(=([^&#]*)|&|#|$)',
      regExpObj =  new RegExp(regExp),
      results = regExpObj.exec(url);

  if(!results) { return null; }
  if(!results[2]) { return null; }

  return decodeURIComponent(results[2].replace(/\+/g,  ' '));
}
