<template>
  <div class="uk-navbar-container tm-navbar-container uk-light" uk-navbar>
    <div class="uk-container uk-container-expand uk-width-1-1">
      <nav class="uk-navbar">
        <div class="uk-navbar-left">
          <a class="uk-navbar-item uk-logo wf-en" href="#">7univ-otoge.com</a>
        </div>
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav">
            <router-link to="/" tag="li">
              <a href="#">
                <span uk-icon="home" class="uk-margin-small-right"></span>
                Home
              </a>
            </router-link>
            <router-link to="/about" tag="li">
              <a href="#">
                <span uk-icon="info" class="uk-margin-small-right"></span>
                About
              </a>
            </router-link>
            <router-link to="/rule" tag="li">
              <a href="#">
                <span uk-icon="check" class="uk-margin-small-right"></span>
                Rule
              </a>
            </router-link>
            <li>
              <a href="#">
                <span uk-icon="list" class="uk-margin-small-right"></span>
                Task
              </a>
            </li>
            <li>
              <a href="#">
                <span uk-icon="users" class="uk-margin-small-right"></span>
                Ranking
              </a>
            </li>
            <li>
              <a href="#">
                <span uk-icon="upload" class="uk-margin-small-right"></span>
                Submit
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tm-navbar-container:not(.uk-navbar-transparent) {
  background: linear-gradient(
    to left,
    rgba(20, 25, 51, 0.7),
    rgba(38, 35, 76, 0.7)
  );
}
</style>
