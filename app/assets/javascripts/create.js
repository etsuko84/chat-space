$(function(){

  function buildHTML(message){
  var insertImage = '';
  if (message.image.url) {
    insertImage = `<img src="${message.image.url}">`;
  }
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="uppser-message">
                    <div class="upper-message__user-name">${message.user_name}</div>
                    <div class="upper-message__date">${message.time}</div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">${message.body}</p>
                    <div class="lower-message__image">${insertImage}</div>
                  </div>
    </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    var targetY = $('.js-messages').height();

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.form__message').val('')
      $('.hidden').val('')
    })
    .fail(function(){
     alert('error');
     })

     $('html, body').animate({
      scrollTop: targetY
    },1500);

      return false;
    })
});
