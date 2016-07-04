MINUTES_BY_LOOP = 60;
SECONDS_BY_LOOP = 60;
HOURS_BY_LOOP = 12;

FULL_ANGLE = 360;

function rotation_css(name, start) {
    end = start + FULL_ANGLE;
    return "@-moz-keyframes spin_" + name + " {  0% {  -moz-transform: rotate(" + start + "deg) translate(-50%, 10%);  }  100% {  -moz-transform: rotate(" + end + "deg) translate(-50%, 10%);  }  } @-webkit-keyframes spin_" + name + " {  0% {  -webkit-transform: rotate(" + start + "deg) translate(-50%, 10%);  }  100% {  -webkit-transform: rotate(" + end + "deg) translate(-50%, 10%);  }  } @keyframes spin_" + name + " {  0% {  -webkit-transform: rotate(" + start + "deg) translate(-50%, 10%);  transform:rotate(" + start + "deg) translate(-50%, 10%);  }  100% {  -webkit-transform: rotate(" + end + "deg) translate(-50%, 0);  transform:rotate(" + end + "deg) translate(-50%, 10%);  }  }";
}

var time = new Date();
h_start = time.getHours() * (FULL_ANGLE / HOURS_BY_LOOP);
m_start = time.getMinutes() * (FULL_ANGLE / MINUTES_BY_LOOP);
s_start = time.getSeconds() * (FULL_ANGLE / SECONDS_BY_LOOP);

css_text = rotation_css('h', h_start) + rotation_css('m', m_start) + rotation_css('s', s_start)
style = document.createElement('style');
style.type = 'text/css';

if (style.styleSheet){
  style.styleSheet.cssText = css_text;
} else {
  style.appendChild(document.createTextNode(css_text));
}


document.getElementsByTagName("head")[0].appendChild(style)
