export const Business =(businessObj)=>{
    return`
    <section class="business">
        <h3 class="business__name">${businessObj.companyName}</h3>
        <div class="business__address--line1">${businessObj.addressFullStreet}</div>
        <div class="business__address--line2">${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</div>
        <hr>
    </section>
    `
}