<script setup lang="ts">

const toggleMenu = () => {
  const side = document.getElementById('sideBar');
  if(side){
    if(side.classList.contains('nav-md')){
      side.classList.remove('nav-md');
      side.classList.add('nav-sm');
    } else {
      side.classList.remove('nav-sm');
      side.classList.add('nav-md');
    }
  }
}

</script>

<template>
  <div>
    <div class="top_nav">
      <div class="nav_menu">
        <nav>
          <div class="nav toggle" @click="toggleMenu">
            <NuxtLink to=""><i class="fa fa-bars"></i></NuxtLink>
          </div>
  
          <ul class="nav navbar-nav navbar-right">
            <li class="">
              <NuxtLink href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <img src="/images/img.jpg" alt="">John Doe
                <span class=" fa fa-angle-down"></span>
              </NuxtLink>
              <ul class="dropdown-menu dropdown-usermenu pull-right">
                <li><NuxtLink to="" href="javascript:;"> Profile</NuxtLink></li>
                <li>
                  <NuxtLink to="" href="javascript:;">
                    <span class="badge bg-red pull-right">50%</span>
                    <span>Settings</span>
                  </NuxtLink>
                </li>
                <li><NuxtLink to="" href="javascript:;">Help</NuxtLink></li>
                <li><NuxtLink to="" href="login.html"><i class="fa fa-sign-out pull-right"></i> Log Out</NuxtLink></li>
              </ul>
            </li>
  
            <!-- <li role="presentation" class="dropdown">
              <NuxtLink to="" href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                <i class="fa fa-envelope-o"></i>
                <span class="badge bg-green">6</span>
              </NuxtLink>
              <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
                <li>
                  <NuxtLink to="">
                    <span class="image"><img src="/images/img.jpg" alt="Profile Image" /></span>
                    <span>
                      <span>John Smith</span>
                      <span class="time">3 mins ago</span>
                    </span>
                    <span class="message">
                      Film festivals used to be do-or-die moments for movie makers. They were where...
                    </span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="">
                    <span class="image"><img src="/images/img.jpg" alt="Profile Image" /></span>
                    <span>
                      <span>John Smith</span>
                      <span class="time">3 mins ago</span>
                    </span>
                    <span class="message">
                      Film festivals used to be do-or-die moments for movie makers. They were where...
                    </span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="">
                    <span class="image"><img src="/images/img.jpg" alt="Profile Image" /></span>
                    <span>
                      <span>John Smith</span>
                      <span class="time">3 mins ago</span>
                    </span>
                    <span class="message">
                      Film festivals used to be do-or-die moments for movie makers. They were where...
                    </span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="">
                    <span class="image"><img src="/images/img.jpg" alt="Profile Image" /></span>
                    <span>
                      <span>John Smith</span>
                      <span class="time">3 mins ago</span>
                    </span>
                    <span class="message">
                      Film festivals used to be do-or-die moments for movie makers. They were where...
                    </span>
                  </NuxtLink>
                </li>
                <li>
                  <div class="text-center">
                    <NuxtLink to="">
                      <strong>See All Alerts</strong>
                      <i class="fa fa-angle-right"></i>
                    </NuxtLink>
                  </div>
                </li>
              </ul>
            </li> -->
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
