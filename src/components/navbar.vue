<template>
  <div class="uk-navbar-container tm-navbar-container uk-light" uk-navbar>
    <div class="uk-container uk-container-expand uk-width-1-1">
      <nav class="uk-navbar">
        <div class="uk-navbar-left">
          <router-link class="uk-navbar-item uk-logo wf-en" to="/">7univ-otoge.com</router-link>
        </div>
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav uk-visible@m">
            <router-link to="/" tag="li">
              <a href>
                <span uk-icon="home" class="uk-margin-small-right"></span>
                Home
              </a>
            </router-link>
            <router-link to="/about" tag="li">
              <a href>
                <span uk-icon="info" class="uk-margin-small-right"></span>
                About
              </a>
            </router-link>
            <router-link to="/rule" tag="li">
              <a href>
                <span uk-icon="check" class="uk-margin-small-right"></span>
                Rule
              </a>
            </router-link>
            <router-link to="/task" tag="li">
              <a href>
                <span uk-icon="list" class="uk-margin-small-right"></span>
                Task
              </a>
            </router-link>
            <li>
              <a href="https://otoge-connected.com/competitions/altresult?id=153" target="_brank">
                <span uk-icon="users" class="uk-margin-small-right"></span>
                Ranking
              </a>
            </li>
            <li>
              <a href="https://otoge-connected.com/competitions/153" target="_brank">
                <span uk-icon="upload" class="uk-margin-small-right"></span>
                Submit
              </a>
            </li>
          </ul>
          <a
            class="uk-navbar-toggle uk-hidden@m"
            uk-navbar-toggle-icon
            uk-toggle="target: #navbar-m"
          ></a>
          <div id="navbar-m" uk-modal>
            <div class="uk-modal-dialog uk-modal-body">
              <button class="uk-modal-close-default" type="button" uk-close></button>
              <ul class="uk-list uk-list-large">
                <router-link to="/" tag="li">
                  <a href class="uk-modal-close">
                    <span uk-icon="home" class="uk-margin-small-right"></span>
                    Home
                  </a>
                </router-link>
                <router-link to="/about" tag="li">
                  <a href class="uk-modal-close">
                    <span uk-icon="info" class="uk-margin-small-right"></span>
                    About
                  </a>
                </router-link>
                <router-link to="/rule" tag="li">
                  <a href class="uk-modal-close">
                    <span uk-icon="check" class="uk-margin-small-right"></span>
                    Rule
                  </a>
                </router-link>
                <router-link to="/task" tag="li">
                  <a href class="uk-modal-close">
                    <span uk-icon="list" class="uk-margin-small-right"></span>
                    Task
                  </a>
                </router-link>
                <li>
                  <a href="https://otoge-connected.com/competitions/altresult?id=153" target="_brank">
                    <span uk-icon="users" class="uk-margin-small-right"></span>
                    Ranking
                  </a>
                </li>
                <li>
                  <a href="https://otoge-connected.com/competitions/153" target="_brank">
                    <span uk-icon="upload" class="uk-margin-small-right"></span>
                    Submit
                  </a>
                </li>
              </ul>
              <div class="uk-alert-warning uk-padding-small uk-margin-small"><span uk-icon="warning"/> スコアの提出にはTwitterに投稿したリザルト画像のリンクが必須です。</div>
              <div class="uk-text-meta uk-padding-small uk-margin-small"><span uk-icon="info"/> 近日中に七帝戦サイト内でランキングの参照ができるようになります。</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tm-navbar-container:not(.uk-navbar-transparent) {
  background: linear-gradient(to left, rgb(20, 25, 51), rgb(38, 35, 76));
}

.tm-card {
  border-radius: 20px;
  opacity: 0.8;
}
</style>
