
var aceEditor = ace.edit(document.getElementsByClassName("ace-editor-body")[0])
aceEditor.setOptions({
	enableBasicAutocompletion: true,
	enableLiveAutocompletion: true,
	enableSnippets: false
});


var data = {
    "台": ["tâi"],
    "語": ["gí","gú"],
}

var myCompleter = {
    getCompletions: function(editor, session, pos, prefix, callback) {
        console.info("myCompleter prefix:", prefix);
        if (data[prefix[1]]) {
	    console.log(data[prefix[1]])
            callback(null, data[prefix[1]].map(function(str) {
	        return {
		    caption: str,
		    value: `\\ruby{${prefix[1]}}{${str}}`,
		    meta: "Taiwanese"
		};
	    }));
	}
    }
}

aceEditor.completers.push(myCompleter);
