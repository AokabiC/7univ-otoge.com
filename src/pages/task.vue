<template>
  <div class="uk-section-default">
    <div
      uk-height-viewport="offset-top: true; offset-bottom: true"
      class="uk-flex uk-flex-left"
      style="min-height: 100%"
    >
      <div class="uk-container uk-padding uk-container-small uk-text-left">
        <h1>課題曲</h1>
        <ul uk-tab>
          <li>
            <a href="#">課題曲リスト</a>
          </li>
          <li>
            <a href="#">選曲者コメント</a>
          </li>
          <li>
            <a href="#">選曲指南(初心者向け)</a>
          </li>
        </ul>

        <ul class="uk-switcher uk-margin">
          <li>
            <table class="uk-table uk-table-divider">
              <thead>
                <tr>
                  <th>機種</th>
                  <th>課題曲</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="uk-width-small">beatmania IIDX(SP)</td>
                  <td>Breaking the ground (5/8/10)</td>
                  <td>Shooting fireball (6/10/12)</td>
                </tr>
                <tr>
                  <td>SOUND VOLTEX</td>
                  <td>About me (3/7/15)</td>
                  <td>MeteorGlow Aftermath (6/13/16/18)</td>
                </tr>
                <tr>
                  <td>pop'n music</td>
                  <td>アミュレット(21/33/42)</td>
                  <td>In The Ruins(26/41/47)</td>
                </tr>
                <tr>
                  <td>Dance Dance Revolution</td>
                  <td>Adularia(3/6/10/14)</td>
                  <td>イーディーエム・ジャンパーズ(3/5/8/12)</td>
                </tr>
                <tr>
                  <td>GuitarFreaks</td>
                  <td>童話回廊(2.25~9.10)</td>
                  <td>EVIL OGRE(1.75~8.95)</td>
                </tr>
                <tr>
                  <td>DrumMania</td>
                  <td>ブラックホール(2.30~8.40)</td>
                  <td>Russian Caravan Rhapsody(2.60~8.90)</td>
                </tr>
                <tr>
                  <td>jubeat</td>
                  <td>白い雪のプリンセスは(4/6/9.1)</td>
                  <td>魔理沙は大変なものを盗んでいきました(3/6/9.5)</td>
                </tr>
                <tr>
                  <td>REFLEC BEAT</td>
                  <td>それは音楽が導く永遠の物語(5/8/12/13)</td>
                  <td>smooooch・∀・(3/7/9/11)</td>
                </tr>
                <tr>
                  <td>ノスタルジア</td>
                  <td>一夜の恋(4/8/10)</td>
                  <td>向日葵サンセット(4/7/10)</td>
                </tr>
                <tr>
                  <td>CHUNITHM</td>
                  <td>La Flesvelka(3/6/9/12)</td>
                  <td>The Darkness of Valhalla(3/5/9+/12)</td>
                </tr>
                <tr>
                  <td>maimai</td>
                  <td>Infantoon Fantasy(3/5/7+/9/12)</td>
                  <td>Kinda Way(3/4/7+/10/12)</td>
                </tr>
                <tr>
                  <td>初音ミク Project DIVA</td>
                  <td>カラフル×メロディ(3.5/5/6/8)</td>
                  <td>鏡音八八花合戦(2.5/4/6/8.5)</td>
                </tr>
                <tr>
                  <td>GROOVE COASTER</td>
                  <td>グルーヴ・ザ・ハート(4/6/11)</td>
                  <td>Wandering One(4/6/12)</td>
                </tr>
                <tr>
                  <td>太鼓の達人</td>
                  <td>桜花爛漫(4/6/7/8)</td>
                  <td>Toon Town's Toys' Tune(4/5/6/10)</td>
                </tr>
                <tr>
                  <td>DANCERUSH</td>
                  <td>Special One (易4 / 普7)</td>
                  <td>Spacecats (易6 / 普9)(要解禁)</td>
                </tr>
                <tr>
                  <td>オンゲキ</td>
                  <td>What color(2/6/9/12)</td>
                  <td>Ai Nov(4/7+/11/13+)</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            <dl class="uk-description-list uk-description-list-divider uk-padding-small">
              <dt>beatmania IIDX</dt>
              <dd>今回は、皿寄りの単発(Breaking～)と濃い目の中速物量(Shooting～)という、過去の七帝戦とは異なる譜面傾向を持つ二曲を選びました。また、「クリア狙いとスコア詰めで違った楽しみ方ができる」、「良曲良譜面である」というポイントも意識して選曲していますので、腕前に関係なく楽しんでいただけると思います。</dd>
              <dt>SOUND VOLTEX</dt>
              <dd>About me: 大変美しい譜面なので選びました。PUCは少し難しいので頑張ってください。</dd>
              <dt>Description term</dt>
              <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
            </dl>
          </li>
          <li>
              選曲指南をここに書く
          </li>
        </ul>
      </div>
    </div>
    <footerbar/>
  </div>
</template>

<style lang="scss" scoped>
.uk-description-list dt{
    text-transform: none;
}
</style>
