function tinhLuong() {
    const luong = parseFloat(document.getElementById("luong").value);
    const heSo = parseFloat(document.getElementById("heSo").value);
    
    if (isNaN(luong) || isNaN(heSo)) {
        alert("Vui lòng nhập số hợp lệ!");
        return;
    }
    
    const luongThang = luong * heSo;
    document.getElementById("luongThang").value = luongThang.toLocaleString("vi-VN");
}