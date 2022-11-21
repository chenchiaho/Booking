function doFirst(){
    // 跟 HTML 產生關連，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = calculate
}
function calculate(e){

    e.preventDefault()

    let start = document.getElementById('start').value
    let end = document.getElementById('end').value

    let day = 24 * 60 * 60 * 1000 // 一天有86400000毫秒
    let startDate = new Date(start)
    let endDate = new Date(end)

    let message = ''

    if(startDate <= endDate) {

        let diff = endDate - startDate
        console.log(diff);

        if(diff <= day) {
            interval = 1
        } else {
            interval = Math.round(diff / day) + ` days`
        }

        message += `
        The room has been scheduled starting 
        from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}, <span>${interval}</span> total.
        `

    } else {
        message += `the start date must come before end date`
    }

    document.getElementById('result').innerHTML = message 
    console.log(startDate.getTime() + endDate.getTime());
    
}
window.addEventListener('load',doFirst)