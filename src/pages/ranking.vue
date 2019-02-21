<template>
  <div class="uk-section-default">
    <div
      uk-height-viewport="offset-top: true; offset-bottom: true"
      class="uk-flex uk-flex-left"
      style="min-height: 100%"
    >
      <div
        class="uk-container uk-width-1-2@xl uk-width-2-3@m uk-padding uk-container-small uk-text-left"
      >
        <h3>サークル総合スコア</h3>
        <div class="uk-text-meta">暫定であり、期間終了後に変動する可能性があります。計算式は Rule を参照。
        </div>
        <div class="uk-padding" uk-spinner v-if="!isloaded"/>
        <div v-if="isloaded">
          <table class="uk-table uk-table-divider">
            <thead>
            <tr>
              <th>順位</th>
              <th>サークル</th>
              <th>スコア</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="(circle, index) in circle_info" :key="circle.score">
                <td>{{ index+1 }}</td>
                <td>{{ circle.name}}</td>
                <td>{{ circle.score.toFixed(3) }}</td>
              </tr>
            </tbody>
          </table>
          <ul uk-accordion>
            <li>
              <a class="uk-accordion-title uk-text-meta" href="#">詳細情報</a>
              <div class="uk-accordion-content">
                <ul class="uk-list uk-list-bullet">
                  <li> 3部門以上提出しているプレイヤーの割合
                    <table class="uk-table uk-table-small">
                      <thead>
                        <tr>
                          <th>サークル</th>
                          <th>割合</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(circle, index) in circle_info" :key="circle.score">
                          <td>{{ circle.name }}</td>
                          <td>{{ circle.sub_over3 }}/{{ circle.entry }} ({{ (circle.sub_over3*100/circle.entry).toFixed(1) }}%)</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <h3>個人総合スコア TOP50</h3>
        <div class="uk-padding" uk-spinner v-if="!isloaded"/>
        <div v-if="isloaded">
          <table class="uk-table uk-table-divider uk-visible@s">
            <thead>
            <tr>
              <th>順位</th>
              <th>名前</th>
              <th>所属サークル</th>
              <th>スコア</th>
              <th>Twitter</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="(person, index) in info" :key="person.score" v-if="index+1 <= 50">
                <td>{{ index + 1 }}</td>
                <td>{{ person.name }}</td>
                <td>{{ person.circle }}</td>
                <td>{{ person.score }}</td>
                <td>
                  <a :href="'https://twitter.com/'+ person.twitter">{{ person.twitter }}</a>
                </td>
              </tr>
            </tbody>
          </table>
          <table class="uk-table uk-table-divider uk-hidden@s">
            <thead>
            <tr>
              <th>順位</th>
              <th>名前</th>
            </tr>
            </thead>
            <tbody>
              <template v-for="(person, index) in info" v-if="index+1 <= 50">
                <tr>
                <td>{{ index + 1 }}</td>
                <td>
                  <a :href="'https://twitter.com/'+person.twitter">{{ person.name }}</a>
                  <br><span class="uk-text-meta">({{ person.circle }} / {{ person.score }})</span></td>
                </tr>
              </template>
            </tbody>
          </table>
          <a
            href="https://otoge-connected.com/competitions/altresult?id=153"
            target="_brank"
            class="uk-button uk-button-default"
          >See more...</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: null,
      isloaded: false
    };
  },
  computed: {
    circle_info: function() {
      var circle_info = [
        {name: "XyHUtte", score: 0, entry: 38, sub_over3: 0},
        {name: "とんえぼ", score: 0, entry: 44, sub_over3: 0},
        {name: "B4UT", score: 0, entry: 82, sub_over3: 0},
        {name: "Wuv NU", score: 0, entry: 14, sub_over3: 0},
        {name: "京音", score: 0, entry: 30, sub_over3: 0},
        {name: "EÜST’", score: 0, entry: 29, sub_over3: 0},
        {name: "QUaver", score: 0, entry: 49, sub_over3: 0}
      ];
      for(var person of this.info){
        for(var circle of circle_info){
          if(circle.name== person.circle){
            circle.score += person.score
            if(person.nsubmit_from_altid >= 3) circle.sub_over3++
          }
        }
      }
      for(var circle of circle_info){
        circle.score = (circle.sub_over3/circle.entry + 1) * circle.score / circle.entry
      }
      circle_info.sort(function(a,b) {
        if( a.score < b.score ) return 1;
        if( a.score > b.score ) return -1;
        return 0;
      });
      return circle_info
    }
  },
  async created() {
    try {
      let res = await axios.get(
        "https://otoge-connected.com/api/v1/competitions/153/show_altranking"
      );
      this.info = res.data
      this.isloaded = true
    } catch (err) {
      console.error(err)
    }
  }
}
</script>
