<template>
  <div>
    <div id="hotTable" class="hotTable">
      <HotTable ref="hotTableComponent" :settings="hotSettings"></HotTable>
    </div>
  </div>
</template>
<script>
import { HotTable } from "@handsontable-pro/vue";
import "handsontable-pro/dist/handsontable.full.css";
// import Handsontable from "handsontable-pro";

export default {
  name: "about2",
  data() {
    return {
      list: [],
      root: "test-hot",
      hotSettings: {
        data: [
          // 数据可以是二维数组，也可以是数组对象
        ],
        startRows: 5, // 行列范围
        startCols: 5,
        minRows: 3, // 最小行列
        minCols: 5,
        maxRows: 20, // 最大行列
        maxCols: 20,
        rowHeaders: true, // 行表头，可以使布尔值（行序号），可以使字符串（左侧行表头相同显示内容，可以解析html），也可以是数组（左侧行表头单独显示内容）。
        colHeaders: true, // 自定义列表头or 布尔值
        minSpareCols: 0, // 列留白
        minSpareRows: 0, // 行留白
        currentRowClassName: "currentRow", // 为选中行添加类名，可以更改样式
        currentColClassName: "currentCol", // 为选中列添加类名
        autoWrapRow: true, // 自动换行
        className: "htCenter htMiddle", // 默认单元格样式，垂直居中
        contextMenu: {
          items: {
            row_above: {
              name: "上方插入一行"
            },
            row_below: {
              name: "下方插入一行"
            },
            col_left: {
              name: "左方插入列"
            },
            col_right: {
              name: "右方插入列"
            },
            hsep1: "---------", // 提供分隔线
            remove_row: {
              name: "删除行"
            },
            remove_col: {
              name: "删除列"
            },
            make_read_only: {
              name: "只读"
            },
            borders: {
              name: "表格线"
            },
            copy: {
              name: "复制"
            },
            cut: {
              name: "剪切"
            },
            commentsAddEdit: {
              name: "添加备注"
            },
            commentsRemove: {
              name: "取消备注"
            },
            freeze_column: {
              name: "固定列"
            },
            unfreeze_column: {
              name: "取消列固定"
            },
            mergeCells: {
              name: "合并单元格"
            },
            alignment: {
              name: "文字位置"
            },
            hsep2: "---------"
          }
        },
        afterChange: function(changes, source) {
          // 数据改变时触发此方法
          // console.log(this.getSourceData())
          this.list = this.getSourceData(); // 获取表格里的数据
          console.log(
            this.getPlugin("MergeCells").mergedCellsCollection.mergedCells
          ); // 获取表格合并单元格的参数

          console.log(this.list);

          console.log("source", source);
        },
        manualColumnFreeze: false, // 手动固定列  ?
        manualColumnMove: true, // 手动移动列
        manualRowMove: true, // 手动移动行
        manualColumnResize: true, // 手工更改列距
        manualRowResize: true, // 手动更改行距
        comments: true, // 添加注释  ?
        // cell: [ // ???
        //   {row: 1, col: 1, comment: {value: 'this is test'}}
        // ],
        customBorders: [], // 添加边框
        columnSorting: true, // 排序
        stretchH: "all", // 根据宽度横向扩展，last:只扩展最后一列，none：默认不扩展
        fillHandle: true, // 选中拖拽复制 possible values: true, false, "horizontal", "vertical"
        fixedColumnsLeft: 0, // 固定左边列数
        fixedRowsTop: 0, // 固定上边列数
        mergeCells: [
          // 合并
          // {row: 1, col: 1, rowspan: 3, colspan: 3}, // 指定合并，从（1,1）开始行3列3合并成一格
          // {row: 3, col: 4, rowspan: 2, colspan: 2}
        ],
        columns: [
          // 设置表头名称
          {
            data: "姓名"
          },
          {
            data: "年龄"
          },
          {
            data: "性别"
          },
          {
            data: "性别1"
          }
        ]
      }
    };
  },
  components: {
    HotTable
  },
  methods: {
    swapHotData: function() {
      // The Handsontable instance is stored under the `hotInstance` property of the wrapper component.
      // this.$refs.hotTableComponent.hotInstance.loadData([['new', 'data']])
      console.log(
        this.$refs.hotTableComponent.hotInstance.getPlugin("MergeCells")
          .mergedCellsCollection.mergedCells
      );
    }
  }
};
</script>
