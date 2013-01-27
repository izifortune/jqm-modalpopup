ModalPopup v0.1 
===========================

ModalPopup is a plugin for Jquery-Mobile for providing an easy
way to create modal popup. Make sure to load ModalPopup after 
jquery-mobile.js

##How to use
ModalPopup just need an empty div to work on

    <div id="popup">
    </div>

First you need to inizialize the plugin
    
    $('popup').ModalPopup();

You can open popup with

    $('popup').ModalPopup('open');

And you can close

    $('popup').ModalPopup('close');

##Options

Current options are:
    - headerTheme: theme of the popup header ( default: 'b')
    - btnOkText: text for Confirm/Ok button( default: 'Ok')
    - btnCancelText: text for Cancel button ( default 'Cancel')
    - btnOkTheme: theme for Ok button ( default: 'b')
    - btnCancelTheme: theme for Cancel button ( default: 'b')
    - maxWidth: max width of the popup in px ( default: '400')
    - title: header title of the popup
    - body: text inserted into the body of the popup ( message )
    - onCancel: function called after btnCancel is pressed ( default: close popup)
    - onOk: function called after btnOk is pressed ( default: close popup)

#Working Example

Coming soon
