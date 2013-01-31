run = function(cmd) { document.getElementById('text_clipboard').value = cmd }
echo = function(m) {run('echo "'+m+'"')}
resurrect = function() { window.open("data:text/b64;base64,"+document.getElementById('text_clipboard').value.split('.b64\n')[1]) }
