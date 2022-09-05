<template>
  <div class="header">

    <h1>Search for a Movie</h1>
    <a-space direction="vertical">
      <a-input-search
      v-model:value="value"
      placeholder="input search text"
      enter-button="Search"
      size="large"
      @search="onSearch"
      />     
    </a-space>
    <!-- <li v-for="movie in getMovies">
      {{movie}}
    </li> -->
  </div>
  </template>
  <script>
  import { defineComponent, ref } from 'vue';
  import axios from "axios";

  export default defineComponent({
    setup() {

      const getMovies = async (input) => {
        let res = await axios.get(`http://localhost:8080/result`, {
          params: {
            input: input
          }
        })
        console.log(res.data);
        return res.data;
      }
  
      const onSearch = searchValue => {
        return getMovies(searchValue);
      };
  
      return {
        onSearch,
        getMovies
      };
    },
  
  });

  </script>

  <style>
    .header {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      padding: 32px;
    }
  </style>