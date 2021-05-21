<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vue Routing</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
          <li class="nav-item">
              <a href="/" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
              <a href="posts" class="nav-link">Posts</a>
          </li>
          <li class="nav-item">
              <a href="/createpost" class="nav-link">Create Post</a>
          </li>
      </ul>
    </div>
  </div>
</nav>    
</template>

<script>
export default {
    
}
</script>