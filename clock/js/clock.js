MINUTES_BY_LOOP = 60;
SECONDS_BY_LOOP = 60;
HOURS_BY_LOOP = 12;

FULL_ANGLE = 360;

function rotation_css(name, start) {
    end = start + FULL_ANGLE;
    return "@-moz-keyframes spin_" + name + " {  0% {  -moz-transform: rotate(" + start + "deg) translate(-50%, 20%);  }  100% {  -moz-transform: rotate(" + end + "deg) translate(-50%, 20%);  }  } @-webkit-keyframes spin_" + name + " {  0% {  -webkit-transform: rotate(" + start + "deg) translate(-50%, 20%);  }  100% {  -webkit-transform: rotate(" + end + "deg) translate(-50%, 20%);  }  } @keyframes spin_" + name + " {  0% {  -webkit-transform: rotate(" + start + "deg) translate(-50%, 20%);  transform:rotate(" + start + "deg) translate(-50%, 20%);  }  100% {  -webkit-transform: rotate(" + end + "deg) translate(-50%, 30%);  transform:rotate(" + end + "deg) translate(-50%, 20%);  }  }";
}

var time = new Date();
start_hour = time.getHours()
start_minute = time.getMinutes()
start_second = time.getSeconds()

rotation_hour = (start_hour + (start_minute + start_second / SECONDS_BY_LOOP) / MINUTES_BY_LOOP) * (FULL_ANGLE / HOURS_BY_LOOP);
rotation_minute = (start_minute + start_second / SECONDS_BY_LOOP) * (FULL_ANGLE / MINUTES_BY_LOOP);
rotation_second = start_second * (FULL_ANGLE / SECONDS_BY_LOOP);

css_text = rotation_css('h', rotation_hour) + rotation_css('m', rotation_minute) + rotation_css('s', rotation_second)
style = document.createElement('style');
style.type = 'text/css';

if (style.styleSheet){
  style.styleSheet.cssText = css_text;
} else {
  style.appendChild(document.createTextNode(css_text));
}


document.getElementsByTagName("head")[0].appendChild(style)
