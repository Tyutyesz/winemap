const Core = {
    init() {
        const $countryListItem = document.querySelectorAll("[data-country]");
        const $countryList = document.querySelectorAll(".list li p");
        const regionList = [];
        let regionObj = {
            countryID: '',
            regions: [

            ]
        }
        let listItem;
        $countryListItem.forEach((element) => {
            regionObj.countryID = element.getAttribute("data-country");
            listItem = element.querySelectorAll('li');
            listItem.forEach((item) => {
                regionObj.regions.push(item.getAttribute('data-region'));
            });
            regionList.push(regionObj);
            regionObj = {
                countryID: '',
                regions: [

                ]
            };
        })
        console.log(regionList);
        let selectedRegion = null;
        let svg;
        let allSvg = document.querySelectorAll('.w_country');
        const hoverOnCountry = (item) => {
            selectedRegion = `w_country_id_${item.getAttribute("data-country")}`;
            svg = document.querySelectorAll(`.${selectedRegion}`);
            allSvg.forEach((element) => {
                element.style.fill = "#ffffff";
            })
            svg.forEach((element) => {
                element.style.fill = "red";
            })
        }
        $countryListItem.forEach((element) => {
            element.addEventListener('mouseover', () => {
                hoverOnCountry(element)
            });
        })

    },
};

document.addEventListener('load', Core.init());
