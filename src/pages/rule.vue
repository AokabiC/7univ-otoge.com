<template>
  <div class="uk-section-default">
    <div
      uk-height-viewport="offset-top: true; offset-bottom: true"
      class="uk-flex uk-flex-left"
      style="min-height: 100%"
    >
      <div class="uk-container uk-width-1-2@xl uk-width-2-3@m uk-padding uk-container-small uk-text-left">
        <h1>ルール</h1>
        <h3 class="uk-heading-line uk-text-center">
          <span>共通</span>
        </h3>
        <ul class="uk-list uk-list-bullet">
          <li>課題曲のスコアで競います。同点の場合、順位は同じになります。</li>
          <li>期間中(2/9 00:00 ~ 3/10 23:59)にフォームから提出されたスコアのみ対象です。</li>
          <li>各機種の各課題曲ごとに、順位に応じた個人Ptが付与されます。サークル・個人ごとに集計し、総合順位が決定されます。</li>
          <li>1人あたり何部門でも参加することが可能です。また、各部門において一曲のみの参加も可能です。</li>
          <li>
            全機種において、
            <span class="uk-text-danger">難易度選択制</span>です。各曲において一つの難易度にのみ提出できます。また、各機種において提出制限が存在します。
          </li>
          <li>各曲・各難易度ごとに1位のPtが定められており、最終順位に応じて1Pt刻みで2位以下にもPtが与えられます
            <br>(1位が300Ptの場合、2位299Pt、3位298Pt、・・・のようになります)。
          </li>
          <li>サークルの総合Ptは、以下の式により決定されます。
              <br>((3機種触った人数)/(サークルの人数) + 1) × (サークルの平均点) <span class="uk-text-meta">(2/1 00:30追記)</span></li>

        </ul>
        <h3 class="uk-heading-line uk-text-center">
          <span>機種別ルール・提出制限</span>
        </h3>
        <ul uk-accordion>
          <li>
            <a class="uk-accordion-title" href="#">beatmania IIDX</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>EXスコアでの集計を行います。シングルプレー、ダブルプレー個別に集計します。</li>
                <li>EXPAND JUDGEやH-RANなどの<span class="uk-text-danger">スコアの記録されないオプションの使用を禁止</span>します。それ以外のオプションの使用は自由です。​
                </li>
                <li>提出制限: クリア(ASSIST EASY以上)</li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">SOUND VOLTEX</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>通常スコアでの集計を行います。</li>
                <li>オプションの使用は自由です。​</li>
                <li>提出制限: クリア</li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">pop'n music</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>通常スコアでの集計を行います。</li>
                <li>​オプションの使用は自由です。</li>
                <li>提出制限: クリア(EASY以上)</li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">Dance Dance Revolution</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>通常スコアでの集計を行います。シングルプレー、ダブルプレー個別に集計します。</li>
                <li><span class="uk-text-danger">「​​タイミング別カット」、「フリーズアロー」、「同時踏み」オプションの使用を禁止</span>します。それ以外のオプションの使用は自由です。
                </li>
                <li>提出制限: クリア</li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">GuitarFreaks</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>単曲スキル値での集計を行います。</li>
                <li><span class="uk-text-danger">​達成率が下がるオプション​の使用を禁止</span>します。それ以外のオプションの使用は自由です。​
                </li>
                <li>ギター譜面とベース譜面の同じ難易度は、<span class="uk-text-warning">同一ランキング中でスキル値によって順位を決定</span>します。<span class="uk-text-meta">(2/1 00:30追記)</span></li>
                <li>提出制限: クリア</li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">DrumMania</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>単曲スキル値での集計を行います。</li>
                <li>​<span class="uk-text-danger">達成率が下がるオプション​の使用を禁止</span>します。それ以外の​オプションの使用は自由です。​
                </li>
                <li>提出制限: クリア</li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">jubeat</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>通常スコアでの集計を行います。</li>
                <li>​オプションの使用は自由です。​</li>
                <li>提出制限: Rating SS以上(950,000点以上)</li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">REFLEC BEAT</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>通常スコアでの集計を行います。</li>
                <li>オプションの使用は自由です。​</li>
                <li>提出制限: ACHIEVEMENT RATE 80.0％以上</li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">ノスタルジア</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>通常スコアでの集計を行います。</li>
                <li>オプションの使用は自由です。​</li>
                <li>提出制限: RANK A以上(850,000点以上)</li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">CHUNITHM</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>通常スコアでの集計を行います。</li>
                <li>オプションの使用は自由です。​</li>
                <li>提出制限: RANK S以上(975,000点以上)</li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">maimai</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>達成率での集計を行います。</li>
                <li>オプションの使用は自由です。​</li>
                <li>提出制限: RANK AAA以上(達成率 94.00％以上)<span class="uk-text-meta">(2/2 09:00修正)</span></li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">初音ミク Project DIVA</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>達成率での集計を行います。</li>
                <li>
                  <span class="uk-text-danger">オプションの使用を禁止</span>します。​
                </li>
                <li>完奏モードでのプレーは対象としません。</li>
                <li>課題曲「カラフルxメロディ」の難易度EX EXTREMEは<span class="uk-text-danger">対象外</span>とします。<span class="uk-text-meta">(2/2 09:00追記・修正)</span></li>
                <li>提出制限: クリア</li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">GROOVE COASTER</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>通常スコアでの集計を行います。</li>
                <li>
                  <span class="uk-text-danger">
                    SAFE,SUPER SAFE,EASY TARGET,ONE HAND​の使用を禁止</span>します。​それ以外のアイテムの使用は自由です。
                </li>
                <li>提出制限: クリア</li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">太鼓の達人</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>
                  <span class="uk-text-warning">「真打」モードのスコア</span>での集計を行います。
                </li>
                <li>オプションの使用は自由です。​</li>
                <li>提出制限: クリア</li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">DANCERUSH</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>通常スコアでの集計を行います。1人プレーでのスコアを対象とします。</li>
                <li>オプションの使用は自由です。​</li>
                <li>提出制限: RANK ★★★★★</li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">オンゲキ</a>
            <div class="uk-accordion-content">
              <ul class="uk-list uk-list-bullet">
                <li>テクニカルスコアでの集計を行います。<span class="uk-text-meta">(2/1 00:45修正)</span></li>
                <li>オプションの使用は自由です。​</li>
                <li>提出制限: RANK S以上(970,000点以上)</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <footerbar/>
  </div>
</template>
