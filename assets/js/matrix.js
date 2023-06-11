//Matrix 矩阵 黑客帝国字符雨下落 JavaScript代码生成器 https://suiyan.cc/matrix

const CANVAS_BORDER = "1px solid green";
const CANVAS_BACK_COLOR = "#000";
const CANVAS_WIDHT = 120;
const CANVAS_HEIDHT = 120;

const MATRIX_NUMBER = 33; // 矩阵列数
const STRING_HEIGHT = 14; // 字符串高度
// 字符串列起始坐标
const MIN_Y = 333;
const MAX_Y = 555;
// 矩阵每列字符数
const MIN_LENGTH = 15;
const MAX_LENGTH = 35;
// 字体大小
const MIN_FONT = 6;
const MAX_FONT = 16;
// 字符样色
const MATRIX_COLOR_R = 0;
const MATRIX_COLOR_G = 255;
const MATRIX_COLOR_B = 0;
// 字符颜色的透明度
const MIN_AP = 1;
const MAX_AP = 7;
// 下落速度
const MIN_SPEED = 3;
const MAX_SPEED = 8;

// 创建 Canvas 画布
const canvas = document.getElementById("matrix");
canvas.width = CANVAS_WIDHT;
canvas.height = CANVAS_HEIDHT;
canvas.style = "border:" + CANVAS_BORDER + ";";

// 获取 2D 上下文
const ctx = canvas.getContext("2d");
// 创建一个矩阵
const mymatrix = [];
for (let i = 0; i < MATRIX_NUMBER; i++) {
  mymatrix.push(getMatrix());
}
/**
 * 绘制场景中的矩阵
 */
function draw() {
  // 清除画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 设置画布背景为黑色
  ctx.fillStyle = CANVAS_BACK_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  mymatrix.forEach((matrix) => {
    ctx.font = matrix.font;
    ctx.fillStyle = matrix.color;
    matrix.strs.forEach((c) => {
      // 绘制字符串
      ctx.fillText(c.s, c.x, c.y);
    });
  });

  //更新矩阵
  matrixUpdate(mymatrix);

  // 循环调用draw函数以实现动画效果
  requestAnimationFrame(draw);
}

function matrixUpdate(mxs) {
  mxs.forEach((mx, index) => {
    mx.strs.forEach((c) => {
      c.y += mx.speed;
    });

    if (mx.strs[0].y > canvas.height + 50) {
      // console.log(mx.strs[0].y)
      mxs.splice(index, 1);
      let tmparr = getMatrix();
      mxs.push(tmparr);
    }
  });
}

/**
 * 生成一组竖排的字符串
 * @returns {*[]}
 */
function getMatrix() {
    // 定义字符串数组
    const mx = {};
    const strings = [];

    let length = Math.floor(Math.random() * (MAX_LENGTH - MIN_LENGTH + 1)) + MIN_LENGTH;
    let currentY = -getRandomInt(MIN_Y, MAX_Y); // 当前 Y 坐标
    let currentX = getRandomInt(0 - 16, canvas.width + 16);
    let ap = getRandomInt(MIN_AP, MAX_AP); // 颜色透明度

    for (let i = 0; i < length; i++) {
        // 生成随机字符
        const c = getRandomInt(33, 127);
        const randomChar = String.fromCharCode(c);
        // 更新 Y 坐标
        currentY += STRING_HEIGHT;

        strings.push({
            s: randomChar,
            x: currentX,
            y: currentY
        });
    }

    mx.color = `rgba(${MATRIX_COLOR_R},${MATRIX_COLOR_G},${MATRIX_COLOR_B},${ap / 10})`;
    mx.font = `${getRandomInt(MIN_FONT, MAX_FONT)}px system-ui`;
    mx.strs = strings;
    mx.speed = getRandomInt(MIN_SPEED, MAX_SPEED);
    return mx;
}

/**
 * 将生成介于 a 和 b 之间的随机整数
 * @param a
 * @param b
 * @returns {*}
 */
function getRandomInt(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

draw();
