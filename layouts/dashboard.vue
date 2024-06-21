<script setup lang="ts"></script>

<template>
  <div class="nav-md" id="sideBar">
    <div class="container body">
      <div class="main_container">

        <SideBar />

        <TopBar />

        <div class="right_col" role="main">
          <slot />
        </div>
    
        <Footer />

      </div>
    </div>
  </div>
</template>

<style scoped></style>
