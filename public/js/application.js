// var submitForm  = document.getElementById('post-form');
// var newTitle    = document.getElementById('new-title');
// var newBody     = document.getElementById('new-post');
// var content     = document.getElementById('content');

// submitForm.addEventListener('click', function() {
//   appendNewPost(newTitle.value, newBody.value);
// });

// function appendNewPost(postTitle, postBody){
//   var div = document.createElement('div');
//   div.className = 'read-only-post';
//   div.innerHTML = '<h3>' + postTitle + '</h3><p>' + postBody + '</p>';
//   content.appendChild(div);
// }

var $newTitle = $('#new-title');
var $newBody  = $('#new-post');

$('#post-form').on('click', function() {
  appendPost($newTitle, $newBody)
});

function appendPost(postTitle, postBody) {
  if(postTitle.val(), postBody.val() ){
    var title = '<h3>' + postTitle.val() + '</h3>';
    var body = '<p>' + postBody.val() + '</p>';
    $('#content').append('<div class="read-only-post">' + title + body + '</div>');
    resetForm(postTitle, postBody)
  }
};

function resetForm(postTitle, postBody) {
  postTitle.val('');
  postBody.val('');
}