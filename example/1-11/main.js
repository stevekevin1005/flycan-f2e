window.onload = function () {
    var obj = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"]
    var wrap = document.getElementById("target");
    slider(wrap, obj); 
}

function slider(target, obj) {
    var oImage = document.createElement("ul");
    oImage.className = "pic-group";
    var oNumber = document.createElement("ol");
    oNumber.className = "num-group";
    var nums = [];

    obj.forEach(function (url, index) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.src = url;
        li.appendChild(img);
        oImage.appendChild(li);
        var num = document.createElement("li");
        if (index == 0) {
            num.className = "current";
        }
        num.onmouseover = function () {
            clearNumState();
            show(index);
        }
        num.innerText = index + 1;
        oNumber.append(num);
        nums.push(num);
    });

    target.appendChild(oImage);
    target.appendChild(oNumber);
    var clearNumState = function () {
        nums.forEach(function (num) {
            num.className = "";
        });
    }
    var timer = null;
    var show = function (index) {
        nums[index].className = "current";
        if (timer) clearInterval(timer);
        const target = -250 * index;
        let now = oImage.offsetTop;
        timer = setInterval(() => {
            if (now === target) {
                clearInterval(timer);
            } else {
                now += move(target);
                oImage.style.top = now + "px";
            }
        }, 20);
    }
    var move = function (target) {
        var now = oImage.offsetTop
        var differ = target - now;
        var res = differ > 0 ? Math.ceil(differ / 10) : Math.floor(differ / 10);
        return res;
    }
}