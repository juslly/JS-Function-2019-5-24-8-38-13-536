## 要求 
    
- 新建main.js文件，编写一个函数，实现以下功能：将一个字符串逆序输出。

```
function reverseString(message){
  // wirte your code here
}
reverseString('hello'); // should return 'olleh'
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
      function reverseString(message){
        var message1 = message.split("").reverse().join("");
        return message1;
        //alert(message1);
      }
      var str = "hello world";
      var str1  = reverseString(str);
      alert(str1);
 
    </script>
</head>
<body>
</body>
</html>

