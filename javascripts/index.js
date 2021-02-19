const blogs = [];

function main() {
  return document.getElementById("main");
}

function titleInput() {
  return document.getElementById("title");
}

function contentInput() {
  return document.getElementById("content");
}

function form() {
  return document.getElementById("form");
}

function formLink() {
  return document.getElementById("form-link");
}

function blogsLink() {
  return document.getElementById("blogs-link");
}

function resetFormInputs() {
  titleInput().value = "";
  contentInput().value = "";
}

function resetMain() {
  main().innerHTML = "";
}

function formTemplate() {
  return `
  <h3>Create Blog</h3>
  <form id="form">
    <div class="input-field">
      <label for="title">Title</label>
      <input type="text" name="title" id="title" />
    </div>
    <div class="input-field">
      <label for="content">Content</label><br />
      <textarea name="content" id="content" cols="30" rows="10"></textarea>
    </div>
    <input type="submit" value="Create Blog" />
  </form>
  `;
}

function blogsTemplate() {
  return `
  <h3>List Of Blogs</h3>
  <div id="blogs"></div>
  `;
}

function renderBlog(blog) {
  let div = document.createElement("div");
  let h4 = document.createElement("h4");
  let p = document.createElement("p");
  let blogsDiv = document.getElementById("blogs");

  h4.innerText = blog.title;
  p.innerText = blog.content;

  div.appendChild(h4);
  div.appendChild(p);

  blogsDiv.appendChild(div);
}

function renderForm() {
  resetMain();
  main().innerHTML = formTemplate();
  form().addEventListener("submit", submitForm);
}

function renderBlogs() {
  resetMain();
  main().innerHTML = blogsTemplate();

  blogs.forEach(function (blog) {
    renderBlog(blog);
  });
}

function submitForm(e) {
  e.preventDefault();

  blogs.push({
    title: titleInput().value,
    content: contentInput().value,
  });

  renderBlogs();
}

function formLinkEvent() {
  formLink().addEventListener("click", function (e) {
    e.preventDefault();

    renderForm();
  });
}

function blogsLinkEvent() {
  blogsLink().addEventListener("click", function (e) {
    e.preventDefault();

    renderBlogs();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderForm();
  formLinkEvent();
  blogsLinkEvent();
});
