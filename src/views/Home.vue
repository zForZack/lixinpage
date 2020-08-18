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
              <li v-for="item in newList" :key="item.id" @click="routerTo(item.sync_url)">{{item.name}}</li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="oldAuth">
            <h2>老版认证</h2>
            <ul>
              <li v-for="item in oldList" :key="item.id">{{item.name}}</li>
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
    <div class="shade" v-show="this.dialogShow"></div>
    <div class="dialog" v-show="this.dialogShow">
      <div class="Tips_title">温馨提示！</div>
      <div class="Tips_content">{{dialogContent.Tips}}</div>
      <span class="layui-layer-setwin">
        <a class="layui-layer-ico layui-layer-close layui-layer-close1" href="javascript:;" @click="changeDialogShow()"></a>
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import dialogContent from '../assets/index.json'

export default {
  name: 'Home',
  data () {
    return {
      list: {
        new: [],
        old: []
      },
      data: '',
      dialogShow: true,
      dialogContent: dialogContent
    }
  },
  computed: {
    newList () {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].system_id === '1') {
          this.newlistPush(this.data[i])
        }
      }
      return this.list.new
    },
    oldList () {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].system_id === '2') {
          this.oldlistPush(this.data[i])
        }
      }
      return this.list.old
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('http://192.168.2.68:20001/api/application/v1/example/findApplication')
        .then(this.getHomeInfoSucc)
        .catch()
    },
    getHomeInfoSucc (res) {
      this.data = res.data.data
    },
    newlistPush (data) {
      this.list.new.push(data)
    },
    oldlistPush (data) {
      this.list.old.push(data)
    },
    routerTo (url) {
      window.open(url, '_blank')
    },
    changeDialogShow () {
      this.dialogShow = !this.dialogShow
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="scss">
@import "../assets/css/index.css";
body{
  color: #333;
  background-color: #fff;
}
img {
  border: none;
  vertical-align: middle;
}
.newAuth {
  display: inline-block;
}
.shade {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 19891021;
  background-color: rgb(0, 0, 0);
  opacity: 0.3;
  position: fixed;
  pointer-events: auto;
}
.dialog {
  position: fixed;
  pointer-events: auto;
  z-index: 19891022;
  width: 360px;
  top: 35%;
  left: 38%;
  min-width: 260px;
  margin: 0;
  padding: 0;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 1px 1px 50px rgba(0,0,0,.3);
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.Tips_title {
  padding: 0 80px 0 20px;
  height: 42px;
  line-height: 42px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #333;
  overflow: hidden;
  background-color: #F8F8F8;
  border-radius: 2px 2px 0 0;
}
.Tips_content {
  position: relative;
  padding: 20px;
  line-height: 24px;
  word-break: break-all;
  overflow: hidden;
  font-size: 14px;
  overflow-x: hidden;
  overflow-y: auto;
}
.layui-layer-setwin {
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 0;
  line-height: initial;
  .layui-layer-close1 {
    background-position: 1px -40px;
    cursor: pointer;
  }
  a{
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 16px;
    height: 16px;
    margin-left: 10px;
    font-size: 12px;
    background: url(../assets/images/icon.png) no-repeat;
  }
}
</style>
