define("ace/mode/lua",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/lua_highlight_rules","ace/range"],function(e,t,n){var r=e("../lib/oop"),i=e("./text").Mode,s=e("../tokenizer").Tokenizer,o=e("./lua_highlight_rules").LuaHighlightRules,u=e("../range").Range,a=function(){this.$tokenizer=new s((new o).getRules())};r.inherits(a,i),function(){function n(t){var n=0;for(var r in t){var i=t[r];i.type=="keyword"?i.value in e&&(n+=e[i.value]):i.type=="paren.lparen"?n++:i.type=="paren.rparen"&&n--}return n<0?-1:n>0?1:0}var e={"function":1,then:1,"do":1,"else":1,elseif:1,repeat:1,end:-1,until:-1},t=["else","elseif","end","until"];this.getNextLineIndent=function(e,t,r){var i=this.$getIndent(t),s=0,o=this.$tokenizer.getLineTokens(t,e),u=o.tokens;return e=="start"&&(s=n(u)),s>0?i+r:s<0&&i.substr(i.length-r.length)==r&&!this.checkOutdent(e,t,"\n")?i.substr(0,i.length-r.length):i},this.checkOutdent=function(e,n,r){if(r!="\n"&&r!="\r"&&r!="\r\n")return!1;if(n.match(/^\s*[\)\}\]]$/))return!0;var i=this.$tokenizer.getLineTokens(n.trim(),e).tokens;return!i||!i.length?!1:i[0].type=="keyword"&&t.indexOf(i[0].value)!=-1},this.autoOutdent=function(e,t,r){var i=t.getLine(r-1),s=this.$getIndent(i).length,o=this.$tokenizer.getLineTokens(i,"start").tokens,a=t.getTabString().length,f=s+a*n(o),l=this.$getIndent(t.getLine(r)).length;if(l<f)return;t.outdentRows(new u(r,0,r+2,0))}}.call(a.prototype),t.Mode=a}),define("ace/mode/lua_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(e,t,n){var r=e("../lib/oop"),i=e("../lib/lang"),s=e("./text_highlight_rules").TextHighlightRules,o=function(){var e=i.arrayToMap("break|do|else|elseif|end|for|function|if|in|local|repeat|return|then|until|while|or|and|not".split("|")),t=i.arrayToMap("true|false|nil|_G|_VERSION".split("|")),n=i.arrayToMap("string|xpcall|package|tostring|print|os|unpack|require|getfenv|setmetatable|next|assert|tonumber|io|rawequal|collectgarbage|getmetatable|module|rawset|math|debug|pcall|table|newproxy|type|coroutine|_G|select|gcinfo|pairs|rawget|loadstring|ipairs|_VERSION|dofile|setfenv|load|error|loadfile|sub|upper|len|gfind|rep|find|match|char|dump|gmatch|reverse|byte|format|gsub|lower|preload|loadlib|loaded|loaders|cpath|config|path|seeall|exit|setlocale|date|getenv|difftime|remove|time|clock|tmpname|rename|execute|lines|write|close|flush|open|output|type|read|stderr|stdin|input|stdout|popen|tmpfile|log|max|acos|huge|ldexp|pi|cos|tanh|pow|deg|tan|cosh|sinh|random|randomseed|frexp|ceil|floor|rad|abs|sqrt|modf|asin|min|mod|fmod|log10|atan2|exp|sin|atan|getupvalue|debug|sethook|getmetatable|gethook|setmetatable|setlocal|traceback|setfenv|getinfo|setupvalue|getlocal|getregistry|getfenv|setn|insert|getn|foreachi|maxn|foreach|concat|sort|remove|resume|yield|status|wrap|create|running".split("|")),r=i.arrayToMap("string|package|os|io|math|debug|table|coroutine".split("|")),s=i.arrayToMap("__add|__sub|__mod|__unm|__concat|__lt|__index|__call|__gc|__metatable|__mul|__div|__pow|__len|__eq|__le|__newindex|__tostring|__mode|__tonumber".split("|")),o=i.arrayToMap("".split("|")),u=i.arrayToMap("setn|foreach|foreachi|gcinfo|log10|maxn".split("|")),a="",f="(?:(?:[1-9]\\d*)|(?:0))",l="(?:0[xX][\\dA-Fa-f]+)",c="(?:"+f+"|"+l+")",h="(?:\\.\\d+)",p="(?:\\d+)",d="(?:(?:"+p+"?"+h+")|(?:"+p+"\\.))",v="(?:"+d+")",m=[];this.$rules={start:[{token:"comment",regex:a+"\\-\\-\\[\\[.*\\]\\]"},{token:"comment",regex:a+"\\-\\-\\[\\=\\[.*\\]\\=\\]"},{token:"comment",regex:a+"\\-\\-\\[\\={2}\\[.*\\]\\={2}\\]"},{token:"comment",regex:a+"\\-\\-\\[\\={3}\\[.*\\]\\={3}\\]"},{token:"comment",regex:a+"\\-\\-\\[\\={4}\\[.*\\]\\={4}\\]"},{token:"comment",regex:a+"\\-\\-\\[\\={5}\\=*\\[.*\\]\\={5}\\=*\\]"},{token:"comment",regex:a+"\\-\\-\\[\\[.*$",merge:!0,next:"qcomment"},{token:"comment",regex:a+"\\-\\-\\[\\=\\[.*$",merge:!0,next:"qcomment1"},{token:"comment",regex:a+"\\-\\-\\[\\={2}\\[.*$",merge:!0,next:"qcomment2"},{token:"comment",regex:a+"\\-\\-\\[\\={3}\\[.*$",merge:!0,next:"qcomment3"},{token:"comment",regex:a+"\\-\\-\\[\\={4}\\[.*$",merge:!0,next:"qcomment4"},{token:function(e){var t=/\-\-\[(\=+)\[/,n;return(n=t.exec(e))!=null&&(n=n[1])!=undefined&&m.push(n.length),"comment"},regex:a+"\\-\\-\\[\\={5}\\=*\\[.*$",merge:!0,next:"qcomment5"},{token:"comment",regex:"\\-\\-.*$"},{token:"string",regex:a+"\\[\\[.*\\]\\]"},{token:"string",regex:a+"\\[\\=\\[.*\\]\\=\\]"},{token:"string",regex:a+"\\[\\={2}\\[.*\\]\\={2}\\]"},{token:"string",regex:a+"\\[\\={3}\\[.*\\]\\={3}\\]"},{token:"string",regex:a+"\\[\\={4}\\[.*\\]\\={4}\\]"},{token:"string",regex:a+"\\[\\={5}\\=*\\[.*\\]\\={5}\\=*\\]"},{token:"string",regex:a+"\\[\\[.*$",merge:!0,next:"qstring"},{token:"string",regex:a+"\\[\\=\\[.*$",merge:!0,next:"qstring1"},{token:"string",regex:a+"\\[\\={2}\\[.*$",merge:!0,next:"qstring2"},{token:"string",regex:a+"\\[\\={3}\\[.*$",merge:!0,next:"qstring3"},{token:"string",regex:a+"\\[\\={4}\\[.*$",merge:!0,next:"qstring4"},{token:function(e){var t=/\[(\=+)\[/,n;return(n=t.exec(e))!=null&&(n=n[1])!=undefined&&m.push(n.length),"string"},regex:a+"\\[\\={5}\\=*\\[.*$",merge:!0,next:"qstring5"},{token:"string",regex:a+'"(?:[^\\\\]|\\\\.)*?"'},{token:"string",regex:a+"'(?:[^\\\\]|\\\\.)*?'"},{token:"constant.numeric",regex:v},{token:"constant.numeric",regex:c+"\\b"},{token:function(i){return e.hasOwnProperty(i)?"keyword":t.hasOwnProperty(i)?"constant.language":o.hasOwnProperty(i)?"invalid.illegal":r.hasOwnProperty(i)?"constant.library":u.hasOwnProperty(i)?"invalid.deprecated":n.hasOwnProperty(i)?"support.function":s.hasOwnProperty(i)?"support.function":"identifier"},regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\/|%|\\#|\\^|~|<|>|<=|=>|==|~=|=|\\:|\\.\\.\\.|\\.\\."},{token:"paren.lparen",regex:"[\\[\\(\\{]"},{token:"paren.rparen",regex:"[\\]\\)\\}]"},{token:"text",regex:"\\s+"}],qcomment:[{token:"comment",regex:"(?:[^\\\\]|\\\\.)*?\\]\\]",next:"start"},{token:"comment",merge:!0,regex:".+"}],qcomment1:[{token:"comment",regex:"(?:[^\\\\]|\\\\.)*?\\]\\=\\]",next:"start"},{token:"comment",merge:!0,regex:".+"}],qcomment2:[{token:"comment",regex:"(?:[^\\\\]|\\\\.)*?\\]\\={2}\\]",next:"start"},{token:"comment",merge:!0,regex:".+"}],qcomment3:[{token:"comment",regex:"(?:[^\\\\]|\\\\.)*?\\]\\={3}\\]",next:"start"},{token:"comment",merge:!0,regex:".+"}],qcomment4:[{token:"comment",regex:"(?:[^\\\\]|\\\\.)*?\\]\\={4}\\]",next:"start"},{token:"comment",merge:!0,regex:".+"}],qcomment5:[{token:function(e){var t=/\](\=+)\]/,n=this.rules.qcomment5[0],r;n.next="start";if((r=t.exec(e))!=null&&(r=r[1])!=undefined){var i=r.length,s;(s=m.pop())!=i&&(m.push(s),n.next="qcomment5")}return"comment"},regex:"(?:[^\\\\]|\\\\.)*?\\]\\={5}\\=*\\]",next:"start"},{token:"comment",merge:!0,regex:".+"}],qstring:[{token:"string",regex:"(?:[^\\\\]|\\\\.)*?\\]\\]",next:"start"},{token:"string",merge:!0,regex:".+"}],qstring1:[{token:"string",regex:"(?:[^\\\\]|\\\\.)*?\\]\\=\\]",next:"start"},{token:"string",merge:!0,regex:".+"}],qstring2:[{token:"string",regex:"(?:[^\\\\]|\\\\.)*?\\]\\={2}\\]",next:"start"},{token:"string",merge:!0,regex:".+"}],qstring3:[{token:"string",regex:"(?:[^\\\\]|\\\\.)*?\\]\\={3}\\]",next:"start"},{token:"string",merge:!0,regex:".+"}],qstring4:[{token:"string",regex:"(?:[^\\\\]|\\\\.)*?\\]\\={4}\\]",next:"start"},{token:"string",merge:!0,regex:".+"}],qstring5:[{token:function(e){var t=/\](\=+)\]/,n=this.rules.qstring5[0],r;n.next="start";if((r=t.exec(e))!=null&&(r=r[1])!=undefined){var i=r.length,s;(s=m.pop())!=i&&(m.push(s),n.next="qstring5")}return"string"},regex:"(?:[^\\\\]|\\\\.)*?\\]\\={5}\\=*\\]",next:"start"},{token:"string",merge:!0,regex:".+"}]}};r.inherits(o,s),t.LuaHighlightRules=o})