// Toggle Sidebar Menu 
$(".sidebar-btn").click(function () { 
    $(".sidebar").toggleClass("sidebar-hidden");
});

// Toggle Sidebar Close Button
$(".sidebar .item:first-child").click(function () { 
    $(".sidebar").toggleClass("sidebar-hidden");
});

// Change margin with topbar height 
$(".main").css("margin-top", $(".topbar").outerHeight());
$(window).resize( ()=>{
    $(".main").css("margin-top", $(".topbar").outerHeight())
});