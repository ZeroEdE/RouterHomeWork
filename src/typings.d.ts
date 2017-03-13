/* SystemJS module definition */
declare var module: {
  id: string;
};

/* 讓 typeScript 看得懂 jQuery 常用的寫法 */
declare var Colors;
declare var $;
interface JQuery {
  plot;
  easyPieChart;
  vectorMap;
  datepicker;
}
