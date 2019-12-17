Vue.config.devtools = false // Set this to true to enable the Vue DevTools browser extension.

getJSON("commands.json", (err, cmds) => {

  let app = new Vue({
    el: '#app',
    data: {
      search: '',
      commands: cmds
    },
    computed: {
      filteredList() {

        search = this.search.trim()

        function compare(a, b) {
          if (a.cmd < b.cmd)
            return -1;
          if (a.cmd > b.cmd)
            return 1;
          return 0;
        }

        return this.commands.filter(cmd => {

          return searchIs(search, cmd.cmd) ||
            searchIncludes(search, cmd.cmd) ||
            searchIncludes(search, cmd.description) ||
            searchIncludes(search, cmd.title) ||
            keywordsIncludes(cmd.keywords, search)

        }).sort(compare)
      }
    }
  })

})

function searchIs(search, text) {
  if (text.toLowerCase().includes(search.toLowerCase)) return true
}

function searchIncludes(search, text) {
  ret = false
  text = text.split(" ")
  search = search.split(" ")
  text.forEach(txt => {
    search.forEach(s => {
      if (txt.toLowerCase().includes(s.toLowerCase())) ret = true
    })
  })
  return ret
}

function keywordsIncludes(keywords, text) {
  ret = false
  text = text.split(" ")
  text.forEach(txt => {
    keywords.forEach(keyword => {
      if (keyword.toLowerCase().includes(txt.toLowerCase())) ret = true
    })
  })
  return ret
}

function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function () {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};