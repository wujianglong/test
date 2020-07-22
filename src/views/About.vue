<template>
  <div>
    <div id="x-spreadsheet-demo"></div>
  </div>
</template>

<script>
import Spreadsheet from "x-data-spreadsheet";
import zhCN from "x-data-spreadsheet/dist/locale/zh-cn";
export default {
  data() {
    return {};
  },
  mounted() {
    Spreadsheet.locale("zh-cn", zhCN);
    const options = {
      mode: "edit", // edit | read
      showToolbar: true,
      showGrid: true,
      showContextmenu: true,
      view: {
        height: () => document.documentElement.clientHeight,
        width: () => document.documentElement.clientWidth
      },
      row: {
        len: 20,
        height: 25
      },
      col: {
        len: 17,
        width: 100,
        indexWidth: 60,
        minWidth: 60
      },
      style: {
        bgcolor: "#ffffff",
        align: "left",
        valign: "middle",
        textwrap: false,
        strike: false,
        underline: false,
        color: "#0a0a0a",
        font: {
          name: "Helvetica",
          size: 10,
          bold: false,
          italic: false
        }
      }
    };
    const s = new Spreadsheet("#x-spreadsheet-demo", options).change(data => {
      // save data to db
      console.log("data", data);
    });

    // data validation
    s.validate();
  }
};
</script>
<style>
#x-spreadsheet-demo {
  width: 300px !important;
}
</style>
