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

  var interval = setInterval(function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
  $.ajax({
      url: location.href,
      type: 'GET',
      dataType: 'json'
    })
  .done(function(json) {
    var id = $('.message:last').data('messageId');
    var insertHTML = '';
    json.messages.forEach(function(message) {
      if (message.id > id) {
      insertHTML += buildHTML(message);
      }
    });
    $('.messages').append(insertHTML);
  })
  .fail(function(json) {
    alert('自動更新に失敗しました');
  });
  } else {
    clearInterval(interval);
    }} , 1 * 1000);
});
