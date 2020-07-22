import {activeBusiness, newYork, manufacturing, agentInfo, findItem} from "./BusinessProvider.js"
import {Business} from "./Business.js"
import { agent } from "./Agent.js";
//const newTarget=document.querySelector(".businesses-newYork")
//const manBusiness=document.querySelector(".businesses-manufacturing")
export const allList=()=>{
    businessList();
    newYorkList();
    manufaturingList();
    agentList();
}
const businessList=()=>{
    const businessArray=activeBusiness();
    const target=document.querySelector(".businesses")
    target.innerHTML=""
    businessArray.forEach((businessObjt)=>{
        target.innerHTML+=Business(businessObjt);
    });
};
const newYorkList=()=>{
    const target=document.querySelector(".businesses-newYork")
    target.innerHTML+=""
    newYork.forEach((newBusinessObj)=>{
        target.innerHTML+=Business(newBusinessObj);
    });
};
const manufaturingList=()=>{
    const target=document.querySelector(".businesses-manufacturing")
    target.innerHTML+=""
    manufacturing.forEach((businessObj)=>{
        target.innerHTML+=Business(businessObj);
    });
}
const agentList=()=>{
    const target=document.querySelector(".agents")
    target.innerHTML+=""
    agentInfo.forEach((businessObj)=>{
        target.innerHTML+=agent(businessObj)
    })
}
const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */
           const input=document.getElementById("companySearch").value;
            const foundBusiness = findItem(input)// implement .find() method here

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });