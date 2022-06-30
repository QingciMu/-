
<script>
  export default{
    name: 'hello',
    data () {
      return {
        msg: '页面加载于 ' + new Date().toLocaleString(),
        seen:false,
        todos:[
          {text:'JS'},
          {text:'Vue'}
        ]
      }
    }
  }
</script>

<template>
  <div id="app-2">
    <!--绑定元素-->
    <span v-bind:title="msg">
         鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    <!--
      条件与循环
    -->
    <!--if-->
    <p v-if="seen"> see me</p>

    <ol>
        <li v-for = "todo in todos">
          {{ todo.text }}
        </li>
    </ol>
  </div>

</template>
