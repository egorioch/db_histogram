/**
  Компонент, принимающий данные с сервера. 
  В данных находится действительное время работы и связанная с ним прикладная информация

*/

<template>
  <div class="common-histogram-layer">
    <div class="data-input-layer">
      <label class="label-input-field" for="input-field">Дата: </label>
      <input class="input-field" v-model="findDateText" name="input-field" placeholder="2023-05-14" />
      <button class="data-find-button" @click="findData()">Найти</button>
    </div>
    <div class="canvas-chart-class">
      <bar-chart :chartData="chartData" :chartOptions="options" />
    </div>
    <div class="pagination-row-layer">
      <PaginationComponent />
    </div>
  </div>
</template>

<script>
import BarChart from '@/components/BarChart.vue';
// import PaginationComponent from '@/components/PaginationComponent.vue'
import {
  getTotalTimeArrayFromJson,
  getEmployeesIdArrayFromJson,
  getDataFromServer
} from '@/scripts/active_timedata_from server'

export default {
  components: {
    BarChart
  },
  mounted() {
    // console.log(moment().format('LTS'));
  },
  data() {
    return {
      findDateText: '',
      allData: getDataFromServer(),

      startPage: 0,
      endPage: 0,
      currentPage: 0,

      chartData: {
        labels: getEmployeesIdArrayFromJson(),
        datasets: [
          {
            label: 'Рабочее время',
            data: getTotalTimeArrayFromJson(),
            backgroundColor: "rgba(71, 183,132,.5)",
            borderColor: "#47b784",
            borderWidth: 3
          },

        ]
      },
      options: {
        responsive: true,

        /* график действительно адаптируется под мобильные экраны, но для более точной
        настройки приходится уточнить количество и точность подписей на осях */
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                console.log(context)
                const dataset = context.dataset;
                console.log(dataset.data[context.dataIndex]);
                let currentIndexTime = dataset.data[context.dataIndex];

                return currentIndexTime;
              }
            }
          }
        },
        scales: {
          y: {
            type: 'time', // Установка типа временной шкалы
            time: {
              parser: 'HH', // Формат времени
              unit: 'hour', // Единица измерения времени (например, 'hour', 'minute')
              displayFormats: {
                hour: 'HH', // Формат отображения времени
              },
              tooltipFormat: 'HH:mm:ss', // Формат подсказки при наведении
            },

          }
        }
      },

    }

  },
  methods: {
    findData() {
      let dataDateAccordingWithTime = [];
      let dataEmployeeIdAccordingWithTime = [];
      this.allData.forEach(element => {

        let findDateText = this.findDateText.substring(0, 10);
        let dateText = element.date.substring(0, 10);

        if (dateText === findDateText) {
          dataDateAccordingWithTime.push(element.total_time);
          dataEmployeeIdAccordingWithTime.push(element.employee_id)
        }
      })

      this.chartData.datasets.data = dataDateAccordingWithTime;
      console.log("this.chartData.datasets.data: " + this.chartData.datasets.data);
      this.chartData.labels = dataEmployeeIdAccordingWithTime;

      this.renderChart(this.chartData, this.options)
    }
  }

}

</script>


<style lang="scss">
$font: 'Open Sans', sans-serif;


.canvas-chart-class {
  width: 800px;
  padding: 10px;
  margin-top: 10px;
}

.common-histogram-layer {
  width: 100%;
  height: 50%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: auto;
  font-family: $font;
}

.data-find-button {
  background-color: #a1f8d1;
  margin-left: 10px;
  border-radius: 5px;
  border-color: #57cf99;
  font-family: $font;
  font-size: 18px;
}

.label-input-field {
  font-size: 20px;
}

.input-field {
  padding: 3px;
  font-size: 20px;
  text-align: center;
}
</style>
