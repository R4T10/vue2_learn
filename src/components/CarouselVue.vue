<template>
  <v-carousel 
    hide-delimiters 
    class="custom-carousel"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      cover
    >
      <div class="carousel-caption">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'CustomCarousel',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.custom-carousel {
  width: 1500px; /* Adjust the width to your preference */
  height: 500px; /* Adjust the height to your preference */
}

.carousel-caption {
  width: 1450px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5); /* Optional: Adds a semi-transparent background */
  padding: 10px;
  border-radius: 5px;
}
</style>
