/**
  Компонент, принимающий данные с сервера. 
  В данных находится действительное время работы и связанная с ним прикладная информация

*/

<template>
  <bar-chart :chartData="chartData" :chartOptions="options" />
</template>

<script>
import BarChart from '@/components/BarChart.vue';
import {
  getTotalTimeArrayFromJson,
  getEmployeesIdArrayFromJson,  /*formatTime,*/
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
              // unit: 'hour', // Единица измерения времени (например, 'hour', 'minute')
              displayFormats: {
                hour: 'HH', // Формат отображения времени
              },
              tooltipFormat: 'HH:mm:ss', // Формат подсказки при наведении
            },

          },
        }
      },

    }

  }

}

</script>