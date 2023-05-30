/**
  Компонент пагинации.
  Допустимое число элементов - (либо передаваемое с parent-компонента)
*/
<template>
  <div>
    <ul>
      <li v-for="element in paginatedData"  :key="element">
        {{ element.first }}
        {{ element.last }}
        {{ element.suffix }}
      </li>
    </ul>
    <button @click="prevPage">
      Previous
    </button>
    <button @click="nextPage">
      Next
    </button>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      required: true
    },
    //максимальное количество записей
    size: {
      type: Number,
      required: false,
      default: 8
    }
  },
  data() {
    return {
      pageNumber: 0
    }
  },

  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    }
  },

  computed: {
    pageCount() {
      let l = this.listData.length,
        s = this.size

      return Math.ceil(l / s);
    },
    paginatedData() {
      //получаем стартовую страницу для текущей выборки
      const start = this.pageNumber * this.size;
      const end = start + this.size;

      return this.listData.slice(start, end);
    }
  }

}
</script>