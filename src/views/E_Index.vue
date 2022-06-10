<template>
  <div>
    <el-container>
      <el-header
        ><el-menu
          default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          active-text-color="red"
          @select="handleSelect"
        >
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            
          </el-submenu>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4"
            ><a href="https://www.ele.me" target="_blank"
              >订单管理</a
            ></el-menu-item
          >
        </el-menu>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            @select="handleSelect"
            :router="true"
            
          >
            <el-menu-item index="/index/container">
              <template>
                <template slot="title"
                  ><i class="el-icon-message"></i>处理中心</template
                >
              </template>
            </el-menu-item>
            <el-submenu index="/index/table">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="/index/form">消息中心</el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
