<template>
  <div class="uk-section-default">
    <navbar></navbar>
    <div
      uk-height-viewport="offset-top: true; offset-bottom: true"
      class="uk-flex uk-flex-left"
      style="min-height: 100%"
    >
      <div class="uk-container uk-padding uk-container-small uk-text-left">
        <h1>ルール</h1>
        <h3>共通</h3>
        <ul class="uk-list uk-list-bullet">
          <li>課題曲の(合計)スコアで競います。同点の場合、順位は同じになります。</li>
          <li>期間中(2/9 00:00 ~ 3/10 23:59)にフォームから提出されたスコアのみ対象です。</li>
          <li>各機種ごとに、順位に応じた個人Ptが付与されます。サークル・個人ごとに集計し、総合順位が決定されます。</li>
          <li>1人あたり何部門でも参加することが可能です。また、各部門において一曲のみの参加も可能です。</li>
          <li>
            全機種において、
            <span class="uk-text-danger">難易度選択制</span>です。各機種において一つの難易度にのみ提出できます。また、各機種において提出制限が存在します。
          </li>
          <li>各機種の順位・難易度別の個人Ptは以下のとおりです。</li>
        </ul>
        <ul uk-accordion>
          <li>
            <a class="uk-accordion-title" href="#">Beatmania IIDX</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>EXスコアで集計を行います。シングルプレーでのスコアを対象とします。</li>
                <li>
                  EXPAND JUDGEやH-RANなどの
                  <span class="uk-text-danger">スコアの記録されないオプションの使用を禁止します。</span>それ以外のオプションの使用は自由です。​</li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">SOUND VOLTEX</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>通常スコア(10,000,000点満点)で集計を行います。</li>
                <li>MIRROR, RANDOM等のオプションの使用は自由です。​</li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">REFLEC BEAT</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>通常スコア(10,000,000点満点)で集計を行います。</li>
                <li>MIRROR, RANDOM等のオプションの使用は自由です。​</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <footerbar/>
  </div>
</template>
