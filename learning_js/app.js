const base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
const dropdown =document.querySelectorAll("select")
const btn=document.querySelector("button")

const fromCurrency=document.querySelector("#from")
const toCurrency=document.querySelector("#to")
const msg=document.querySelector(".msg")

for(let select of  dropdown )
    {
        for(currencyCode in  countryList)
            {
                const newOption=document.createElement("option")
                newOption.value=currencyCode;
                newOption.innerText=currencyCode;

                if(select.id==="from" && currencyCode==="USD")
                {
                    newOption.selected="selected";
                }
                if(select.id==="to" && currencyCode==="INR")
                    {
                        newOption.selected="selected";
                    }

                select.append(newOption)
            }

            select.addEventListener("change",(event)=>
            {
                changeflag(event.target)
            });
            
    }

    function changeflag(evnt)
    {
        let currencyCode=evnt.value;
        let countrycode=countryList[currencyCode]

        let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
        evnt.parentElement.querySelector("img").src = newsrc;    
    }

    btn.addEventListener("click",async (event)=>
    {
        event.preventDefault();

        let input=document.querySelector("input")
        let amount=input.value

        if(amount==="" || amount<0)
        {
            input.value="1";
            amount=1;
        }
        let from=fromCurrency.value.toLowerCase();
        let to=toCurrency.value.toLowerCase();

        const url = `${base_url}${from}.json`;
       
       try{
        let response=await fetch(url)
        let json=await response.json();
       let rate=json[from][to]
       console.log(rate)

       const convertedAmount = rate * amount;
       msg.innerText=`${amount} ${from} = ${convertedAmount} ${to}`

       }catch(err)
       {
        console.error(err)
       }
       

    })