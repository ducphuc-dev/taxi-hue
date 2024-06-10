const contactName = document.getElementById("contact_name")
const contactNumber = document.getElementById("contact_number")
const submitContactBtn = document.getElementById("btn_submit_contact")

submitContactBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(contactName.value && contactNumber.value) {
        const data = {
            name: contactName.value,
            phone: contactNumber.value
        }
        console.log("postData: ", data)
        postData(data)
    }
    else {
        alert("Vui lòng nhập họ tên và SĐT")
    }
})

const postData = async (data) => {
    const formData = new FormData()
    formData.append('entry.286073653', data.name)
    formData.append('entry.1830290430', data.phone)
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSeFTBvqIlTIwmiiHfHK-XMb9AbHav2TIFxI6k9m8pldOzL70w/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    })
    alert("Gửi thành công. Chúng tôi sẽ liên hệ với bạn sớm nhất có thể! Xin cám ơn")
}