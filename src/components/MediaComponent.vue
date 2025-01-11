<template>
    <div class="media-container">
      <div class="filters">
        <input 
        type="text" 
        v-model="searchName" 
        placeholder="Pesquisar por nome" 
        @input="filterMedia"
      />
        <select v-model="selectedCategory">
          <option value="">Categorias</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
        <select v-model="selectedType">
          <option value="">Tipos</option>
          <option v-for="type in types" :key="type" :value="type">
            {{ type }}
          </option>
        </select>        
        <select v-model="filterType">
        <option value="">Tipos</option>
        <option value="image">Imagem</option>
        <option value="video">Vídeo</option>
      </select>
      </div>      
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import MediaService from '@/services/gestao-de-midias-bff.service';
  
  export default {
    data() {
      return {
        media: [],
        searchName: '', 
        selectedCategory: '',
        selectedtype: '',
        filterType: '',       
        categories: [],
        types: [],
        viewMode: 'image' 
      };
    },
    computed: {
      ...mapState({
        isAuthenticated: (state) => state.auth.isAuthenticated
      }),
      filteredMedia() {
        let filtered = this.media;        
        if (this.searchName) {
          filtered = filtered.filter(item => item.title.toLowerCase().includes(this.searchName.toLowerCase()));
        }
        if (this.selectedCategory) {
          filtered = filtered.filter(item => item.category === this.selectedCategory);
        }
        if (this.filterType) {
        filtered = filtered.filter(item => item.type === this.filterType);
        }
        return filtered;
      }
    },
    methods: {
      fetchMedia() {
        MediaService.getAllMedia().then(response => {
          this.media = response.data;
          this.categories = [...new Set(this.media.map(item => item.category))];
          this.types = [...new Set(this.media.map(item => item.type))];
        });
      },
      toggleView() {
        this.viewMode = this.viewMode === 'image' ? 'video' : 'image';
      }
    },
    mounted() {
      this.fetchMedia();
    }
  };
  </script>
  
<style scoped>
.media-container {
  display: flex;             
  margin-left: 6rem;
}

.filters{
  gap: 20px;   
}
  /* .media-list {
    display: flex;
    flex-wrap: wrap;
  }
  .media-item {
    margin: 10px;
  } */
</style>
  