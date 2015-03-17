require.config({
  baseUrl: "/scripts",
  shim: {
    jquery_validation: {
      deps: [
        "jquery"
      ]
    },
    /*"jquery-form": {
      deps: [
        "jquery"
      ]
    },
    "jquery.fileupload": {
      deps: [
        "jquery"
      ]
    },
    "jquery.iframe-transport": {
      deps: [
        "jquery"
      ]
    },*/
    bootstrap: {
      deps: [
        "jquery"
      ]
    }//,
    /*pagination: {
      deps: [
        "jquery"
      ]
    },
    Chart: {
      deps: [
        "jquery"
      ]
    },
    "bootstrap3-datetimepicker": {
      deps: [
        "bootstrap"
      ]
    },
    popover: {
      deps: [
        "bootstrap"
      ]
    },
    tooltip: {
      deps: [
        "bootstrap"
      ]
    },
    "bootstrap-datetimepicker": {
      deps: [
        "bootstrap"
      ]
    },
    CN: {
      deps: [
        "bootstrap3-datetimepicker"
      ]
    }*/
  },
  packages: [

  ],
  paths: {
    bootstrap: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap",
    affix: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix",
    alert: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert",
    button: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button",
    carousel: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel",
    collapse: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse",
    dropdown: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown",
    tab: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab",
    transition: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition",
    scrollspy: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy",
    modal: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal",
    tooltip: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip",
    popover: "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover",
    "bootstrap3-datetimepicker": "../bower_components/bootstrap3-datetimepicker/build/js/bootstrap-datetimepicker.min",
    jquery: "../bower_components/jquery/dist/jquery",
    //jquery: "jquery-1.11.1",
    "jquery.postmessage-transport": "../bower_components/jquery-file-upload/js/cors/jquery.postmessage-transport",
    "jquery.xdr-transport": "../bower_components/jquery-file-upload/js/cors/jquery.xdr-transport",
    "jquery.ui.widget": "../bower_components/jquery-file-upload/js/vendor/jquery.ui.widget",
    "jquery.fileupload": "../bower_components/jquery-file-upload/js/jquery.fileupload",
    "jquery.fileupload-process": "../bower_components/jquery-file-upload/js/jquery.fileupload-process",
    "jquery.fileupload-validate": "../bower_components/jquery-file-upload/js/jquery.fileupload-validate",
    "jquery.fileupload-image": "../bower_components/jquery-file-upload/js/jquery.fileupload-image",
    "jquery.fileupload-audio": "../bower_components/jquery-file-upload/js/jquery.fileupload-audio",
    "jquery.fileupload-video": "../bower_components/jquery-file-upload/js/jquery.fileupload-video",
    "jquery.fileupload-ui": "../bower_components/jquery-file-upload/js/jquery.fileupload-ui",
    "jquery.fileupload-jquery-ui": "../bower_components/jquery-file-upload/js/jquery.fileupload-jquery-ui",
    "jquery.fileupload-angular": "../bower_components/jquery-file-upload/js/jquery.fileupload-angular",
    "jquery.iframe-transport": "../bower_components/jquery-file-upload/js/jquery.iframe-transport",
    "jquery-form": "../bower_components/jquery-form/jquery.form",
    "jquery.validation": "../bower_components/jquery.validation/dist/jquery.validate",
    requirejs: "../bower_components/requirejs/require",
    moment: "../bower_components/moment/moment",
    //Chart: "Chart",
    CN: "../bower_components/moment/locale/zh-cn"
  }
});

require(['jquery', 'common'],function($, common){
    $.ajaxSetup({
      global: true,
      type: "POST",
      dataType:"json",
      beforeSend: function(jqXHR, settings){
        jqXHR.$setting=settings;
      },
      error:function(jqXHR, textStatus, exception){
        if(jqXHR.status==401){
          common.login(jqXHR.$setting);
        }else{

        }
      }
    });
})



