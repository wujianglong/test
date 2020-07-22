<template>
  <div class="financialKPI">
    <gc-spread-sheets
      v-if="flag"
      :host-class="hostClass"
      @workbookInitialized="spreadInitHandle"
    />
    <button id="btnMerge">btnMerge</button>
    <button id="btnUnMerge">btnUnMerge</button>
  </div>
</template>
<script>
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";
import "@grapecity/spread-sheets-vue";
// import * as GC from '@grapecity/spread-sheets';
// import Excel from '@grapecity/spread-excelio';
// import Charts from '@grapecity/spread-sheets-charts';

export default {
  data() {
    return {
      flag: false,
      hostClass: "spread-host",
      spread: ""
    };
  },
  mounted() {
    this.flag = true;
    // document.getElementById("btnMerge").addEventListener("click", function() {
    //   var sheet = this.spread.getActiveSheet();

    //   var sel = sheet.getSelections();
    //   if (sel.length > 0) {
    //     sel = this.getActualCellRange(
    //       sel[sel.length - 1],
    //       sheet.getRowCount(),
    //       sheet.getColumnCount()
    //     );
    //     sheet.addSpan(sel.row, sel.col, sel.rowCount, sel.colCount);
    //   }
    // });

    // document.getElementById("btnUnMerge").addEventListener("click", function() {
    //   var sheet = this.spread.getActiveSheet();

    //   var sel = sheet.getSelections();
    //   if (sel.length > 0) {
    //     sel = this.getActualCellRange(
    //       sel[sel.length - 1],
    //       sheet.getRowCount(),
    //       sheet.getColumnCount()
    //     );
    //     sheet.suspendPaint();
    //     for (var i = 0; i < sel.rowCount; i++) {
    //       for (var j = 0; j < sel.colCount; j++) {
    //         sheet.removeSpan(i + sel.row, j + sel.col);
    //       }
    //     }
    //     sheet.resumePaint();
    //   }
    // });
  },
  methods: {
    spreadInitHandle(spread) {
      this.spread = spread;
      this.spread.options.tabStripVisible = false;
      this.spread.options.tabEditable = false;
      this.spread.options.newTabVisible = false;
      this.initSpread(this.spread);
    },

    initSpread(o) {
      let self = this;
      // var sheet = o.getSheet(0);

      // sheet.suspendPaint();
      // sheet.options.allowCellOverflow = true;
      // sheet.name("Demo");

      // console.log("1", document.getElementById("btnMerge"));

      document.getElementById("btnMerge").addEventListener("click", function() {
        var sheet = o.getActiveSheet();

        var sel = sheet.getSelections();
        if (sel.length > 0) {
          sel = self.getActualCellRange(
            sel[sel.length - 1],
            sheet.getRowCount(),
            sheet.getColumnCount()
          );
          sheet.addSpan(sel.row, sel.col, sel.rowCount, sel.colCount);
        }
      });

      document
        .getElementById("btnUnMerge")
        .addEventListener("click", function() {
          var sheet = o.getActiveSheet();

          var sel = sheet.getSelections();
          if (sel.length > 0) {
            sel = self.getActualCellRange(
              sel[sel.length - 1],
              sheet.getRowCount(),
              sheet.getColumnCount()
            );
            sheet.suspendPaint();
            for (var i = 0; i < sel.rowCount; i++) {
              for (var j = 0; j < sel.colCount; j++) {
                sheet.removeSpan(i + sel.row, j + sel.col);
              }
            }
            sheet.resumePaint();
          }
        });
      // document
      //   .getElementById("allowDragMerge")
      //   .addEventListener("change", function() {
      //     o.options.allowUserDragMerge = document.getElementById(
      //       "allowDragMerge"
      //     ).checked;
      //   });
    },
    getActualCellRange(cellRange, rowCount, columnCount) {
      var spreadNS = this.spread.Sheets;
      if (cellRange.row == -1 && cellRange.col == -1) {
        return new spreadNS.Range(0, 0, rowCount, columnCount);
      } else if (cellRange.row == -1) {
        return new spreadNS.Range(
          0,
          cellRange.col,
          rowCount,
          cellRange.colCount
        );
      } else if (cellRange.col == -1) {
        return new spreadNS.Range(
          cellRange.row,
          0,
          cellRange.rowCount,
          columnCount
        );
      }

      return cellRange;
    }
  }
};
</script>
<style scoped>
.financialKPI {
  width: 100%;
  height: 100%;
}
.spread-host {
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
}
</style>
