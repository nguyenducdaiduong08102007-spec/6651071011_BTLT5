function xuatThu() {
    const ngay = parseInt(document.getElementById("ngay").value);
    const thang = parseInt(document.getElementById("thang").value);
    const nam = parseInt(document.getElementById("nam").value);
    
    const daysOfWeek = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    
    // JS Date nhận tháng từ 0 - 11
    const dateObj = new Date(nam, thang - 1, ngay);
    
    if (dateObj.getDate() !== ngay || dateObj.getMonth() !== thang - 1 || dateObj.getFullYear() !== nam) {
        document.getElementById("result").innerText = "Ngày tháng năm không hợp lệ!";
        return;
    }
    
    const thu = daysOfWeek[dateObj.getDay()];
    document.getElementById("result").innerText = `${thu} Ngày ${ngay} tháng ${thang} năm ${nam}`;
}