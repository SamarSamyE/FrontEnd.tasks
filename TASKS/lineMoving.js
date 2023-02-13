var can = document.getElementById("can");
        var ctx = can.getContext("2d");
        // to dram the line using canvas
        var length = 0;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;
        ctx.closePath();
        // to draw the line every 0.5 s
        var line= setInterval(drawLine, 500);
        function drawLine() {
            ctx.lineTo(length, length);
            length += 50;
            ctx.stroke();
            if (length == 600) {
                clearInterval(line);
                alert("Animation End");
            }
        }