define(function () {
  // These will be the actual settings.
  var ops = {
    '+' : 1,
    '-' : 1,
    '*' : 0,
    '/' : 0,
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
    save: function () {
      // Get values of checkboxes.
      var gameSettings = {};
      var settingsFormElements = document.querySelectorAll('.form-item input');
      settingsFormElements.forEach(function (element) {
        if (element.checked) {
          ops[element.value] = 1;
        }
        else {
          ops[element.value] = 0;
        }
      });
      localStorage.setItem('mathsHeroSettings', JSON.stringify(ops));
    },
    load: function () {
      if ((typeof localStorage.getItem('mathsHeroSettings') != undefined) && (localStorage.getItem('mathsHeroSettings') != null) && (localStorage.getItem('mathsHeroSettings') != "null") && (localStorage.getItem('mathsHeroSettings') != "")) {
        var loadedSettings = JSON.parse(localStorage.getItem('mathsHeroSettings'));
        ops = loadedSettings;
        return loadedSettings;
      }
      else return false;
    },
    setUIValues: function () {
      this.load();
      var settingsFormElements = document.querySelectorAll('.form-item input');
      settingsFormElements.forEach(function (element) {
        if (ops[element.value] == 1) {
          element.checked = true;
        }
        else {
          element.checked = false;
        }
      });
    },
    getSettings: function () {
      return ops;
    }
  };
});
