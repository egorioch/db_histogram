/**
  Компонент, принимающий данные с сервера. 
  В данных находится действительное время работы и связанная с ним прикладная информация

*/

<template>
  <bar-chart :chartData="chartData" :chartOptions="options" />
</template>

<script>
import BarChart from '@/components/BarChart.vue';
import { getTotalTimeArrayFromJson,
  getEmployeesIdArrayFromJson,  formatTime
} from '@/scripts/active_timedata_from server'

export default {
  components: {
    BarChart
  },
  mounted() {
    console.log(getTotalTimeArrayFromJson());
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
                // let label = context.dataset.label;
                console.log(context);
                let yValue = 'bruh';
                console.log("YVALUE: " + yValue)
              }
            }
          }
        },
        scales: {
          x: {
            type: "time",
            ticks: {
              // Настройки меток на оси X
              stepSize: 1, // Шаг между метками
              // min: 0, // Минимальное значение на оси X
              // max: 10, // Максимальное значение на оси X
              callback: function (value) {
                // Функция для форматирования меток на оси X
                console.log("value:" + value)
                let shortTimeValue = formatTime(value);
                return shortTimeValue;
              }
            }
          },
        }
      },

    }

  }

}

</script>