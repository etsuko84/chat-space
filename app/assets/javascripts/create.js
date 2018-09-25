// $("html,body").animate({scrollTop:$('.chat').offset().top});

$(function(){
  function buildHTML(message){
  var insertImage = '';
  if (message.image.url) {
    insertImage = `<img src="${message.image.url}">`;
  }
    var html = `<div class="message">
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
  $('form').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
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
    })
      $('html, body').animate({
      scrollTop: $(document).height()
      },1500);
      return false;
  })
  .fail(function(){
    alert('error');
  })
});
