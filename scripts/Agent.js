export const agent =(agentObj)=>{
    return`
    <section class="agent">
        <h3 class="agent__name">${agentObj.agentName}</h3>
        <div class="agent__business">${agentObj.company}</div>
        <div class="agent__phone">${agentObj.phone}</div>
        <hr>
    </section>
    `
}