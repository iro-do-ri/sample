$(".index-inner .index-title button").on("click", function(){
    let sectionIndex = $(this).closest("article").index();
    sectionIndex -= 1;
    $(".index-contents").eq(sectionIndex).slideToggle();
    $(".index-title").eq(sectionIndex).find("button").toggleClass("down"); 
});

$(".inquiry p button").on("click", function () {
    let sectionIndex = $(this).closest("article").index();
    sectionIndex -= 1;
    $(".answer-contents").eq(sectionIndex).slideToggle();
    $(".question-contents").eq(sectionIndex).find("button").toggleClass("down");
});

$(document).ready(function () {
    $('.colum-category div li, .related-articla article p').each(function () {
        var text = $(this).text(); // 要素のテキストを取得
        if (text.length > 19) { // テキストが15文字以上の場合
            $(this).text(text.substring(0, 19) + '...'); // 15文字目までのテキストに「...」を追加
        }
    });
});