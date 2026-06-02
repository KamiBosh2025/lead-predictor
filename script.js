const revenueInput = document.getElementById("revenue");
const orderValueInput = document.getElementById("orderValue");
const leadRateInput = document.getElementById("leadRate");
const prospectRateInput = document.getElementById("prospectRate");

const customersEl = document.getElementById("customers");
const leadsEl = document.getElementById("leads");
const prospectsEl = document.getElementById("prospects");
const leadRateValueEl = document.getElementById("leadRateValue");
const prospectRateValueEl = document.getElementById("prospectRateValue");
function calculateResults() {
    const revenue = Number(revenueInput.value);
    const orderValue = Number(orderValueInput.value);
    const leadRate = Number(leadRateInput.value);
    const prospectRate = Number(prospectRateInput.value);

    const customers = Math.round(revenue / orderValue);
    const leads = Math.round(customers * 100 / leadRate);
    const prospects = Math.round(leads * 100 / prospectRate);

    customersEl.textContent = customers;
    leadsEl.textContent = leads;
    prospectsEl.textContent = prospects;
leadRateValueEl.textContent = `${leadRate}%`;
prospectRateValueEl.textContent = `${prospectRate}%`;
}
revenueInput.addEventListener("input", calculateResults);
orderValueInput.addEventListener("input", calculateResults);
leadRateInput.addEventListener("input", calculateResults);
prospectRateInput.addEventListener("input", calculateResults);

calculateResults();
function drawChart() {
    const chart = document.getElementById("chart");

    chart.innerHTML = "";

    const customers = Number(customersEl.textContent);
    const leads = Number(leadsEl.textContent);
    const prospects = Number(prospectsEl.textContent);

    const data = [
     { name: "Month 1", value: Math.round(prospects * 0.25) },
    { name: "Month 2", value: Math.round(prospects * 0.45) },
    { name: "Month 3", value: Math.round(prospects * 0.55) },
    { name: "Month 4", value: Math.round(prospects * 0.70) },
    { name: "Month 5", value: Math.round(prospects * 0.85) },
    { name: "Month 6", value: prospects }
];   

    data.forEach(item => {
        const row = document.createElement("div");
        row.className = "chart-row";

        row.innerHTML = `
            <span class="month-label">${item.name}</span>
            <div class="bar-wrap">
                <div class="bar" style="width:${Math.min(item.value, 100)}%"></div>
            </div>
        `;

        chart.appendChild(row);
    });
}

drawChart();