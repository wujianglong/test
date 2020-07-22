<template id="vtable">
  <table>
    <thead>
      <tr v-for="(i, index) in rownum" :key="index">
        <th v-for="(label, index1) in thlabel[index]" :key="index1">
          {{ label.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, index) in datat" :key="index">
        <td
          v-for="(key, index1) in labelprop"
          :key="index1"
          @click="tdEdit($event)"
        >
          <input type="text" v-model="data[key]" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import $ from "jquery";
export default {
  props: {
    datat: {
      type: Array,
      required: true
    },
    thlabel: {
      //表头数组
      type: Array,
      required: true
    },
    isEdit: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      datata: ""
    };
  },
  computed: {
    rownum: function() {
      //表头行数
      return this.thlabel.length;
    },
    labelprop: function() {
      //取出表头数据依次对应的字段key
      let thlab = this.thlabel;
      var ar = [];
      for (let i = 0; i < thlab.length; i++)
        for (let j = 0; j < thlab[i].length; j++) {
          for (var key in thlab[i][j]) {
            if (key == "prop") {
              ar.push(thlab[i][j][key]);
            }
          }
        }
      return ar;
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      $("td").attr("isEdit", this.isEdit);
      var a = this.thlabel;
      for (let i = 0; i < a.length; i++)
        for (let j = 0; j < a[i].length; j++) {
          for (var key in a[i][j]) {
            if (key == "rowspan") {
              $(
                $("tr")
                  .eq(i)
                  .find("th")
                  .eq(j)
              ).attr("rowspan", a[i][j][key]);
            } else if (key == "colspan") {
              $(
                $("tr")
                  .eq(i)
                  .find("th")
                  .eq(j)
              ).attr("colspan", a[i][j][key]);
            }
          }
        }
    });
  },
  methods: {
    tdEdit: function(event) {
      var h = event.currentTarget;
      if ($(h).attr("isEdit")) {
        $(h)
          .find("input")
          .attr("readOnly", false);
        $(h)
          .addClass("tdclick")
          .siblings()
          .removeClass("tdclick");
        $(h)
          .addClass("tdclick")
          .parent("tr")
          .siblings()
          .find("td")
          .removeClass("tdclick");
      } else {
        $(h)
          .find("input")
          .attr("readOnly", true);
      }
    }
  }
};
</script>

<style>
table {
  border: 1px solid #ebeef5;
  height: 200px;
  width: 300px;
  text-align: center;
  margin-left: 40px;
}
table td {
  border: 1px solid #ebeef5;
  position: relative;
  color: #606266;
}
table th {
  text-align: center;
  border: 1px solid #ebeef5;
  background-color: #f5f7fa;
  color: #909d8f;
  line-height: 60px;
}

tr:hover {
  background-color: #f6f8fb;
}
.tdclick:after {
  content: " ";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid blue;
  pointer-events: none;
}
input {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  border: none;
  outline: none;
}
</style>
