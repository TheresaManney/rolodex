// import Application from 'app/models/application';
// import ApplicationView from 'app/views/application_view';

import _ from 'underscore';
import $ from 'jquery';
import Contact from './models/contact.js';

// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });
$('#contact-details').hide();

var contactData = [
  {
    name: "Theresa",
    phone: "1234567891",
    email: "theresa@yo.com"
  },
  {
    name: "Stella",
    phone: "9876543219",
    email: "stella@yo.com"
  }
];

var myContact = new Contact( {
  name: "Model tester",
  phone: "1112223333",
  email: "test@model.com"
});

var getFormData = function() {
  var formName = $('#name').val();
  $('#name').val('');

  var formEmail = $('#email').val();
  $('#email').val('');

  var formPhone = $('#phone').val();
  $('#phone').val('');

  return {
    name: formName,
    email: formEmail,
    phone: formPhone
  };
};

var render = function(contact) {
  var templateText = $('#tmpl-contact-card').html();
  var templateObject = _.template(templateText);
  var compiledHTML = templateObject(contact.toJSON());
  $('#contact-cards').append(compiledHTML);
};

$(document).ready(function() {
  render(myContact);
  $('.button.btn-save').click(function() {
    console.log('test');
    var formData = getFormData();
    var newContact = new Contact(formData);
    render(newContact);
  });
});
