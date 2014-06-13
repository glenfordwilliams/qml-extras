function generateID() {
    var guid = (function() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
                   .toString(16)
                   .substring(1);
      }
      return function() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
               s4() + '-' + s4() + s4() + s4();
      };
    })()();
    print(guid)
    return guid
}

function cherrypick(list, properties) {
    var result = []

    for (var i = 0; i < list.length; i++) {
        var item = list[i]
        var obj = {}
        for (prop in properties) {
            obj[prop] = item[prop]
        }

        result.push(obj)
    }

    return result
}