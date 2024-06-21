<script setup lang="ts"></script>

<template>
  <div>
    <div class="col-md-3 left_col">
      <div class="left_col scroll-view">
        <div class="navbar nav_title" style="border: 0;">
          <NuxtLink to="/" class="site_title"><i class="fa fa-paw"></i> <span>Gentelella Alela!</span></NuxtLink>
        </div>
  
        <div class="clearfix"></div>
  
        <!-- menu profile quick info -->
        <div class="profile clearfix">
          <div class="profile_pic">
            <img src="/images/img.jpg" alt="..." class="img-circle profile_img">
          </div>
          <div class="profile_info">
            <span>Welcome,</span>
            <h2>John Doe</h2>
          </div>
        </div>
        <!-- /menu profile quick info -->
  
        <br />
  
        <!-- sidebar menu -->
        <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
          <div class="menu_section">
            <h3>General</h3>
            <ul class="nav side-menu">
              <li><NuxtLink to="/"><i class="fa fa-home"></i> Home <span class="fa fa-chevron-down"></span></NuxtLink>
                <ul class="nav child_menu">
                  <li><NuxtLink to="/">Dashboard 1</NuxtLink></li>
                  <li><NuxtLink to="/">Dashboard 2</NuxtLink></li>
                  <li><NuxtLink to="/">Dashboard 3</NuxtLink></li>
                </ul>
              </li>
              <li><NuxtLink to="/"><i class="fa fa-edit"></i> Forms <span class="fa fa-chevron-down"></span></NuxtLink>
                <ul class="nav child_menu">
                  <li><NuxtLink to="/">General Form</NuxtLink></li>
                  <li><NuxtLink to="/">Advance Component</NuxtLink></li>
                  <li><NuxtLink to="/">Form Validation</NuxtLink></li>
                </ul>
              </li>
              <li><NuxtLink to="/"><i class="fa fa-desktop"></i> UI Elements <span class="fa fa-chevron-down"></span></NuxtLink>
                <ul class="nav child_menu">\
                  <li><NuxtLink to="/">General Elements</NuxtLink></li>
                  <li><NuxtLink to="/">Media Gallery</NuxtLink></li>
                  <li><NuxtLink to="/">Typography</NuxtLink></li>
                </ul>
              </li>
              <li><NuxtLink to="/"><i class="fa fa-table"></i> Tables <span class="fa fa-chevron-down"></span></NuxtLink>
                <ul class="nav child_menu">
                  <li><NuxtLink to="/">Tables</NuxtLink></li>
                  <li><NuxtLink to="/">Table Dynamic</NuxtLink></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="menu_section">
            <h3>Live On</h3>
            <ul class="nav side-menu">
              <li><NuxtLink to="/"><i class="fa fa-bug"></i> Additional Pages <span class="fa fa-chevron-down"></span></NuxtLink>
                <ul class="nav child_menu">
                  <li><NuxtLink to="/">General Elements</NuxtLink></li>
                  <li><NuxtLink to="/">Media Gallery</NuxtLink></li>
                  <li><NuxtLink to="/">Typography</NuxtLink></li>
                </ul>
              </li>
              <li><NuxtLink to="/"><i class="fa fa-windows"></i> Extras <span class="fa fa-chevron-down"></span></NuxtLink>
                <ul class="nav child_menu">
                  <li><NuxtLink to="/">General Elements</NuxtLink></li>
                  <li><NuxtLink to="/">Media Gallery</NuxtLink></li>
                  <li><NuxtLink to="/">Typography</NuxtLink></li>
                </ul>
              </li>               
            </ul>
          </div>
  
        </div>
        <!-- /sidebar menu -->
  
        <!-- /menu footer buttons -->
        <div class="sidebar-footer hidden-small">
          <!-- <NuxtLink to="/" data-toggle="tooltip" data-placement="top" title="Settings">
            <i class="fa fa-glyphicon"></i>
            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
          </NuxtLink>
          <NuxtLink to="/" data-toggle="tooltip" data-placement="top" title="FullScreen">
            <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
          </NuxtLink>
          <NuxtLink to="/" data-toggle="tooltip" data-placement="top" title="Lock">
            <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
          </NuxtLink> -->
          <NuxtLink to="/" data-toggle="tooltip" data-placement="top" title="Logout">
            <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
          </NuxtLink>
        </div>
        <!-- /menu footer buttons -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
