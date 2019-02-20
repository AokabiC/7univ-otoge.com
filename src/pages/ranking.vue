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
        <table class="uk-table uk-table-divider">
          <thead>
          <tr>
            <th>順位</th>
            <th>名前</th>
            <th>スコア</th>
          </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        <h3>個人総合スコア TOP50</h3>
        <table class="uk-table uk-table-divider">
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
            <tr v-for="(item, index) in info" :key="item.score" v-if="index+1 <= 50">
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.circle }}</td>
              <td>{{ item.score }}</td>
              <td>
                <a :href="'https://twitter.com/'+item.twitter">{{ item.twitter }}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: null
    };
  },
  async created() {
    try {
      let res = await axios.get(
        "https://otoge-connected.com/api/v1/competitions/153/show_altranking"
      );
      this.info = res.data;
    } catch (err) {
      console.error(err);
    }
  }
};
</script>
