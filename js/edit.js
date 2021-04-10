$(document).on('click', function (e) {
    var _con = $('.child');   // 设置目标区域</span>  
    if (!_con.is(e.target) && _con.has(e.target).length === 0) { // 点击区域不是目标本身，也排除目标区域的子元素
        $('.child').hide();
        $('.par').parent().removeClass('act');
    }
})
$('.par').on('click', function (event) {
    $('.par').parent().addClass('act')
    $('.child').show();
    event.stopPropagation();
})
// 字体
$('.child').on('click', 'li', function () {
    $('.mask').show()
})
// 遮罩层
$('.close').on('click', 'span', function () {
    $('.mask').hide()
})
// 获取值
var obj = {
    font: '',
    size: '',
    Bold: false
}
$('.btn').on('click', function () {
    $('#text').css({ fontSize: $('#size').val() + 'px', fontFamily: $('#font').val() })
    $('.mask').hide();
})
$('.default').on('click', function () {
    $('#text').css({ fontSize: '14px', fontFamily: 'Microsoft YaHei ' })
    $('.mask').hide();
})