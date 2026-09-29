function tinhTien() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const isNight = document.querySelector('input[name="time"]:checked').value === "night";
    
    if (checkboxes.length === 0) {
        document.getElementById("selectedItems").innerText = "Chưa chọn món nào";
        document.getElementById("totalAmount").innerText = "0";
        return;
    }
    
    let itemList = [];
    let sum = 0;
    
    checkboxes.forEach(item => {
        const name = item.getAttribute("data-name");
        const price = parseInt(item.value);
        itemList.push(`${name} (${price.toLocaleString("vi-VN")}đ)`);
        sum += price;
    });
    
    if (isNight) {
        sum = sum * 1.1; // Tăng 10% nếu ban đêm
    }
    
    document.getElementById("selectedItems").innerText = itemList.join(", ");
    document.getElementById("totalAmount").innerText = sum.toLocaleString("vi-VN");
}