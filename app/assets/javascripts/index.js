$(function() {
var search_list = $("#user-search-result");

function appendUser(user) {
  var html = `<div class="chat-group-user clearfix">
  <p class="chat-group-user__name">${ user.name }</p>
  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a>
</div>`
search_list.append(html);
}

function addMember(user) {
  var addUser = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
  <input name='group[user_ids][]' type='hidden' value="${ user.userId }">
  <p class='chat-group-user__name'>${ user.userName }</p>
  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
</div>`
$("#chat-group-user-8").after(addUser);
}

function removeUser(user) {
var name = user.userName
search_list.children().remove(":contains('"+name+"')");
}

function removeMenber(user) {
$(".chat-group-users.js-add-user").children().remove(":contains('"+user+"')");
}

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();

    if (input.length !== 0) {
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users){
      search_list.empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    })
}
else {
search_list.remove();
}
  });

  $(document).on("click", ".user-search-add.chat-group-user__btn.chat-group-user__btn--add", function(){
  var thisUser = $(this).data();
    addMember(thisUser);
    removeUser(thisUser);
  });

  $(document).on("click", ".user-search-remove.chat-group-user__btn.chat-group-user__btn--remove.js-remove-btn", function(){
  var thisUser = $(this).siblings().text();
    removeMenber(thisUser);
  });
});


