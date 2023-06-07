/**
  snp - surname, name, patronymic
*/

<template>
  <div class="common-layout">
    <histogram-tools>
      <template #header-buttons>
        <input type="text" class="filter-value" v-model="filterValue" />
        <button class="find-by-filter-button" @click="getEmployeeHoursByEmployeeSNP()">
          Найти
        </button>
      </template>
      <template #hist-section>
        <div class="buttons-employees" v-if="surnameNotChoosed" v-for="name in employeesNamesArray">
          <button>{{ name }}</button>
        </div>
        <div class="employee-not-found" v-if="employeesNotFound">Совпадений нет</div>
      </template>
    </histogram-tools>
  </div>
</template>

<script>
import BarChart from '@/components/BarChart'
import HistogramTools from '@/components/HistogramTools.vue';
import { getDataFromServer } from '@/scripts/active_timedata_from server';
import { getAllEmployeesInfo } from "@/scripts/employees_info"

export default {
  components: {
    BarChart,
    HistogramTools
  },

  data() {
    return {
      rawHoursData: getDataFromServer(),
      rawEmployeeInfoData: getAllEmployeesInfo(),
      filterValue: '',
      surnameNotChoosed: true,
      concurenceEmployees: [],
      employeesNamesArray: [],
      employeesNotFound: false
    }
  },

  methods: {


    //создаем кнопки-имена при множественном совпадению по фильтру
    //метод упростится при перекрёстном запросе на сервере(число часов по employee_id)
    // id(from employee) = employee_id(from time_tracking)
    //SNP - surname, name, patronymic
    getEmployeeHoursByEmployeeSNP() {
      this.employeesNamesArray = [];
      this.concurenceEmployees = this.employeeIdByFilterValue();

      this.concurenceEmployees.forEach((element) => {
        this.employeesNamesArray.push(element.full_name)
      })

      this.filterValue = "";
    },
    //возвращаем массив значений совпадающих по фильтру
    employeeIdByFilterValue() {
      let concurenceEmployees = []

      this.rawEmployeeInfoData.forEach((element) => {
        if (element.full_name.trim().toLowerCase()
          .includes(this.filterValue.trim().toLowerCase())) {
          concurenceEmployees.push(element)
        }
      })

      console.log("Отправляемый массив: " + concurenceEmployees)
      return concurenceEmployees;
    },

  }

}
</script>

<style lang="scss" scoped>
$font: 'Open Sans', sans-serif;

.filter-value {
  padding: 5px;
  width: 30%;
}

button {
  background-color: #a1f8d1;
  border-radius: 5px;
  border-color: #57cf99;
  font-family: $font;
  font-size: 20px;
  margin-left: 10px;
}

.employee-not-found {
  font-size: 25px;
}
</style>