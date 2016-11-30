var eventUtil={
  addHandler: function(element,type,handler){
  if(element.addEventListener){
     element.addEventListener(type,handler,false);
  }else if(element.attachEvent){
  element.attachEvent("on" + type, handler);
  }else{
  element["on" + type] = handler;
  }
 },
 
 getEvent:function(event){
  return event ? event : window.event;
 },
 
 getTarget:function(event){
  return event.target || event.srcElement;
 },
 
 getPageX : function(event) {
    var result = event.pageX,
        doc = document;
    if (!result && result !== 0) {
        result = (event.clientX || 0)
                    + (doc.documentElement.scrollLeft
                        || doc.body.scrollLeft);
    }
    return result;
},
 
 getPageY :function (event) {
    var result = event.pageY,
        doc = document;
    if (!result && result !== 0) {
        result = (event.clientY || 0)
                    + (doc.documentElement.scrollTop
                        || doc.body.scrollTop);
    }
    return result;
},

 
 removeHandler: function(element,type,handler){
 if(element.removeEventListener){
    element.removeEventListener(type,handler,false);
  }else if(element.detachEvent){
  element.detachEvent("on" + type,handler);
  }else{
  element["on" + type] = null;
  }
 }
 
 };