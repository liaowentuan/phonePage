<template>
  <div class="home">
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="数据类型" name="1">
        <h3>1. Numbers(数字)</h3>
          - int(有符号的整型)
          <br>- long(长整形[也可以代表八进制和十六进制])
          <br>- float(浮点型)
          <br>- complex(复数)
        <h3>2.布尔类型(区分大小写)</h3>    
          - True
          <br>- False
        <h3>3.String(字符串)</h3>          
          'hello'   
          "world"
        <h3>4.List(列表)</h3>              
          []
        <h3>5.Tuple(元祖)</h3>
          ()
        <h3>6.Dictionary(字典)</h3>     
          {}
      </van-collapse-item>
      <van-collapse-item title="数字运算" name="2">
        <table class="table">
            <tr>
              <td>运算符</td>
              <td>描述</td>
              <td>实例</td>
            </tr>
            <tr>
              <td>+</td>
              <td>加</td>
              <td>两个对象相加 a + b 输出结果 30</td>
            </tr>
            <tr>
              <td>-</td>
              <td>减</td>
              <td>得到负数或是一个数减去另一个数 a - b 输出结果 -10</td>
            </tr>
            <tr>
              <td>*</td>
              <td>乘</td>
              <td>两个数相乘或是返回一个被重复若干次的字符串 a * b 输出结果 200</td>
            </tr>
            <tr>
              <td>/</td>
              <td>除</td>
              <td>x除以y b / a 输出结果 2</td>
            </tr>
            <tr>
              <td>//</td>
              <td>取整除</td>
              <td>返回商的整数部分 9//2 输出结果 4.0</td>
            </tr>
            <tr>
              <td>%</td>
              <td>取余</td>
              <td>返回除法的余数 b % a 输出结果 0</td>
            </tr>
            <tr>
              <td>**</td>
              <td>幂</td>
              <td>返回x的y次幂 a**b 为10的20次方， 输出结果 100000000000000000000</td>
            </tr>
        </table>
        <h3>例子：</h3>
        9 // 2.0
        <br>>>> 4
        <br>9// 2.9
        <br>>>>3
        <br>2**3
        <br>>>> 8
        <br>9%2
        <br>>>> 1
        <br>a, b = 1, 2
        <br>a
        <br>>>> 1
        <br>b
        <br>>>> 2
      </van-collapse-item>
      <van-collapse-item title="格式化字符串" name="3">
        "我的姓名是%s,年龄是%d"%(name,age)
        <table class="table">
            <tr>
              <td>格式符号</td>
              <td>转换</td>
            </tr>
            <tr>
              <td>%c</td>
              <td>字符</td>
            </tr>
            <tr>
              <td>%s</td>
              <td>通过str() 字符串转换来格式化</td>
            </tr>
            <tr>
              <td>%i</td>
              <td>有符号十进制整数</td>
            </tr>
            <tr>
              <td>%d</td>
              <td>有符号十进制整数</td>
            </tr>
            <tr>
              <td>%u</td>
              <td>无符号十进制整数</td>
            </tr>
            <tr>
              <td>%o</td>
              <td>八进制整数</td>
            </tr>
            <tr>
              <td>%x</td>
              <td>十六进制整数（小写字母）</td>
            </tr>
            <tr>
              <td>%X</td>
              <td>十六进制整数（大写字母）</td>
            </tr>
            <tr>
              <td>%e</td>
              <td>索引符号（小写'e'）</td>
            </tr>
            <tr>
              <td>%E</td>
              <td>索引符号（大写“E”）</td>
            </tr>
            <tr>
              <td>%f</td>
              <td>浮点实数</td>
            </tr>
            <tr>
              <td>%g</td>
              <td>％f和％e的简写</td>
            </tr>
            <tr>
              <td>%G</td>
              <td>％f和％E的简写</td>
            </tr>
        </table>
      </van-collapse-item>
      <van-collapse-item title="有赞美业" name="4">
        线上拓客，随时预约，贴心顺手的开单收银
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: '1'
    }
  }
}
</script>

<style lang="scss" scoped>
.table{
  border-collapse:collapse;
  td {
    min-width: 50px;
    padding: 5px;
    border: 1px solid #ddd;
  }
}
</style>
