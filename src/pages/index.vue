<template>
  <div class="uk-section-primary uk-background-cover tm-background">
    <div
      uk-height-viewport="offset-top: true; offset-bottom: true"
      class="uk-grid uk-flex uk-flex-middle"
      style="min-height: 100%"
    >
      <div class="uk-width-1-1 uk-text-center">
        <div class="uk-container uk-margin-large">
          <h1 class="wf-jp">第3回 音ゲー七帝戦</h1>
          <p class="wf-en">Seven Universities Music Game Meet</p>
        </div>
        <div class="uk-container uk-margin-large">
          <h2 class="wf-en">2/9[Sat.] -> 3/10[Sun.]</h2>
        </div>
        <div class="uk-container uk-margin-large">
          <div class="uk-grid uk-child-width-auto uk-grid-medium uk-flex-inline uk-flex-center">
            <div class="uk-first-column">
              <a
                uk-tooltip="2/9 公開予定"
                class="uk-button uk-button-default tm-button-primary"
              >IR page</a>
            </div>
            <div>
              <a
                href="https://twitter.com/7univ_otoge"
                target="_brank"
                class="uk-button uk-button-primary tm-button-primary"
              >Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-section-xsmall">
      <div class="uk-container uk-text-center uk-text-meta">
        © 2019 7univ_otoge | Created by
        <a
          href="https://twitter.com/AokabiC"
          class="uk-text-meta" target="_blank"
        >AokabiC</a>,
        Background designed by
        <a
          href="https://www.facebook.com/starlineart"
          class="uk-text-meta" target="_Blank"
        >Starline</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tm-background {
  background-image: url("../img/top.png");
}

.tm-button-primary {
    border-radius: 500px;
}
</style>
