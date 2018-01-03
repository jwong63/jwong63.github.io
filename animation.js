<!DOCTYPE html>
<html>
<body>

<h1>Typewriter</h1>

<button onclick="typeWriter()">Click me</button>

<p id="demo"></p>

<script>
var i = 0;
var txt = 'Hi my name is Jackie.';
var speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
</script>

</body>
</html>
