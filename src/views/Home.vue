<template>
  <div class="home">
    <div class="bg"></div>
    <div class="container-box">
      <div class="header">
        <img src="../assets/images/logo.png">
      </div>
      <div class="authList">
        <div class="authListLeft">
          <img src="../assets/images/tu.png" >
        </div>
        <div class="authListRight">
          <div class="newAuth">
            <h2>新版认证</h2>
            <ul>
              <li v-for="(item,index) in list.new" :key="index"></li>
              <li>迎新系统</li>
              <li>学工系统</li>
              <li>办公自动化</li>
              <li>教务系统</li>
              <li>研究生事物系统</li>
              <li>网络教学平台</li>
              <li>数据中心平台</li>
              <li>校园一卡通</li>
              <li>考勤系统</li>
              <li>学生综合查询</li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="oldAuth">
            <h2>老版认证</h2>
            <ul>
              <li v-for="(item,index) in list.old" :key="index"></li>
              <li>密码维护</li>
              <li>教务系统</li>
              <li>办公自动化</li>
              <li>教务系统</li>
              <li>研究生事物系统</li>
              <li>网络教学平台</li>
              <li>数据中心平台</li>
              <li>校园一卡通</li>
              <li>考勤系统</li>
              <li>学生综合查询</li>
              <li>密码维护</li>
              <li>教务系统</li>
              <li>办公自动化</li>
              <li>教务系统</li>
              <li>研究生事物系统</li>
              <li>网络教学平台</li>
              <li>数据中心平台</li>
              <li>校园一卡通</li>
              <li>考勤系统</li>
              <li>学生综合查询</li>
            </ul>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <span>CopyRight</span>
      <span>©2015-2016</span>
      <span>版权所有</span>
      <span>上海立信会计金融学院</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss">
@import "../assets/css/index.css";
img {
  border: none;
  vertical-align: middle;
}
.newAuth{
  display: inline-block;
}
</style>
