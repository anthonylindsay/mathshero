define(function () {
  // These will be the actual settings.
  var ops = {
    '+' : 1,
    '-' : 1,
    '*' : 0,
    '/' : 0,
    'random' : 0,
  };
  // These map the settings to what is displayed.
  var mapping = {
    '+' : '+',
    '-' : '-',
    '*' : 'x',
    '/' : '&#247;',
  };
  // Settings UI
  var html = '<div id="settings-form"><h2>Settings</h2><form>';
  Object.keys(mapping).forEach(function(key) {
    html += '<div class="form-item" ><input type="checkbox" name="ops" value="' + key + '"> ' + mapping[key] + '</div>';
  });
  html += '</div>';

  return {
    getSettings: function () {
      return {
        'random' : 1,
      };
    },
    getHTML: function () {
      return html;
    },
    // storage object
    // store in localStorage
    // json to string
    // Fetch from localStorage
    getMapping: function () {
      return mapping;
    },

    getSettings: function () {
      return ops;
    }
  };
});
