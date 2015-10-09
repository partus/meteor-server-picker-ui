
Template.serverPicker.events({
  "change .server-address": function(ev,inst){
    var old = __meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL;
    var nw = inst.$(".server-address").val()
    console.log(ev)
    window.localStorage.setItem("__root_url", nw)
    if(old != nw){
      console.log("Reload for server change!!");
      window.location.reload();
    }
  }
})

Template.serverPicker.helpers({
  selected: function(){
    return window.localStorage.getItem("__root_url") == this.valueOf()? {selected: true} : {};
  },
  currentServer: function(){
    return window.localStorage.getItem("__root_url");
  }
})
