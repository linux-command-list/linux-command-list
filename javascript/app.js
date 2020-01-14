Vue.config.devtools = true // Set this to true to enable the Vue DevTools browser extension.

const VAR_PREFIX = "<"
const VAR_SUFFIX = ">"

getJSON("commands.json", (err, cmds) => {

  let app = new Vue({
    el: '#app',
    data: {
      search: '',
      commands: cmds
    },
    computed: {
      filteredList() {

        searchTerm = this.search.trim()

        let computedCommands = JSON.parse(JSON.stringify(this.commands).replace(/\<var\>/g, VAR_PREFIX).replace(/\<\/var\>/g, VAR_SUFFIX))

        function compare(a, b) {
          if (a.cmd < b.cmd)
            return -1;
          if (a.cmd > b.cmd)
            return 1;
          return 0;
        }

        return computedCommands.filter(cmd => {

          return search(searchTerm, cmd)

        }).sort(compare)
      }
    }
  })

})

function search(search, cmd) {

  ret = true

  command = cmd.cmd.toLowerCase()
  title = cmd.title.toLowerCase()
  usage = cmd.usage.toLowerCase()
  description = cmd.description.toLowerCase()
  keywords = cmd.keywords

  combined = `${command} ${title} ${usage} ${description} ${keywords.join(" ")}`
  // console.log(combined)

  search = search.toLowerCase().split(" ")

  search.forEach(s => {
    if(!combined.includes(s)) ret = false
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